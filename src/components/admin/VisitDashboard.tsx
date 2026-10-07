import type { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { PlaceCount, RangeKey, TrendPoint, VisitSummary } from '@/lib/visits';

const rangeLabels: Record<RangeKey, string> = {
  '24h': '24 hours',
  '7d': '7 days',
  '30d': '30 days',
  all: 'All time',
};

function hrefFor(range: RangeKey, query: string) {
  const params = new URLSearchParams();
  if (range !== '7d') params.set('range', range);
  if (query) params.set('q', query);
  const search = params.toString();
  return search ? `/admin/visits?${search}` : '/admin/visits';
}

function Delta({ value }: { value: number | null }) {
  if (value === null) return <p className="text-xs text-muted-foreground">No earlier period to compare</p>;
  const tone = value > 0 ? 'text-[#1c4d8f]' : value < 0 ? 'text-[#8a4b2f]' : 'text-muted-foreground';
  const label = value > 0 ? `Up ${value}%` : value < 0 ? `Down ${Math.abs(value)}%` : 'Same as';
  return <p className={`text-xs ${tone}`}>{label} the previous period</p>;
}

function Metric({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail?: ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium text-muted-foreground">{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold tracking-tight tabular-nums">{value}</p>
        {detail ? <div className="mt-2">{detail}</div> : null}
      </CardContent>
    </Card>
  );
}

function ShareList({
  title,
  rows,
  total,
  empty,
}: {
  title: string;
  rows: PlaceCount[];
  total: number;
  empty: string;
}) {
  const max = Math.max(...rows.map((row) => row.count), 1);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {rows.length === 0 ? (
          <p className="text-sm text-muted-foreground">{empty}</p>
        ) : (
          rows.map((row) => (
            <div key={row.code}>
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="truncate">{row.name}</span>
                <span className="shrink-0 tabular-nums text-muted-foreground">
                  {row.count}
                  <span className="ml-2">{total ? `${Math.round((row.count / total) * 100)}%` : ''}</span>
                </span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-[#e6edf6]">
                <div className="h-full rounded-full bg-[#1c4d8f]" style={{ width: `${(row.count / max) * 100}%` }} />
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}

function Trend({ points }: { points: TrendPoint[] }) {
  const max = Math.max(...points.map((point) => point.count), 1);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Page views over time</CardTitle>
      </CardHeader>
      <CardContent>
        {points.every((point) => point.count === 0) ? (
          <p className="text-sm text-muted-foreground">No page views in this period.</p>
        ) : (
          <div className="overflow-x-auto">
            <div className="flex h-40 min-w-full items-end gap-1">
              {points.map((point, index) => (
                <div key={`${point.label}-${index}`} className="flex min-w-8 flex-1 flex-col items-center justify-end gap-2">
                  <div
                    title={`${point.label}: ${point.count}`}
                    className="w-full rounded-sm bg-[#1c4d8f]"
                    style={{ height: `${Math.max((point.count / max) * 112, point.count ? 4 : 0)}px` }}
                  />
                  <span className="text-[10px] text-muted-foreground">{point.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        <p className="mt-3 text-xs text-muted-foreground">Times are UTC.</p>
      </CardContent>
    </Card>
  );
}

export function VisitDashboard({ summary, query }: { summary: VisitSummary; query: string }) {
  const exportParams = new URLSearchParams();
  if (summary.range !== '7d') exportParams.set('range', summary.range);
  if (query) exportParams.set('q', query);
  const exportHref = `/admin/visits/export${exportParams.toString() ? `?${exportParams}` : ''}`;

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Private</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">Visit counts</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
            Only you can open this page. It shows how many people came, which country and continent they connected from, which page they opened, and which site sent them.
          </p>
        </div>
        <Button variant="outline" asChild>
          <a href={exportHref}>Download CSV</a>
        </Button>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {(Object.keys(rangeLabels) as RangeKey[]).map((range) => (
          <Link
            key={range}
            href={hrefFor(range, query)}
            className={`rounded-md px-3 py-1.5 text-sm ${
              summary.range === range ? 'bg-[#12315c] text-white' : 'bg-[#e7eef8] text-[#12315c]'
            }`}
          >
            {rangeLabels[range]}
          </Link>
        ))}
      </div>

      <form action="/admin/visits" className="mt-4 flex flex-wrap gap-2">
        {summary.range !== '7d' ? <input type="hidden" name="range" value={summary.range} /> : null}
        <input
          className="h-10 min-w-64 flex-1 rounded-md border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          type="search"
          name="q"
          defaultValue={query}
          placeholder="Filter by page, country, source, or device"
        />
        <Button type="submit" variant="secondary">
          Filter
        </Button>
      </form>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <Metric label="Page views" value={String(summary.pageViews)} detail={<Delta value={summary.pageViewsDelta} />} />
        <Metric label="Visitors" value={String(summary.visitors)} detail={<Delta value={summary.visitorsDelta} />} />
        <Metric label="New visitors" value={String(summary.newVisitors)} detail={<p className="text-xs text-muted-foreground">First time in this period</p>} />
        <Metric label="Returning visitors" value={String(summary.returningVisitors)} detail={<p className="text-xs text-muted-foreground">Seen before this period</p>} />
        <Metric label="Pages per visitor" value={String(summary.pagesPerVisitor)} />
        <Metric label="Countries" value={String(summary.countries.filter((row) => row.code !== 'LOCAL' && row.code !== 'XX').length)} />
      </div>

      <div className="mt-4">
        <Trend points={summary.trend} />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <ShareList title="Top pages" rows={summary.pages} total={summary.pageViews} empty="No pages in this period." />
        <ShareList title="Where they came from" rows={summary.sources} total={summary.pageViews} empty="No sources in this period." />
        <ShareList title="Countries" rows={summary.countries} total={summary.pageViews} empty="No countries in this period." />
        <ShareList title="Continents" rows={summary.continents} total={summary.pageViews} empty="No continents in this period." />
        <ShareList title="Devices" rows={summary.devices} total={summary.pageViews} empty="No devices in this period." />
        <ShareList title="Browsers" rows={summary.browsers} total={summary.pageViews} empty="No browsers in this period." />
      </div>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Recent visits</CardTitle>
        </CardHeader>
        <CardContent>
          {summary.recent.length === 0 ? (
            <p className="text-sm text-muted-foreground">No visits in this period. Open a public page, then come back here.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b text-muted-foreground">
                    <th className="py-2 pr-3 font-medium">When</th>
                    <th className="py-2 pr-3 font-medium">Page</th>
                    <th className="py-2 pr-3 font-medium">Country</th>
                    <th className="py-2 pr-3 font-medium">Continent</th>
                    <th className="py-2 pr-3 font-medium">Source</th>
                    <th className="py-2 pr-3 font-medium">Device</th>
                    <th className="py-2 font-medium">Browser</th>
                  </tr>
                </thead>
                <tbody>
                  {summary.recent.map((visit) => (
                    <tr key={`${visit.t}-${visit.path}-${visit.visitor}`} className="border-b last:border-0">
                      <td className="py-2 pr-3 whitespace-nowrap">{visit.t.replace('T', ' ').slice(0, 16)} UTC</td>
                      <td className="py-2 pr-3">{visit.path}</td>
                      <td className="py-2 pr-3">{visit.countryName}</td>
                      <td className="py-2 pr-3">{visit.continent}</td>
                      <td className="py-2 pr-3">{visit.source || 'Not recorded'}</td>
                      <td className="py-2 pr-3">{visit.device || 'Not recorded'}</td>
                      <td className="py-2">{visit.browser || 'Not recorded'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
