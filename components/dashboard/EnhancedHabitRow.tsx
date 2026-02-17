'use client';

import { useEffect } from 'react';
import { HabitItem, StreakData } from '@/lib/dashboard-types';
import { StreakDisplay } from './StreakDisplay';
import {
  MoreVerticalIcon,
  PencilIcon,
  CopyIcon,
  ArchiveIcon,
  TrashIcon,
  WrenchIcon,
  RunIcon,
  TimerIcon,
  CheckIcon,
  FileTextIcon,
} from '@/components/ui/icons';
import { cn } from '@/lib/utils';

type LogStatus = 'completed' | 'skipped' | 'missed';

interface EnhancedHabitRowProps {
  habit: HabitItem;
  streak?: StreakData;
  selected: boolean;
  completed?: boolean;
  /** Today's log status for badge (Done / Skipped / Failed) */
  todayStatus?: LogStatus | null;
  menuOpen?: boolean;
  onToggleSelect: () => void;
  onAddTimes?: (delta: number) => void;
  onMenuToggle?: () => void;
  onEdit?: () => void;
  onDuplicate?: () => void;
  onArchive?: () => void;
  onDelete?: () => void;
  onStartTimer?: () => void;
  onStatusChange?: (status: LogStatus) => void;
  onAddLog?: () => void;
  onRemoveLogs?: () => void;
  onAddNote?: () => void;
  onViewNotes?: () => void;
}

export function EnhancedHabitRow({
  habit,
  streak,
  selected,
  completed,
  todayStatus,
  menuOpen,
  onToggleSelect,
  onAddTimes,
  onMenuToggle,
  onEdit,
  onDuplicate,
  onArchive,
  onDelete,
  onStartTimer,
  onStatusChange,
  onAddLog,
  onRemoveLogs,
  onAddNote,
  onViewNotes,
}: EnhancedHabitRowProps) {
  const initial = habit.name.charAt(0).toUpperCase();

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey && e.key === 'd') {
        e.preventDefault();
        onStatusChange?.('completed');
      }
      if (e.altKey && e.key === 's') {
        e.preventDefault();
        onStatusChange?.('skipped');
      }
      if (e.altKey && e.key === 'f') {
        e.preventDefault();
        onStatusChange?.('missed');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen, onStatusChange]);
  const isWrench = habit.name.toLowerCase().includes('to-do');
  const isRun = habit.name.toLowerCase() === 'test';

  const getProgressColor = () => {
    if (completed) return 'bg-green-100 text-green-700';
    if (habit.done >= habit.goal) return 'bg-green-100 text-green-700';
    return 'bg-blue-100 text-blue-700';
  };

  const getProgressText = () => {
    if (habit.type === 'number') {
      return `${habit.done}${habit.unit ? ' ' + habit.unit : ''} / ${habit.goal}${habit.unit ? ' ' + habit.unit : ''}`;
    }
    if (habit.type === 'duration') {
      return `${habit.done}min / ${habit.goal}min`;
    }
    return `${habit.done}/${habit.goal} times`;
  };

  return (
    <div
      className={cn(
        'flex items-center gap-3 border border-[#E5E7EB] px-4 py-3 rounded-lg',
        selected && 'border-[#2a67f4] bg-[#EFF6FF]'
      )}
    >
      {/* Icon */}
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-medium text-white"
        style={{
          backgroundColor: habit.color || '#E5E7EB',
          color: habit.color ? '#fff' : '#6B7280',
        }}
      >
        {isWrench ? <WrenchIcon size={18} /> : isRun ? <RunIcon size={18} /> : initial}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="truncate font-semibold text-[#111827]">{habit.name}</p>
          {habit.type === 'duration' && (
            <TimerIcon size={14} className="text-[#6B7280] shrink-0" />
          )}
          {todayStatus && (
            <span
              className={cn(
                'shrink-0 rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide',
                todayStatus === 'completed' && 'bg-green-100 text-green-700',
                todayStatus === 'skipped' && 'bg-amber-100 text-amber-700',
                todayStatus === 'missed' && 'bg-red-100 text-red-700'
              )}
            >
              {todayStatus === 'completed' ? 'Done' : todayStatus === 'skipped' ? 'Skipped' : 'Failed'}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 text-sm text-[#6B7280] mt-0.5">
          <span>{getProgressText()}</span>
          {streak && <StreakDisplay streakData={streak} size="sm" />}
        </div>
      </div>

      {/* Actions - conditional based on habit type */}
      <div className="flex items-center gap-2 shrink-0">
        {habit.type === 'duration' && (
          <button
            type="button"
            onClick={onStartTimer}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-orange-700 hover:bg-orange-200 transition"
            title="Start timer"
            aria-label="Start timer"
          >
            <TimerIcon size={16} />
          </button>
        )}

        {habit.type === 'number' && (
          <div className="flex items-center rounded border border-[#E5E7EB] bg-white">
            <button
              type="button"
              onClick={() => onAddTimes?.(-1)}
              className="flex h-7 w-6 items-center justify-center text-[#6B7280] hover:bg-[#F3F4F6]"
              aria-label="Decrease"
            >
              −
            </button>
            <span className="min-w-[1.5rem] py-0.5 text-center text-xs font-medium">{habit.done}</span>
            <button
              type="button"
              onClick={() => onAddTimes?.(1)}
              className="flex h-7 w-6 items-center justify-center text-[#6B7280] hover:bg-[#F3F4F6]"
              aria-label="Increase"
            >
              +
            </button>
          </div>
        )}

        {/* Checkbox */}
        <button
          type="button"
          onClick={onToggleSelect}
          className={cn(
            'flex h-8 w-8 rounded-full items-center justify-center border-2 transition',
            completed || habit.done >= habit.goal
              ? 'border-green-500 bg-green-100 text-green-600'
              : 'border-blue-500 bg-blue-100 text-blue-600 hover:border-blue-600'
          )}
          aria-label={selected ? 'Deselect' : 'Select'}
        >
          {selected && '✓'}
        </button>

        {/* Menu */}
        <div className="relative">
          <button
            type="button"
            onClick={onMenuToggle}
            className="rounded p-1.5 text-[#6B7280] hover:bg-[#F3F4F6] transition"
            aria-label="More options"
          >
            <MoreVerticalIcon size={18} />
          </button>
          {menuOpen && (
            <>
              <div className="fixed inset-0 z-10" aria-hidden onClick={() => onMenuToggle?.()} />
              <div className="absolute right-0 top-full z-20 mt-1 w-56 rounded-lg border border-[#E5E7EB] bg-white py-1 shadow-lg">
                <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#9CA3AF] border-b border-[#E5E7EB]">
                  Status
                </div>
                <button
                  type="button"
                  onClick={() => { onStatusChange?.('completed'); onMenuToggle?.(); }}
                  className="flex w-full items-center justify-between gap-2 px-4 py-2.5 text-left text-sm text-[#374151] hover:bg-[#F3F4F6]"
                >
                  <span className="flex items-center gap-2">
                    <CheckIcon size={16} className="text-green-600" />
                    Done
                  </span>
                  <kbd className="text-[10px] text-[#9CA3AF]">Alt+D</kbd>
                </button>
                <button
                  type="button"
                  onClick={() => { onStatusChange?.('skipped'); onMenuToggle?.(); }}
                  className="flex w-full items-center justify-between gap-2 px-4 py-2.5 text-left text-sm text-[#374151] hover:bg-[#F3F4F6]"
                >
                  <span>Mark as skipped</span>
                  <kbd className="text-[10px] text-[#9CA3AF]">Alt+S</kbd>
                </button>
                <button
                  type="button"
                  onClick={() => { onStatusChange?.('missed'); onMenuToggle?.(); }}
                  className="flex w-full items-center justify-between gap-2 px-4 py-2.5 text-left text-sm text-[#374151] hover:bg-[#F3F4F6]"
                >
                  <span>Mark as failed</span>
                  <kbd className="text-[10px] text-[#9CA3AF]">Alt+F</kbd>
                </button>
                <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#9CA3AF] border-b border-[#E5E7EB] mt-1">
                  Log
                </div>
                <button
                  type="button"
                  onClick={() => { onRemoveLogs?.(); onMenuToggle?.(); }}
                  className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-[#374151] hover:bg-[#F3F4F6]"
                >
                  Remove logs
                </button>
                <button
                  type="button"
                  onClick={() => { onAddLog?.(); onMenuToggle?.(); }}
                  className="flex w-full items-center justify-between gap-2 px-4 py-2.5 text-left text-sm text-[#374151] hover:bg-[#F3F4F6]"
                >
                  Add log
                  <span className="text-[#9CA3AF]">›</span>
                </button>
                {habit.type === 'duration' && (
                  <button
                    type="button"
                    onClick={() => { onStartTimer?.(); onMenuToggle?.(); }}
                    className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-[#374151] hover:bg-[#F3F4F6]"
                  >
                    <TimerIcon size={16} />
                    Start timer
                  </button>
                )}
                <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#9CA3AF] border-b border-[#E5E7EB] mt-1">
                  Note
                </div>
                <button
                  type="button"
                  onClick={() => { onAddNote?.(); onMenuToggle?.(); }}
                  className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-[#374151] hover:bg-[#F3F4F6]"
                >
                  <FileTextIcon size={16} />
                  Add note
                </button>
                <button
                  type="button"
                  onClick={() => { onViewNotes?.(); onMenuToggle?.(); }}
                  className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-[#374151] hover:bg-[#F3F4F6]"
                >
                  <FileTextIcon size={16} />
                  View notes
                </button>
                <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#9CA3AF] border-b border-[#E5E7EB] mt-1">
                  Habit
                </div>
                <button
                  type="button"
                  onClick={onEdit}
                  className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-[#374151] hover:bg-[#F3F4F6]"
                >
                  <PencilIcon size={16} />
                  Edit
                </button>
                <button
                  type="button"
                  onClick={onDuplicate}
                  className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-[#374151] hover:bg-[#F3F4F6]"
                >
                  <CopyIcon size={16} />
                  Duplicate
                </button>
                <button
                  type="button"
                  onClick={onArchive}
                  className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-[#374151] hover:bg-[#F3F4F6]"
                >
                  <ArchiveIcon size={16} />
                  Archive
                </button>
                <button
                  type="button"
                  onClick={onDelete}
                  className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
                >
                  <TrashIcon size={16} />
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
