import Link from 'next/link';
import { Section, Container, Heading, Text } from '@/components/primitives';
import { tokens } from '@/lib/tokens';

/**
 * Hero Section
 * 
 * Intent: Restrained, authoritative hero section that introduces
 * Axiom Group as a parent technology and AI holding company.
 * Uses spacing and typography for presence - no decorative visuals.
 * Content is left-aligned for calm, spacious feel.
 */
export function Hero() {
  return (
    <Section spacing="xl" layer="base">
      <Container>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 0,
            maxWidth: '800px',
          }}
        >
          <div style={{ marginBottom: '6rem' }}>
            <Heading level="h1">
              Building intelligent systems, products, and brands from first principles.
            </Heading>
          </div>
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
              maxWidth: '600px',
            }}
          >
            <Text variant="body" color="secondary">
              Axiom Group is a parent technology and AI holding company focused on
              building enduring systems and long-term value, not short-term execution.
            </Text>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: tokens.spacing.component.md,
              flexWrap: 'wrap',
              marginTop: '4rem',
            }}
          >
            <Link href="/ecosystem" className="button-base">
              Explore the Ecosystem
            </Link>
            <Link href="/about" className="button-base">
              About Axiom Group
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

