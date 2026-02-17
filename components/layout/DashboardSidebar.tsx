'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import {
  ChevronDownIcon,
  SunIcon,
  MoonIcon,
  FolderOpenIcon,
  PlusIcon,
  InfinityIcon,
  SettingsIcon,
  CreditCardIcon,
  LinkIcon,
  ListIcon,
  UserIcon,
  LogOutIcon,
  RunIcon,
  WrenchIcon,
} from '@/components/ui/icons';

const SIDEBAR_BG = '#F7F8FA';
const ACTIVE_BG = '#2a67f4';

type SidebarSection = {
  id: string;
  label: string;
  items: { href: string; label: string; icon: React.ReactNode; badge?: string }[];
};

const timeOfDayItems = [
  { href: '/dashboard?filter=snacks', label: 'Snacks Time', icon: <SunIcon size={16} /> },
  { href: '/dashboard?filter=morning', label: 'Morning', icon: <SunIcon size={16} /> },
  { href: '/dashboard?filter=afternoon', label: 'Afternoon', icon: <SunIcon size={16} /> },
  { href: '/dashboard?filter=evening', label: 'Evening', icon: <MoonIcon size={16} />, badge: '• now' },
];

const areasItems = [
  { href: '/dashboard?area=todo', label: 'todo list', icon: <FolderOpenIcon size={16} /> },
  { href: '/dashboard?new=area', label: '+ New Area', icon: <PlusIcon size={16} /> },
];

const preferencesItems = [
  { href: '/dashboard/habits', label: 'Habits', icon: <InfinityIcon size={16} /> },
  { href: '/dashboard/off-mode', label: 'Off Mode', icon: <span className="text-base">⏻</span> },
  { href: '/dashboard/payment', label: 'Payment', icon: <CreditCardIcon size={16} /> },
  { href: '/dashboard/settings', label: 'App Settings', icon: <SettingsIcon size={16} /> },
  { href: '/dashboard/resources', label: 'Resources', icon: <LinkIcon size={16} /> },
];

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
        <ChevronDownIcon
          size={14}
          className={cn('shrink-0 transition-transform', !open && '-rotate-90')}
        />
      </button>
      {open ? (
        <nav className="mt-1 space-y-0.5" aria-label={title}>
          {children}
        </nav>
      ) : null}
    </div>
  );
}

function SidebarLink({
  href,
  label,
  icon,
  badge,
  active,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  badge?: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition',
        active
          ? 'bg-[#2a67f4] text-white'
          : 'text-[#374151] hover:bg-[#E5E7EB] hover:text-[#111827]'
      )}
      onClick={() => typeof window !== 'undefined' && (window as any).__closeSidebar?.()}
    >
      <span className={cn('shrink-0', !active && 'text-[#6B7280]')}>{icon}</span>
      <span className="min-w-0 truncate">{label}</span>
      {badge ? (
        <span className="ml-auto shrink-0 text-xs font-medium text-[#2a67f4]">
          {badge}
        </span>
      ) : null}
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
  const basePath = pathname?.split('?')[0] ?? '';
  const [popoverOpen, setPopoverOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const isAllHabits = basePath === '/dashboard' || basePath === '/crud-test';
  const displayLabel = userLabel && userLabel !== 'Guest' ? userLabel : 'Guest';

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setPopoverOpen(false);
      }
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
      {/* Profile / Sign out popover at top */}
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
          <ChevronDownIcon
            size={16}
            className={cn('shrink-0 text-[#6B7280] transition-transform', popoverOpen && 'rotate-180')}
          />
        </button>
        {popoverOpen && (
          <div className="absolute left-2 right-2 top-full z-50 mt-1 rounded-lg border border-[#E5E7EB] bg-white py-1 shadow-lg">
            <Link
              href="/dashboard/settings"
              onClick={() => setPopoverOpen(false)}
              className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#374151] hover:bg-[#F3F4F6]"
            >
              <UserIcon size={16} className="text-[#6B7280]" />
              Profile
            </Link>
            <button
              type="button"
              onClick={() => {
                setPopoverOpen(false);
                onSignOut?.();
              }}
              className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-[#374151] hover:bg-[#F3F4F6]"
            >
              <LogOutIcon size={16} className="text-[#6B7280]" />
              Sign Out
            </button>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-4">
        {/* All Habits - main nav */}
        <div className="mb-4">
          <SidebarLink
            href="/dashboard"
            label="All Habits"
            icon={<FolderOpenIcon size={18} />}
            active={isAllHabits}
          />
        </div>

        <CollapsibleSection title="TIME OF DAY" defaultOpen={true}>
          {timeOfDayItems.map((item) => (
            <SidebarLink
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              badge={item.badge}
              active={false}
            />
          ))}
        </CollapsibleSection>

        <CollapsibleSection title="AREAS" defaultOpen={true}>
          {areasItems.map((item) => (
            <SidebarLink
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={false}
            />
          ))}
        </CollapsibleSection>

        <CollapsibleSection title="PREFERENCES" defaultOpen={true}>
          {preferencesItems.map((item) => (
            <SidebarLink
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={basePath === item.href}
            />
          ))}
        </CollapsibleSection>
      </div>

      <div className="border-t border-[#E5E7EB] p-3">
        <Link
          href="/dashboard"
          className="flex items-center justify-center gap-2 rounded-lg bg-[#2a67f4] px-3 py-2.5 text-sm font-medium text-white hover:bg-[#2360dd]"
          onClick={() => console.log('Add habit from sidebar')}
        >
          <PlusIcon size={18} />
          + Add habit
        </Link>
      </div>
    </aside>
  );
}
