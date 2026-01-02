import { Container, Text, Divider } from './primitives';
import { tokens } from '@/lib/tokens';

/**
 * Footer Component
 * 
 * Intent: Minimal and quiet footer with copyright notice
 * and optional long-term thinking line. No social links,
 * no marketing language. Uses primitives only.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: 'transparent',
        paddingTop: tokens.spacing.section.md,
        paddingBottom: tokens.spacing.component.lg,
      }}
    >
      <Container>
        <Divider />
        <div
          style={{
            marginTop: tokens.spacing.component.lg,
            display: 'flex',
            flexDirection: 'column',
            gap: tokens.spacing.component.sm,
          }}
        >
          <Text variant="meta" color="muted">
            © {currentYear} Axiom Group. All rights reserved.
          </Text>
          <Text variant="meta" color="muted">
            Building for the long term.
          </Text>
        </div>
      </Container>
    </footer>
  );
}

