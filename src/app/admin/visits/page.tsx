import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { VisitDashboard } from '@/components/admin/VisitDashboard';
import { Button } from '@/components/ui/button';
import {
  analyticsCookieMatches,
  analyticsPasswordMatches,
  analyticsToken,
  parseRange,
  summarizeVisits,
} from '@/lib/visits';

export const metadata: Metadata = {
  title: 'Visits | Axiom Group',
  robots: { index: false, follow: false },
};

export const dynamic = 'force-dynamic';

async function unlock(formData: FormData) {
  'use server';

  const password = String(formData.get('password') || '');
  if (!analyticsPasswordMatches(password)) {
    redirect('/admin/visits?error=1');
  }

  const jar = await cookies();
  jar.set('ag_analytics', analyticsToken(process.env.ANALYTICS_PASSWORD || ''), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/admin',
    maxAge: 60 * 60 * 24 * 14,
  });
  redirect('/admin/visits');
}

export default async function VisitsPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; range?: string; q?: string }>;
}) {
  const params = await searchParams;
  const jar = await cookies();
  const open = analyticsCookieMatches(jar.get('ag_analytics')?.value);

  if (!process.env.ANALYTICS_PASSWORD && process.env.NODE_ENV === 'production') {
    return (
      <div className="mx-auto w-full max-w-lg px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Visit counts</h1>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          Set ANALYTICS_PASSWORD in the server environment, then open this page again.
        </p>
      </div>
    );
  }

  if (!open) {
    return (
      <div className="mx-auto w-full max-w-lg px-6 py-16">
        <p className="text-sm font-medium text-muted-foreground">Private</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Visit counts</h1>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          This page is not linked from the public site. Enter the password to see who visited, and from where.
        </p>
        {params.error && <p className="mt-4 text-sm">That password does not match.</p>}
        <form action={unlock} className="mt-8 space-y-4">
          <label className="block space-y-1.5 text-sm">
            <span className="font-medium">Password</span>
            <input
              className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              type="password"
              name="password"
              required
              autoComplete="current-password"
            />
          </label>
          <Button type="submit">Open the counts</Button>
        </form>
      </div>
    );
  }

  const range = parseRange(params.range);
  const query = (params.q || '').slice(0, 80);
  const summary = await summarizeVisits(range, query);

  return <VisitDashboard summary={summary} query={query} />;
}
