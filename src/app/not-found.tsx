import Link from 'next/link';
import { Section, Container, Heading, Text } from '@/components/primitives';
import { tokens } from '@/lib/tokens';

/**
 * 404 Not Found Page
 * 
 * Intent: Handle missing routes with calm, institutional tone.
 * No jokes, personality, or apology theatrics.
 */
export default function NotFound() {
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
              Page not found
            </Heading>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: tokens.spacing.component.md,
              }}
            >
              <Text variant="body" color="primary">
                The page you are looking for does not exist or may have been moved.
              </Text>

              <div style={{ marginTop: tokens.spacing.component.sm }}>
                <Link href="/" className="link-base">
                  <Text as="span" variant="body" color="secondary">
                    Return to homepage
                  </Text>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

