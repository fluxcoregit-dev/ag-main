'use client';

import Link from 'next/link';
import { Section, Container, Heading, Text } from '@/components/primitives';
import { tokens } from '@/lib/tokens';

/**
 * Global Error Page
 * 
 * Intent: Handle unexpected errors with calm, institutional tone.
 * No panic language, no diagnostics, no external logging.
 * Must be a Client Component per Next.js requirements.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
              Something went wrong
            </Heading>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: tokens.spacing.component.md,
              }}
            >
              <Text variant="body" color="primary">
                An unexpected error occurred while loading this page.
              </Text>

              <Text variant="body" color="secondary">
                If the issue persists, please try again later.
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

