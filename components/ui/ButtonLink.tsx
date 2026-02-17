import Link, { type LinkProps } from 'next/link';
import * as React from 'react';
import { buttonClassName, type ButtonSize, type ButtonVariant } from '@/components/ui/buttonStyles';

export type ButtonLinkProps = LinkProps & {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className,
  children,
  leftIcon,
  rightIcon,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={buttonClassName({ variant, size, className })} {...props}>
      {leftIcon ?? null}
      <span className="truncate">{children}</span>
      {rightIcon ?? null}
    </Link>
  );
}
