'use client';

import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export type AvatarProps = {
  src?: string | null;
  alt?: string;
  fallback: string;
  size?: number;
  className?: string;
};

export function Avatar({ src, alt, fallback, size = 36, className }: AvatarProps) {
  const initials = fallback
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join('');

  return (
    <div
      className={cn(
        'relative grid place-items-center overflow-hidden rounded-full border border-border/60 bg-bg text-sm font-semibold text-fg',
        className
      )}
      style={{ width: size, height: size }}
      aria-label={alt ?? fallback}
    >
      {src ? (
        <Image src={src} alt={alt ?? fallback} fill className="object-cover" sizes={`${size}px`} />
      ) : (
        <span aria-hidden="true">{initials || 'U'}</span>
      )}
    </div>
  );
}

