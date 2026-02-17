'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
  hint?: string;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, label, error, hint, id, ...props },
  ref
) {
  const generatedId = React.useId();
  const textareaId = id ?? generatedId;

  return (
    <div className="space-y-1.5">
      {label ? (
        <label htmlFor={textareaId} className="text-sm font-medium text-fg">
          {label}
        </label>
      ) : null}

      <textarea
        ref={ref}
        id={textareaId}
        className={cn(
          'min-h-[110px] w-full rounded-xl border bg-card px-3 py-3 text-sm text-fg placeholder:text-muted outline-none transition',
          error ? 'border-danger/50' : 'border-border/70',
          'focus:border-primary/60 focus:ring-2 focus:ring-primary/15',
          className
        )}
        aria-invalid={Boolean(error)}
        {...props}
      />

      {error ? <p className="text-sm text-danger">{error}</p> : null}
      {!error && hint ? <p className="text-sm text-muted">{hint}</p> : null}
    </div>
  );
});
