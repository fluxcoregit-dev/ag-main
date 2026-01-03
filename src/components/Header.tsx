'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { Container, Text } from './primitives';
import { tokens } from '@/lib/tokens';

/**
 * Header Component
 * 
 * Intent: Institutional boundary with authoritative navigation hierarchy.
 * Primary links (About, Ecosystem) appear neutral and authoritative.
 * Secondary links (Contact) appear slightly muted and subordinate.
 * Current page is subtly acknowledged through tone, not decoration.
 * Uses spacing for vertical presence, not height.
 */
export function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
    // No marginBottom needed - Hero section handles its own spacing
  }, [pathname]);

  // Use pathname only after mount to avoid hydration mismatch
  const currentPath = mounted ? pathname : null;

  return (
    <header
      ref={headerRef}
      style={{
        backgroundColor: 'transparent',
        paddingTop: tokens.spacing.section.sm,
        paddingBottom: tokens.spacing.section.sm,
        marginBottom: 0, // Updated via useEffect after mount to avoid hydration mismatch
      }}
    >
      <Container>
        <nav
          aria-label="Main navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <Link
              href="/"
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
              aria-label="Axiom Group home"
            >
              <Text
                as="span"
                variant="body"
                color="primary"
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                }}
              >
                Axiom Group
              </Text>
            </Link>
          </div>
          <div
            style={{
              display: 'flex',
              gap: tokens.spacing.component.xl,
              alignItems: 'center',
            }}
          >
            <Link 
              href="/about" 
              className="link-base" 
              aria-label="View about"
              style={{ textDecoration: 'none' }}
              onMouseEnter={(e) => {
                if (currentPath !== '/about') {
                  const textElement = e.currentTarget.querySelector('span');
                  if (textElement) {
                    textElement.style.color = tokens.textColors.primary;
                  }
                }
              }}
              onMouseLeave={(e) => {
                if (currentPath !== '/about') {
                  const textElement = e.currentTarget.querySelector('span');
                  if (textElement) {
                    textElement.style.color = tokens.textColors.secondary;
                  }
                }
              }}
            >
              <Text 
                as="span" 
                variant="body" 
                style={{
                  color: currentPath === '/about' 
                    ? tokens.textColors.primary 
                    : tokens.textColors.secondary,
                  transition: 'color var(--motion-duration-standard) var(--motion-easing-standard)',
                }}
              >
                About
              </Text>
            </Link>
            <Link 
              href="/ecosystem" 
              className="link-base" 
              aria-label="View ecosystem"
              style={{ textDecoration: 'none' }}
              onMouseEnter={(e) => {
                if (currentPath !== '/ecosystem') {
                  const textElement = e.currentTarget.querySelector('span');
                  if (textElement) {
                    textElement.style.color = tokens.textColors.primary;
                  }
                }
              }}
              onMouseLeave={(e) => {
                if (currentPath !== '/ecosystem') {
                  const textElement = e.currentTarget.querySelector('span');
                  if (textElement) {
                    textElement.style.color = tokens.textColors.secondary;
                  }
                }
              }}
            >
              <Text 
                as="span" 
                variant="body" 
                style={{
                  color: currentPath === '/ecosystem' 
                    ? tokens.textColors.primary 
                    : tokens.textColors.secondary,
                  transition: 'color var(--motion-duration-standard) var(--motion-easing-standard)',
                }}
              >
                Ecosystem
              </Text>
            </Link>
            <Link 
              href="/contact" 
              className="link-base" 
              aria-label="View contact"
              style={{ textDecoration: 'none' }}
              onMouseEnter={(e) => {
                if (currentPath !== '/contact') {
                  const textElement = e.currentTarget.querySelector('span');
                  if (textElement) {
                    textElement.style.color = tokens.textColors.secondary;
                  }
                }
              }}
              onMouseLeave={(e) => {
                if (currentPath !== '/contact') {
                  const textElement = e.currentTarget.querySelector('span');
                  if (textElement) {
                    textElement.style.color = tokens.textColors.muted;
                  }
                }
              }}
            >
              <Text 
                as="span" 
                variant="body" 
                style={{
                  color: currentPath === '/contact' 
                    ? tokens.textColors.secondary 
                    : tokens.textColors.muted,
                  transition: 'color var(--motion-duration-standard) var(--motion-easing-standard)',
                }}
              >
                Contact
              </Text>
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}

