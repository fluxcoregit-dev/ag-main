import { tokens } from '@/lib/tokens';

/**
 * Divider Primitive
 * 
 * Intent: Thin horizontal rule using border token for subtle
 * separation. Optional accent variant for rare emphasis (strategic
 * dividers only). No animation - pure structural element.
 */
interface DividerProps {
  variant?: 'default' | 'accent';
  className?: string;
}

export function Divider({ variant = 'default', className = '' }: DividerProps) {
  const borderColor =
    variant === 'accent'
      ? tokens.accent.base
      : tokens.colorLayers.border;

  return (
    <hr
      className={`divider-base ${className}`}
      style={{
        border: 'none',
        borderTop: `1px solid ${borderColor}`,
        width: '100%',
        margin: 0,
      }}
    />
  );
}

