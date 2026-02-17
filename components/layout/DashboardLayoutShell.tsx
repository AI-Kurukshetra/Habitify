'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { cn } from '@/lib/utils';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';
import { MenuIcon } from '@/components/ui/icons';

export type DashboardLayoutShellProps = {
  userLabel: string;
  children: React.ReactNode;
};

export function DashboardLayoutShell({ userLabel, children }: DashboardLayoutShellProps) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    <div className="flex min-h-screen bg-[#F7F8FA]">
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

      {/* Main content */}
      <div className="flex min-h-screen flex-1 flex-col min-w-0">
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
          <span className="truncate text-lg font-semibold text-[#111827]">All Habits</span>
        </header>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
