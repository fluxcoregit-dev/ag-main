'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const links = [
  { href: '/ecosystem', label: 'Practices' },
  { href: '/writing', label: 'Writing' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-[#d5deeb] bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[#0b1f3a]">
          <img src="/logo.svg" alt="" width={32} height={32} className="size-8 shrink-0" />
          Axiom Group
        </Link>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </Button>
        <nav
          id="site-nav"
          aria-label="Main navigation"
          className={cn(
            'absolute left-0 right-0 top-16 flex flex-col gap-1 border-b border-border bg-background p-4 md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0',
            open ? 'flex' : 'hidden md:flex',
          )}
        >
          {links.map((link) => {
            const current = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Button key={link.href} variant="ghost" size="sm" asChild>
                <Link href={link.href} aria-current={current ? 'page' : undefined} className={cn(current && 'bg-accent')}>
                  {link.label}
                </Link>
              </Button>
            );
          })}
          <Button size="sm" className="mt-2 md:mt-0 md:ml-2" asChild>
            <Link href="/contact">Start a conversation</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
