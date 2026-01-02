import { type ButtonHTMLAttributes, type ReactNode } from 'react';

/**
 * Button Primitive
 * 
 * Intent: Base interactive element with calm default state.
 * Hover/focus states increase border contrast and apply subtle
 * glow using accent token. No scale, bounce, or mount animations.
 * Keyboard and focus-visible compliant for accessibility.
 * Uses CSS classes for state transitions (stillness by default,
 * response on intent).
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default';
}

export function Button({
  children,
  variant = 'default',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`button-base ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

