'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export type ProgressProps = {
  value: number; // 0..100
  label?: string;
  className?: string;
};

export function Progress({ value, label, className }: ProgressProps) {
  const v = Number.isFinite(value) ? Math.min(100, Math.max(0, value)) : 0;
  return (
    <div className={cn('space-y-1.5', className)}>
      {label ? <div className="text-sm font-medium text-fg">{label}</div> : null}
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-border/60">
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-300"
          style={{ width: `${v}%` }}
          aria-hidden="true"
        />
      </div>
      <div className="text-xs text-muted">{v}%</div>
    </div>
  );
}

