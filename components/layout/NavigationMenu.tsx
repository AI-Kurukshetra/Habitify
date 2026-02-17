'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';

export type NavItem = {
  href: string;
  label: string;
  icon?: React.ReactNode;
  badgeCount?: number;
};

export function NavigationMenu({ items, className }: { items: NavItem[]; className?: string }) {
  const pathname = usePathname();

  return (
    <nav className={cn('space-y-1', className)} aria-label="Sidebar">
      {items.map((item) => {
        const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center justify-between gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition',
              active ? 'bg-bg text-fg shadow-soft' : 'text-muted hover:bg-bg hover:text-fg'
            )}
            aria-current={active ? 'page' : undefined}
          >
            <span className="flex items-center gap-2.5">
              {item.icon ? <span className="text-muted">{item.icon}</span> : null}
              {item.label}
            </span>
            {typeof item.badgeCount === 'number' ? (
              <Badge variant={active ? 'primary' : 'default'}>{item.badgeCount}</Badge>
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}

