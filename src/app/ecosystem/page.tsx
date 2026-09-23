import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Engagement } from '@/components/sections/Engagement';
import { Stack } from '@/components/sections/Stack';
import { practices } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Practices | Axiom Group',
  description:
    'Product architecture, intelligent systems, brand, growth infrastructure, and trust. What each Axiom Group practice covers and when to bring it.',
  alternates: { canonical: '/ecosystem' },
};

export default function Ecosystem() {
  return (
    <>
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <p className="text-sm font-medium text-muted-foreground">Practices</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">The work Axiom is accountable for.</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
          Five domains. Each one is a long-term capability of the holding company, and each one is work you can commission.
        </p>
        <div className="mt-12 border-t border-[#d5deeb]">
          {practices.map((practice) => (
            <article key={practice.id} id={practice.id} className="scroll-mt-24 grid gap-6 border-b border-[#d5deeb] py-10 md:grid-cols-[4.5rem_minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-8">
              <span className="text-2xl font-semibold tabular-nums tracking-tight text-[#1c4d8f]">{practice.index}</span>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">{practice.title}</h2>
                <p className="mt-3 text-sm leading-6">{practice.summary}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{practice.when}</p>
                <Button className="mt-6" asChild>
                  <Link href={`/contact?intent=${practice.intent}`}>Discuss this practice</Link>
                </Button>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">What it covers</p>
                <ul className="mt-3 space-y-2 text-sm leading-6">
                  {practice.covers.map((item) => (
                    <li key={item} className="border-t border-[#d5deeb] pt-2 first:border-0 first:pt-0">{item}</li>
                  ))}
                </ul>
                <p className="mt-6 text-xs font-medium uppercase tracking-wide text-muted-foreground">You leave with</p>
                <p className="mt-2 text-sm leading-6">{practice.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Engagement />
      <Stack />
    </>
  );
}
