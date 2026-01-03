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
      description: 'Technical foundations and architectural patterns for scalable, maintainable product development. Systems that outlast individual implementations.',
    },
    {
      title: 'AI & Intelligent Systems',
      description: 'Frameworks and methodologies for intelligent systems that learn, adapt, and operate autonomously. Technical infrastructure and principles for responsible AI development.',
    },
    {
      title: 'Design Systems & Brand Architecture',
      description: 'Visual and interaction standards ensuring coherence across all touchpoints. Design systems, brand guidelines, and architectural thinking for consistent expression at scale.',
    },
    {
      title: 'Growth Infrastructure & Analytics',
      description: 'Measurement and optimization systems for data-driven decision-making. Infrastructure supporting sustainable growth without compromising long-term value.',
    },
    {
      title: 'Security, Reliability & Compliance',
      description: 'Security standards, reliability patterns, and compliance frameworks protecting the ecosystem and its users. Foundational concerns addressed systematically.',
    },
  ];

  return (
    <Section spacing="lg" layer="section" temperature="neutral">
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
              Five foundational domains representing long-term capability areas.
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

