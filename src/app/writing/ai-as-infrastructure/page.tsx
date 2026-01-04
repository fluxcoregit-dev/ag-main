import type { Metadata } from 'next';
import { Section, Container, Heading, Text } from '@/components/primitives';

export const metadata: Metadata = {
  title: 'AI Should Be Infrastructure, Not Spectacle | Axiom Group',
  description: 'AI Should Be Infrastructure, Not Spectacle',
  alternates: {
    canonical: '/writing/ai-as-infrastructure',
  },
};

export default function AIAsInfrastructure() {
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
              AI Should Be Infrastructure, Not Spectacle
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
              Artificial intelligence is currently presented as performance.
            </Text>

            <Text variant="body" color="primary">
              Interfaces demonstrate capability. Agents announce their intelligence. Systems are marketed as autonomous, conversational, or human-like. This framing prioritizes visibility over reliability.
            </Text>

            <Text variant="body" color="primary">
              Infrastructure works differently.
            </Text>

            <Text variant="body" color="primary">
              The most valuable technologies in modern systems are rarely noticed. Databases, networking protocols, compilers, and operating systems do not introduce themselves. They enable functionality quietly. Their success is measured by absence—of failure, of friction, of surprise.
            </Text>

            <Text variant="body" color="primary">
              AI should be treated the same way.
            </Text>

            <Text variant="body" color="primary">
              When intelligence is presented as a feature, it becomes a liability. Users must learn how to interact with it. They must interpret its behavior. They must adapt to its unpredictability. The system becomes harder to reason about, not easier.
            </Text>

            <Text variant="body" color="primary">
              When intelligence is embedded as infrastructure, the opposite occurs. AI augments existing workflows without announcing itself. Decisions feel intentional rather than impressive. Capability is expressed through outcomes, not demonstrations.
            </Text>

            <Text variant="body" color="primary">
              Infrastructure-grade AI is predictable. It operates within defined boundaries. It does not seek attention. It does not attempt to appear human. It does not surprise users unless surprise is explicitly requested.
            </Text>

            <Text variant="body" color="primary">
              This approach requires discipline.
            </Text>

            <Text variant="body" color="primary">
              Spectacle is easier to sell than restraint. Demos attract attention faster than reliability. Anthropomorphism feels engaging, even when it introduces risk. But over time, systems that prioritize performance over predictability erode trust.
            </Text>

            <Text variant="body" color="primary">
              Trust is the primary currency of infrastructure.
            </Text>

            <Text variant="body" color="primary">
              Users rely on systems they can understand. Operators rely on systems they can control. Organizations rely on systems that behave consistently under pressure. Intelligence that cannot be reasoned about does not scale. It fragments.
            </Text>

            <Text variant="body" color="primary">
              AI becomes truly powerful when it disappears into the system—when it is experienced not as an agent, but as improved capability.
            </Text>

            <Text variant="body" color="primary">
              The goal is not to show intelligence.
            </Text>

            <Text variant="body" color="primary">
              The goal is to make systems more capable without making them more complex.
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

