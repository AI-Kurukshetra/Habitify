'use client';

import { useMemo, useState } from 'react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Dialog } from '@/components/ui/Dialog';
import { Select } from '@/components/ui/Select';
import { Switch } from '@/components/ui/Switch';
import { Progress } from '@/components/ui/Progress';
import { Badge } from '@/components/ui/Badge';

export default function SettingsPage() {
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
    <div className="space-y-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Breadcrumb
            items={[
              { href: '/dashboard', label: 'Dashboard' },
              { label: 'Settings' },
            ]}
          />
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-fg">Settings</h1>
          <p className="mt-1 text-sm text-muted">Interactive components demo (client-side state).</p>
        </div>
        <Badge variant="primary">UI kit</Badge>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-border/70 bg-bg p-5">
          <div className="text-sm font-medium text-fg">Preferences</div>
          <div className="mt-4 flex flex-col gap-3">
            <Switch checked={compactMode} onCheckedChange={setCompactMode} label="Compact mode" />
            <Switch checked={notifications} onCheckedChange={setNotifications} label="Notifications" />
            <Select
              label="Week starts on"
              value={weekStart}
              onChange={(e) => setWeekStart(e.target.value as any)}
              options={[
                { label: 'Monday', value: 'mon' },
                { label: 'Sunday', value: 'sun' },
              ]}
            />
          </div>
        </div>

        <div className="rounded-3xl border border-border/70 bg-bg p-5">
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

