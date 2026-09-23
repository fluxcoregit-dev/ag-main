import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Reveal } from '@/components/visual/Reveal';
import { paths } from '@/lib/site';

export function Paths() {
  return (
    <section className="bg-[#e8eef8] py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-muted-foreground">Ways to start</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Three shapes of work. A scope follows the frame.</h2>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {paths.map((path, index) => (
            <Reveal key={path.intent} from="settle" delay={index * 0.1} className="h-full">
            <Card className="hover-shadow flex h-full flex-col bg-white">
              <CardHeader>
                <CardTitle>{path.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-sm leading-6 text-muted-foreground">{path.summary}</p>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">You leave with</p>
                  <p className="mt-1 text-sm leading-6">{path.leaves}</p>
                </div>
                <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                  {path.includes.map((item) => (
                    <li key={item} className="border-t border-border pt-2 first:border-0 first:pt-0">{item}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={`/contact?intent=${path.intent}`}>Discuss this</Link>
                </Button>
              </CardFooter>
            </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
