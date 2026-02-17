'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { buttonClassName, type ButtonSize, type ButtonVariant } from '@/components/ui/buttonStyles';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className,
    variant = 'primary',
    size = 'md',
    loading = false,
    leftIcon,
    rightIcon,
    disabled,
    children,
    ...props
  },
  ref
) {
  const isDisabled = disabled || loading;

  return (
    <button
      ref={ref}
      className={buttonClassName({ variant, size, className })}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <span
          className={cn(
            'h-4 w-4 rounded-full border-2 border-primary-fg/40 border-t-primary-fg animate-spin',
            variant !== 'primary' && 'border-fg/30 border-t-fg'
          )}
          aria-hidden="true"
        />
      ) : (
        leftIcon ?? null
      )}
      <span className="truncate">{children}</span>
      {!loading ? rightIcon ?? null : null}
    </button>
  );
});
