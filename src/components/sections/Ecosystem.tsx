import { Section, Container, Heading, Text } from '@/components/primitives';
import { tokens } from '@/lib/tokens';

/**
 * Ecosystem Section
 * 
 * Intent: Present Axiom Group's core domains as long-term pillars
 * of its ecosystem. Cards are visually calm by default, with subtle
 * elevation and border contrast on hover/focus. No decorative visuals.
 */
export function Ecosystem() {
  const pillars = [
    {
      title: 'Product & Platform Engineering',
      description: 'We establish the technical foundations and architectural patterns that enable scalable, maintainable product development across the ecosystem. Our focus is on systems that outlast individual implementations.',
    },
    {
      title: 'AI & Intelligent Systems',
      description: 'We develop the frameworks and methodologies for building intelligent systems that learn, adapt, and operate autonomously. This domain encompasses both the technical infrastructure and the principles for responsible AI development.',
    },
    {
      title: 'Design Systems & Brand Architecture',
      description: 'We create the visual and interaction standards that ensure coherence across all touchpoints. This includes design systems, brand guidelines, and the architectural thinking that makes consistent expression possible at scale.',
    },
    {
      title: 'Growth Infrastructure & Analytics',
      description: 'We build the measurement and optimization systems that enable data-driven decision-making without compromising user experience or long-term value. The focus is on infrastructure that supports sustainable growth.',
    },
    {
      title: 'Security, Reliability & Compliance',
      description: 'We establish the security standards, reliability patterns, and compliance frameworks that protect both the ecosystem and its users. This domain ensures that foundational concerns are addressed systematically, not reactively.',
    },
  ];

  return (
    <Section spacing="lg" layer="section">
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
                Ecosystem Pillars
              </Heading>
            </div>
            <Text variant="body" color="secondary">
              Axiom Group's ecosystem is built on five foundational domains, each representing a long-term commitment to systemic excellence rather than short-term execution.
            </Text>
          </div>

          <div
            className="ecosystem-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: tokens.spacing.component.lg,
              width: '100%',
            }}
          >
            {pillars.map((pillar, index) => (
              <article
                key={index}
                className="ecosystem-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0,
                }}
                tabIndex={0}
                aria-label={`${pillar.title} - ${pillar.description.substring(0, 100)}`}
              >
                <div style={{ marginBottom: '1rem' }}>
                  <Heading level="h3">
                    {pillar.title}
                  </Heading>
                </div>
                <Text variant="body" color="secondary">
                  {pillar.description}
                </Text>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

