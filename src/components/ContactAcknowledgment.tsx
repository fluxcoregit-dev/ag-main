'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Heading, Text } from './primitives';
import { contactEmail } from '@/lib/site';

export function ContactAcknowledgment() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = titleRef.current?.querySelector('h1');
    if (heading) {
      heading.setAttribute('tabIndex', '-1');
      heading.focus();
    }
  }, []);

  return (
    <div ref={titleRef} className="prose-block" style={{ maxWidth: '40rem' }}>
      <p className="eyebrow">Contact</p>
      <Heading level="h1">Message received</Heading>
      <Text variant="body" color="secondary">
        We have your note. If a reply does not arrive, write directly to{' '}
        <a href={`mailto:${contactEmail}`} className="link-base">
          {contactEmail}
        </a>
        .
      </Text>
      <div className="actions">
        <Link href="/" className="button-base">
          Back to the homepage
        </Link>
      </div>
    </div>
  );
}
