'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export type SelectOption = { label: string; value: string; disabled?: boolean };

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
  hint?: string;
  options: SelectOption[];
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { className, label, error, hint, id, options, ...props },
  ref
) {
  const generatedId = React.useId();
  const selectId = id ?? generatedId;

  return (
    <div className="space-y-1.5">
      {label ? (
        <label htmlFor={selectId} className="text-sm font-medium text-fg">
          {label}
        </label>
      ) : null}

      <select
        ref={ref}
        id={selectId}
        className={cn(
          'h-11 w-full rounded-xl border bg-card px-3 text-sm text-fg outline-none transition',
          error ? 'border-danger/50' : 'border-border/70',
          'focus:border-primary/60 focus:ring-2 focus:ring-primary/15',
          className
        )}
        aria-invalid={Boolean(error)}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>

      {error ? <p className="text-sm text-danger">{error}</p> : null}
      {!error && hint ? <p className="text-sm text-muted">{hint}</p> : null}
    </div>
  );
});
