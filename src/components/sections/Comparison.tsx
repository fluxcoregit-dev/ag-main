import { Card } from '@/components/ui/card';
import { Reveal } from '@/components/visual/Reveal';
import { comparison } from '@/lib/site';

export function Comparison() {
  return (
    <section className="bg-[#f4f7fb] py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-muted-foreground">The difference</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Axiom beside a typical project studio.</h2>
        </div>
        <Reveal from="fade">
        <Card className="mt-10 overflow-hidden border-t-[3px] border-t-[#1c4d8f] bg-white">
          <div className="hidden grid-cols-[0.8fr_1.1fr_1.1fr] border-b border-border px-6 py-3 text-xs font-medium uppercase tracking-wide text-muted-foreground md:grid">
            <span />
            <span className="text-foreground">Axiom Group</span>
            <span>A project studio</span>
          </div>
          {comparison.map((row) => (
            <div key={row.topic} className="compare-line grid gap-2 border-b border-border px-6 py-5 last:border-0 md:grid-cols-[0.8fr_1.1fr_1.1fr] md:gap-6">
              <p className="text-sm font-medium">{row.topic}</p>
              <p className="text-sm leading-6"><span className="mb-1 block text-xs font-medium uppercase tracking-wide text-muted-foreground md:hidden">Axiom Group</span>{row.axiom}</p>
              <p className="text-sm leading-6 text-muted-foreground"><span className="mb-1 block text-xs font-medium uppercase tracking-wide md:hidden">A project studio</span>{row.other}</p>
            </div>
          ))}
        </Card>
        </Reveal>
      </div>
    </section>
  );
}
