import { NextRequest, NextResponse } from 'next/server';
import { isIntentId } from '@/lib/site';
import { saveInquiry } from '@/lib/inquiries';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const organization = String(formData.get('organization') || '').trim();
    const intent = String(formData.get('intent') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !message || !isIntentId(intent)) {
      return NextResponse.json(
        { error: 'Name, email, topic, and message are required' },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    await saveInquiry({
      name,
      email,
      organization,
      intent,
      message,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: 'Your message has been received.' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 },
    );
  }
}
