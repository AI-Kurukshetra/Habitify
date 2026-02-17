'use client';

import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from './Button';

export type CarouselImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export function Carousel({ images, className }: { images: CarouselImage[]; className?: string }) {
  const [index, setIndex] = React.useState(0);
  const count = images.length;

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + count) % count);
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % count);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [count]);

  if (!images.length) return null;

  const active = images[index]!;

  return (
    <div className={cn('card overflow-hidden', className)}>
      <div className="relative aspect-[16/9] w-full bg-bg">
        <Image
          src={active.src}
          alt={active.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 900px"
          priority={index === 0}
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-3">
          <Button variant="secondary" size="sm" onClick={() => setIndex((i) => (i - 1 + count) % count)}>
            Prev
          </Button>
          <div className="flex items-center gap-1.5 rounded-full bg-card/80 px-3 py-2 backdrop-blur">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={cn('h-2 w-2 rounded-full transition', i === index ? 'bg-primary' : 'bg-border')}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
              />
            ))}
          </div>
          <Button variant="secondary" size="sm" onClick={() => setIndex((i) => (i + 1) % count)}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

