'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import {
  ChevronDownIcon,
  CalendarIcon,
  BookOpenIcon,
  FolderOpenIcon,
  PlusIcon,
  InfinityIcon,
  SettingsIcon,
  BarChartIcon,
  UserIcon,
  LogOutIcon,
  SunIcon,
  MoonIcon,
} from '@/components/ui/icons';
import { useDashboard } from '@/contexts/DashboardContext';
import { habitMatchesTimeOfDay } from '@/lib/habitUtils';
import type { TimeOfDaySlot } from '@/services/timeOfDayService';

const SIDEBAR_BG = '#F7F8FA';

const DEFAULT_TIME_SLOTS: { key: string; label: string; icon: 'sun' | 'moon' }[] = [
  { key: 'morning', label: 'Morning', icon: 'sun' },
  { key: 'afternoon', label: 'Afternoon', icon: 'sun' },
  { key: 'evening', label: 'Evening', icon: 'moon' },
];

function slotFilterKey(slot: TimeOfDaySlot): string {
  return slot.name.toLowerCase().trim().replace(/\s+/g, '-');
}

function CollapsibleSection({
  title,
  defaultOpen = true,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[#E5E7EB] pb-2">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-2 py-2 text-left text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]"
      >
        <span>{title}</span>
        <ChevronDownIcon size={14} className={cn('shrink-0 transition-transform', !open && '-rotate-90')} />
      </button>
      {open ? <nav className="mt-1 space-y-0.5" aria-label={title}>{children}</nav> : null}
    </div>
  );
}

function SidebarLink({
  href,
  label,
  icon,
  active,
  badge,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
  badge?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition',
        active ? 'bg-[#2a67f4] text-white' : 'text-[#374151] hover:bg-[#E5E7EB] hover:text-[#111827]'
      )}
      onClick={() => typeof window !== 'undefined' && (window as any).__closeSidebar?.()}
    >
      <span className={cn('shrink-0', !active && 'text-[#6B7280]')}>{icon}</span>
      <span className="min-w-0 truncate">{label}</span>
      {badge ? <span className="ml-auto shrink-0 text-xs font-medium text-[#2a67f4]">{badge}</span> : null}
    </Link>
  );
}

export function DashboardSidebar({
  userLabel,
  onSignOut,
}: {
  userLabel: string;
  onSignOut?: () => void;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const basePath = pathname?.split('?')[0] ?? '';
  const timeFilter = searchParams?.get('filter') ?? null;
  const [popoverOpen, setPopoverOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const { areas, habits, timeOfDaySlots, setNewAreaModalOpen } = useDashboard();
  const activeHabits = habits.filter((h) => !h.isArchived);
  const timeSlots: TimeOfDaySlot[] = timeOfDaySlots.length > 0
    ? timeOfDaySlots
    : DEFAULT_TIME_SLOTS.map((s, i) => ({
        id: s.key,
        name: s.label,
        icon: s.icon,
        startTime: s.key === 'morning' ? '00:00' : s.key === 'afternoon' ? '12:00' : '18:00',
        endTime: s.key === 'morning' ? '12:00' : s.key === 'afternoon' ? '18:00' : '00:00',
        color: null,
        sortOrder: i,
      }));
  const getFilterKey = (slot: TimeOfDaySlot) => slotFilterKey(slot);
  const habitsByTime = (filterKey: string) =>
    activeHabits.filter((h) => habitMatchesTimeOfDay(h, filterKey));

  const displayLabel = userLabel && userLabel !== 'Guest' ? userLabel : 'Guest';
  const isAreaRoute = basePath.startsWith('/dashboard/area/');
  const activeAreaId = isAreaRoute ? basePath.replace('/dashboard/area/', '') : null;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) setPopoverOpen(false);
    };
    if (popoverOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [popoverOpen]);

  return (
    <aside
      className="flex h-full w-full flex-col border-r border-[#E5E7EB] bg-[#F7F8FA] lg:w-[260px] lg:shrink-0"
      style={{ backgroundColor: SIDEBAR_BG }}
    >
      {/* Profile */}
      <div className="relative border-b border-[#E5E7EB] px-4 py-3" ref={popoverRef}>
        <button
          type="button"
          onClick={() => setPopoverOpen((o) => !o)}
          className="flex w-full items-center gap-3 rounded-lg py-1 text-left hover:bg-[#E5E7EB]/50"
          aria-expanded={popoverOpen}
          aria-haspopup="true"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E5E7EB] text-[#6B7280]">
            <UserIcon size={18} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-[#111827]">{displayLabel}</p>
          </div>
          <ChevronDownIcon size={16} className={cn('shrink-0 text-[#6B7280] transition-transform', popoverOpen && 'rotate-180')} />
        </button>
        {popoverOpen && (
          <div className="absolute left-2 right-2 top-full z-50 mt-1 rounded-lg border border-[#E5E7EB] bg-white py-1 shadow-lg">
            <Link href="/dashboard/settings" onClick={() => setPopoverOpen(false)} className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#374151] hover:bg-[#F3F4F6]">
              <UserIcon size={16} className="text-[#6B7280]" /> Profile
            </Link>
            <button type="button" onClick={() => { setPopoverOpen(false); onSignOut?.(); }} className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-[#374151] hover:bg-[#F3F4F6]">
              <LogOutIcon size={16} className="text-[#6B7280]" /> Sign Out
            </button>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-4">
        {/* All Habits */}
        <div className="mb-3">
          <SidebarLink href="/dashboard" label="All Habits" icon={<BookOpenIcon size={18} />} active={basePath === '/dashboard' && !isAreaRoute} />
        </div>

        <div className="mb-3">
          <SidebarLink href="/dashboard/today" label="Today" icon={<CalendarIcon size={18} />} active={basePath === '/dashboard/today'} />
        </div>

        <CollapsibleSection title="TIME OF DAY" defaultOpen={true}>
          {timeSlots.map((slot) => {
            const key = getFilterKey(slot);
            const label = slot.name;
            const count = habitsByTime(key).length;
            const iconNode = slot.icon === 'moon' || (slot.icon && String(slot.icon).toLowerCase().includes('moon'))
              ? <MoonIcon size={16} />
              : <SunIcon size={16} />;
            return (
              <div key={slot.id} className="space-y-0.5">
                <SidebarLink
                  href={`/dashboard?filter=${encodeURIComponent(key)}`}
                  label={label}
                  icon={iconNode}
                  active={timeFilter === key}
                  badge={count > 0 ? String(count) : undefined}
                />
                {habitsByTime(key).length > 0 && (
                  <div className="ml-6 pl-1 space-y-0.5 border-l border-[#E5E7EB]">
                    {habitsByTime(key).map((habit) => (
                      <Link
                        key={habit.id}
                        href={`/dashboard?filter=${encodeURIComponent(key)}`}
                        onClick={() => typeof window !== 'undefined' && (window as any).__closeSidebar?.()}
                        className={cn(
                          'block truncate py-1.5 pr-2 text-xs transition',
                          timeFilter === key ? 'text-[#2a67f4] font-medium' : 'text-[#6B7280] hover:text-[#111827]'
                        )}
                        title={habit.name}
                      >
                        {habit.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </CollapsibleSection>

        <CollapsibleSection title="AREAS" defaultOpen={true}>
          {areas.map((area) => (
            <SidebarLink
              key={area.id}
              href={`/dashboard/area/${area.id}`}
              label={area.name}
              icon={<FolderOpenIcon size={16} />}
              active={activeAreaId === area.id}
            />
          ))}
          <button
            type="button"
            onClick={() => { setNewAreaModalOpen(true); typeof window !== 'undefined' && (window as any).__closeSidebar?.(); }}
            className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-[#374151] hover:bg-[#E5E7EB] hover:text-[#111827]"
          >
            <PlusIcon size={16} className="shrink-0 text-[#6B7280]" />
            <span className="min-w-0 truncate">+ New Area</span>
          </button>
        </CollapsibleSection>

        <CollapsibleSection title="PREFERENCES" defaultOpen={true}>
          <SidebarLink href="/dashboard/habits" label="Habits" icon={<InfinityIcon size={16} />} active={basePath === '/dashboard/habits'} />
          <SidebarLink href="/dashboard/areas" label="Areas" icon={<FolderOpenIcon size={16} />} active={basePath === '/dashboard/areas'} />
          <SidebarLink href="/dashboard/analytics" label="Analytics / Insights" icon={<BarChartIcon size={16} />} active={basePath === '/dashboard/analytics'} />
          <SidebarLink href="/dashboard/settings" label="App Settings" icon={<SettingsIcon size={16} />} active={basePath === '/dashboard/settings'} />
        </CollapsibleSection>
      </div>

      <div className="border-t border-[#E5E7EB] p-3">
        <Link
          href="/dashboard?new=habit"
          className="flex items-center justify-center gap-2 rounded-lg bg-[#2a67f4] px-3 py-2.5 text-sm font-medium text-white hover:bg-[#2360dd]"
          onClick={() => typeof window !== 'undefined' && (window as any).__closeSidebar?.()}
        >
          <PlusIcon size={18} />
          + New Habit
        </Link>
      </div>
    </aside>
  );
}
