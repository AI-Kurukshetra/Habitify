import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export function buttonClassName({
  variant,
  size,
  className,
}: {
  variant: ButtonVariant;
  size: ButtonSize;
  className?: string;
}) {
  return cn(
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40',
    'disabled:opacity-60 disabled:cursor-not-allowed',
    size === 'sm' && 'h-9 px-3 text-sm',
    size === 'md' && 'h-11 px-4 text-sm',
    size === 'lg' && 'h-12 px-5 text-base',
    variant === 'primary' &&
      'bg-primary text-primary-fg shadow-soft hover:shadow-lift hover:bg-primary/90',
    variant === 'secondary' &&
      'bg-card text-fg border border-border/70 hover:border-border hover:bg-bg',
    variant === 'ghost' && 'bg-transparent text-fg hover:bg-bg',
    variant === 'danger' &&
      'bg-danger text-danger-fg shadow-soft hover:shadow-lift hover:bg-danger/90',
    className
  );
}

