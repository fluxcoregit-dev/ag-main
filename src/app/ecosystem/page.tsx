import type { Metadata } from 'next';
import { Section, Container, Heading, Text } from '@/components/primitives';
import { tokens } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'Ecosystem | Axiom Group',
  description: 'The domains and capability pillars that form the Axiom Group ecosystem.',
  alternates: {
    canonical: '/ecosystem',
  },
};

/**
 * Ecosystem Page
 * 
 * Intent: Expand each ecosystem pillar into a full domain section.
 * Reinforce that pillars represent enduring capability areas, not services.
 */
export default function Ecosystem() {
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 0,
              width: '100%',
              marginBottom: '3rem',
            }}
          >
            <Heading level="h1">
              Ecosystem
            </Heading>

            <div style={{ marginTop: '2rem' }}>
              <Text variant="body" color="secondary">
                Five foundational domains representing long-term capability areas.
              </Text>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 0,
              width: '100%',
            }}
          >
            <div style={{ marginTop: '4.5rem', marginBottom: '2rem' }}>
              <Heading level="h2">
                Product & Platform Engineering
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
                Technical foundations and architectural patterns enabling scalable,
                maintainable product development. Systems that outlast individual
                implementations.
              </Text>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.875rem',
                marginTop: '1rem',
              }}
            >
              <Text variant="body" color="secondary">
                Platform architecture, development standards, code quality frameworks,
                and technical infrastructure enabling shared capabilities. Patterns
                that reduce complexity over time.
              </Text>

              <Text variant="body" color="secondary">
                Establishing technical systems that make feature development faster,
                more reliable, and more coherent across the portfolio.
              </Text>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 0,
              width: '100%',
              marginTop: '3rem',
            }}
          >
            <div style={{ marginTop: '4.5rem', marginBottom: '2rem' }}>
              <Heading level="h2">
                AI & Intelligent Systems
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
                Frameworks and methodologies for intelligent systems that learn,
                adapt, and operate autonomously. Technical infrastructure and
                principles for responsible AI development.
              </Text>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.875rem',
                marginTop: '1rem',
              }}
            >
              <Text variant="body" color="secondary">
                Intelligence as infrastructure, embedded within systems rather than
                added as a feature. Foundational capabilities allowing AI to compound
                in value over time.
              </Text>

              <Text variant="body" color="secondary">
                Architectural thinking over model optimization. Long-term capability
                building over short-term performance gains. Systemic integration over
                isolated implementations.
              </Text>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 0,
              width: '100%',
              marginTop: '3rem',
            }}
          >
            <div style={{ marginTop: '4.5rem', marginBottom: '2rem' }}>
              <Heading level="h2">
                Design Systems & Brand Architecture
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
                Visual and interaction standards ensuring coherence across all
                touchpoints. Design systems, brand guidelines, and architectural
                thinking for consistent expression at scale.
              </Text>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.875rem',
                marginTop: '1rem',
              }}
            >
              <Text variant="body" color="secondary">
                Patterns and principles allowing multiple products and brands to
                operate with visual and interactional coherence. Infrastructure of
                expression enabling independent design decisions while maintaining
                consistency.
              </Text>

              <Text variant="body" color="secondary">
                Every visual and interaction decision contributes to a larger system
                of expression, creating coherence across the ecosystem.
              </Text>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 0,
              width: '100%',
              marginTop: '3rem',
            }}
          >
            <div style={{ marginTop: '4.5rem', marginBottom: '2rem' }}>
              <Heading level="h2">
                Growth Infrastructure & Analytics
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
                Measurement and optimization systems enabling data-driven
                decision-making. Infrastructure supporting sustainable growth.
              </Text>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.875rem',
                marginTop: '1rem',
              }}
            >
              <Text variant="body" color="secondary">
                Measurement frameworks and data infrastructure allowing ventures to
                understand their systems. Long-term understanding over short-term
                metrics.
              </Text>

              <Text variant="body" color="secondary">
                Growth built on solid foundations rather than temporary optimizations.
                Systems that scale sustainably while maintaining quality and coherence.
              </Text>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 0,
              width: '100%',
              marginTop: '3rem',
            }}
          >
            <div style={{ marginTop: '4.5rem', marginBottom: '2rem' }}>
              <Heading level="h2">
                Security, Reliability & Compliance
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
                Security standards, reliability patterns, and compliance frameworks
                protecting the ecosystem and its users. Foundational concerns addressed
                systematically.
              </Text>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.875rem',
                marginTop: '1rem',
              }}
            >
              <Text variant="body" color="secondary">
                Security and reliability built into every system from the start.
                Patterns and standards making secure, reliable systems the default.
              </Text>

              <Text variant="body" color="secondary">
                Security, reliability, and compliance addressed systematically.
                Infrastructure of trust enabling long-term operation.
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

