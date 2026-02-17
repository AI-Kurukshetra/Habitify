'use client';

import { useState } from 'react';
import { Dialog } from '@/components/ui/Dialog';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import {
  PlusIcon,
  XIcon,
  RefreshIcon,
  TargetIcon,
  SunIcon,
  CalendarIcon,
  InfinityIcon,
  BellIcon,
  FolderOpenIcon,
  ListIcon,
} from '@/components/ui/icons';

export type NewHabitModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave?: (habit: { name: string; repeat: string; goal: string; timeOfDay: string[]; startDate: string; reminders: string[]; area: string }) => void;
};

const TABS = ['New Habit', 'Fitbit', 'Strava'] as const;
const TIME_OPTIONS = ['Snacks time', 'Morning', 'Afternoon', 'Evening'];

export function NewHabitModal({ open, onOpenChange, onSave }: NewHabitModalProps) {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>('New Habit');
  const [name, setName] = useState('');
  const [repeat, setRepeat] = useState('Daily');
  const [goal, setGoal] = useState('1');
  const [timeOfDay, setTimeOfDay] = useState<string[]>([]);
  const [startDate, setStartDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [endCondition, setEndCondition] = useState('Never');
  const [reminders, setReminders] = useState<string[]>(['09:00']);
  const [area, setArea] = useState('');
  const [checklist, setChecklist] = useState<string[]>([]);

  const toggleTime = (t: string) => {
    setTimeOfDay((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));
  };

  const addReminder = () => setReminders((prev) => [...prev, '09:00']);
  const removeReminder = (i: number) => setReminders((prev) => prev.filter((_, j) => j !== i));
  const setReminderAt = (i: number, v: string) =>
    setReminders((prev) => prev.map((r, j) => (j === i ? v : r)));

  const addChecklist = () => setChecklist((prev) => [...prev, '']);
  const removeChecklist = (i: number) => setChecklist((prev) => prev.filter((_, j) => j !== i));
  const setChecklistAt = (i: number, v: string) =>
    setChecklist((prev) => prev.map((c, j) => (j === i ? v : c)));

  const handleSave = () => {
    onSave?.({
      name: name || 'New Habit',
      repeat,
      goal,
      timeOfDay,
      startDate,
      reminders,
      area,
    });
    onOpenChange(false);
    setName('');
    setRepeat('Daily');
    setGoal('1');
    setTimeOfDay([]);
    setReminders(['09:00']);
    setArea('');
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      title="New Habit"
      footer={
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      }
    >
      <div className="space-y-5">
        {/* Tabs */}
        <div className="flex gap-1 rounded-lg border border-[#E5E7EB] p-1">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={cn(
                'flex-1 rounded-md px-3 py-2 text-sm font-medium transition',
                activeTab === tab
                  ? 'bg-[#2a67f4] text-white'
                  : 'text-[#6B7280] hover:bg-[#F3F4F6]'
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'New Habit' && (
          <>
            {/* Habit Name - match expected: Enter Habit Name, ? icon, Magic Fill with sparkle */}
            <div>
              <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-[#374151]">
                Habit Name
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E5E7EB] text-[#6B7280] hover:bg-[#F3F4F6]"
                  aria-label="Help"
                >
                  <span className="text-sm">?</span>
                </button>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Habit Name"
                  className="flex-1 rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#2a67f4] focus:outline-none focus:ring-1 focus:ring-[#2a67f4]"
                />
                <Button variant="secondary" size="sm" className="gap-1">
                  <span aria-hidden>✨</span>
                  Magic Fill
                </Button>
              </div>
            </div>

            {/* Repeat - match expected: Repeat icon, Daily + Every Day dropdowns */}
            <div>
              <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-[#374151]">
                <RefreshIcon size={16} className="text-[#6B7280]" />
                Repeat
              </label>
              <div className="flex gap-2">
                <select
                  value={repeat}
                  onChange={(e) => setRepeat(e.target.value)}
                  className="flex-1 rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm text-[#111827] focus:border-[#2a67f4] focus:outline-none"
                >
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
                <select className="flex-1 rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm text-[#111827] focus:border-[#2a67f4] focus:outline-none">
                  <option>Every Day</option>
                  <option>Every Week</option>
                </select>
              </div>
            </div>

            {/* Goal - match expected: target icon, 1 + times + per day */}
            <div>
              <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-[#374151]">
                <TargetIcon size={16} className="text-[#6B7280]" />
                Goal
              </label>
              <div className="flex flex-wrap items-center gap-2">
                <input
                  type="text"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-14 rounded-lg border border-[#E5E7EB] px-2 py-2 text-sm text-center text-[#111827]"
                />
                <select className="rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm text-[#111827] focus:border-[#2a67f4] focus:outline-none">
                  <option>times</option>
                </select>
                <select className="rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm text-[#111827] focus:border-[#2a67f4] focus:outline-none">
                  <option>per day</option>
                  <option>per week</option>
                </select>
              </div>
            </div>

            {/* Time of Day - match expected: sun/clock icon, checkboxes snacks time, Morning, Afternoon, Evening */}
            <div>
              <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-[#374151]">
                <SunIcon size={16} className="text-[#6B7280]" />
                Time of Day
              </label>
              <div className="flex flex-wrap gap-2">
                {TIME_OPTIONS.map((t) => (
                  <label
                    key={t}
                    className="flex cursor-pointer items-center gap-2 rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={timeOfDay.includes(t)}
                      onChange={() => toggleTime(t)}
                      className="h-4 w-4 rounded border-[#D1D5DB] text-[#2a67f4] focus:ring-[#2a67f4]"
                    />
                    <span className="text-[#374151]">{t}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Start Date - match expected: calendar icon, date display */}
            <div>
              <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-[#374151]">
                <CalendarIcon size={16} className="text-[#6B7280]" />
                Start Date
              </label>
              <div className="flex gap-2">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="flex-1 rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm text-[#111827] focus:border-[#2a67f4] focus:outline-none"
                />
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E7EB] text-[#6B7280]">
                  <CalendarIcon size={18} />
                </span>
              </div>
            </div>

            {/* End Condition - match expected: infinity/crossed icon, Never */}
            <div>
              <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-[#374151]">
                <InfinityIcon size={16} className="text-[#6B7280]" />
                End Condition
              </label>
              <select
                value={endCondition}
                onChange={(e) => setEndCondition(e.target.value)}
                className="w-full rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm text-[#111827] focus:border-[#2a67f4] focus:outline-none"
              >
                <option>Never</option>
                <option>After number of times</option>
                <option>On a specific date</option>
              </select>
            </div>

            {/* Reminders - match expected: alarm icon, pill tags 09:00 with x, + Add New Reminder */}
            <div>
              <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-[#374151]">
                <BellIcon size={16} className="text-[#6B7280]" />
                Reminders
              </label>
              <div className="flex flex-wrap items-center gap-2">
                {reminders.map((r, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 rounded-full border border-[#E5E7EB] bg-[#F9FAFB] pl-3 pr-1 py-1.5 text-sm text-[#374151]"
                  >
                    {r}
                    <button
                      type="button"
                      onClick={() => removeReminder(i)}
                      className="rounded-full p-0.5 hover:bg-[#E5E7EB]"
                      aria-label="Remove"
                    >
                      <XIcon size={14} />
                    </button>
                  </span>
                ))}
                <button
                  type="button"
                  onClick={addReminder}
                  className="text-sm font-medium text-[#2a67f4] hover:underline"
                >
                  + Add New Reminder
                </button>
              </div>
            </div>

            {/* Area - match expected: folder icon, Select areas */}
            <div>
              <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-[#374151]">
                <FolderOpenIcon size={16} className="text-[#6B7280]" />
                Area
              </label>
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm text-[#111827] focus:border-[#2a67f4] focus:outline-none"
              >
                <option value="">Select areas</option>
                <option value="todo">todo list</option>
                <option value="health">Health</option>
              </select>
            </div>

            {/* Checklist - match expected: checklist icon, Add New Checklist */}
            <div>
              <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-[#374151]">
                <ListIcon size={16} className="text-[#6B7280]" />
                Checklist
              </label>
              <div className="space-y-2">
                {checklist.map((c, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={c}
                      onChange={(e) => setChecklistAt(i, e.target.value)}
                      placeholder="Checklist item"
                      className="flex-1 rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm text-[#111827]"
                    />
                    <button
                      type="button"
                      onClick={() => removeChecklist(i)}
                      className="rounded p-1 text-[#6B7280] hover:bg-[#F3F4F6]"
                      aria-label="Remove"
                    >
                      <XIcon size={16} />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addChecklist}
                  className="w-full rounded-lg border border-dashed border-[#E5E7EB] px-3 py-2.5 text-left text-sm text-[#6B7280] hover:border-[#2a67f4] hover:text-[#2a67f4]"
                >
                  Add New Checklist
                </button>
              </div>
            </div>
          </>
        )}

        {activeTab !== 'New Habit' && (
          <p className="text-sm text-[#6B7280]">
            Connect {activeTab} to sync habits. (Placeholder)
          </p>
        )}
      </div>
    </Dialog>
  );
}
