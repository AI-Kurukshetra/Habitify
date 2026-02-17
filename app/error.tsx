'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] app-bg grid place-items-center p-6">
      <div className="card max-w-xl p-8">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-fg">Something went wrong</h1>
        <p className="mt-3 text-sm text-muted">{error.message || 'An unexpected error occurred.'}</p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Button onClick={reset}>Try again</Button>
          <Button variant="secondary" onClick={() => (window.location.href = '/')}>
            Go home
          </Button>
        </div>
      </div>
    </div>
  );
}
