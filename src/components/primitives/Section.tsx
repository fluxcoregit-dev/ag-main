import { type ReactNode } from 'react';
import { tokens } from '@/lib/tokens';

/**
 * Section Primitive
 * 
 * Intent: Wraps major vertical sections with consistent spacing
 * using section spacing tokens. Requires explicit surface layer
 * (base, section, elevated) for material hierarchy. No motion -
 * stillness by default.
 */
type SectionLayer = 'base' | 'section' | 'elevated';

interface SectionProps {
  children: ReactNode;
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  layer: SectionLayer;
  className?: string;
}

export function Section({
  children,
  spacing = 'md',
  layer,
  className = '',
}: SectionProps) {
  const spacingValue = tokens.spacing.section[spacing];
  const backgroundLayer = tokens.colorLayers[layer];

  return (
    <section
      className={className}
      style={{
        paddingTop: spacingValue,
        paddingBottom: spacingValue,
        backgroundColor: backgroundLayer,
      }}
    >
      {children}
    </section>
  );
}

