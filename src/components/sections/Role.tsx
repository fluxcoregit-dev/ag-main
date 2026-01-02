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
    <Section spacing="lg" layer="base">
      <Container>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: tokens.spacing.component.lg,
            maxWidth: '800px',
          }}
        >
          <Heading level="h2">
            The Role of Axiom Group
          </Heading>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: tokens.spacing.component.md,
            }}
          >
            <Text variant="body" color="primary">
              Axiom Group operates above individual products and companies. We set
              standards rather than execute tasks. Our focus is on systems, architecture,
              and long-term thinking that enables clarity, scale, and durability across
              the entire ecosystem.
            </Text>

            <Text variant="body" color="secondary">
              While individual ventures build products and serve customers, Axiom Group
              establishes the foundational principles, technical standards, and
              organizational patterns that allow those ventures to operate with greater
              coherence and efficiency. We create the infrastructure of thought and
              practice that makes independent execution possible.
            </Text>

            <Text variant="body" color="secondary">
              This separation of concerns—between the parent company's systemic work
              and each venture's operational work—ensures that both can focus on what
              they do best. Axiom Group maintains the long view; the ventures maintain
              the immediate execution. Together, they form a structure built for
              sustained growth and enduring value.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
}

