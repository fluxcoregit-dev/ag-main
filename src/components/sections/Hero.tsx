'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from '@/components/icons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { briefItems } from '@/lib/site';

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="scene-hero text-white">
      <div className="hero-light" aria-hidden="true" />
      <svg className="hero-line" viewBox="0 0 1200 640" preserveAspectRatio="none" aria-hidden="true">
        <path d="M-20 460 C 220 420, 340 180, 620 220 S 980 380, 1240 140" />
      </svg>
      <div className="mx-auto grid w-full max-w-6xl items-end gap-12 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
        <div>
          <motion.div initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease }}>
            <Badge variant="outline">Technology holding company</Badge>
          </motion.div>
          <motion.h1
            className="mt-6 max-w-xl text-4xl font-semibold tracking-tight text-white text-balance sm:text-5xl md:text-6xl md:leading-[1.05]"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease }}
          >
            We design and build the systems a company has to keep.
          </motion.h1>
          <motion.p
            className="mt-6 max-w-lg text-base leading-7 text-[#c9d6ea] sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease }}
          >
            Axiom Group is the parent behind long-lived products, platforms, and brands. The work is architecture, intelligent systems, and the standards a portfolio shares.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease }}
          >
            <Button size="lg" asChild>
              <Link href="/contact">
                Start a conversation
                <ArrowRight />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white" asChild>
              <Link href="/ecosystem">See the practices</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
        >
          <Card className="border-white/15 border-t-[3px] border-t-[#8eb4e8] bg-[#102844]/90 text-white shadow-none backdrop-blur-md">
            <CardContent className="p-0">
              <div className="border-b border-white/10 bg-[#16345c] px-6 py-4">
                <p className="text-sm font-medium text-white">First brief</p>
                <p className="mt-1 text-sm text-[#b7c8e2]">What we ask before a proposal.</p>
              </div>
              <dl>
                {briefItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="grid gap-1 border-b border-white/10 px-6 py-4 last:border-0 sm:grid-cols-[7.5rem_1fr]"
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.45, delay: 0.25 + index * 0.08, ease }}
                  >
                    <dt className="text-sm font-medium text-[#8eb4e8]">{item.label}</dt>
                    <dd className="text-sm leading-6 text-[#d5e2f2]">{item.detail}</dd>
                  </motion.div>
                ))}
              </dl>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
