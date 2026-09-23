import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Reveal } from '@/components/visual/Reveal';
import { stackGroups } from '@/lib/site';

export function Stack() {
  return (
    <section className="scene-stack py-20 text-white">
      <div className="stack-veil" aria-hidden="true" />
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#8eb4e8]">Standards</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">What the work is built to.</h2>
          <p className="mt-3 text-sm leading-6 text-[#c9d6ea]">
            These are the rules a venture inherits. A framework is chosen later, inside them.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stackGroups.map((group, index) => (
            <Reveal key={group.group} from="settle" delay={index * 0.07}>
            <Card className="hover-shadow bg-white">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">{group.group}</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                {group.items.map((item) => (
                  <div key={item.name}>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.why}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
