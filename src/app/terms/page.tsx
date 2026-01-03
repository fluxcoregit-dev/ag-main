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
    <Section spacing="md" layer="section" temperature="neutral">
      <Container>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 0,
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <div style={{ marginBottom: '3rem' }}>
            <Heading level="h1">
              Terms of Use
            </Heading>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 0,
              width: '100%',
            }}
          >
            <div style={{ marginTop: '4.5rem', marginBottom: '2rem' }}>
              <Heading level="h2">
                Acceptance
              </Heading>
            </div>

            <Text variant="body" color="primary">
              Accessing this website constitutes agreement to these terms.
            </Text>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 0,
              width: '100%',
              marginTop: '3rem',
            }}
          >
            <div style={{ marginTop: '4.5rem', marginBottom: '2rem' }}>
              <Heading level="h2">
                Use of Website
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
                Informational purposes only.
              </Text>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <Text variant="body" color="secondary">
                Use for lawful purposes only. Do not damage or impair the website.
              </Text>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 0,
              width: '100%',
              marginTop: '3rem',
            }}
          >
            <div style={{ marginTop: '4.5rem', marginBottom: '2rem' }}>
              <Heading level="h2">
                Intellectual Property
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
                All content is the property of Axiom Group or its licensors,
                protected by intellectual property laws.
              </Text>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <Text variant="body" color="secondary">
                No reproduction, distribution, or derivative works without
                explicit written permission.
              </Text>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 0,
              width: '100%',
              marginTop: '3rem',
            }}
          >
            <div style={{ marginTop: '4.5rem', marginBottom: '2rem' }}>
              <Heading level="h2">
                No Services or Products
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
                No products or services offered through this website.
              </Text>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <Text variant="body" color="secondary">
                Nothing on this site constitutes an offer, solicitation, or agreement.
                No contractual or legal relationship created.
              </Text>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 0,
              width: '100%',
              marginTop: '3rem',
            }}
          >
            <div style={{ marginTop: '4.5rem', marginBottom: '2rem' }}>
              <Heading level="h2">
                Limitation of Liability
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
                This website provided "as is" without warranties.
              </Text>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <Text variant="body" color="secondary">
                No liability for damages arising from use of this website.
              </Text>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 0,
              width: '100%',
              marginTop: '3rem',
            }}
          >
            <div style={{ marginTop: '4.5rem', marginBottom: '2rem' }}>
              <Heading level="h2">
                Changes
              </Heading>
            </div>

            <Text variant="body" color="primary">
              Terms may be modified at any time. Continued use constitutes
              acceptance of modified terms.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
}
