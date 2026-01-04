import Link from 'next/link';
import { Section, Container, Heading, Text } from '@/components/primitives';

export default function Writing() {
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
              Writing
            </Heading>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <Text variant="body" color="secondary">
              Notes on systems, design, intelligence, and long-term thinking.
            </Text>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <Link href="/writing/systems-are-the-product" style={{ textDecoration: 'none' }}>
              <Text variant="body" color="primary">
                Systems Are the Product
              </Text>
            </Link>

            <Link href="/writing/visibility-is-a-tax-on-thinking" style={{ textDecoration: 'none' }}>
              <Text variant="body" color="primary">
                Visibility Is a Tax on Thinking
              </Text>
            </Link>

            <Link href="/writing/long-term-systems" style={{ textDecoration: 'none' }}>
              <Text variant="body" color="primary">
                Why Long-Term Systems Outlast Fast Products
              </Text>
            </Link>

            <Link href="/writing/ai-as-infrastructure" style={{ textDecoration: 'none' }}>
              <Text variant="body" color="primary">
                AI Should Be Infrastructure, Not Spectacle
              </Text>
            </Link>

            <Link href="/writing/platform-decay" style={{ textDecoration: 'none' }}>
              <Text variant="body" color="primary">
                Most Digital Platforms Decay by Design
              </Text>
            </Link>

            <Link href="/writing/software-is-not-the-product" style={{ textDecoration: 'none' }}>
              <Text variant="body" color="primary">
                Software Is Rarely the Product
              </Text>
            </Link>

            <Link href="/writing/clarity-is-a-competitive-advantage" style={{ textDecoration: 'none' }}>
              <Text variant="body" color="primary">
                Clarity Is a Competitive Advantage
              </Text>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

