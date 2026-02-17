'use client';

import Link from 'next/link';
import * as React from 'react';
import { cn } from '@/lib/utils';

export type BreadcrumbItem = {
  href?: string;
  label: string;
};

export function Breadcrumb({ items, className }: { items: BreadcrumbItem[]; className?: string }) {
  return (
    <nav className={cn('flex flex-wrap items-center gap-2 text-sm text-muted', className)} aria-label="Breadcrumb">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={`${item.label}-${idx}`}>
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-fg hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className={cn(isLast ? 'text-fg' : '')} aria-current={isLast ? 'page' : undefined}>
                {item.label}
              </span>
            )}
            {!isLast ? <span aria-hidden="true">/</span> : null}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

