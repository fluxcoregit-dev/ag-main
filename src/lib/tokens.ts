/**
 * Axiom Group Design Token System - TypeScript Mirror
 * 
 * This file mirrors the CSS variables defined in theme.css
 * for use in TypeScript/React components. All tokens should
 * reference the CSS variables, not hardcoded values.
 * 
 * Philosophy:
 * - Dark premium, layered and breathable
 * - Stillness by default, response on intent
 * - Light appears as feedback, not decoration
 * - No trend-based styling
 * - Scalable to sub-companies
 */

/**
 * Color Layers
 * 
 * Intent: Create a layered depth system where surfaces
 * progressively lighten from the base canvas. Each layer
 * provides subtle separation without harsh contrast.
 * Hover/active states use lightening logic for feedback.
 */
export const colorLayers = {
  base: 'var(--color-layer-base)',
  section: 'var(--color-layer-section)',
  elevated: 'var(--color-layer-elevated)',
  border: 'var(--color-layer-border)',
  hoverLighten: 'var(--color-layer-hover-lighten)',
  activeLighten: 'var(--color-layer-active-lighten)',
} as const;

/**
 * Text Colors
 * 
 * Intent: Hierarchical text contrast system ensuring
 * readability while maintaining the dark premium aesthetic.
 * Primary text is high contrast, secondary provides context,
 * muted text is for metadata and less important information.
 */
export const textColors = {
  primary: 'var(--color-text-primary)',
  secondary: 'var(--color-text-secondary)',
  muted: 'var(--color-text-muted)',
} as const;

/**
 * Accent System
 * 
 * Intent: Single muted accent (platinum/gold) used sparingly
 * for CTAs, focus states, and strategic dividers only.
 * The accent is muted to maintain sophistication and avoid
 * decorative use. Restricted usage ensures it remains impactful.
 * 
 * Usage rules:
 * - CTA buttons and links
 * - Focus indicators
 * - Strategic dividers (not all dividers)
 * - NOT for decorative elements
 */
export const accent = {
  base: 'var(--color-accent-base)',
  hover: 'var(--color-accent-hover)',
  active: 'var(--color-accent-active)',
} as const;

/**
 * Interaction Feedback
 * 
 * Intent: Subtle feedback system using glow and shadow
 * to indicate interactivity. Glow appears on intent,
 * shadows provide elevation context. Border contrast
 * changes signal state transitions.
 */
export const interaction = {
  glow: {
    low: 'var(--glow-intensity-low)',
    medium: 'var(--glow-intensity-medium)',
    high: 'var(--glow-intensity-high)',
  },
  shadow: {
    rest: 'var(--shadow-elevation-rest)',
    hover: 'var(--shadow-elevation-hover)',
  },
  border: {
    rest: 'var(--border-contrast-rest)',
    hover: 'var(--border-contrast-hover)',
    focus: 'var(--border-contrast-focus)',
    active: 'var(--border-contrast-active)',
  },
} as const;

/**
 * Motion Constants
 * 
 * Intent: Standardized motion values for consistency.
 * Motion is reserved for state transitions and feedback,
 * not decorative animations. Stillness is the default.
 * 
 * Motion rules:
 * - Allowed: State transitions (hover, focus, active)
 * - Allowed: Loading indicators
 * - Allowed: Modal/drawer entrances
 * - NOT allowed: Decorative animations
 * - NOT allowed: Auto-playing animations
 * - Motion must be triggered by user intent
 */
export const motion = {
  duration: {
    instant: 'var(--motion-duration-instant)',
    fast: 'var(--motion-duration-fast)',
    standard: 'var(--motion-duration-standard)',
    slow: 'var(--motion-duration-slow)',
  },
  easing: {
    standard: 'var(--motion-easing-standard)',
    decelerate: 'var(--motion-easing-decelerate)',
    accelerate: 'var(--motion-easing-accelerate)',
  },
} as const;

/**
 * Spacing Rhythm
 * 
 * Intent: Consistent vertical rhythm for sections and
 * internal component spacing. Creates breathable layouts
 * that feel premium and organized.
 */
export const spacing = {
  section: {
    xs: 'var(--spacing-section-xs)',
    sm: 'var(--spacing-section-sm)',
    md: 'var(--spacing-section-md)',
    lg: 'var(--spacing-section-lg)',
    xl: 'var(--spacing-section-xl)',
  },
  component: {
    xs: 'var(--spacing-component-xs)',
    sm: 'var(--spacing-component-sm)',
    md: 'var(--spacing-component-md)',
    lg: 'var(--spacing-component-lg)',
    xl: 'var(--spacing-component-xl)',
    '2xl': 'var(--spacing-component-2xl)',
  },
} as const;

/**
 * Design Tokens - Complete token system export
 */
export const tokens = {
  colorLayers,
  textColors,
  accent,
  interaction,
  motion,
  spacing,
} as const;

export type DesignTokens = typeof tokens;

