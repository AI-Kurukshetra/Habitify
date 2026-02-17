'use client';

import { cn } from '@/lib/utils';

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn('animate-shimmer rounded-2xl bg-[linear-gradient(90deg,rgba(18,24,38,0.06),rgba(18,24,38,0.12),rgba(18,24,38,0.06))] bg-[length:200%_100%]', className)}
      aria-hidden="true"
    />
  );
}

