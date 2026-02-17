'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  hint?: string;
  leftAdornment?: React.ReactNode;
  rightAdornment?: React.ReactNode;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, label, error, hint, leftAdornment, rightAdornment, id, ...props },
  ref
) {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;

  return (
    <div className="space-y-1.5">
      {label ? (
        <label htmlFor={inputId} className="text-sm font-medium text-fg">
          {label}
        </label>
      ) : null}

      <div
        className={cn(
          'flex items-center gap-2 rounded-xl border bg-card px-3 transition',
          error ? 'border-danger/50' : 'border-border/70',
          'focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/15'
        )}
      >
        {leftAdornment ? <span className="text-muted">{leftAdornment}</span> : null}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'h-11 w-full bg-transparent text-sm text-fg placeholder:text-muted outline-none',
            className
          )}
          aria-invalid={Boolean(error)}
          {...props}
        />
        {rightAdornment ? <span className="text-muted">{rightAdornment}</span> : null}
      </div>

      {error ? <p className="text-sm text-danger">{error}</p> : null}
      {!error && hint ? <p className="text-sm text-muted">{hint}</p> : null}
    </div>
  );
});
