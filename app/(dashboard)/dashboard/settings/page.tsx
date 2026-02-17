'use client';

import { useMemo, useState } from 'react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Dialog } from '@/components/ui/Dialog';
import { Select } from '@/components/ui/Select';
import { Switch } from '@/components/ui/Switch';
import { Progress } from '@/components/ui/Progress';
import { Badge } from '@/components/ui/Badge';
import { UserIcon, CreditCardIcon, SettingsIcon, MoonIcon, SunIcon } from '@/components/ui/icons';
import { TimeOfDaySettings } from '@/components/settings/TimeOfDaySettings';
import { cn } from '@/lib/utils';

type SettingsSection = 'general' | 'off-mode' | 'time-of-day' | 'profile' | 'payment';

const APP_SECTIONS: { id: SettingsSection; label: string; icon: React.ComponentType<{ size?: number; className?: string }> }[] = [
  { id: 'general', label: 'General', icon: SettingsIcon },
  { id: 'off-mode', label: 'Off Mode', icon: MoonIcon },
  { id: 'time-of-day', label: 'Time of Day', icon: SunIcon },
];

const ACCOUNT_SECTIONS: { id: SettingsSection; label: string; icon: React.ComponentType<{ size?: number; className?: string }> }[] = [
  { id: 'profile', label: 'Profile', icon: UserIcon },
  { id: 'payment', label: 'Payment', icon: CreditCardIcon },
];

export default function SettingsPage() {
  const [section, setSection] = useState<SettingsSection>('time-of-day');
  const [compactMode, setCompactMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [weekStart, setWeekStart] = useState<'mon' | 'sun'>('mon');
  const [confirmOpen, setConfirmOpen] = useState(false);

  const completion = useMemo(() => {
    let v = 0;
    if (notifications) v += 50;
    if (compactMode) v += 25;
    if (weekStart === 'mon') v += 25;
    return v;
  }, [compactMode, notifications, weekStart]);

  return (
    <div className="space-y-6">
      <div>
        <Breadcrumb
          items={[
            { href: '/dashboard', label: 'Dashboard' },
            { label: 'Settings' },
          ]}
        />
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-fg">Settings</h1>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Left sub-nav */}
        <nav className="w-full lg:w-56 shrink-0 space-y-6">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Account setting</p>
            <ul className="space-y-0.5">
              {ACCOUNT_SECTIONS.map(({ id, label, icon: Icon }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => setSection(id)}
                    className={cn(
                      'flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition',
                      section === id ? 'bg-[#EFF6FF] text-[#2a67f4]' : 'text-[#374151] hover:bg-[#F3F4F6]'
                    )}
                  >
                    <Icon size={18} className="shrink-0 text-[#6B7280]" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">App setting</p>
            <ul className="space-y-0.5">
              {APP_SECTIONS.map(({ id, label, icon: Icon }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => setSection(id)}
                    className={cn(
                      'flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition',
                      section === id ? 'bg-[#EFF6FF] text-[#2a67f4]' : 'text-[#374151] hover:bg-[#F3F4F6]'
                    )}
                  >
                    <Icon size={18} className="shrink-0 text-[#6B7280]" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Right content */}
        <div className="min-w-0 flex-1">
          {section === 'time-of-day' && (
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
              <TimeOfDaySettings />
            </div>
          )}

          {section === 'general' && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-border/70 bg-bg p-5">
                <div className="text-sm font-medium text-fg">Preferences</div>
                <div className="mt-4 flex flex-col gap-3">
                  <Switch checked={compactMode} onCheckedChange={setCompactMode} label="Compact mode" />
                  <Switch checked={notifications} onCheckedChange={setNotifications} label="Notifications" />
                  <Select
                    label="Week starts on"
                    value={weekStart}
                    onChange={(e) => setWeekStart(e.target.value as 'mon' | 'sun')}
                    options={[
                      { label: 'Monday', value: 'mon' },
                      { label: 'Sunday', value: 'sun' },
                    ]}
                  />
                </div>
              </div>
              <div className="rounded-2xl border border-border/70 bg-bg p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-fg">Setup completeness</div>
                  <Badge variant={completion >= 75 ? 'success' : 'default'}>{completion}%</Badge>
                </div>
                <div className="mt-4">
                  <Progress value={completion} />
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Button variant="secondary" onClick={() => setConfirmOpen(true)}>
                    Reset demo state
                  </Button>
                  <Button onClick={() => alert('This is a demo action.')}>Save</Button>
                </div>
              </div>
            </div>
          )}

          {section === 'off-mode' && (
            <div className="rounded-2xl border border-border/70 bg-bg p-5">
              <div className="text-sm font-medium text-fg">Off Mode</div>
              <p className="mt-2 text-sm text-muted">Pause reminders and reduce notifications. Coming soon.</p>
            </div>
          )}

          {section === 'profile' && (
            <div className="rounded-2xl border border-border/70 bg-bg p-5">
              <div className="text-sm font-medium text-fg">Profile</div>
              <p className="mt-2 text-sm text-muted">Edit your profile and account details. Coming soon.</p>
            </div>
          )}

          {section === 'payment' && (
            <div className="rounded-2xl border border-border/70 bg-bg p-5">
              <div className="text-sm font-medium text-fg">Payment</div>
              <p className="mt-2 text-sm text-muted">Manage subscription and billing. Coming soon.</p>
            </div>
          )}
        </div>
      </div>

      <Dialog
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        title="Reset settings?"
        description="This only resets local UI state for this demo page."
        footer={
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
            <Button variant="secondary" onClick={() => setConfirmOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                setCompactMode(false);
                setNotifications(true);
                setWeekStart('mon');
                setConfirmOpen(false);
              }}
            >
              Reset
            </Button>
          </div>
        }
      >
        <div className="rounded-2xl border border-border/60 bg-bg p-4 text-sm text-muted">
          You can wire this page to Supabase user preferences later via server actions.
        </div>
      </Dialog>
    </div>
  );
}
