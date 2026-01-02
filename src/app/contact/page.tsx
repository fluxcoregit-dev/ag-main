import type { Metadata } from 'next';
import { Section, Container, Heading, Text } from '@/components/primitives';
import { tokens } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'Contact | Axiom Group',
  description: 'Contact Axiom Group for inquiries about our ecosystem or potential collaboration.',
  alternates: {
    canonical: '/contact',
  },
};

/**
 * Contact Page
 * 
 * Intent: Provide a serious, low-friction way to initiate contact.
 * Avoid volume-driven or sales-oriented language.
 */
export default function Contact() {
  return (
    <>
      <Section spacing="xl" layer="base">
        <Container>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: tokens.spacing.component.lg,
              maxWidth: '800px',
            }}
          >
            <Heading level="h1">
              Contact
            </Heading>

            <Text variant="body" color="secondary">
              For inquiries about Axiom Group, our ecosystem, or potential
              collaboration, please reach out through the form below or via email.
            </Text>
          </div>
        </Container>
      </Section>

      <Section spacing="lg" layer="base">
        <Container>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: tokens.spacing.component.lg,
              maxWidth: '800px',
            }}
          >
            <form
              action="/api/contact"
              method="post"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: tokens.spacing.component.md,
                width: '100%',
                maxWidth: '600px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: tokens.spacing.component.sm,
                }}
              >
                <label
                  htmlFor="name"
                  style={{
                    color: tokens.textColors.secondary,
                    fontSize: '0.875rem',
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="button-base"
                  style={{
                    padding: tokens.spacing.component.sm,
                    border: `1px solid ${tokens.colorLayers.border}`,
                    backgroundColor: tokens.colorLayers.elevated,
                    color: tokens.textColors.primary,
                    fontFamily: 'var(--font-sans-serif)',
                    fontSize: '1rem',
                  }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: tokens.spacing.component.sm,
                }}
              >
                <label
                  htmlFor="email"
                  style={{
                    color: tokens.textColors.secondary,
                    fontSize: '0.875rem',
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="button-base"
                  style={{
                    padding: tokens.spacing.component.sm,
                    border: `1px solid ${tokens.colorLayers.border}`,
                    backgroundColor: tokens.colorLayers.elevated,
                    color: tokens.textColors.primary,
                    fontFamily: 'var(--font-sans-serif)',
                    fontSize: '1rem',
                  }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: tokens.spacing.component.sm,
                }}
              >
                <label
                  htmlFor="message"
                  style={{
                    color: tokens.textColors.secondary,
                    fontSize: '0.875rem',
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="button-base"
                  style={{
                    padding: tokens.spacing.component.sm,
                    border: `1px solid ${tokens.colorLayers.border}`,
                    backgroundColor: tokens.colorLayers.elevated,
                    color: tokens.textColors.primary,
                    fontFamily: 'var(--font-sans-serif)',
                    fontSize: '1rem',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                className="button-base"
                style={{
                  marginTop: tokens.spacing.component.sm,
                  alignSelf: 'flex-start',
                }}
              >
                Send Message
              </button>
            </form>

            <div
              style={{
                marginTop: tokens.spacing.component.lg,
                paddingTop: tokens.spacing.component.lg,
                borderTop: `1px solid ${tokens.colorLayers.border}`,
              }}
            >
              <Text variant="body" color="muted">
                Alternatively, you can reach us directly at{' '}
                <a
                  href="mailto:contact@axiomgroup.com"
                  className="link-base"
                  style={{ color: tokens.textColors.secondary }}
                >
                  contact@axiomgroup.com
                </a>
              </Text>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

