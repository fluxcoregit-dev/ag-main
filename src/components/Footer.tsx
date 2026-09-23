import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { contactEmail } from '@/lib/site';

const links = [
  { href: '/ecosystem', label: 'Practices' },
  { href: '/writing', label: 'Writing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/legal', label: 'Legal' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8">
      <div className="mx-auto w-full max-w-6xl px-6 pb-10">
        <Separator />
        <div className="flex flex-col gap-4 pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p className="flex items-center gap-2 text-[#122033]">
            <img src="/logo.svg" alt="" width={20} height={20} className="size-5 shrink-0" />
            <span>© {year} Axiom Group</span>
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </nav>
          <a href={`mailto:${contactEmail}`} className="hover:text-foreground">
            {contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
