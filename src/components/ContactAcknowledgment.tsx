'use client';

import { useEffect, useRef } from 'react';
import { Heading, Text } from './primitives';
import { tokens } from '@/lib/tokens';

/**
 * Contact Acknowledgment Component
 * 
 * Intent: Display quiet acknowledgment after form submission.
 * Handles focus management for accessibility.
 */
export function ContactAcknowledgment() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Move focus to acknowledgment title after mount
    // Only runs on client, avoiding hydration issues
    if (titleRef.current) {
      const heading = titleRef.current.querySelector('h1');
      if (heading) {
        heading.setAttribute('tabIndex', '-1');
        heading.focus();
      }
    }
  }, []);

  return (
    <div
      ref={titleRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 0,
        width: '100%',
      }}
    >
      <div style={{ marginBottom: '3rem' }}>
        <Heading level="h1">
          Message received
        </Heading>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
        }}
      >
        <Text variant="body" color="primary">
          Your message has been received. We will respond if and when appropriate.
        </Text>
      </div>

      <div style={{ marginTop: '2.5rem' }}>
        <Text variant="body" color="secondary">
          This inbox is reviewed, not monitored.
        </Text>
      </div>
    </div>
  );
}

