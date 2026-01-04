import type { Metadata } from 'next';
import { Section, Container, Heading, Text } from '@/components/primitives';

export const metadata: Metadata = {
  title: 'Why Long-Term Systems Outlast Fast Products | Axiom Group',
  description: 'Why Long-Term Systems Outlast Fast Products',
  alternates: {
    canonical: '/writing/long-term-systems',
  },
};

export default function LongTermSystems() {
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
              Why Long-Term Systems Outlast Fast Products
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
              Most technology products are designed to win a moment.
            </Text>

            <Text variant="body" color="primary">
              Very few are designed to survive time.
            </Text>

            <Text variant="body" color="primary">
              Speed has become the default value in modern product development. Teams optimize for rapid iteration, fast launches, and immediate feedback. This produces motion, visibility, and short-term success. It does not reliably produce durability.
            </Text>

            <Text variant="body" color="primary">
              A long-term system is not simply a product that lasts longer. It is a system whose structure anticipates change, absorbs pressure, and remains legible as it evolves. Durability is not an outcome. It is an architectural property.
            </Text>

            <Text variant="body" color="primary">
              Fast products tend to collapse under their own success. As usage grows, complexity accumulates. Decisions made for speed—tight coupling, implicit assumptions, undocumented behavior—become liabilities. Over time, the system requires increasing effort to maintain the same level of functionality. Eventually, progress slows, and decay begins.
            </Text>

            <Text variant="body" color="primary">
              Long-term systems behave differently. They are designed with explicit boundaries. Their components are understandable in isolation. Their behavior is predictable. Change is expected, not feared. The system evolves without losing coherence.
            </Text>

            <Text variant="body" color="primary">
              This approach appears slower at the beginning. It often produces fewer visible milestones. But over time, it compounds. The system requires less intervention to remain stable. New capabilities integrate without destabilizing existing ones. The cost of change remains bounded.
            </Text>

            <Text variant="body" color="primary">
              Durability is not achieved through optimism. It is achieved through restraint.
            </Text>

            <Text variant="body" color="primary">
              Long-term systems prioritize clarity over cleverness. They trade short-term acceleration for long-term leverage. They assume that future maintainers will not share the context of the original builders—and they design accordingly.
            </Text>

            <Text variant="body" color="primary">
              The most enduring systems are rarely the most exciting at launch. They become important quietly. Their value reveals itself over time, not through promotion, but through continued usefulness.
            </Text>

            <Text variant="body" color="primary">
              Speed creates attention.
            </Text>

            <Text variant="body" color="primary">
              Structure creates permanence.
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

