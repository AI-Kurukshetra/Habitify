'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'primary' | 'accent' | 'success' | 'danger';

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium',
        variant === 'default' && 'bg-bg text-muted border border-border/70',
        variant === 'primary' && 'bg-primary/10 text-primary border border-primary/20',
        variant === 'accent' && 'bg-accent/10 text-accent border border-accent/20',
        variant === 'success' && 'bg-success/10 text-success border border-success/20',
        variant === 'danger' && 'bg-danger/10 text-danger border border-danger/20',
        className
      )}
      {...props}
    />
  );
}

