'use client';

import * as React from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';
import { Button } from './Button';

export type DialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
};

export function Dialog({ open, onOpenChange, title, description, children, footer }: DialogProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onOpenChange(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onOpenChange]);

  if (!mounted || !open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <button
        type="button"
        className="absolute inset-0 bg-fg/30 backdrop-blur-sm"
        aria-label="Close dialog"
        onClick={() => onOpenChange(false)}
      />
      <div className="relative mx-auto flex min-h-full max-w-lg items-center justify-center px-4 py-6 sm:py-10">
        <div className={cn('w-full rounded-3xl border border-border/70 bg-card shadow-lift flex flex-col max-h-[90vh] min-h-0')}>
          <div className="flex items-start justify-between gap-4 border-b border-border/60 p-5 shrink-0">
            <div>
              <h2 className="font-display text-xl font-semibold text-fg">{title}</h2>
              {description ? <p className="mt-1 text-sm text-muted">{description}</p> : null}
            </div>
            <Button variant="ghost" size="sm" onClick={() => onOpenChange(false)}>
              Close
            </Button>
          </div>
          <div className="p-5 overflow-y-auto overflow-x-hidden flex-1 min-h-0 overscroll-contain">
            {children}
          </div>
          {footer ? <div className="border-t border-border/60 p-5 shrink-0">{footer}</div> : null}
        </div>
      </div>
    </div>,
    document.body
  );
}
