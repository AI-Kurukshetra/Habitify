'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export type SwitchProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
};

export function Switch({ checked, onCheckedChange, label, disabled }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onCheckedChange(!checked)}
      className={cn(
        'inline-flex items-center gap-3 rounded-xl border border-border/70 bg-card px-3 py-2 text-sm transition',
        'disabled:opacity-60 disabled:cursor-not-allowed hover:bg-bg',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25'
      )}
    >
      <span
        className={cn(
          'relative h-6 w-11 rounded-full transition',
          checked ? 'bg-primary' : 'bg-border'
        )}
        aria-hidden="true"
      >
        <span
          className={cn(
            'absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition',
            checked ? 'left-[22px]' : 'left-0.5'
          )}
        />
      </span>
      {label ? <span className="text-fg">{label}</span> : null}
    </button>
  );
}

