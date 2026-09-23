'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { contactEmail, intents } from '@/lib/site';

export function Inquiry() {
  const reduce = useReducedMotion();

  return (
    <section className="py-20">
      <motion.div
        className="mx-auto w-full max-w-6xl px-6"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="inquiry-panel rounded-2xl px-8 py-12 text-white shadow-[0_20px_50px_rgba(18,49,92,0.18)] md:px-12">
          <div className="inquiry-glow" aria-hidden="true" />
          <p className="text-sm text-[#8eb4e8]">Contact</p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-white">Tell us what has to last.</h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-[#c9d6ea]">
            Name the system, the constraint, and what a good year looks like. If the work fits, the next step is a working conversation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Start a conversation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white" asChild>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {intents.filter((intent) => intent.id !== 'other').map((intent) => (
              <Button key={intent.id} size="sm" variant="outline" className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white" asChild>
                <Link href={`/contact?intent=${intent.id}`}>{intent.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
