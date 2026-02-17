'use client';

import { useState, useCallback, useEffect } from 'react';
import { cn } from '@/lib/utils';
import {
  PlusIcon,
  CheckIcon,
  TimerIcon,
  WrenchIcon,
  RunIcon,
  FileTextIcon,
} from '@/components/ui/icons';
import { Progress } from '@/components/ui/Progress';
import { NewHabitModal } from '@/components/dashboard/NewHabitModal';
import { HabitCellEditor, type LogEntry } from '@/components/dashboard/HabitCellEditor';
import { HabitTimer } from '@/components/dashboard/HabitTimer';
import { StreakDisplay } from '@/components/dashboard/StreakDisplay';
import { useDashboard } from '@/contexts/DashboardContext';
import type { HabitItem, StreakData } from '@/lib/dashboard-types';

const MOODS = [
  { level: 1, emoji: '😢', label: 'Bad' },
  { level: 2, emoji: '😐', label: 'Okay' },
  { level: 3, emoji: '🙂', label: 'Good' },
  { level: 4, emoji: '😊', label: 'Great' },
];

type LogEntry_Internal = { status: 'completed' | 'skipped' | 'missed'; value?: number; durationMinutes?: number; note?: string };

export default function TodayPage() {
  const { habits, setHabits, areas } = useDashboard();
  const [newHabitOpen, setNewHabitOpen] = useState(false);
  const [moodLevel, setMoodLevel] = useState<number | null>(null);
  const [habitLogs, setHabitLogs] = useState<Record<string, LogEntry_Internal>>({});
  const [timerHabit, setTimerHabit] = useState<HabitItem | null>(null);
  const [cellEditor, setCellEditor] = useState<HabitItem | null>(null);
  const [streakData, setStreakData] = useState<Record<string, StreakData>>({});

  const today = new Date();
  const todayKey = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;

  // Initialize streaks for all habits
  useEffect(() => {
    const newStreaks: Record<string, StreakData> = {};
    habits.forEach((habit) => {
      if (!streakData[habit.id]) {
        newStreaks[habit.id] = {
          habitId: habit.id,
          currentStreak: 0,
          longestStreak: 0,
        };
      }
    });
    setStreakData((prev) => ({ ...prev, ...newStreaks }));
  }, [habits]);

  const completedCount = habits.filter((h) => habitLogs[h.id] && habitLogs[h.id].status === 'completed').length;
  const totalCount = habits.length;
  const progressPercent = totalCount ? Math.round((completedCount / totalCount) * 100) : 0;

  const toggleComplete = useCallback((id: string) => {
    setHabitLogs((prev) => {
      const existing = prev[id];
      if (existing && existing.status === 'completed') {
        // Toggle off
        const newLogs = { ...prev };
        delete newLogs[id];
        return newLogs;
      } else {
        // Toggle on
        return { ...prev, [id]: { status: 'completed' } };
      }
    });
  }, []);

  const handleSaveHabit = useCallback(
    (habit: { name: string; repeat: string; goal: string; timeOfDay: string[]; startDate: string; reminders: string[]; area: string; type?: 'checkbox' | 'number' | 'duration' }) => {
      setHabits((prev) => [
        ...prev,
        {
          id: String(Date.now()),
          name: habit.name,
          done: 0,
          goal: parseInt(habit.goal, 10) || 1,
          type: (habit.type ?? 'checkbox') as HabitItem['type'],
          areaId: habit.area || undefined,
          frequency: { type: 'daily' },
        } as HabitItem,
      ]);
    },
    [setHabits]
  );

  return (
    <div className="flex flex-col bg-white min-h-full">
      {/* Header */}
      <div className="border-b border-[#E5E7EB] px-4 py-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-semibold text-[#111827] lg:text-2xl">Today</h1>
            <p className="text-sm text-[#6B7280] mt-1">{today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
          </div>
          <button
            type="button"
            onClick={() => setNewHabitOpen(true)}
            className="flex items-center gap-1.5 rounded-lg bg-[#2a67f4] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#2360dd]"
          >
            <PlusIcon size={18} />
            New Habit
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm text-[#6B7280] mb-2">
            <span>Today&apos;s progress</span>
            <span className="font-medium text-[#111827]">{completedCount}/{totalCount} habits</span>
          </div>
          <Progress value={progressPercent} className="h-2" />
        </div>

        {/* Mood selector */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-sm font-medium text-[#111827]">How are you feeling?</span>
          <div className="flex gap-1">
            {MOODS.map((m) => (
              <button
                key={m.level}
                type="button"
                onClick={() => setMoodLevel(moodLevel === m.level ? null : m.level)}
                className={cn(
                  'rounded-lg border px-2 py-1 text-lg transition',
                  moodLevel === m.level ? 'border-[#2a67f4] bg-[#EFF6FF]' : 'border-[#E5E7EB] hover:bg-[#F9FAFB]'
                )}
                title={m.label}
              >
                {m.emoji}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Habits list */}
      <div className="flex-1 px-4 py-4 sm:px-6 pb-24">
        {habits.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="text-4xl mb-3">🎯</div>
            <p className="text-lg font-medium text-[#111827]">No habits yet</p>
            <p className="text-sm text-[#6B7280]  mt-1">Create your first habit to get started</p>
          </div>
        ) : (
          <ul className="space-y-2">
            {habits.map((habit) => {
              const log = habitLogs[habit.id];
              const completed = log && log.status === 'completed';
              const isDuration = habit.type === 'duration';
              const isNumeric = habit.type === 'number';
              const initial = habit.name.charAt(0).toUpperCase();
              const isWrench = habit.name.toLowerCase().includes('to-do');
              const isRun = habit.name.toLowerCase() === 'test';
              const habitColor = habit.color || '#E5E7EB';
              
              return (
                <li
                  key={habit.id}
                  className={cn(
                    'flex items-center gap-3 rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 transition',
                    completed && 'border-[#10B981]/50 bg-[#D1FAE5]/30'
                  )}
                >
                  {/* Icon */}
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-medium text-white"
                    style={{
                      backgroundColor: habit.color ? habitColor : '#E5E7EB',
                      color: habit.color ? '#fff' : '#6B7280',
                    }}
                  >
                    {isWrench ? <WrenchIcon size={18} /> : isRun ? <RunIcon size={18} /> : initial}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className={cn('font-medium truncate', completed && 'text-[#10B981]')}>
                        {habit.name}
                      </p>
                      {isDuration && <TimerIcon size={14} className="text-[#6B7280] shrink-0" />}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#6B7280] mt-0.5">
                      {isNumeric && log ? (
                        <span>{log.value || 0} {habit.unit || ''} / {habit.goal} {habit.unit || ''}</span>
                      ) : (
                        <span>{habit.done}/{habit.goal} times</span>
                      )}
                      {streakData[habit.id] && <StreakDisplay streakData={streakData[habit.id]} size="sm" />}
                    </div>
                    {log?.note && (
                      <p className="text-xs text-[#6B7280] mt-1 flex items-center gap-1">
                        <FileTextIcon size={12} />
                        {log.note}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 items-center gap-2">
                    {isDuration && (
                      <button
                        type="button"
                        onClick={() => setTimerHabit(habit)}
                        className="flex items-center gap-1.5 rounded-lg border border-[#2a67f4] px-3 py-1.5 text-sm font-medium text-[#2a67f4] hover:bg-[#EFF6FF] transition"
                        title="Start timer"
                      >
                        <TimerIcon size={16} />
                        Timer
                      </button>
                    )}

                    {isNumeric && (
                      <button
                        type="button"
                        onClick={() => setCellEditor(habit)}
                        className="flex items-center gap-1.5 rounded-lg border border-[#9CA3AF] px-2 py-1.5 text-sm font-medium text-[#6B7280] hover:bg-[#F3F4F6] transition"
                        title="Edit value"
                      >
                        {log?.value || '−'}
                      </button>
                    )}

                    {/* Checkbox */}
                    <button
                      type="button"
                      onClick={() => toggleComplete(habit.id)}
                      className={cn(
                        'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition',
                        completed
                          ? 'border-[#10B981] bg-[#10B981] text-white hover:border-[#059669]'
                          : 'border-[#D1D5DB] text-[#9CA3AF] hover:border-[#2a67f4] hover:text-[#2a67f4]'
                      )}
                      aria-label={completed ? 'Mark incomplete' : 'Mark complete'}
                    >
                      {completed && <CheckIcon size={18} />}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Modals */}
      <NewHabitModal
        areas={areas}
        open={newHabitOpen}
        onOpenChange={setNewHabitOpen}
        onSave={handleSaveHabit}
      />

      {cellEditor && (
        <HabitCellEditor
          habitId={cellEditor.id}
          habitName={cellEditor.name}
          habitType={cellEditor.type || 'checkbox'}
          habitUnit={cellEditor.unit}
          date={today}
          initialEntry={habitLogs[cellEditor.id]}
          onSave={(entry) => {
            if (entry) {
              setHabitLogs((prev) => ({ ...prev, [cellEditor.id]: entry }));
            } else {
              setHabitLogs((prev) => {
                const newLogs = { ...prev };
                delete newLogs[cellEditor.id];
                return newLogs;
              });
            }
            setCellEditor(null);
          }}
          onCancel={() => setCellEditor(null)}
        />
      )}

      {timerHabit && (
        <HabitTimer
          habitName={timerHabit.name}
          initialSeconds={habitLogs[timerHabit.id]?.durationMinutes ? habitLogs[timerHabit.id].durationMinutes! * 60 : 0}
          onSave={(durationSeconds) => {
            const durationMinutes = Math.round(durationSeconds / 60);
            setHabitLogs((prev) => ({
              ...prev,
              [timerHabit.id]: {
                status: 'completed',
                durationMinutes,
              },
            }));
            setTimerHabit(null);
          }}
          onCancel={() => setTimerHabit(null)}
        />
      )}
    </div>
  );
}
