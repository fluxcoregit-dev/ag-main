import { type ReactNode } from 'react';

/**
 * Heading Primitive
 *
 * Semantic heading levels. Size and weight come from global
 * heading classes so type can scale with the viewport.
 */
type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

interface HeadingProps {
  level: HeadingLevel;
  children: ReactNode;
  className?: string;
  id?: string;
}

const headingClass: Record<HeadingLevel, string> = {
  h1: 'heading-h1',
  h2: 'heading-h2',
  h3: 'heading-h3',
  h4: 'heading-h4',
};

export function Heading({ level, children, className = '', id }: HeadingProps) {
  const Component = level;

  return (
    <Component id={id} className={`${headingClass[level]} ${className}`.trim()}>
      {children}
    </Component>
  );
}
