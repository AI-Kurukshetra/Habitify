'use client';

import { useState, useEffect } from 'react';
import { Dialog } from '@/components/ui/Dialog';
import { Button } from '@/components/ui/Button';
import { TrashIcon } from '@/components/ui/icons';

export type HabitNoteModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  habitName: string;
  date: Date;
  initialNote: string;
  onSave: (note: string | null) => void;
};

export function HabitNoteModal({
  open,
  onOpenChange,
  habitName,
  date,
  initialNote,
  onSave,
}: HabitNoteModalProps) {
  const [note, setNote] = useState(initialNote);

  useEffect(() => {
    if (open) setNote(initialNote);
  }, [open, initialNote]);

  const handleSave = () => {
    onSave(note.trim() || null);
    onOpenChange(false);
  };

  const handleRemove = () => {
    onSave(null);
    onOpenChange(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      title="Note"
      description={`${habitName} · ${date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}`}
      footer={
        <div className="flex justify-between gap-2">
          <Button
            variant="secondary"
            onClick={handleRemove}
            className="gap-1.5 text-red-600 hover:bg-red-50 hover:text-red-700"
          >
            <TrashIcon size={16} />
            Remove note
          </Button>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save</Button>
          </div>
        </div>
      }
    >
      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#374151]">Note</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add a note for this habit..."
          rows={4}
          className="w-full rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#2a67f4] focus:outline-none focus:ring-1 focus:ring-[#2a67f4] resize-none"
          autoFocus
        />
      </div>
    </Dialog>
  );
}
