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
              Axiom Group operates on multi-year system lifecycles. We build for
              durability, maintainability, and thoughtful evolution. Our preference
              is for systems that improve over time rather than systems that require
              constant replacement or major rewrites.
            </Text>
          </div>

          <div
            style={{
              marginTop: '2.5rem',
            }}
          >
            <Text variant="body" color="secondary">
              This long-term orientation means we resist short-term optimization at
              the cost of long-term clarity. We choose architectural decisions that
              may take longer to implement but create foundations that support
              sustained growth. We prioritize understanding and coherence over speed
              and novelty.
            </Text>
          </div>

          <div
            style={{
              marginTop: '5rem',
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

