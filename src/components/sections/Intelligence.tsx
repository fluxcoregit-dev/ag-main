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
    <Section spacing="lg" layer="section">
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
          <div style={{ marginTop: '4rem', marginBottom: '3rem' }}>
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
              At Axiom Group, artificial intelligence is treated as foundational
              infrastructure within systems, not as a feature or product. Intelligence
              supports decision-making, automation, and adaptability as embedded
              capabilities. Agentic behavior emerges from thoughtful system design,
              not from novelty or isolated implementations.
            </Text>
          </div>

          <div
            style={{
              marginTop: '2.5rem',
            }}
          >
            <Text variant="body" color="secondary">
              This infrastructure approach means that AI compounds over time rather
              than delivering one-off benefits. Each system built on this foundation
              becomes more capable, and the infrastructure itself improves through
              use. Intelligence becomes a persistent layer that enables everything
              else, operating quietly in the background rather than demanding attention.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
}

