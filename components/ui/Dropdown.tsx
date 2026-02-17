'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export type DropdownItem = {
  label: string;
  value: string;
};

export function Dropdown({
  label,
  items,
  value,
  onChange,
}: {
  label: string;
  items: DropdownItem[];
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const active = items.find((item) => item.value === value) ?? items[0];

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card px-3 py-2 text-sm font-medium text-fg shadow-soft hover:bg-bg"
      >
        {label}: <span className="text-muted">{active?.label}</span>
        <span aria-hidden="true">▾</span>
      </button>
      {open ? (
        <div className="absolute right-0 top-full z-20 mt-2 w-56 rounded-2xl border border-border/70 bg-card p-1 shadow-lift">
          {items.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => {
                onChange(item.value);
                setOpen(false);
              }}
              className={cn(
                'w-full rounded-xl px-3 py-2 text-left text-sm',
                item.value === value ? 'bg-bg text-fg' : 'text-muted hover:bg-bg hover:text-fg'
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

