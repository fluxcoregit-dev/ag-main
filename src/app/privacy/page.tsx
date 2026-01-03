import type { Metadata } from 'next';
import { Section, Container, Heading, Text } from '@/components/primitives';
import { tokens } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'Privacy | Axiom Group',
  description: 'Privacy policy describing data handling and minimal collection practices.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function Privacy() {
  return (
    <Section spacing="xl" layer="section">
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
          <div style={{ marginBottom: '6rem' }}>
            <Heading level="h1">
              Privacy Policy
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
            <div style={{ marginBottom: '3rem' }}>
              <Heading level="h2">
                Data Collection
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
                Axiom Group collects only the minimum information necessary to operate
                this website and respond to direct inquiries.
              </Text>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <Text variant="body" color="secondary">
                We do not engage in behavioral tracking, advertising tracking,
                or third-party analytics.
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
              marginTop: '5rem',
            }}
          >
            <div style={{ marginBottom: '3rem' }}>
              <Heading level="h2">
                Information You Provide
              </Heading>
            </div>

            <Text variant="body" color="primary">
              If you contact Axiom Group through this website, we may receive your name,
              email address, and the contents of your message. This information is used
              solely to respond to your inquiry.
            </Text>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 0,
              width: '100%',
              marginTop: '5rem',
            }}
          >
            <div style={{ marginBottom: '3rem' }}>
              <Heading level="h2">
                Cookies
              </Heading>
            </div>

            <Text variant="body" color="primary">
              This website does not use cookies for tracking, advertising,
              or profiling purposes.
            </Text>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 0,
              width: '100%',
              marginTop: '5rem',
            }}
          >
            <div style={{ marginBottom: '3rem' }}>
              <Heading level="h2">
                Data Sharing
              </Heading>
            </div>

            <Text variant="body" color="primary">
              Axiom Group does not sell, rent, or share personal information
              with third parties, except where required by law.
            </Text>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 0,
              width: '100%',
              marginTop: '5rem',
            }}
          >
            <div style={{ marginBottom: '3rem' }}>
              <Heading level="h2">
                Data Retention
              </Heading>
            </div>

            <Text variant="body" color="primary">
              Information submitted through direct contact is retained only
              as long as necessary to address the inquiry.
            </Text>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 0,
              width: '100%',
              marginTop: '5rem',
            }}
          >
            <div style={{ marginBottom: '3rem' }}>
              <Heading level="h2">
                Contact
              </Heading>
            </div>

            <Text variant="body" color="primary">
              Questions regarding this policy may be directed to:{' '}
              <a
                href="mailto:contact@axiomgroup.services"
                className="link-base"
                style={{ color: tokens.textColors.secondary }}
              >
                contact@axiomgroup.services
              </a>
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
}

