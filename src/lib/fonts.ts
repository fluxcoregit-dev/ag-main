/**
 * Font Configuration
 * 
 * Intent: Self-hosted fonts for headings (serif) and body (sans-serif).
 * Uses Next.js font optimization. Currently uses system font stacks.
 * 
 * To add self-hosted fonts:
 * 1. Place serif font files in public/fonts/serif/
 * 2. Place sans-serif font files in public/fonts/sans-serif/
 * 3. Import and configure using next/font/local
 * 4. Export font variables to use in layout.tsx
 * 
 * Example:
 * import localFont from 'next/font/local';
 * 
 * export const serifFont = localFont({
 *   src: [
 *     { path: '../public/fonts/serif/regular.woff2', weight: '400' },
 *     { path: '../public/fonts/serif/medium.woff2', weight: '500' },
 *     { path: '../public/fonts/serif/semibold.woff2', weight: '600' },
 *   ],
 *   variable: '--font-serif',
 *   fallback: ['Georgia', 'Times New Roman', 'serif'],
 * });
 * 
 * export const sansSerifFont = localFont({
 *   src: [
 *     { path: '../public/fonts/sans-serif/regular.woff2', weight: '400' },
 *     { path: '../public/fonts/sans-serif/medium.woff2', weight: '500' },
 *   ],
 *   variable: '--font-sans-serif',
 *   fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
 * });
 */

// Font CSS variables (applied via globals.css)
// These will be overridden when self-hosted fonts are added
export const fontVariables = {
  serif: 'var(--font-serif, Georgia, "Times New Roman", serif)',
  sansSerif: 'var(--font-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)',
};

