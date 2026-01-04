import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, Container, Heading, Text } from '@/components/primitives';

export const metadata: Metadata = {
  title: 'Systems Are the Product | Axiom Group',
  description: 'Systems Are the Product',
  alternates: {
    canonical: '/writing/systems-are-the-product',
  },
};

export default function SystemsAreTheProduct() {
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
              Systems Are the Product
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
              Most products are described as collections of features. This framing is convenient, but it is incorrect.
            </Text>

            <Text variant="body" color="primary">
              Features are surface expressions. They are temporary, replaceable, and often misleading indicators of value. What persists—what actually compounds—is the system beneath them.
            </Text>

            <Text variant="body" color="primary">
              A system is not what users see first. It is the structure that determines how decisions are made, how changes propagate, and how failure is absorbed. It defines what can be built easily, what requires friction, and what is impossible altogether. Over time, this structure matters more than any individual capability layered on top of it.
            </Text>

            <Text variant="body" color="primary">
              When organizations optimize for features, they implicitly treat structure as incidental. Architecture becomes reactive. Complexity accumulates without direction. Each new addition solves a local problem while quietly degrading the whole. The product appears to grow, but its ability to evolve shrinks.
            </Text>

            <Text variant="body" color="primary">
              Systems behave differently. A well-designed system constrains behavior before it enables it. It establishes boundaries, patterns, and defaults that shape every future decision. This restraint is not a limitation; it is what allows scale without collapse.
            </Text>

            <Text variant="body" color="primary">
              The most durable products are rarely those with the most features. They are the ones whose underlying systems make change predictable, extension safe, and failure survivable. Their value is not in what they do today, but in how they continue to function as conditions shift.
            </Text>

            <Text variant="body" color="primary">
              This distinction becomes clearer over time. Features age quickly. Interfaces change. Technologies rotate. But systems—if designed with intent—can outlast multiple generations of implementation. They allow replacement without reinvention.
            </Text>

            <Text variant="body" color="primary">
              Designing systems requires a different posture than designing features. It demands long time horizons, discomfort with immediacy, and a willingness to say no early. It requires thinking in terms of flows, constraints, and second-order effects rather than outputs and metrics.
            </Text>

            <Text variant="body" color="primary">
              It also requires accepting that much of the work will be invisible. Users do not praise coherence. Markets do not reward restraint in the short term. But absence of chaos is not accidental; it is engineered.
            </Text>

            <Text variant="body" color="primary">
              When systems are treated as the product, features become negotiable. When features are treated as the product, systems become liabilities.
            </Text>

            <Text variant="body" color="primary">
              The difference determines whether something can endure.
            </Text>
          </div>

          <div style={{ marginTop: '4rem', paddingTop: '2rem' }}>
            <Text variant="body" color="secondary">
              Published by Axiom Group.
            </Text>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <Link href="/writing/visibility-is-a-tax-on-thinking" style={{ textDecoration: 'none' }}>
              <Text variant="body" color="primary">
                Visibility Is a Tax on Thinking
              </Text>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

