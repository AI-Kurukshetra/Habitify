import { Skeleton } from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <div className="min-h-screen app-bg">
      <div className="mx-auto max-w-[1200px] px-4 py-10">
        <div className="card p-6 sm:p-8">
          <Skeleton className="h-8 w-1/2 rounded-2xl" />
          <Skeleton className="mt-3 h-5 w-2/3 rounded-2xl" />
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-3xl border border-border/70 bg-bg p-5">
                <Skeleton className="h-5 w-1/3 rounded-xl" />
                <Skeleton className="mt-3 h-4 w-full rounded-xl" />
                <Skeleton className="mt-2 h-4 w-5/6 rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

