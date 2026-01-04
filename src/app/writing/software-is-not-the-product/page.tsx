import type { Metadata } from 'next';
import { Section, Container, Heading, Text } from '@/components/primitives';

export const metadata: Metadata = {
  title: 'Software Is Rarely the Product | Axiom Group',
  description: 'Software Is Rarely the Product',
  alternates: {
    canonical: '/writing/software-is-not-the-product',
  },
};

export default function SoftwareIsNotTheProduct() {
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
              Software Is Rarely the Product
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
              Software is often described as the product, but in most durable systems, it is not. Software is an interface layer that enables an underlying system to operate, adapt, and scale. Treating software as the product leads to short-term optimization and long-term fragility.
            </Text>

            <Text variant="body" color="primary">
              In enduring organizations, the real product is the system: the processes, decision rules, constraints, and feedback loops that shape behavior over time. Software merely exposes these structures in executable form. When the system is weak, no amount of software refinement produces durability.
            </Text>

            <Text variant="body" color="primary">
              This distinction matters because software changes easily, while systems change slowly. Teams that mistake software for the product tend to ship frequently but accumulate incoherence. Each release solves an immediate problem while subtly eroding structural clarity.
            </Text>

            <Text variant="body" color="primary">
              Durable systems behave differently. They invest disproportionate effort in defining boundaries, invariants, and long-lived abstractions. Software is then used to enforce these decisions consistently rather than to compensate for their absence.
            </Text>

            <Text variant="body" color="primary">
              When software is treated as the product, velocity becomes the primary metric. When systems are treated as the product, coherence becomes the metric. Over time, coherence outperforms velocity.
            </Text>

            <Text variant="body" color="primary">
              Organizations that endure do not ask what software they should build next. They ask what system they are constructing, and whether the software reinforces or undermines it.
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

