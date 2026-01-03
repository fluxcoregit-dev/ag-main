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
    <Section spacing="xl" layer="section">
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
          <div style={{ marginBottom: '6rem' }}>
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
            <div style={{ marginBottom: '3rem' }}>
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
                Axiom Group is a parent technology and AI holding company established
                to build and support enduring systems. Our mandate is to create the
                foundational infrastructure—technical, organizational, and strategic—that
                enables long-term value creation across a portfolio of ventures.
              </Text>
            </div>

            <div
              style={{
                marginTop: '2.5rem',
              }}
            >
              <Text variant="body" color="secondary">
                We operate with a multi-year time horizon, prioritizing systems that
                improve over time rather than solutions that require constant replacement.
                Our focus is on establishing patterns, standards, and principles that
                compound in value rather than delivering one-off implementations.
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
              marginTop: '5rem',
            }}
          >
            <div style={{ marginBottom: '3rem' }}>
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
                Axiom Group operates under a set of core principles that guide all
                decisions: systems over features, architecture over implementation,
                long-term clarity over short-term optimization, and coherence over speed.
              </Text>
            </div>

            <div
              style={{
                marginTop: '2.5rem',
              }}
            >
              <Text variant="body" color="secondary">
                These principles are not aspirational statements but operational
                constraints. They determine what we build, how we build it, and what
                we choose not to build. They ensure that every decision contributes
                to the long-term health and capability of the ecosystem.
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
              marginTop: '5rem',
            }}
          >
            <div style={{ marginBottom: '3rem' }}>
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
                Axiom Group is structured for permanence. We make decisions with
                multi-year and multi-decade consequences in mind. This time horizon
                influences everything from technical architecture to organizational
                design to strategic partnerships.
              </Text>
            </div>

            <div
              style={{
                marginTop: '2.5rem',
              }}
            >
              <Text variant="body" color="secondary">
                This long-term orientation means we resist the pressure to optimize
                for immediate outcomes when those optimizations compromise future
                capability. We build systems that can evolve, adapt, and improve
                over extended periods, recognizing that the most valuable work
                compounds slowly.
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

