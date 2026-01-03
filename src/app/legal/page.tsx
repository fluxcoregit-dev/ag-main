import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, Container, Heading, Text } from '@/components/primitives';
import { tokens } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'Legal | Axiom Group',
  description: 'Legal and institutional information for Axiom Group.',
  alternates: {
    canonical: '/legal',
  },
};

export default function Legal() {
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
              Legal & Institutional Information
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
              Entity Overview
            </Heading>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: tokens.spacing.component.md,
              }}
            >
              <Text variant="body" color="primary">
                Axiom Group is a parent technology and AI holding entity.
              </Text>

              <Text variant="body" color="secondary">
                It exists to establish, govern, and steward independent ventures
                operating under shared long-term principles and structural standards.
                Axiom Group does not offer consumer products or services directly
                through this website.
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
              Governing Documents
            </Heading>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: tokens.spacing.component.md,
              }}
            >
              <Text variant="body" color="primary">
                The following documents govern the use of this website
                and outline Axiom Group's legal and institutional posture:
              </Text>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: tokens.spacing.component.sm,
                  marginTop: tokens.spacing.component.sm,
                }}
              >
                <Link href="/privacy" className="link-base">
                  <Text as="span" variant="body" color="secondary">
                    Privacy Policy
                  </Text>
                </Link>
                <Link href="/terms" className="link-base">
                  <Text as="span" variant="body" color="secondary">
                    Terms of Use
                  </Text>
                </Link>
                <Link href="/disclosures" className="link-base">
                  <Text as="span" variant="body" color="secondary">
                    Disclosures
                  </Text>
                </Link>
              </div>
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
              Scope
            </Heading>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: tokens.spacing.component.md,
              }}
            >
              <Text variant="body" color="primary">
                These documents apply only to the Axiom Group website and communications.
                Individual ventures operating under Axiom Group maintain their own
                legal and operational documentation.
              </Text>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

