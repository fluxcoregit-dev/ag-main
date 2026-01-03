import { Section, Container, Heading, Text, Divider } from '@/components/primitives';
import { tokens } from '@/lib/tokens';

/**
 * Intelligence Section
 * 
 * Intent: Explain how Axiom Group approaches artificial intelligence
 * as embedded infrastructure rather than a feature or product. Communicates
 * the systemic view of AI through calm, declarative text. Uses spacing
 * and typography only.
 */
export function Intelligence() {
  return (
    <Section spacing="lg" layer="section" temperature="cool">
      <Container>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 0,
            maxWidth: '800px',
          }}
        >
          <div style={{ marginTop: '4rem', marginBottom: '2rem' }}>
            <Heading level="h2">
              Intelligence as Infrastructure
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
              Artificial intelligence is foundational infrastructure within systems,
              not a feature or product. Intelligence supports decision-making,
              automation, and adaptability as embedded capabilities.
            </Text>
          </div>

          <div
            style={{
              marginTop: '1rem',
            }}
          >
            <Text variant="body" color="secondary">
              AI compounds over time. Each system becomes more capable through use.
              Intelligence operates as a persistent layer, enabling everything else.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
}

