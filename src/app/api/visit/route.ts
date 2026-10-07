import { randomUUID } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import { locateVisit } from '@/lib/geo';
import { recordVisit } from '@/lib/visits';

const BOT = /bot|crawl|spider|slurp|preview|facebookexternal|whatsapp|telegram|slack|headless|lighthouse|pingdom/i;

function sourceHost(referrer: string, siteHost: string): string {
  if (!referrer.trim()) return 'Direct';
  try {
    const host = new URL(referrer).hostname.toLowerCase().replace(/^www\./, '');
    if (!host || host === siteHost) return 'Direct';
    return host.slice(0, 80);
  } catch {
    return 'Direct';
  }
}

function deviceFrom(userAgent: string): string {
  if (/ipad|tablet|playbook|silk/i.test(userAgent)) return 'Tablet';
  if (/mobile|iphone|ipod|android.+mobile|windows phone/i.test(userAgent)) return 'Mobile';
  return 'Desktop';
}

function browserFrom(userAgent: string): string {
  if (/edg\//i.test(userAgent)) return 'Edge';
  if (/opr\/|opera/i.test(userAgent)) return 'Opera';
  if (/chrome|crios/i.test(userAgent)) return 'Chrome';
  if (/firefox|fxios/i.test(userAgent)) return 'Firefox';
  if (/safari/i.test(userAgent)) return 'Safari';
  return 'Other';
}

function cleanPath(value: unknown): string {
  const path = typeof value === 'string' ? value : '/';
  if (!path.startsWith('/') || path.startsWith('//') || path.length > 200) return '/';
  if (path.startsWith('/admin') || path.startsWith('/api')) return '';
  return path.split('?')[0] || '/';
}

export async function POST(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  if (!userAgent || BOT.test(userAgent)) {
    return new NextResponse(null, { status: 204 });
  }

  let path = '/';
  let referrer = '';
  try {
    const body = (await request.json()) as { path?: unknown; referrer?: unknown };
    path = cleanPath(body.path);
    referrer = typeof body.referrer === 'string' ? body.referrer : '';
  } catch {
    path = '/';
  }
  if (!path) return new NextResponse(null, { status: 204 });

  const existing = request.cookies.get('ag_visitor')?.value;
  const visitor = existing && /^[a-zA-Z0-9-]{16,80}$/.test(existing) ? existing : randomUUID();
  const place = await locateVisit(request.headers);
  const siteHost = (request.headers.get('x-forwarded-host') || request.headers.get('host') || '')
    .split(',')[0]
    .trim()
    .split(':')[0]
    .toLowerCase();

  try {
    await recordVisit({
      path,
      country: place.country,
      continent: place.continent,
      visitor,
      source: sourceHost(referrer, siteHost),
      device: deviceFrom(userAgent),
      browser: browserFrom(userAgent),
    });
  } catch (error) {
    console.error('Visit record error:', error);
  }

  const response = new NextResponse(null, { status: 204 });
  if (visitor !== existing) {
    response.cookies.set('ag_visitor', visitor, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    });
  }
  return response;
}
