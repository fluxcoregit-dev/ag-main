import Link from 'next/link';
import { ArrowUpRight } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/visual/Reveal';
import { essays } from '@/lib/site';

export function Essays() {
  const featured = essays.filter((essay) => essay.featured);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-muted-foreground">How we decide</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">The notes we build against.</h2>
          </div>
          <Button variant="outline" asChild>
            <Link href="/writing">All writing</Link>
          </Button>
        </div>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {featured.map((essay, index) => (
            <Reveal key={essay.href} from="fade" delay={index * 0.05}>
            <Link href={essay.href} className="essay-row group grid gap-2 py-6 md:grid-cols-[1fr_1.4fr_auto] md:items-baseline md:gap-8">
              <span className="essay-title text-base font-medium tracking-tight">{essay.title}</span>
              <span className="text-sm leading-6 text-muted-foreground">{essay.summary}</span>
              <ArrowUpRight className="hidden size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:block" />
            </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
