import { NextRequest, NextResponse } from 'next/server';

/**
 * Contact API Route
 * 
 * Intent: Handle contact form submissions with minimal processing.
 * Returns appropriate responses without exposing internal details.
 */
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email as string)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // TODO: Implement email sending or storage logic here
    // For now, we'll just return a success response
    
    return NextResponse.json(
      { message: 'Your message has been received. We will respond as appropriate.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}

