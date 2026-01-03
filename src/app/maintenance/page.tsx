import { Section, Container, Heading, Text } from '@/components/primitives';
import { tokens } from '@/lib/tokens';

/**
 * Maintenance Page
 * 
 * Intent: Display when site is intentionally unavailable.
 * Calm, deliberate tone with no timelines or countdowns.
 */
export default function Maintenance() {
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
              Temporarily unavailable
            </Heading>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: tokens.spacing.component.md,
              }}
            >
              <Text variant="body" color="primary">
                This site is undergoing scheduled maintenance.
                Please check back later.
              </Text>

              <Text variant="body" color="secondary">
                No action is required.
              </Text>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

