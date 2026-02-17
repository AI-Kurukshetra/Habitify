import { cn } from '@/lib/utils';

export function HabitifyLogo({ className }: { className?: string }) {
  return (
    <div
      className={cn('flex h-10 w-10 items-center justify-center rounded-lg bg-[#2a67f4] text-white', className)}
      aria-hidden
    >
      <span className="font-display text-xl font-bold leading-none">h</span>
    </div>
  );
}
