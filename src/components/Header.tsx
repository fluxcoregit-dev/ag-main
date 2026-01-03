import Link from 'next/link';
import { Container, Text } from './primitives';
import { tokens } from '@/lib/tokens';

/**
 * Header Component
 * 
 * Intent: Minimal, non-promotional header containing wordmark
 * and neutral navigation. No call-to-action, no sticky behavior,
 * no animation. Uses primitives only.
 */
export function Header() {
  return (
    <header
      style={{
        backgroundColor: 'transparent',
        paddingTop: tokens.spacing.component.lg,
        paddingBottom: tokens.spacing.component.lg,
      }}
    >
      <Container>
        <nav
          aria-label="Main navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <Link
              href="/"
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
              aria-label="Axiom Group home"
            >
              <Text
                as="span"
                variant="body"
                color="primary"
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                }}
              >
                Axiom Group
              </Text>
            </Link>
          </div>
          <div
            style={{
              display: 'flex',
              gap: tokens.spacing.component.lg,
              alignItems: 'center',
            }}
          >
            <Link href="/about" className="link-base" aria-label="View about">
              <Text as="span" variant="body" color="secondary">
                About
              </Text>
            </Link>
            <Link href="/ecosystem" className="link-base" aria-label="View ecosystem">
              <Text as="span" variant="body" color="secondary">
                Ecosystem
              </Text>
            </Link>
            <Link href="/contact" className="link-base" aria-label="View contact">
              <Text as="span" variant="body" color="secondary">
                Contact
              </Text>
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}

