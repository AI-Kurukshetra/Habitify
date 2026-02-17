'use client';

import { useState, useEffect } from 'react';
import { CheckIcon, XIcon, TrashIcon, FileTextIcon } from '@/components/ui/icons';
import { cn } from '@/lib/utils';

export type LogEntry = {
  status: 'completed' | 'skipped' | 'missed';
  value?: number;
  durationMinutes?: number;
  note?: string;
};

interface HabitCellEditorProps {
  habitId: string;
  habitName: string;
  habitType: 'checkbox' | 'number' | 'duration';
  habitUnit?: string;
  date: Date;
  initialEntry?: LogEntry;
  onSave: (entry: LogEntry | null) => void;
  onCancel: () => void;
}

export function HabitCellEditor({
  habitId,
  habitName,
  habitType,
  habitUnit,
  date,
  initialEntry,
  onSave,
  onCancel,
}: HabitCellEditorProps) {
  const [status, setStatus] = useState<'completed' | 'skipped' | 'missed'>(
    initialEntry?.status || 'completed'
  );
  const [value, setValue] = useState(initialEntry?.value || 0);
  const [durationMinutes, setDurationMinutes] = useState(initialEntry?.durationMinutes || 0);
  const [note, setNote] = useState(initialEntry?.note || '');
  const [showNoteInput, setShowNoteInput] = useState(!!initialEntry?.note);

  const handleSave = () => {
    const entry: LogEntry = {
      status,
      ...(habitType === 'number' && { value: value > 0 ? value : undefined }),
      ...(habitType === 'duration' && { durationMinutes: durationMinutes > 0 ? durationMinutes : undefined }),
      ...(note && { note }),
    };
    onSave(entry);
  };

  const handleClear = () => {
    onSave(null);
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="rounded-lg bg-white w-full max-w-md shadow-2xl">
        {/* Header */}
        <div className="border-b border-[#E5E7EB] px-6 py-4">
          <h3 className="text-lg font-semibold text-[#111827]">{habitName}</h3>
          <p className="text-sm text-[#6B7280]">{date.toLocaleDateString()}</p>
        </div>

        {/* Body */}
        <div className="px-6 py-4 space-y-4">
          {/* Status selection */}
          <div>
            <label className="block text-sm font-medium text-[#111827] mb-2">Status</label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setStatus('completed')}
                className={cn(
                  'flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2 font-medium transition',
                  status === 'completed'
                    ? 'bg-green-100 text-green-700 border-2 border-green-400'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
                )}
              >
                <CheckIcon size={16} />
                Done
              </button>
              <button
                type="button"
                onClick={() => setStatus('skipped')}
                className={cn(
                  'flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2 font-medium transition',
                  status === 'skipped'
                    ? 'bg-amber-100 text-amber-700 border-2 border-amber-400'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
                )}
              >
                −
              </button>
              <button
                type="button"
                onClick={() => setStatus('missed')}
                className={cn(
                  'flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2 font-medium transition',
                  status === 'missed'
                    ? 'bg-red-100 text-red-700 border-2 border-red-400'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
                )}
              >
                <XIcon size={16} />
              </button>
            </div>
          </div>

          {/* Value input for numeric habits */}
          {habitType === 'number' && (
            <div>
              <label className="block text-sm font-medium text-[#111827] mb-2">
                Value {habitUnit && `(${habitUnit})`}
              </label>
              <input
                type="number"
                min="0"
                step="0.1"
                value={value}
                onChange={(e) => setValue(parseFloat(e.target.value) || 0)}
                className="w-full rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm text-[#111827] focus:border-[#2a67f4] focus:outline-none"
                placeholder="Enter value"
              />
            </div>
          )}

          {/* Duration input for duration habits */}
          {habitType === 'duration' && (
            <div>
              <label className="block text-sm font-medium text-[#111827] mb-2">Duration (minutes)</label>
              <input
                type="number"
                min="0"
                value={durationMinutes}
                onChange={(e) => setDurationMinutes(parseInt(e.target.value, 10) || 0)}
                className="w-full rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm text-[#111827] focus:border-[#2a67f4] focus:outline-none"
                placeholder="Enter duration"
              />
            </div>
          )}

          {/* Note section */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-[#111827]">Note</label>
              <button
                type="button"
                onClick={() => setShowNoteInput(!showNoteInput)}
                className="text-xs text-[#2a67f4] hover:underline flex items-center gap-1"
              >
                <FileTextIcon size={14} />
                {showNoteInput ? 'Hide' : 'Add'}
              </button>
            </div>
            {showNoteInput && (
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Add a note..."
                rows={3}
                className="w-full rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#2a67f4] focus:outline-none resize-none"
              />
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#E5E7EB] px-6 py-3 flex gap-2 justify-between">
          <button
            type="button"
            onClick={handleClear}
            className="flex items-center gap-1.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg px-3 py-2 transition"
          >
            <TrashIcon size={16} />
            Clear
          </button>
          <div className="flex gap-2 ml-auto">
            <button
              type="button"
              onClick={onCancel}
              className="rounded-lg border border-[#E5E7EB] px-4 py-2 text-sm font-medium text-[#374151] hover:bg-[#F3F4F6] transition"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="rounded-lg bg-[#2a67f4] px-4 py-2 text-sm font-medium text-white hover:bg-[#2360dd] transition"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
