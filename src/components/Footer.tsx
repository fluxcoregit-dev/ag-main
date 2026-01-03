import Link from 'next/link';
import { Container, Text, Divider } from './primitives';
import { tokens } from '@/lib/tokens';

/**
 * Footer Component
 * 
 * Intent: System closure with institutional finality. Minimal copy,
 * increased vertical breathing room. Footer feels final, not informational.
 * No social links, no marketing language. Uses primitives only.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: 'transparent',
        paddingTop: tokens.spacing.section.lg,
        paddingBottom: tokens.spacing.section.lg,
        marginTop: tokens.spacing.section.xl,
      }}
    >
      <Container>
        <Divider />
        <div
          style={{
            marginTop: tokens.spacing.component.xl,
            display: 'flex',
            flexDirection: 'column',
            gap: tokens.spacing.component.md,
          }}
        >
          <Text variant="meta" color="muted">
            © {currentYear} Axiom Group. All rights reserved.
          </Text>
          <Text variant="meta" color="muted">
            Building for the long term.
          </Text>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: tokens.spacing.component.lg,
              flexWrap: 'wrap',
              marginTop: tokens.spacing.component.sm,
            }}
          >
            <Link href="/privacy" className="link-base" style={{ textDecoration: 'none' }}>
              <Text as="span" variant="meta" color="muted">
                Privacy
              </Text>
            </Link>
            <Link href="/terms" className="link-base" style={{ textDecoration: 'none' }}>
              <Text as="span" variant="meta" color="muted">
                Terms
              </Text>
            </Link>
            <Link href="/legal" className="link-base" style={{ textDecoration: 'none' }}>
              <Text as="span" variant="meta" color="muted">
                Legal
              </Text>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

