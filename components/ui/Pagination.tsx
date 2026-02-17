import { cn } from '@/lib/utils';

export function Pagination({
  current,
  total,
  onPageChange,
}: {
  current: number;
  total: number;
  onPageChange: (page: number) => void;
}) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="flex flex-wrap items-center gap-2">
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={cn(
            'h-9 w-9 rounded-full border border-border/70 text-sm font-medium',
            page === current ? 'bg-primary text-primary-fg' : 'bg-card text-fg hover:bg-bg'
          )}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

