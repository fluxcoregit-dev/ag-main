import type { Metadata } from 'next';
import { Section, Container, Heading, Text } from '@/components/primitives';

export const metadata: Metadata = {
  title: 'Visibility Is a Tax on Thinking | Axiom Group',
  description: 'Visibility Is a Tax on Thinking',
  alternates: {
    canonical: '/writing/visibility-is-a-tax-on-thinking',
  },
};

export default function VisibilityIsATaxOnThinking() {
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
              Visibility Is a Tax on Thinking
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
              The modern instinct is to make everything visible.
            </Text>

            <Text variant="body" color="primary">
              Dashboards. Metrics. Roadmaps. Activity feeds. Status indicators. Progress bars. Every action exposed, every decision justified, every movement narrated. Visibility is framed as accountability. In practice, it often becomes something else: interference.
            </Text>

            <Text variant="body" color="primary">
              Not all work benefits from being observable. Some work degrades when watched.
            </Text>

            <Text variant="body" color="primary">
              Thinking—real thinking—requires slack. It needs the freedom to be temporarily incoherent, partially wrong, and directionless without immediately defending itself. Visibility collapses this space. The moment every intermediate step is exposed, thinking becomes performance.
            </Text>

            <Text variant="body" color="primary">
              Performance optimizes for legibility, not truth.
            </Text>

            <Text variant="body" color="primary">
              This is why many organizations appear busy but move slowly. They are not constrained by lack of talent or tools. They are constrained by constant self-explanation. Every idea must be presented before it is formed. Every decision must be justified before its consequences are understood. The system rewards motion that can be shown, not progress that must mature quietly.
            </Text>

            <Text variant="body" color="primary">
              Visibility also distorts incentives. What is easy to measure becomes important. What is hard to articulate becomes suspicious. Over time, people learn to choose work that survives exposure rather than work that matters. Subtle problems are ignored. Structural issues persist. Surface activity flourishes.
            </Text>

            <Text variant="body" color="primary">
              There is a difference between transparency and surveillance. Transparency clarifies outcomes and intent. Surveillance monitors process. One builds trust; the other erodes judgment.
            </Text>

            <Text variant="body" color="primary">
              High-quality systems separate these deliberately. They make outcomes visible and processes protected. They expose results, not raw cognition. They understand that premature exposure is a form of noise.
            </Text>

            <Text variant="body" color="primary">
              The same principle applies to products.
            </Text>

            <Text variant="body" color="primary">
              When systems broadcast everything they are doing, they overwhelm users. When they hide everything, they create anxiety. The balance is not found by adding more indicators, but by deciding what must remain silent.
            </Text>

            <Text variant="body" color="primary">
              Silence is not absence. It is compression.
            </Text>

            <Text variant="body" color="primary">
              A system that withholds internal churn feels stable even while changing. A system that announces every adjustment feels fragile even when correct. Users do not need to see the machinery; they need to trust that it exists.
            </Text>

            <Text variant="body" color="primary">
              This is why the most enduring systems often feel boring on the surface. They do not narrate themselves. They do not seek reassurance through constant signaling. They operate, quietly, and reveal themselves only when necessary.
            </Text>

            <Text variant="body" color="primary">
              Visibility should be earned, not default.
            </Text>

            <Text variant="body" color="primary">
              Every signal has a cost. Every notification fragments attention. Every exposed intermediate step invites misinterpretation. Systems that survive learn to protect their internal work from premature judgment.
            </Text>

            <Text variant="body" color="primary">
              In the long run, clarity comes from restraint, not exposure.
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

