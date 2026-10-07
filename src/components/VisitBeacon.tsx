'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function VisitBeacon() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || pathname.startsWith('/admin')) return;
    const body = JSON.stringify({ path: pathname, referrer: document.referrer });
    fetch('/api/visit', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body,
      keepalive: true,
    }).catch(() => {});
  }, [pathname]);

  return null;
}
