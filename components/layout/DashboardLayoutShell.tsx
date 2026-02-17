'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { DashboardProvider } from '@/contexts/DashboardContext';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';
import { NewAreaModal } from '@/components/dashboard/NewAreaModal';
import { MenuIcon } from '@/components/ui/icons';

const PAGE_TITLES: Record<string, string> = {
  '/dashboard': 'Journal / All Habits',
  '/dashboard/today': 'Today',
  '/dashboard/habits': 'Manage Habits',
  '/dashboard/areas': 'Areas',
  '/dashboard/analytics': 'Analytics',
  '/dashboard/settings': 'Settings',
};

function getMobileTitle(pathname: string): string {
  const base = pathname?.split('?')[0] ?? '';
  if (base.startsWith('/dashboard/area/')) return 'Journal';
  return PAGE_TITLES[base] ?? 'Dashboard';
}

export type DashboardLayoutShellProps = {
  userLabel: string;
  children: React.ReactNode;
};

export function DashboardLayoutShell({ userLabel, children }: DashboardLayoutShellProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mobileTitle = getMobileTitle(pathname);

  const handleSignOut = useCallback(async () => {
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  }, [router]);

  useEffect(() => {
    (window as any).__closeSidebar = () => setSidebarOpen(false);
    return () => {
      delete (window as any).__closeSidebar;
    };
  }, []);

  return (
    <DashboardProvider>
      <div className="flex min-h-screen bg-[#F7F8FA] overflow-x-hidden">
        {/* Mobile overlay */}
        {sidebarOpen ? (
          <div className="fixed inset-0 z-40 lg:hidden">
            <button
              type="button"
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              aria-label="Close sidebar"
              onClick={() => setSidebarOpen(false)}
            />
            <div className="absolute left-0 top-0 h-full w-[280px] max-w-[85vw] overflow-hidden bg-[#F7F8FA] shadow-xl">
              <DashboardSidebar userLabel={userLabel} onSignOut={handleSignOut} />
            </div>
          </div>
        ) : null}

        {/* Sidebar - hidden on mobile, shown via overlay */}
        <div className="hidden lg:block lg:w-[260px] lg:shrink-0">
          <DashboardSidebar userLabel={userLabel} onSignOut={handleSignOut} />
        </div>

        {/* Main content - no horizontal scroll */}
        <div className="flex min-h-screen flex-1 flex-col min-w-0 overflow-x-hidden">
          {/* Mobile header with menu */}
          <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-[#E5E7EB] bg-white px-4 py-3 lg:hidden">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#374151] hover:bg-[#F3F4F6]"
              aria-label="Open menu"
            >
              <MenuIcon size={22} />
            </button>
            <span className="truncate text-lg font-semibold text-[#111827]">{mobileTitle}</span>
          </header>

          <main className="flex-1 min-w-0 overflow-x-hidden">{children}</main>
        </div>
      </div>
      <NewAreaModal />
    </DashboardProvider>
  );
}
