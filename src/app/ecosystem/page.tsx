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
    <Section spacing="md" layer="section">
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
                Axiom Group's ecosystem is built on five foundational domains, each
                representing a long-term commitment to systemic excellence rather than
                short-term execution. These pillars are enduring capability areas that
                support all ventures within the portfolio.
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
            <div style={{ marginBottom: '3rem' }}>
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
                We establish the technical foundations and architectural patterns that
                enable scalable, maintainable product development across the ecosystem.
                Our focus is on systems that outlast individual implementations and
                provide a stable base for continuous evolution.
              </Text>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginTop: '2.5rem',
              }}
            >
              <Text variant="body" color="secondary">
                This domain encompasses platform architecture, development standards,
                code quality frameworks, and the technical infrastructure that allows
                multiple products to share common capabilities. We prioritize patterns
                that reduce complexity over time rather than patterns that optimize
                for initial speed of delivery.
              </Text>

              <Text variant="body" color="secondary">
                The engineering work at Axiom Group is not about building features
                but about establishing the technical systems that make feature
                development faster, more reliable, and more coherent across the
                entire portfolio.
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
                We develop the frameworks and methodologies for building intelligent
                systems that learn, adapt, and operate autonomously. This domain
                encompasses both the technical infrastructure and the principles for
                responsible AI development.
              </Text>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginTop: '2.5rem',
              }}
            >
              <Text variant="body" color="secondary">
                Intelligence at Axiom Group is treated as infrastructure, embedded
                within systems rather than added as a feature. We build the foundational
                capabilities that allow AI to compound in value over time, creating
                systems that become more capable through use rather than requiring
                constant manual intervention.
              </Text>

              <Text variant="body" color="secondary">
                Our approach to AI emphasizes architectural thinking over model
                optimization, long-term capability building over short-term performance
                gains, and systemic integration over isolated implementations.
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
                We create the visual and interaction standards that ensure coherence
                across all touchpoints. This includes design systems, brand guidelines,
                and the architectural thinking that makes consistent expression possible
                at scale.
              </Text>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginTop: '2.5rem',
              }}
            >
              <Text variant="body" color="secondary">
                Design at Axiom Group is not about aesthetics but about establishing
                the patterns and principles that allow multiple products and brands
                to operate with visual and interactional coherence. We build the
                infrastructure of expression that makes independent design decisions
                possible while maintaining overall consistency.
              </Text>

              <Text variant="body" color="secondary">
                This domain ensures that every visual and interaction decision
                contributes to a larger system of expression, creating a coherent
                experience across the entire ecosystem without requiring centralized
                control over every design choice.
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
                We build the measurement and optimization systems that enable
                data-driven decision-making without compromising user experience or
                long-term value. The focus is on infrastructure that supports
                sustainable growth.
              </Text>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginTop: '2.5rem',
              }}
            >
              <Text variant="body" color="secondary">
                Analytics at Axiom Group is about establishing the measurement
                frameworks and data infrastructure that allow ventures to understand
                their systems and make informed decisions. We prioritize measurement
                that supports long-term understanding over metrics that optimize for
                short-term outcomes.
              </Text>

              <Text variant="body" color="secondary">
                This domain ensures that growth is built on solid foundations rather
                than temporary optimizations, creating systems that can scale
                sustainably while maintaining the quality and coherence that define
                the ecosystem.
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
                We establish the security standards, reliability patterns, and
                compliance frameworks that protect both the ecosystem and its users.
                This domain ensures that foundational concerns are addressed
                systematically, not reactively.
              </Text>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginTop: '2.5rem',
              }}
            >
              <Text variant="body" color="secondary">
                Security and reliability at Axiom Group are not afterthoughts but
                foundational concerns built into every system from the start. We
                establish the patterns and standards that make secure, reliable
                systems the default rather than the exception.
              </Text>

              <Text variant="body" color="secondary">
                This domain ensures that the ecosystem can operate with confidence,
                knowing that security, reliability, and compliance are addressed
                systematically rather than being bolted on after the fact. We build
                the infrastructure of trust that enables long-term operation.
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

