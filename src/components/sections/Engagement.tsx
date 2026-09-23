import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Reveal } from '@/components/visual/Reveal';
import { stages } from '@/lib/site';

export function Engagement() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-muted-foreground">How an engagement runs</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">A written frame, then a build, then a system that can change.</h2>
        </div>
        <div className="step-row mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage, index) => (
            <Reveal key={stage.step} from="rise" delay={index * 0.08} className="relative z-[1]">
            <Card className="group relative bg-white">
              <CardHeader>
                <Badge variant="outline" className="stage-mark w-fit">{stage.step}</Badge>
                <CardTitle className="mt-3 text-base">{stage.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-6 text-muted-foreground">{stage.summary}</p>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Output</p>
                  <p className="mt-1 text-sm leading-6">{stage.output}</p>
                </div>
              </CardContent>
            </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
