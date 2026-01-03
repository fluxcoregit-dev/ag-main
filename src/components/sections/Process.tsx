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
      description: 'Understanding the problem space, constraints, and context. A continuous mode of inquiry informing all decisions.',
    },
    {
      title: 'Design',
      description: 'Structure, relationships, and principles guiding implementation. Architectural thinking establishing patterns and standards for coherent systems.',
    },
    {
      title: 'Build',
      description: 'Implementation following patterns established in design. Execution informed by principle. Each implementation reinforces the underlying architecture.',
    },
    {
      title: 'Evolve',
      description: 'Systems must adapt. Ongoing refinement and extension informed by discovery through use. Initial implementations remain relevant and improve over time.',
    },
  ];

  return (
    <Section spacing="lg" layer="section" temperature="warm">
      <Container>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 0,
            maxWidth: '1200px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
              maxWidth: '800px',
              marginBottom: '4rem',
            }}
          >
            <div style={{ marginTop: '4rem', marginBottom: '2rem' }}>
              <Heading level="h2">
                How We Build
              </Heading>
            </div>
            <Text variant="body" color="secondary">
              Four modes of thinking guiding decisions across all ventures and systems.
              Principles, not steps.
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
                  gap: 0,
                  padding: tokens.spacing.component.lg,
                  border: `1px solid ${tokens.colorLayers.border}`,
                  backgroundColor: tokens.colorLayers.elevated,
                }}
                aria-label={`${item.title} - ${item.description.substring(0, 100)}`}
              >
                <div style={{ marginBottom: '1rem' }}>
                  <Heading level="h3">
                    {item.title}
                  </Heading>
                </div>
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

