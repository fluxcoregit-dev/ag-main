import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { ContactAcknowledgment } from '@/components/ContactAcknowledgment';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { contactEmail, intents, isIntentId } from '@/lib/site';
import { saveInquiry } from '@/lib/inquiries';

export const metadata: Metadata = {
  title: 'Contact | Axiom Group',
  description:
    'Start a conversation with Axiom Group. Name the system, the constraint, and what a good year looks like.',
  alternates: {
    canonical: '/contact',
  },
};

async function submitContactForm(formData: FormData) {
  'use server';

  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const organization = String(formData.get('organization') || '').trim();
  const intent = String(formData.get('intent') || '').trim();
  const message = String(formData.get('message') || '').trim();

  if (!name || !email || !message || !isIntentId(intent)) {
    redirect('/contact?error=missing_fields');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    redirect(`/contact?error=invalid_email&intent=${intent}`);
  }

  try {
    await saveInquiry({
      name,
      email,
      organization,
      intent,
      message,
      createdAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Contact form error:', error);
    redirect(`/contact?error=delivery&intent=${intent}`);
  }

  redirect('/contact?success=true');
}

export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ success?: string; error?: string; intent?: string }>;
}) {
  const params = await searchParams;
  const showSuccess = params?.success === 'true';
  const showError = params?.error;
  const selectedIntent = isIntentId(params?.intent) ? params.intent : '';

  const errorMessage =
    showError === 'missing_fields'
      ? 'Name, email, a topic, and a message are required.'
      : showError === 'invalid_email'
        ? 'Use a valid email address so a reply can reach you.'
        : showError === 'delivery'
          ? `The form could not record the note. Email ${contactEmail} directly.`
          : showError
            ? 'Something went wrong. Email us directly.'
            : null;

  const fieldClass =
    'h-10 w-full rounded-md border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring';

  return (
    <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.75fr]">
      {showSuccess ? (
        <ContactAcknowledgment />
      ) : (
        <>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Contact</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight">Start a conversation</h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
              Tell us what you are trying to make last. A short note is enough: the system, the constraint, and what a good year looks like.
            </p>
            {errorMessage && <p className="mt-4 text-sm text-foreground">{errorMessage}</p>}
            <form action={submitContactForm} className="mt-8 space-y-4">
              <label className="block space-y-1.5 text-sm">
                <span className="font-medium">Name</span>
                <input className={fieldClass} type="text" name="name" required autoComplete="name" />
              </label>
              <label className="block space-y-1.5 text-sm">
                <span className="font-medium">Email</span>
                <input className={fieldClass} type="email" name="email" required autoComplete="email" />
              </label>
              <label className="block space-y-1.5 text-sm">
                <span className="font-medium">Organization</span>
                <input className={fieldClass} type="text" name="organization" autoComplete="organization" />
              </label>
              <label className="block space-y-1.5 text-sm">
                <span className="font-medium">What this is about</span>
                <select className={fieldClass} name="intent" required defaultValue={selectedIntent}>
                  <option value="" disabled>Select a topic</option>
                  {intents.map((intent) => (
                    <option key={intent.id} value={intent.id}>{intent.label}</option>
                  ))}
                </select>
              </label>
              <label className="block space-y-1.5 text-sm">
                <span className="font-medium">The system, the constraint, and the year you have in mind</span>
                <textarea className={`${fieldClass} h-auto py-2`} name="message" required rows={7} />
              </label>
              <Button type="submit">Send the note</Button>
            </form>
          </div>
          <aside className="space-y-4">
            <Card className="border-t-[3px] border-t-[#1c4d8f]">
              <CardHeader>
                <CardTitle className="text-base">What happens next</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal space-y-2 pl-4 text-sm leading-6 text-muted-foreground">
                  <li>We read the note and reply by email.</li>
                  <li>If the work fits, we schedule a working conversation.</li>
                  <li>You get a written problem frame before any proposal.</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="border-t-[3px] border-t-[#1c4d8f]">
              <CardHeader>
                <CardTitle className="text-base">Direct line</CardTitle>
              </CardHeader>
              <CardContent>
                <a className="text-sm underline underline-offset-4" href={`mailto:${contactEmail}`}>{contactEmail}</a>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">Use email if you would rather attach a document.</p>
              </CardContent>
            </Card>
          </aside>
        </>
      )}
    </div>
  );
}
