import type { Metadata } from 'next';
import { Section, Container, Heading, Text } from '@/components/primitives';
import { tokens } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'About | Axiom Group',
  description: 'Mandate, principles, and long-term orientation of Axiom Group.',
  alternates: {
    canonical: '/about',
  },
};

/**
 * About Page
 * 
 * Intent: Explain Axiom Group as an institutional, long-term technology
 * and AI holding company. Focus on mandate, principles, and time horizon.
 * No founder story, timeline, or achievements.
 */
export default function About() {
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
              About Axiom Group
            </Heading>
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
                Mandate
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
                A parent technology and AI holding company building and supporting
                enduring systems. Foundational infrastructure—technical, organizational,
                and strategic—enabling long-term value creation.
              </Text>
            </div>

            <div
              style={{
                marginTop: '1rem',
              }}
            >
              <Text variant="body" color="secondary">
                Multi-year time horizon. Systems that improve over time. Patterns,
                standards, and principles that compound in value.
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
                Principles
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
                Core principles guiding all decisions: systems over features,
                architecture over implementation, long-term clarity over short-term
                optimization, coherence over speed.
              </Text>
            </div>

            <div
              style={{
                marginTop: '1rem',
              }}
            >
              <Text variant="body" color="secondary">
                Operational constraints, not aspirational statements. They determine
                what we build, how we build it, and what we choose not to build.
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
                Time Horizon
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
                Structured for permanence. Decisions with multi-year and multi-decade
                consequences in mind.
              </Text>
            </div>

            <div
              style={{
                marginTop: '1rem',
              }}
            >
              <Text variant="body" color="secondary">
                We resist optimizing for immediate outcomes when those optimizations
                compromise future capability. Systems that evolve, adapt, and improve
                over extended periods.
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

