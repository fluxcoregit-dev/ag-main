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
            <div style={{ marginTop: '4.5rem', marginBottom: '2rem' }}>
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
                Minimum information necessary to operate this website and respond
                to inquiries.
              </Text>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <Text variant="body" color="secondary">
                No behavioral tracking, advertising tracking, or third-party analytics.
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
                Information You Provide
              </Heading>
            </div>

            <Text variant="body" color="primary">
              Contact through this website may include name, email address, and message
              contents. Used solely to respond to inquiries.
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
                Cookies
              </Heading>
            </div>

            <Text variant="body" color="primary">
              No cookies for tracking, advertising, or profiling.
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
                Data Sharing
              </Heading>
            </div>

            <Text variant="body" color="primary">
              Personal information is not sold, rented, or shared with third parties,
              except where required by law.
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
                Data Retention
              </Heading>
            </div>

            <Text variant="body" color="primary">
              Information retained only as long as necessary to address the inquiry.
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
                Contact
              </Heading>
            </div>

            <Text variant="body" color="primary">
              Questions:{' '}
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

