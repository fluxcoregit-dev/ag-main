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
    <Section spacing="xl" layer="base" temperature="cool">
      <Container>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 0,
            maxWidth: '800px',
            marginTop: tokens.spacing.section.md, // Reduced top spacing for viewport visibility
          }}
        >
          <div style={{ marginBottom: '9rem' }}>
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
              marginTop: '3rem',
            }}
          >
            <Text variant="body" color="secondary">
              A parent technology and AI holding company building enduring systems.
            </Text>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: tokens.spacing.component.md,
              flexWrap: 'wrap',
              marginTop: '6rem',
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

