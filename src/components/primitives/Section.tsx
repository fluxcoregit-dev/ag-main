import { type ReactNode } from 'react';
import { tokens } from '@/lib/tokens';

/**
 * Section Primitive
 * 
 * Intent: Wraps major vertical sections with consistent spacing
 * using section spacing tokens. Requires explicit surface layer
 * (base, section, elevated) for material hierarchy. Optional
 * temperature control for subtle depth variation. No motion -
 * stillness by default.
 */
type SectionLayer = 'base' | 'section' | 'elevated';
type SectionTemperature = 'cool' | 'neutral' | 'warm';

interface SectionProps {
  children: ReactNode;
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  layer: SectionLayer;
  temperature?: SectionTemperature;
  className?: string;
}

export function Section({
  children,
  spacing = 'md',
  layer,
  temperature,
  className = '',
}: SectionProps) {
  const spacingValue = tokens.spacing.section[spacing];
  
  // Map background color based on layer + temperature
  // Default behavior: use standard layer color if temperature not provided
  let backgroundLayer: string;
  if (temperature === 'cool' && layer === 'base') {
    backgroundLayer = tokens.colorLayers.baseCool;
  } else if (temperature === 'cool' && layer === 'section') {
    backgroundLayer = tokens.colorLayers.sectionCool;
  } else if (temperature === 'neutral' && layer === 'section') {
    backgroundLayer = tokens.colorLayers.sectionNeutral;
  } else if (temperature === 'warm' && layer === 'section') {
    backgroundLayer = tokens.colorLayers.sectionWarm;
  } else {
    // Default: use standard layer color
    backgroundLayer = tokens.colorLayers[layer];
  }

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

