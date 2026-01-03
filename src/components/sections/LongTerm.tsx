import Link from 'next/link';
import { Section, Container, Heading, Text } from '@/components/primitives';
import { tokens } from '@/lib/tokens';

/**
 * Long-Term Thinking Section
 * 
 * Intent: Close the homepage by making Axiom Group's long-term time
 * horizon explicit and leaving the reader with a calm, confident final
 * impression. Communicates durability and thoughtful evolution over
 * short-term optimization.
 */
export function LongTerm() {
  return (
    <Section spacing="lg" layer="section" temperature="neutral">
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
              Long-Term Thinking
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
              Multi-year system lifecycles. Systems that improve over time rather
              than require constant replacement.
            </Text>
          </div>

          <div
            style={{
              marginTop: '1rem',
            }}
          >
            <Text variant="body" color="secondary">
              We resist short-term optimization at the cost of long-term clarity.
              Architectural decisions create foundations supporting sustained growth.
            </Text>
          </div>

          <div
            style={{
              marginTop: '5.5rem',
              marginBottom: '3rem',
              width: '100%',
            }}
          >
            <Text variant="body" color="primary" style={{ fontSize: '1.125rem' }}>
              We build what lasts.
            </Text>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <Link href="/contact" className="button-base">
              Start a Conversation
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

