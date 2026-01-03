import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { Section, Container, Heading, Text } from '@/components/primitives';
import { ContactAcknowledgment } from '@/components/ContactAcknowledgment';
import { tokens } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'Contact | Axiom Group',
  description: 'Contact information for inquiries related to Axiom Group.',
  alternates: {
    canonical: '/contact',
  },
};

/**
 * Contact API Server Action
 * 
 * Intent: Handle form submission server-side and redirect with success state.
 */
async function submitContactForm(formData: FormData) {
  'use server';
  
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Basic validation
  if (!name || !email || !message) {
    redirect('/contact?error=missing_fields');
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email as string)) {
    redirect('/contact?error=invalid_email');
  }

  // TODO: Implement email sending or storage logic here
  
  redirect('/contact?success=true');
}

/**
 * Contact Page
 * 
 * Intent: Provide a serious, low-friction way to initiate contact.
 * Avoid volume-driven or sales-oriented language.
 */
export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ success?: string; error?: string }>;
}) {
  const params = await searchParams;
  const showSuccess = params?.success === 'true';
  const showError = params?.error;

  return (
    <Section spacing="md" layer="section">
      <Container>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: tokens.spacing.section.lg,
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {showSuccess ? (
            <ContactAcknowledgment />
          ) : (
            <>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: tokens.spacing.component.lg,
                  width: '100%',
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

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: tokens.spacing.component.lg,
                  width: '100%',
                }}
              >
                {showError && (
                  <div
                    style={{
                      marginBottom: tokens.spacing.component.lg,
                    }}
                  >
                    <Text variant="body" color="primary">
                      {showError === 'missing_fields' 
                        ? 'Please fill in all required fields.'
                        : showError === 'invalid_email'
                        ? 'Please provide a valid email address.'
                        : 'An error occurred. Please try again.'}
                    </Text>
                  </div>
                )}

                <form
                  action={submitContactForm}
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
                      href="mailto:contact@axiomgroup.services"
                      className="link-base"
                      style={{ color: tokens.textColors.secondary }}
                    >
                      contact@axiomgroup.services
                    </a>
                  </Text>
                </div>
              </div>
            </>
          )}
        </div>
      </Container>
    </Section>
  );
}

