'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export type AccordionItem = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export function Accordion({
  items,
  defaultOpenId,
  className,
}: {
  items: AccordionItem[];
  defaultOpenId?: string;
  className?: string;
}) {
  const [openId, setOpenId] = React.useState<string | null>(defaultOpenId ?? null);

  return (
    <div className={cn('divide-y divide-border/60 rounded-3xl border border-border/70 bg-card', className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `acc-panel-${item.id}`;
        const buttonId = `acc-btn-${item.id}`;
        return (
          <div key={item.id} className="p-4">
            <button
              id={buttonId}
              type="button"
              className="flex w-full items-center justify-between gap-3 text-left"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span className="font-medium text-fg">{item.title}</span>
              <span className={cn('text-muted transition', isOpen ? 'rotate-180' : 'rotate-0')} aria-hidden="true">
                ▼
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn('grid transition-[grid-template-rows] duration-300', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}
            >
              <div className="overflow-hidden pt-3 text-sm text-muted">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

