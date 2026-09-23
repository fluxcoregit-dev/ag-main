import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from '@/components/icons';
import { essays } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Writing | Axiom Group',
  description: 'Working notes on systems, intelligence, clarity, and long-term product architecture.',
  alternates: { canonical: '/writing' },
};

export default function Writing() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <p className="text-sm font-medium text-muted-foreground">Writing</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">Notes on systems, intelligence, and time.</h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
        Arguments we use when deciding what to build and what to refuse.
      </p>
      <div className="mt-12 divide-y divide-border border-y border-border">
        {essays.map((essay) => (
          <Link key={essay.href} href={essay.href} className="group grid gap-2 py-6 md:grid-cols-[1fr_1.4fr_auto] md:items-baseline md:gap-8">
            <span className="font-medium tracking-tight group-hover:underline">{essay.title}</span>
            <span className="text-sm leading-6 text-muted-foreground">{essay.summary}</span>
            <ArrowUpRight className="hidden size-4 text-muted-foreground md:block" />
          </Link>
        ))}
      </div>
    </div>
  );
}
