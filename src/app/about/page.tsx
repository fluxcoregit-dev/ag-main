import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Faq } from '@/components/sections/Faq';
import { audiences, contactEmail } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About | Axiom Group',
  description:
    'Axiom Group is a technology holding company. The parent sets architecture, intelligence, brand, and operating standards for the ventures under it.',
  alternates: { canonical: '/about' },
};

const responsibilities = [
  {
    title: 'The standard a venture inherits',
    detail: 'A new company under the group starts from shared technical, design, and operating patterns.',
  },
  {
    title: 'Architecture that survives a second version',
    detail: 'The parent is accountable for what can change cheaply, what must stay stable, and where a local fix would damage the whole.',
  },
  {
    title: 'Where intelligence is allowed to act',
    detail: 'Models sit inside defined workflows. The boundary between a system decision and a human decision is part of the design.',
  },
  {
    title: 'A time horizon longer than a release',
    detail: 'Decisions are judged by whether the system is still legible in a few years.',
  },
];

const rules = [
  'Structure is decided before features are added.',
  'Intelligence is built into the operation, with a written boundary.',
  'Clarity is preferred to extra process, extra tools, and extra meetings.',
  'A decision that makes the system harder to change next year is a failed decision.',
];

export default function About() {
  return (
    <>
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <p className="text-sm font-medium text-muted-foreground">About</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">A parent company for systems that have to last.</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
          Axiom Group builds and holds the infrastructure under a portfolio of technology ventures. The parent sets architecture, intelligence, brand, and operating standards. The ventures ship products and serve customers.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-7">
          Axiom is the parent. It holds the standard. Day-to-day product work stays with the venture once the structure is in place.
        </p>

        <div className="mt-14 grid gap-x-12 gap-y-8 border-t border-[#d5deeb] pt-10 md:grid-cols-2">
          {responsibilities.map((item) => (
            <div key={item.title}>
              <h2 className="text-base font-semibold tracking-tight">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-2xl font-semibold tracking-tight">Who brings work here</h2>
        <div className="mt-6 border-y border-[#d5deeb]">
          {audiences.map((audience) => (
            <Link
              key={audience.intent}
              href={`/contact?intent=${audience.intent}`}
              className="group grid gap-3 border-b border-[#d5deeb] py-6 transition-colors last:border-b-0 hover:bg-[#f4f7fb] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)_auto] md:items-start md:gap-10"
            >
              <h3 className="text-base font-semibold tracking-tight">{audience.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{audience.summary}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[#12315c]">
                {audience.cta}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">How a first conversation works</h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Send a note with the system, the constraint, and what a good year looks like. We reply by email. If the work fits, we schedule a working conversation and write the problem frame before any proposal.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">Start a conversation</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/ecosystem">See the practices</Link>
              </Button>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Operating rules</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6">
              {rules.map((rule) => (
                <li key={rule} className="border-t border-[#d5deeb] pt-3 first:border-0 first:pt-0">{rule}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Direct line:{' '}
              <a className="underline underline-offset-4" href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </p>
          </div>
        </div>
      </div>
      <Faq />
    </>
  );
}
