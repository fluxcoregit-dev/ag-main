import type { Metadata } from 'next';
import { Section, Container, Heading, Text } from '@/components/primitives';
import { tokens } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'Terms | Axiom Group',
  description: 'Terms governing the use of the Axiom Group website.',
  alternates: {
    canonical: '/terms',
  },
};

export default function Terms() {
  return (
    <>
      <Section spacing="xl" layer="base">
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
              Terms of Use
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
              Acceptance
            </Heading>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: tokens.spacing.component.md,
              }}
            >
              <Text variant="body" color="primary">
                By accessing this website, you agree to these terms of use.
                If you do not agree, you must not use this website.
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
              Use of Website
            </Heading>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: tokens.spacing.component.md,
              }}
            >
              <Text variant="body" color="primary">
                This website is provided for informational purposes only.
              </Text>

              <Text variant="body" color="secondary">
                You may use this website to access information about Axiom Group
                and its ecosystem. You must not use this website for any unlawful
                purpose or in any way that could damage or impair the website.
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
              Intellectual Property
            </Heading>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: tokens.spacing.component.md,
              }}
            >
              <Text variant="body" color="primary">
                All content on this website, including text, graphics, logos, and
                other materials, is the property of Axiom Group or its licensors
                and is protected by intellectual property laws.
              </Text>

              <Text variant="body" color="secondary">
                You may not reproduce, distribute, or create derivative works from
                this content without explicit written permission.
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
              No Services or Products
            </Heading>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: tokens.spacing.component.md,
              }}
            >
              <Text variant="body" color="primary">
                Axiom Group does not offer products or services through this website.
              </Text>

              <Text variant="body" color="secondary">
                Nothing on this site constitutes an offer, solicitation, or agreement.
                This website is informational only and does not create any contractual
                or legal relationship.
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
              Limitation of Liability
            </Heading>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: tokens.spacing.component.md,
              }}
            >
              <Text variant="body" color="primary">
                Axiom Group provides this website "as is" without warranties of any kind.
              </Text>

              <Text variant="body" color="secondary">
                Axiom Group is not liable for any damages arising from your use of
                this website, including but not limited to direct, indirect, incidental,
                or consequential damages.
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
              Changes
            </Heading>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: tokens.spacing.component.md,
              }}
            >
              <Text variant="body" color="primary">
                Axiom Group may modify these terms at any time. Continued use of
                this website after changes constitutes acceptance of the modified terms.
              </Text>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

