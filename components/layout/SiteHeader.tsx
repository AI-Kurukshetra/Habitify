'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/download", label: "Download" },
  { href: "/team", label: "For Team" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-card/98 shadow-[0_2px_12px_rgba(0,0,0,0.06)]'
          : 'border-b border-transparent bg-card/80 backdrop-blur-sm'
      )}
    >
      <div className="mx-auto flex max-w-[1300px] items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex shrink-0 items-center font-display text-xl font-semibold text-fg" onClick={() => setOpen(false)}>
          <Image
            src="https://cdn.prod.website-files.com/5d3aa39f8474c472841a7dfc/647f58e339fa552032d729f6_Logo.png"
            alt="Habitify"
            width={140}
            height={32}
            className="h-8 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          <a
            href="https://x.com/UseHabitify"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-fg"
          >
            @UseHabitify
          </a>
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  active ? 'text-primary' : 'text-muted hover:text-fg'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/login"
            className="rounded-xl px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-fg"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-fg transition-shadow hover:shadow-[0_6px_16px_rgba(42,103,244,0.25)]"
          >
            Sign Up
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 bg-card md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="flex h-5 w-5 flex-col justify-center gap-1">
            <span className={cn('h-0.5 w-4 rounded-full bg-fg transition', open && 'translate-y-1.5 rotate-45')} />
            <span className={cn('h-0.5 w-4 rounded-full bg-fg transition', open && 'opacity-0')} />
            <span className={cn('h-0.5 w-4 rounded-full bg-fg transition', open && '-translate-y-1.5 -rotate-45')} />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-border/60 bg-card/95 px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            <a
              href="https://x.com/UseHabitify"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl px-3 py-2 text-sm font-medium text-muted hover:bg-bg hover:text-fg"
              onClick={() => setOpen(false)}
            >
              @UseHabitify
            </a>
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-xl px-3 py-2 text-sm font-medium',
                    active ? 'bg-primary/10 text-primary' : 'text-muted hover:bg-bg hover:text-fg'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-2 flex flex-col gap-1 border-t border-border/60 pt-3">
              <Link
                href="/login"
                className="rounded-xl px-3 py-2 text-sm font-medium text-muted hover:bg-bg hover:text-fg"
                onClick={() => setOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="rounded-xl bg-primary px-3 py-2 text-center text-sm font-medium text-primary-fg"
                onClick={() => setOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
