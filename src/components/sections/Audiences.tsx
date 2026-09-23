import Link from 'next/link';
import { ArrowUpRight } from '@/components/icons';
import { Reveal } from '@/components/visual/Reveal';
import { audiences } from '@/lib/site';

export function Audiences() {
  return (
    <section className="bg-[#f4f7fb] py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-muted-foreground">Who this is for</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Three situations where a holding company is the right counterpart.</h2>
        </div>
        <div className="mt-10 border-y border-[#d5deeb]">
          {audiences.map((audience, index) => (
            <Reveal key={audience.intent} from="rise" delay={index * 0.08}>
              <Link
                href={`/contact?intent=${audience.intent}`}
                className="group grid gap-3 border-b border-[#d5deeb] py-8 transition-colors last:border-b-0 hover:bg-white md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)_auto] md:items-start md:gap-10 md:px-4"
              >
                <h3 className="text-lg font-semibold tracking-tight">{audience.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{audience.summary}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[#12315c]">
                  {audience.cta}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
