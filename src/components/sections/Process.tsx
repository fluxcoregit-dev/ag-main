import { Section, Container, Heading, Text } from '@/components/primitives';
import { tokens } from '@/lib/tokens';

/**
 * Process Section (How We Build)
 * 
 * Intent: Present Axiom Group's internal decision-making framework
 * as governing principles, not a delivery process. These are modes of
 * thinking that guide decisions across all ventures and systems.
 */
export function Process() {
  const framework = [
    {
      title: 'Discover',
      description: 'We begin with understanding: the problem space, the constraints, the context. Discovery is not a phase but a continuous mode of inquiry that informs all subsequent decisions. We seek clarity before action.',
    },
    {
      title: 'Design',
      description: 'We define the structure, relationships, and principles that will guide implementation. Design here means architectural thinking—establishing the patterns and standards that make coherent systems possible.',
    },
    {
      title: 'Build',
      description: 'We implement with discipline, following the patterns established in design. Building is execution informed by principle, not just delivery. Each implementation reinforces and refines the underlying architecture.',
    },
    {
      title: 'Evolve',
      description: 'We recognize that systems must adapt. Evolution is the ongoing refinement and extension of what exists, informed by what we discover through use. This mode ensures that initial implementations remain relevant and improve over time.',
    },
  ];

  return (
    <Section spacing="lg" layer="base">
      <Container>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: tokens.spacing.component.xl,
            maxWidth: '1200px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: tokens.spacing.component.md,
              maxWidth: '800px',
            }}
          >
            <Heading level="h2">
              How We Build
            </Heading>
            <Text variant="body" color="secondary">
              Axiom Group operates under a governing framework of four modes of thinking that guide decisions across all ventures and systems. These modes may occur simultaneously or repeatedly; they are principles, not steps.
            </Text>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: tokens.spacing.component.lg,
              width: '100%',
            }}
          >
            {framework.map((item, index) => (
              <article
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: tokens.spacing.component.md,
                  padding: tokens.spacing.component.lg,
                  border: `1px solid ${tokens.colorLayers.border}`,
                  backgroundColor: tokens.colorLayers.elevated,
                }}
                aria-label={`${item.title} - ${item.description.substring(0, 100)}`}
              >
                <Heading level="h3">
                  {item.title}
                </Heading>
                <Text variant="body" color="secondary">
                  {item.description}
                </Text>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

