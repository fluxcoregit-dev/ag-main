import { Hero } from '@/components/sections/Hero';
import { Role } from '@/components/sections/Role';
import { Ecosystem } from '@/components/sections/Ecosystem';
import { Intelligence } from '@/components/sections/Intelligence';
import { Process } from '@/components/sections/Process';
import { LongTerm } from '@/components/sections/LongTerm';
import { Section, Container, Heading } from '@/components/primitives';
import { tokens } from '@/lib/tokens';

export default function Home() {
  return (
    <>
      <Hero />
      <Section spacing="xl" layer="base">
        <Container>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              maxWidth: '800px',
            }}
          >
            <Heading level="h2">
              Axiom Group builds systems intended to outlast their creators.
            </Heading>
          </div>
        </Container>
      </Section>
      <div style={{ height: tokens.spacing.section.lg }} aria-hidden="true" />
      <Role />
      <div style={{ height: tokens.spacing.section.lg }} aria-hidden="true" />
      <Ecosystem />
      <div style={{ height: tokens.spacing.section.lg }} aria-hidden="true" />
      <Intelligence />
      <div style={{ height: tokens.spacing.section.lg }} aria-hidden="true" />
      <Process />
      <div style={{ height: tokens.spacing.section.lg }} aria-hidden="true" />
      <LongTerm />
    </>
  );
}
