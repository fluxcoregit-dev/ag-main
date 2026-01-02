import { type ReactNode } from 'react';
import { tokens } from '@/lib/tokens';

/**
 * Heading Primitive
 * 
 * Intent: Semantic heading levels (h1-h4) with serif font
 * and strong hierarchy via size and weight only. No decorative
 * effects - pure typographic hierarchy.
 */
type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

interface HeadingProps {
  level: HeadingLevel;
  children: ReactNode;
  className?: string;
}

const headingStyles: Record<HeadingLevel, React.CSSProperties> = {
  h1: {
    fontSize: '3rem',
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    color: tokens.textColors.primary,
    fontFamily: 'var(--font-serif)',
  },
  h2: {
    fontSize: '2.25rem',
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
    color: tokens.textColors.primary,
    fontFamily: 'var(--font-serif)',
  },
  h3: {
    fontSize: '1.75rem',
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: '0',
    color: tokens.textColors.primary,
    fontFamily: 'var(--font-serif)',
  },
  h4: {
    fontSize: '1.25rem',
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0',
    color: tokens.textColors.primary,
    fontFamily: 'var(--font-serif)',
  },
};

export function Heading({ level, children, className = '' }: HeadingProps) {
  const Component = level;
  const style = headingStyles[level];

  return (
    <Component className={className} style={style}>
      {children}
    </Component>
  );
}

