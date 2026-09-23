'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

const enter = {
  rise: { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, duration: 0.55 },
  fade: { initial: { opacity: 0 }, animate: { opacity: 1 }, duration: 0.6 },
  settle: { initial: { opacity: 0, y: 6 }, animate: { opacity: 1, y: 0 }, duration: 0.5 },
} as const;

export function Reveal({
  children,
  delay = 0,
  className,
  from = 'fade',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  from?: keyof typeof enter;
}) {
  const reduce = useReducedMotion();
  const motionFrom = enter[from];

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={motionFrom.initial}
      whileInView={motionFrom.animate}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: motionFrom.duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
