import Link from 'next/link';
import { ArrowUpRight } from '@/components/icons';
import { Reveal } from '@/components/visual/Reveal';
import { practices } from '@/lib/site';

export function Practices() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-muted-foreground">Practices</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Five kinds of work. Each one ends with something a team can use.</h2>
        </div>
        <div className="mt-10 border-t border-[#d5deeb]">
          {practices.map((practice, index) => (
            <Reveal key={practice.id} from="fade" delay={index * 0.05}>
              <Link href={`/ecosystem#${practice.id}`} className="hover-rule group grid gap-4 border-b border-[#d5deeb] py-8 md:grid-cols-[4.5rem_minmax(0,1.15fr)_minmax(0,0.9fr)] md:gap-8 md:px-2">
                <span className="text-2xl font-semibold tabular-nums tracking-tight text-[#1c4d8f]">{practice.index}</span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{practice.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{practice.when}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">You leave with</p>
                  <p className="mt-2 text-sm leading-6">{practice.outcome}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#12315c]">
                    Read the practice
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
