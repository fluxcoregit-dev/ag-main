import type { Metadata } from 'next';
import { Section, Container, Heading, Text } from '@/components/primitives';
import { tokens } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'Disclosures | Axiom Group',
  description: 'Institutional disclosures regarding Axiom Group.',
  alternates: {
    canonical: '/disclosures',
  },
};

export default function Disclosures() {
  return (
    <>
      <Section spacing="md" layer="base">
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
            <Heading level="h1">
              Disclosures
            </Heading>
          </div>
        </Container>
      </Section>

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
              Holding Company Nature
            </Heading>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: tokens.spacing.component.md,
              }}
            >
              <Text variant="body" color="primary">
                Axiom Group is a parent holding entity.
              </Text>

              <Text variant="body" color="secondary">
                It does not provide investment advice, financial services,
                or regulated professional services through this website.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

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
              No Solicitation
            </Heading>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: tokens.spacing.component.md,
              }}
            >
              <Text variant="body" color="primary">
                Nothing on this website constitutes an offer to sell or
                a solicitation to buy securities or financial instruments.
              </Text>

              <Text variant="body" color="secondary">
                This website is informational only and does not constitute
                any form of investment or financial solicitation.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

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
              Venture Independence
            </Heading>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: tokens.spacing.component.md,
              }}
            >
              <Text variant="body" color="primary">
                Ventures operating under Axiom Group are independent entities.
              </Text>

              <Text variant="body" color="secondary">
                Statements on this website apply only to Axiom Group
                unless explicitly stated otherwise.
              </Text>

              <Text variant="body" color="secondary">
                Each venture maintains its own legal structure, operations,
                and documentation. Information about individual ventures
                should be obtained directly from those ventures.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

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
              Jurisdiction
            </Heading>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: tokens.spacing.component.md,
              }}
            >
              <Text variant="body" color="primary">
                This website and these disclosures are governed by applicable law.
              </Text>

              <Text variant="body" color="secondary">
                Axiom Group operates in compliance with all applicable regulations
                and legal requirements in the jurisdictions where it operates.
              </Text>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

