'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { NavigationMenu, type NavItem } from '@/components/layout/NavigationMenu';
import { Avatar } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import { DashboardIcon, ListIcon, SettingsIcon } from '@/components/ui/icons';

export type DashboardShellProps = {
  userLabel: string;
  children: React.ReactNode;
};

const defaultNav: NavItem[] = [
  { href: '/dashboard', label: 'Overview', icon: <DashboardIcon size={18} /> },
  { href: '/crud-test', label: 'Items', icon: <ListIcon size={18} /> },
  { href: '/dashboard/settings', label: 'Settings', icon: <SettingsIcon size={18} /> },
];

export function DashboardShell({ userLabel, children }: DashboardShellProps) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="min-h-screen app-bg">
      <div className="mx-auto max-w-[1200px] px-3 sm:px-4 lg:px-6 py-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[280px_1fr]">
          <div className="lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)]">
            <div className="hidden lg:block card h-full p-4">
              <div className="flex items-center justify-between gap-3 px-2 pb-4">
                <Link href="/dashboard" className="font-display text-lg font-semibold tracking-tight">
                  Habitify UI
                </Link>
                <Avatar fallback={userLabel} size={36} />
              </div>
              <NavigationMenu items={defaultNav} />
              <div className="mt-6 rounded-2xl bg-bg p-3">
                <div className="text-xs text-muted">Signed in</div>
                <div className="mt-1 truncate text-sm font-medium text-fg">{userLabel}</div>
              </div>
            </div>

            <div className="lg:hidden">
              <div className="card px-4 py-3 flex items-center justify-between gap-3">
                <Link href="/dashboard" className="font-display text-base font-semibold tracking-tight">
                  Habitify UI
                </Link>
                <div className="flex items-center gap-2">
                  <Avatar fallback={userLabel} size={34} />
                  <Button variant="secondary" size="sm" onClick={() => setOpen(true)}>
                    Menu
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <main className={cn('card p-4 sm:p-6 lg:p-8 min-h-[70vh]')}>{children}</main>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-fg/30 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div className="relative m-4 max-w-sm card p-4">
            <div className="flex items-center justify-between gap-3 px-1 pb-4">
              <div className="flex items-center gap-3">
                <Avatar fallback={userLabel} size={38} />
                <div className="min-w-0">
                  <div className="text-xs text-muted">Signed in</div>
                  <div className="truncate text-sm font-semibold text-fg">{userLabel}</div>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
                Close
              </Button>
            </div>
            <NavigationMenu items={defaultNav} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
