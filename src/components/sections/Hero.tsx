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
            gap: tokens.spacing.component.xl,
            maxWidth: '800px',
          }}
        >
          <Heading level="h1">
            Building intelligent systems, products, and brands from first principles.
          </Heading>
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: tokens.spacing.component.md,
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
            }}
          >
            <a href="/ecosystem" className="button-base">
              Explore the Ecosystem
            </a>
            <a href="/philosophy" className="button-base">
              Our Philosophy
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}

