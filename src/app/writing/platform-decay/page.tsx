import type { Metadata } from 'next';
import { Section, Container, Heading, Text } from '@/components/primitives';

export const metadata: Metadata = {
  title: 'Most Digital Platforms Decay by Design | Axiom Group',
  description: 'Most Digital Platforms Decay by Design',
  alternates: {
    canonical: '/writing/platform-decay',
  },
};

export default function PlatformDecay() {
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
              Most Digital Platforms Decay by Design
            </Heading>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <Text variant="body" color="primary">
              Digital decay is often treated as an operational failure.
            </Text>

            <Text variant="body" color="primary">
              In reality, it is frequently a design decision.
            </Text>

            <Text variant="body" color="primary">
              Many platforms are built around growth assumptions that cannot hold indefinitely. Interfaces optimize for engagement. Systems optimize for expansion. Architecture optimizes for rapid change. These choices are not inherently wrong—but they are rarely neutral.
            </Text>

            <Text variant="body" color="primary">
              As platforms scale, the cost of these decisions compounds.
            </Text>

            <Text variant="body" color="primary">
              Features accumulate without consolidation. Interfaces grow denser. Internal logic becomes opaque. The platform becomes harder to explain, harder to maintain, and harder to change. Eventually, progress requires increasing effort for diminishing returns.
            </Text>

            <Text variant="body" color="primary">
              This is not accidental. It is the result of prioritizing momentum over structure.
            </Text>

            <Text variant="body" color="primary">
              Decay does not usually begin with failure. It begins with success. Growth validates early decisions, even when those decisions are brittle. Over time, the platform becomes dependent on complexity it cannot easily remove.
            </Text>

            <Text variant="body" color="primary">
              Durable platforms behave differently. They resist feature accumulation. They enforce internal coherence. They prefer fewer concepts, clearly defined, over many loosely connected ones. They make removal as intentional as addition.
            </Text>

            <Text variant="body" color="primary">
              Most importantly, they assume that today&apos;s context will not survive.
            </Text>

            <Text variant="body" color="primary">
              Teams change. Users change. Constraints change. A system that relies on implicit knowledge will eventually fail. A system that encodes its assumptions explicitly can persist.
            </Text>

            <Text variant="body" color="primary">
              Longevity is not about freezing a system in place. It is about allowing it to evolve without losing its shape.
            </Text>

            <Text variant="body" color="primary">
              Platforms that endure are designed less like products and more like institutions. They are governed by principles, not trends. Their interfaces age slowly. Their behavior remains legible.
            </Text>

            <Text variant="body" color="primary">
              Decay is rarely inevitable.
            </Text>

            <Text variant="body" color="primary">
              More often, it is designed in.
            </Text>
          </div>

          <div style={{ marginTop: '4rem', paddingTop: '2rem' }}>
            <Text variant="body" color="secondary">
              Published by Axiom Group.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
}

