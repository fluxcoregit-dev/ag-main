import { type ReactNode } from 'react';
import { tokens } from '@/lib/tokens';

/**
 * Text Primitive
 * 
 * Intent: Body and meta text variants using sans-serif font.
 * Applies primary, secondary, and muted text color tokens.
 * No color overrides beyond tokens - maintains consistency.
 */
type TextVariant = 'body' | 'meta';
type TextColor = 'primary' | 'secondary' | 'muted';

interface TextProps {
  variant?: TextVariant;
  color?: TextColor;
  children: ReactNode;
  className?: string;
  as?: 'p' | 'span' | 'div';
  style?: React.CSSProperties;
}

const textStyles: Record<TextVariant, React.CSSProperties> = {
  body: {
    fontSize: '1rem',
    lineHeight: 1.5, // Reduced from 1.6 (~6%) for institutional density
    fontFamily: 'var(--font-sans-serif)',
  },
  meta: {
    fontSize: '0.875rem',
    lineHeight: 1.4, // Reduced from 1.5 (~7%) for document-like gravity
    fontFamily: 'var(--font-sans-serif)',
  },
};

const textColors: Record<TextColor, string> = {
  primary: tokens.textColors.primary,
  secondary: tokens.textColors.secondary,
  muted: tokens.textColors.muted,
};

export function Text({
  variant = 'body',
  color = 'primary',
  children,
  className = '',
  as: Component = 'p',
  style,
}: TextProps) {
  const baseStyle = textStyles[variant];
  const colorValue = textColors[color];

  return (
    <Component
      className={className}
      style={{
        ...baseStyle,
        color: colorValue,
        ...style,
      }}
    >
      {children}
    </Component>
  );
}

