import { type ReactNode } from 'react';

/**
 * Container Primitive
 * 
 * Intent: Provides horizontal centering and max-width control
 * for content. Applies consistent horizontal padding using
 * component spacing tokens. No background or visual styling -
 * purely structural.
 */
interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`container-base ${className}`}>
      {children}
    </div>
  );
}

