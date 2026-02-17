'use client';

import { useState, useEffect } from 'react';
import { Dialog } from '@/components/ui/Dialog';
import { Button } from '@/components/ui/Button';
import type { HabitItem, AreaItem } from '@/lib/dashboard-types';

export type EditHabitModalProps = {
  habit: HabitItem | null;
  onClose: () => void;
  onSave: (habit: HabitItem) => void;
  areas: AreaItem[];
};

export function EditHabitModal({ habit, onClose, onSave, areas }: EditHabitModalProps) {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('1');
  const [areaId, setAreaId] = useState('');
  const [isArchived, setIsArchived] = useState(false);

  useEffect(() => {
    if (habit) {
      setName(habit.name);
      setGoal(String(habit.goal));
      setAreaId(habit.areaId ?? '');
      setIsArchived(habit.isArchived ?? false);
    }
  }, [habit]);

  if (!habit) return null;

  const handleSave = () => {
    onSave({
      ...habit,
      name: name.trim() || habit.name,
      goal: parseInt(goal, 10) || 1,
      areaId: areaId || undefined,
      isArchived,
    });
    onClose();
  };

  return (
    <Dialog
      open={!!habit}
      onOpenChange={(open) => !open && onClose()}
      title="Edit Habit"
      footer={
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      }
    >
      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#374151]">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Habit name"
            className="w-full rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#2a67f4] focus:outline-none focus:ring-1 focus:ring-[#2a67f4]"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#374151]">Target (times per day)</label>
          <input
            type="number"
            min={1}
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm text-[#111827] focus:border-[#2a67f4] focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#374151]">Area</label>
          <select
            value={areaId}
            onChange={(e) => setAreaId(e.target.value)}
            className="w-full rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm text-[#111827] focus:border-[#2a67f4] focus:outline-none"
          >
            <option value="">No area</option>
            {areas.map((a) => (
              <option key={a.id} value={a.id}>{a.name}</option>
            ))}
          </select>
        </div>
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            checked={isArchived}
            onChange={(e) => setIsArchived(e.target.checked)}
            className="h-4 w-4 rounded border-[#D1D5DB] text-[#2a67f4] focus:ring-[#2a67f4]"
          />
          <span className="text-sm text-[#374151]">Archived</span>
        </label>
      </div>
    </Dialog>
  );
}
