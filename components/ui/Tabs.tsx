'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export type TabItem = { id: string; label: string; badge?: number };

export type TabsProps = {
  items: TabItem[];
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
};

export function Tabs({ items, value, onValueChange, className }: TabsProps) {
  return (
    <div className={cn('inline-flex items-center rounded-2xl border border-border/70 bg-card p-1', className)}>
      {items.map((item) => {
        const active = item.id === value;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onValueChange(item.id)}
            className={cn(
              'relative inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition',
              active ? 'bg-bg text-fg shadow-soft' : 'text-muted hover:text-fg'
            )}
            aria-current={active ? 'page' : undefined}
          >
            <span>{item.label}</span>
            {typeof item.badge === 'number' ? (
              <span className={cn('rounded-full px-2 py-0.5 text-xs', active ? 'bg-primary/10 text-primary' : 'bg-bg text-muted')}>
                {item.badge}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

