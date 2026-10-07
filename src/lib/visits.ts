import { createHmac, timingSafeEqual } from 'node:crypto';
import { appendFile, mkdir, open, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { countryName } from '@/lib/geo';

export type VisitRecord = {
  t: string;
  path: string;
  country: string;
  continent: string;
  visitor: string;
  source?: string;
  device?: string;
  browser?: string;
};

export const visitRanges = ['24h', '7d', '30d', 'all'] as const;
export type RangeKey = (typeof visitRanges)[number];

export type PlaceCount = {
  code: string;
  name: string;
  count: number;
};

export type TrendPoint = {
  label: string;
  count: number;
};

export type VisitSummary = {
  range: RangeKey;
  pageViews: number;
  visitors: number;
  newVisitors: number;
  returningVisitors: number;
  pagesPerVisitor: number;
  pageViewsDelta: number | null;
  visitorsDelta: number | null;
  countries: PlaceCount[];
  continents: PlaceCount[];
  pages: PlaceCount[];
  sources: PlaceCount[];
  devices: PlaceCount[];
  browsers: PlaceCount[];
  trend: TrendPoint[];
  recent: Array<VisitRecord & { countryName: string }>;
};

export function parseRange(value: string | undefined): RangeKey {
  return visitRanges.includes(value as RangeKey) ? (value as RangeKey) : '7d';
}

const FILE = () => path.join(process.cwd(), 'data', 'visits.jsonl');
const DEDUPE_MS = 5000;
let writeChain: Promise<void> = Promise.resolve();

function safeEqual(left: string, right: string): boolean {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function analyticsToken(password: string): string {
  return createHmac('sha256', password).update('axiom-visits').digest('hex');
}

export function analyticsPasswordMatches(password: string): boolean {
  const expected = process.env.ANALYTICS_PASSWORD;
  if (!expected || !password) return false;
  return safeEqual(password, expected);
}

export function analyticsCookieMatches(cookie: string | undefined): boolean {
  const expected = process.env.ANALYTICS_PASSWORD;
  if (!expected) return process.env.NODE_ENV !== 'production';
  if (!cookie) return false;
  return safeEqual(cookie, analyticsToken(expected));
}

export function analyticsConfigured(): boolean {
  return Boolean(process.env.ANALYTICS_PASSWORD) || process.env.NODE_ENV !== 'production';
}

async function tail(file: string): Promise<string> {
  const info = await stat(file).catch(() => null);
  if (!info || info.size === 0) return '';
  const length = Math.min(info.size, 12_000);
  const handle = await open(file, 'r');
  try {
    const buffer = Buffer.alloc(length);
    await handle.read(buffer, 0, length, info.size - length);
    return buffer.toString('utf8');
  } finally {
    await handle.close();
  }
}

function parseLine(line: string): VisitRecord | null {
  try {
    const value = JSON.parse(line) as VisitRecord;
    if (!value?.t || !value.path || !value.visitor) return null;
    return value;
  } catch {
    return null;
  }
}

async function writeVisit(visit: Omit<VisitRecord, 't'>): Promise<void> {
  const file = FILE();
  const recent = await tail(file);
  const cutoff = Date.now() - DEDUPE_MS;
  for (const line of recent.split('\n').reverse()) {
    const parsed = line.trim() ? parseLine(line.trim()) : null;
    if (!parsed || parsed.visitor !== visit.visitor || parsed.path !== visit.path) continue;
    if (Date.parse(parsed.t) >= cutoff) return;
    break;
  }

  const dir = path.dirname(file);
  await mkdir(dir, { recursive: true });
  const record: VisitRecord = { ...visit, t: new Date().toISOString() };
  await appendFile(file, `${JSON.stringify(record)}\n`, 'utf8');
}

export function recordVisit(visit: Omit<VisitRecord, 't'>): Promise<void> {
  const job = writeChain.then(() => writeVisit(visit));
  writeChain = job.catch(() => {});
  return job;
}

async function loadRecords(): Promise<VisitRecord[]> {
  const raw = await readFile(FILE(), 'utf8').catch(() => '');
  return raw
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map(parseLine)
    .filter((record): record is VisitRecord => record !== null);
}

function rangeStart(range: RangeKey, now: number): number | null {
  if (range === '24h') return now - 24 * 60 * 60 * 1000;
  if (range === '7d') return now - 7 * 24 * 60 * 60 * 1000;
  if (range === '30d') return now - 30 * 24 * 60 * 60 * 1000;
  return null;
}

function matchesQuery(record: VisitRecord, query: string): boolean {
  if (!query) return true;
  const haystack = [
    record.path,
    record.country,
    countryName(record.country),
    record.continent,
    record.source,
    record.device,
    record.browser,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
  return haystack.includes(query);
}

function countPlaces(
  records: VisitRecord[],
  keyFor: (record: VisitRecord) => string,
  nameFor: (code: string) => string,
): PlaceCount[] {
  const counts = new Map<string, number>();
  for (const record of records) {
    const key = keyFor(record) || 'Not recorded';
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([code, count]) => ({ code, name: nameFor(code), count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

function delta(current: number, previous: number): number | null {
  if (previous === 0) return null;
  return Math.round(((current - previous) / previous) * 100);
}

function trendFor(records: VisitRecord[], range: RangeKey, now: number): TrendPoint[] {
  const start = rangeStart(range, now);
  const points: TrendPoint[] = [];

  if (range === '24h') {
    const origin = start ?? now;
    for (let hour = 0; hour < 24; hour += 1) {
      const from = origin + hour * 60 * 60 * 1000;
      const to = from + 60 * 60 * 1000;
      const label = new Date(from).toISOString().slice(11, 16);
      points.push({
        label,
        count: records.filter((record) => {
          const time = Date.parse(record.t);
          return time >= from && time < to;
        }).length,
      });
    }
    return points;
  }

  const first = records.reduce((earliest, record) => Math.min(earliest, Date.parse(record.t)), now);
  const fromDay = start ?? Date.parse(new Date(first).toISOString().slice(0, 10));
  const day = 24 * 60 * 60 * 1000;
  for (let cursor = fromDay; cursor < now; cursor += day) {
    const to = cursor + day;
    points.push({
      label: new Date(cursor).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' }),
      count: records.filter((record) => {
        const time = Date.parse(record.t);
        return time >= cursor && time < to;
      }).length,
    });
  }
  return points.slice(-90);
}

export async function matchingVisits(range: RangeKey, query = ''): Promise<VisitRecord[]> {
  const records = await loadRecords();
  const now = Date.now();
  const start = rangeStart(range, now);
  const needle = query.trim().toLowerCase();
  return records.filter((record) => {
    const time = Date.parse(record.t);
    if (Number.isNaN(time)) return false;
    if (start !== null && time < start) return false;
    return matchesQuery(record, needle);
  });
}

export async function summarizeVisits(range: RangeKey, query = ''): Promise<VisitSummary> {
  const records = await loadRecords();
  const now = Date.now();
  const start = rangeStart(range, now);
  const needle = query.trim().toLowerCase();
  const firstSeen = new Map<string, number>();

  for (const record of records) {
    const time = Date.parse(record.t);
    if (Number.isNaN(time)) continue;
    const seen = firstSeen.get(record.visitor);
    if (seen === undefined || time < seen) firstSeen.set(record.visitor, time);
  }

  const inWindow = (record: VisitRecord, from: number | null, to: number) => {
    const time = Date.parse(record.t);
    if (Number.isNaN(time) || time >= to) return false;
    if (from !== null && time < from) return false;
    return matchesQuery(record, needle);
  };

  const current = records.filter((record) => inWindow(record, start, now));
  const previousFrom = start === null ? null : start - (now - start);
  const previous = start === null ? [] : records.filter((record) => inWindow(record, previousFrom, start));

  const visitors = new Set(current.map((record) => record.visitor));
  let newVisitors = 0;
  let returningVisitors = 0;
  for (const visitor of visitors) {
    const seen = firstSeen.get(visitor) ?? now;
    if (start !== null && seen < start) returningVisitors += 1;
    else newVisitors += 1;
  }

  const previousVisitors = new Set(previous.map((record) => record.visitor));
  const named = (code: string) => (code === 'Not recorded' ? code : code);

  return {
    range,
    pageViews: current.length,
    visitors: visitors.size,
    newVisitors,
    returningVisitors,
    pagesPerVisitor: visitors.size === 0 ? 0 : Math.round((current.length / visitors.size) * 10) / 10,
    pageViewsDelta: start === null ? null : delta(current.length, previous.length),
    visitorsDelta: start === null ? null : delta(visitors.size, previousVisitors.size),
    countries: countPlaces(current, (record) => record.country, countryName).slice(0, 12),
    continents: countPlaces(current, (record) => record.continent, named),
    pages: countPlaces(current, (record) => record.path, named).slice(0, 8),
    sources: countPlaces(current, (record) => record.source || 'Not recorded', named).slice(0, 8),
    devices: countPlaces(current, (record) => record.device || 'Not recorded', named),
    browsers: countPlaces(current, (record) => record.browser || 'Not recorded', named),
    trend: trendFor(current, range, now),
    recent: [...current]
      .reverse()
      .slice(0, 40)
      .map((record) => ({ ...record, countryName: countryName(record.country) })),
  };
}
