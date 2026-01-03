import { Section, Container, Heading, Text } from '@/components/primitives';
import { tokens } from '@/lib/tokens';

/**
 * Role Section
 * 
 * Intent: Explain why Axiom Group exists as a parent/holding company,
 * distinct from the ventures under it. Communicates institutional purpose
 * through calm, declarative text. Uses spacing and typography only.
 */
export function Role() {
  return (
    <Section spacing="lg" layer="section" temperature="neutral">
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
          <div style={{ marginTop: '4rem', marginBottom: '2rem' }}>
            <Heading level="h2">
              The Role of Axiom Group
            </Heading>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
            }}
          >
            <Text variant="body" color="primary">
              Axiom Group operates above individual products and companies. We set
              standards rather than execute tasks.
            </Text>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.875rem',
              marginTop: '1rem',
            }}
          >
            <Text variant="body" color="secondary">
              Individual ventures build products and serve customers. Axiom Group
              establishes foundational principles, technical standards, and
              organizational patterns.
            </Text>

            <Text variant="body" color="secondary">
              The parent company maintains the long view. The ventures maintain
              immediate execution.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
}

