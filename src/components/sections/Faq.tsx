import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Reveal } from '@/components/visual/Reveal';
import { contactEmail, faqs } from '@/lib/site';

export function Faq() {
  return (
    <section className="bg-[#f4f7fb] py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Questions</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Before you write.</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            If yours is not here, send it to{' '}
            <a href={`mailto:${contactEmail}`} className="underline underline-offset-4">{contactEmail}</a>.
          </p>
        </div>
        <Reveal from="fade">
        <Accordion type="single" collapsible>
          {faqs.map((item, index) => (
            <AccordionItem key={item.q} value={`item-${index}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
