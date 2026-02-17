'use client';

import { useState } from 'react';
import { SunIcon, MoonIcon, CloudIcon, TrashIcon } from '@/components/ui/icons';
import { Button } from '@/components/ui/Button';
import { useDashboard } from '@/contexts/DashboardContext';
import type { TimeOfDaySlot } from '@/services/timeOfDayService';

function getIconForSlot(slot: TimeOfDaySlot) {
  const icon = (slot.icon || '').toLowerCase();
  if (icon.includes('moon')) return MoonIcon;
  if (icon.includes('cloud')) return CloudIcon;
  return SunIcon;
}

const DEFAULT_SLOTS: Omit<TimeOfDaySlot, 'id' | 'createdAt' | 'updatedAt'>[] = [
  { name: 'Morning', icon: 'cloud', startTime: '00:00', endTime: '12:00', color: '#93C5FD', sortOrder: 0 },
  { name: 'Afternoon', icon: 'sun', startTime: '12:00', endTime: '18:00', color: '#FDBA74', sortOrder: 1 },
  { name: 'Evening', icon: 'moon', startTime: '18:00', endTime: '00:00', color: '#C4B5FD', sortOrder: 2 },
];

export function TimeOfDaySettings() {
  const { timeOfDaySlots, addTimeOfDaySlot, updateTimeOfDaySlot, deleteTimeOfDaySlot, isLoadingTimeOfDaySlots } = useDashboard();
  const [newName, setNewName] = useState('');
  const [newStart, setNewStart] = useState('08:00');
  const [newEnd, setNewEnd] = useState('12:00');
  const [newColor, setNewColor] = useState('#93C5FD');
  const [showAdd, setShowAdd] = useState(false);

  const slots = timeOfDaySlots.length > 0 ? timeOfDaySlots : [];
  const canAdd = slots.length < 10;

  const handleAdd = async () => {
    const name = newName.trim();
    if (!name) return;
    const created = await addTimeOfDaySlot({
      name,
      icon: 'sun',
      startTime: newStart,
      endTime: newEnd,
      color: newColor,
      sortOrder: slots.length,
    });
    if (created) {
      setNewName('');
      setNewStart('08:00');
      setNewEnd('12:00');
      setNewColor('#93C5FD');
      setShowAdd(false);
    }
  };

  const handleDelete = async (id: string) => {
    await deleteTimeOfDaySlot(id);
  };

  if (isLoadingTimeOfDaySlots) {
    return <div className="text-sm text-[#6B7280]">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-[#111827]">Time of Day</h2>
        <p className="mt-1 text-sm text-[#6B7280]">Define time ranges and use them to filter habits in the sidebar.</p>
      </div>

      {/* Timeline bar: 12 AM -> 6 AM -> 12 PM -> 6 PM -> 12 AM */}
      <div className="rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-4">
        <div className="flex items-center gap-0 text-[10px] font-medium text-[#6B7280] mb-2">
          <span>12 AM</span>
          <span className="flex-1 text-center">6 AM</span>
          <span className="flex-1 text-center">12 PM</span>
          <span className="flex-1 text-center">6 PM</span>
          <span>12 AM</span>
        </div>
        <div className="h-8 flex rounded-lg overflow-hidden border border-[#E5E7EB]">
          {slots.length === 0 ? (
            <div className="flex-1 flex items-center justify-center text-xs text-[#9CA3AF] bg-white">
              Add time slots below
            </div>
          ) : (
            slots.map((slot) => {
              const Icon = getIconForSlot(slot);
              const startMins = timeToMinutes(slot.startTime);
              const endMins = slot.endTime === '00:00' ? 24 * 60 : timeToMinutes(slot.endTime);
              const width = ((endMins - startMins) / (24 * 60)) * 100;
              const left = (startMins / (24 * 60)) * 100;
              return (
                <div
                  key={slot.id}
                  className="flex items-center justify-center gap-1 shrink-0 text-white text-[10px] font-medium"
                  style={{
                    width: `${width}%`,
                    minWidth: width < 5 ? '5%' : undefined,
                    backgroundColor: slot.color || '#93C5FD',
                    marginLeft: left === 0 ? undefined : '-1px',
                  }}
                  title={`${slot.name} ${slot.startTime}–${slot.endTime}`}
                >
                  <Icon size={14} />
                  <span className="truncate hidden sm:inline">{slot.name}</span>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* List of slots */}
      <div className="space-y-2">
        {slots.length === 0 && (
          <p className="text-sm text-[#6B7280]">No time slots yet. Add defaults or create your own.</p>
        )}
        {slots.map((slot) => {
          const Icon = getIconForSlot(slot);
          return (
            <div
              key={slot.id}
              className="flex items-center gap-3 rounded-lg border border-[#E5E7EB] bg-white px-4 py-3"
            >
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white"
                style={{ backgroundColor: slot.color || '#93C5FD' }}
              >
                <Icon size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-[#111827]">{slot.name}</p>
                <p className="text-xs text-[#6B7280]">
                  {slot.startTime} – {slot.endTime}
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleDelete(slot.id)}
                className="rounded p-2 text-[#6B7280] hover:bg-red-50 hover:text-red-600 transition"
                aria-label={`Delete ${slot.name}`}
              >
                <TrashIcon size={18} />
              </button>
            </div>
          );
        })}

        {/* Add more */}
        {showAdd ? (
          <div className="rounded-lg border border-[#E5E7EB] border-dashed bg-[#F9FAFB] p-4 space-y-3">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Name (e.g. Night)"
              className="w-full rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#2a67f4] focus:outline-none"
            />
            <div className="flex gap-2 flex-wrap">
              <div>
                <label className="block text-[10px] font-medium text-[#6B7280] mb-0.5">Start</label>
                <input
                  type="time"
                  value={newStart}
                  onChange={(e) => setNewStart(e.target.value)}
                  className="rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-[10px] font-medium text-[#6B7280] mb-0.5">End</label>
                <input
                  type="time"
                  value={newEnd}
                  onChange={(e) => setNewEnd(e.target.value)}
                  className="rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-[10px] font-medium text-[#6B7280] mb-0.5">Color</label>
                <input
                  type="color"
                  value={newColor}
                  onChange={(e) => setNewColor(e.target.value)}
                  className="h-10 w-14 rounded border border-[#E5E7EB] cursor-pointer"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" onClick={handleAdd} disabled={!newName.trim()}>
                Add
              </Button>
              <Button variant="secondary" size="sm" onClick={() => setShowAdd(false)}>
                Cancel
              </Button>
            </div>
          </div>
        ) : canAdd && (
          <button
            type="button"
            onClick={() => setShowAdd(true)}
            className="w-full rounded-lg border border-dashed border-[#E5E7EB] py-3 text-sm font-medium text-[#2a67f4] hover:bg-[#EFF6FF] hover:border-[#2a67f4] transition"
          >
            + Add more...
          </button>
        )}
      </div>

      {slots.length === 0 && (
        <div className="pt-4">
          <Button
            variant="secondary"
            onClick={async () => {
              for (const s of DEFAULT_SLOTS) await addTimeOfDaySlot(s);
            }}
          >
            Add default (Morning, Afternoon, Evening)
          </Button>
        </div>
      )}
    </div>
  );
}

function timeToMinutes(t: string): number {
  const [h, m] = t.split(':').map(Number);
  return (h ?? 0) * 60 + (m ?? 0);
}
