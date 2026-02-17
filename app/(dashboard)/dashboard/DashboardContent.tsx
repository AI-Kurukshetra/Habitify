'use client';

import { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  SearchIcon,
  GridIcon,
  ListIcon,
  PlusIcon,
  CheckIcon,
  MoreVerticalIcon,
  ChevronDownIcon,
  PencilIcon,
  MenuIcon,
  ChevronRightIcon,
  WrenchIcon,
  RunIcon,
  XIcon,
  CopyIcon,
  ArchiveIcon,
  TrashIcon,
  FileTextIcon,
  TimerIcon,
} from '@/components/ui/icons';
import { NewHabitModal } from '@/components/dashboard/NewHabitModal';
import { EditHabitModal } from '@/components/dashboard/EditHabitModal';
import { HabitCellEditor, type LogEntry } from '@/components/dashboard/HabitCellEditor';
import { HabitTimer } from '@/components/dashboard/HabitTimer';
import { EnhancedHabitRow } from '@/components/dashboard/EnhancedHabitRow';
import { StreakDisplay } from '@/components/dashboard/StreakDisplay';
import { useDashboard } from '@/contexts/DashboardContext';
import type { HabitItem, StreakData } from '@/lib/dashboard-types';

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const MOODS = [
  { level: 1, emoji: '😢', label: 'Bad' },
  { level: 2, emoji: '😐', label: 'Okay' },
  { level: 3, emoji: '🙂', label: 'Good' },
  { level: 4, emoji: '😊', label: 'Great' },
];

function getDaysInMonth(year: number, month: number) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const start = first.getDay();
  const count = last.getDate();
  return { start, count };
}

type LogKey = string;

function logKey(habitId: string, date: Date): LogKey {
  return `${habitId}-${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

export function DashboardContent() {
  const searchParams = useSearchParams();
  const { habits, setHabits, areas } = useDashboard();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [addDropdownOpen, setAddDropdownOpen] = useState(false);
  const [newHabitOpen, setNewHabitOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(() => new Date());
  const [todoInput, setTodoInput] = useState('');
  const [editHabit, setEditHabit] = useState<HabitItem | null>(null);
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);
  const [filterArea, setFilterArea] = useState<string>('');
  const [filterHabitId, setFilterHabitId] = useState<string>('');
  const [dateRangePreset, setDateRangePreset] = useState<'week' | 'month'>('week');
  const [moodLevel, setMoodLevel] = useState<number | null>(null);
  const [habitLogs, setHabitLogs] = useState<Record<LogKey, LogEntry>>({});
  const [habitNotes, setHabitNotes] = useState<Record<LogKey, string>>({});
  const [cellPopover, setCellPopover] = useState<{ habitId: string; date: Date } | null>(null);
  const [cellEditor, setCellEditor] = useState<{ habitId: string; date: Date } | null>(null);
  const [timerHabit, setTimerHabit] = useState<{ habit: HabitItem; date: Date } | null>(null);
  const [streakData, setStreakData] = useState<Record<string, StreakData>>({});

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

  useEffect(() => {
    if (searchParams.get('new') === 'habit') setNewHabitOpen(true);
  }, [searchParams]);

  const today = new Date();
  const isToday = (d: Date) =>
    d.getDate() === today.getDate() && d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear();

  const toggleSelect = useCallback((id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const setStatus = useCallback((status: 'complete' | 'skip' | 'fail') => {
    setHabits((prev) =>
      prev.map((h) =>
        selectedIds.has(h.id)
          ? { ...h, status, done: status === 'complete' ? h.goal : h.done }
          : h
      )
    );
    setSelectedIds(new Set());
    setAddDropdownOpen(false);
  }, [selectedIds]);

  const filteredBySearch = searchQuery.trim()
    ? habits.filter((h) => h.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : habits;
  const filteredHabits = filteredBySearch.filter((h) => {
    if (filterArea && h.areaId !== filterArea) return false;
    if (filterHabitId && h.id !== filterHabitId) return false;
    return !h.isArchived;
  });

  const handleUpdateHabit = useCallback((updated: HabitItem) => {
    setHabits((prev) => prev.map((h) => (h.id === updated.id ? updated : h)));
    setEditHabit(null);
    setMenuOpenId(null);
  }, []);
  const duplicateHabit = useCallback((habit: HabitItem) => {
    setHabits((prev) => [...prev, { ...habit, id: String(Date.now()), name: `${habit.name} (copy)` }]);
    setMenuOpenId(null);
  }, []);
  const archiveHabit = useCallback((id: string) => {
    setHabits((prev) => prev.map((h) => (h.id === id ? { ...h, isArchived: true } : h)));
    setMenuOpenId(null);
  }, []);
  const deleteHabit = useCallback((id: string) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
    setMenuOpenId(null);
    setEditHabit((h) => (h?.id === id ? null : h));
  }, []);

  const setLog = useCallback((habitId: string, date: Date, entry: LogEntry | null) => {
    const key = logKey(habitId, date);
    if (entry) setHabitLogs((prev) => ({ ...prev, [key]: entry }));
    else setHabitLogs((prev) => { const n = { ...prev }; delete n[key]; return n; });
  }, []);
  const setNote = useCallback((habitId: string, date: Date, note: string) => {
    const key = logKey(habitId, date);
    if (note) setHabitNotes((prev) => ({ ...prev, [key]: note }));
    else setHabitNotes((prev) => { const n = { ...prev }; delete n[key]; return n; });
  }, []);
  const getLog = (habitId: string, date: Date) => habitLogs[logKey(habitId, date)];
  const getNote = (habitId: string, date: Date) => habitNotes[logKey(habitId, date)];

  const openNewHabit = () => {
    setAddDropdownOpen(false);
    setNewHabitOpen(true);
  };

  const handleSaveHabit = useCallback(
    (habit: { name: string; repeat: string; goal: string; timeOfDay: string[]; startDate: string; reminders: string[]; area: string; type?: 'checkbox' | 'number' | 'duration' }) => {
      setHabits((prev) => [
        ...prev,
        {
          id: String(Date.now()),
          name: habit.name,
          done: 0,
          goal: parseInt(habit.goal, 10) || 1,
          type: habit.type ?? 'checkbox',
          areaId: habit.area || undefined,
          frequency: { type: 'daily' },
        } as HabitItem,
      ]);
    },
    [setHabits]
  );

  const { start: monthStart, count: monthCount } = getDaysInMonth(
    selectedDate.getFullYear(),
    selectedDate.getMonth()
  );
  const dayCells = Array.from({ length: monthStart + monthCount }, (_, i) => {
    if (i < monthStart) return null;
    const day = i - monthStart + 1;
    const d = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
    return d;
  });

  return (
    <div className="flex flex-col bg-white min-h-full">
      {/* Header - desktop: inside main; mobile already has "All Habits" in layout */}
      <div className="border-b border-[#E5E7EB] px-4 py-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-xl font-semibold text-[#111827] lg:text-2xl">Journal / All Habits</h1>
          <div className="flex items-center gap-2">
            {/* View toggle */}
            <div className="flex rounded-lg border border-[#E5E7EB] p-0.5">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={cn(
                  'flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition',
                  viewMode === 'grid' ? 'bg-[#2a67f4] text-white' : 'text-[#6B7280] hover:bg-[#F3F4F6]'
                )}
              >
                <GridIcon size={16} />
                Grid
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={cn(
                  'flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition',
                  viewMode === 'list' ? 'bg-[#2a67f4] text-white' : 'text-[#6B7280] hover:bg-[#F3F4F6]'
                )}
              >
                <ListIcon size={16} />
                List
              </button>
            </div>
            {/* Search */}
            {searchOpen ? (
              <div className="flex items-center gap-2">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search habits..."
                  autoFocus
                  className="w-40 rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#2a67f4] focus:outline-none sm:w-52"
                />
                <button
                  type="button"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery('');
                  }}
                  className="rounded p-2 text-[#6B7280] hover:bg-[#F3F4F6]"
                  aria-label="Close search"
                >
                  <ChevronDownIcon size={18} className="rotate-180" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E7EB] text-[#6B7280] hover:bg-[#F3F4F6]"
                aria-label="Search"
              >
                <SearchIcon size={18} />
              </button>
            )}
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E7EB] text-[#6B7280] hover:bg-[#F3F4F6]"
              aria-label="More options"
            >
              <MoreVerticalIcon size={18} />
            </button>
          </div>
        </div>
        {/* Filters: Area, Habit, Date range */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <select
            value={filterArea}
            onChange={(e) => setFilterArea(e.target.value)}
            className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#111827] focus:border-[#2a67f4] focus:outline-none"
          >
            <option value="">All areas</option>
            {areas.map((a) => (
              <option key={a.id} value={a.id}>{a.name}</option>
            ))}
          </select>
          <select
            value={filterHabitId}
            onChange={(e) => setFilterHabitId(e.target.value)}
            className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#111827] focus:border-[#2a67f4] focus:outline-none"
          >
            <option value="">All habits</option>
            {habits.filter((h) => !h.isArchived).map((h) => (
              <option key={h.id} value={h.id}>{h.name}</option>
            ))}
          </select>
          <div className="flex rounded-lg border border-[#E5E7EB] p-0.5">
            <button
              type="button"
              onClick={() => setDateRangePreset('week')}
              className={cn('rounded-md px-3 py-1.5 text-sm font-medium', dateRangePreset === 'week' ? 'bg-[#2a67f4] text-white' : 'text-[#6B7280] hover:bg-[#F3F4F6]')}
            >
              This week
            </button>
            <button
              type="button"
              onClick={() => setDateRangePreset('month')}
              className={cn('rounded-md px-3 py-1.5 text-sm font-medium', dateRangePreset === 'month' ? 'bg-[#2a67f4] text-white' : 'text-[#6B7280] hover:bg-[#F3F4F6]')}
            >
              This month
            </button>
          </div>
        </div>
        {/* Mood selector */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-sm font-medium text-[#6B7280]">Mood:</span>
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

      {/* Date strip - match expected: hamburger left, dates, striped cells below, Today + dot right */}
      <div className="border-b border-[#E5E7EB] px-4 py-0 sm:px-6">
        <div className="flex items-stretch gap-0 overflow-hidden">
          <button
            type="button"
            className="flex shrink-0 items-center justify-center border-r border-[#E5E7EB] py-3 px-3 text-[#6B7280] hover:bg-[#F9FAFB]"
            aria-label="Open date menu"
          >
            <MenuIcon size={20} />
          </button>
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex items-center gap-0 overflow-x-auto">
              {dayCells.filter(Boolean).slice(0, 31).map((d) => (
                <button
                  key={d!.toISOString()}
                  type="button"
                  onClick={() => setSelectedDate(d!)}
                  className={cn(
                    'flex min-w-[2.75rem] flex-col rounded-none px-1.5 py-2 text-center text-sm transition',
                    isToday(d!)
                      ? 'bg-[#2a67f4] text-white font-medium'
                      : 'text-[#6B7280] hover:bg-[#F3F4F6]'
                  )}
                >
                  <span className="text-[10px] leading-tight">{DAYS[d!.getDay()]}</span>
                  <span className="text-xs font-medium">{d!.getDate()}</span>
                </button>
              ))}
            </div>
            {/* Striped cells below dates - match expected hatched pattern */}
            <div className="flex gap-0 border-t border-[#E5E7EB]">
              {dayCells.filter(Boolean).slice(0, 31).map((d) => (
                <div
                  key={d!.toISOString()}
                  className="min-w-[2.75rem] flex-1 border-r border-[#E5E7EB] bg-[#F9FAFB] py-2"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(-45deg, #F3F4F6, #F3F4F6 1px, #F9FAFB 1px, #F9FAFB 4px)',
                  }}
                />
              ))}
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-1 border-l border-[#E5E7EB] bg-white py-2 pl-3 pr-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2a67f4]" aria-hidden />
            <span className="text-sm font-medium text-[#2a67f4]">Today</span>
            <span className="text-xs text-[#6B7280]">0</span>
          </div>
        </div>
      </div>

      {/* Content - match expected: pencil icon left on input, + Add habit = blue text only */}
      <div className="flex-1 px-4 py-4 sm:px-6 pb-24">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white py-2 pl-3 pr-4">
            <PencilIcon size={16} className="shrink-0 text-[#9CA3AF]" />
            <input
              type="text"
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
              placeholder="Set a To-do List"
              className="min-w-0 flex-1 bg-transparent text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none"
            />
          </div>
          <div className="relative flex items-center">
            <button
              type="button"
              onClick={() => setAddDropdownOpen((o) => !o)}
              className="flex items-center gap-1.5 text-sm font-medium text-[#2a67f4] hover:underline"
            >
              <PlusIcon size={18} className="shrink-0" />
              Add habit
            </button>
            {addDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  aria-hidden
                  onClick={() => setAddDropdownOpen(false)}
                />
                <div className="absolute left-0 top-full z-20 mt-1 w-52 rounded-lg border border-[#E5E7EB] bg-white py-1 shadow-lg">
                  <button
                    type="button"
                    onClick={openNewHabit}
                    className="flex w-full items-center justify-between gap-2 px-4 py-2.5 text-left text-sm text-[#374151] hover:bg-[#F3F4F6]"
                  >
                    Create Good Habit
                    <ChevronRightIcon size={14} className="text-[#9CA3AF]" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setAddDropdownOpen(false);
                      console.log('Break Bad Habit');
                    }}
                    className="flex w-full items-center justify-between gap-2 px-4 py-2.5 text-left text-sm text-[#374151] hover:bg-[#F3F4F6]"
                  >
                    Break Bad Habit
                    <ChevronRightIcon size={14} className="text-[#9CA3AF]" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setAddDropdownOpen(false);
                      console.log('Log mood');
                    }}
                    className="flex w-full items-center justify-between gap-2 px-4 py-2.5 text-left text-sm text-[#374151] hover:bg-[#F3F4F6]"
                  >
                    Log mood
                    <ChevronRightIcon size={14} className="text-[#9CA3AF]" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Habit list or grid - list view matches expected: icon, name, 0/1 times, Add (times), check, menu */}
        {viewMode === 'list' ? (
          <div className="space-y-4">
            {/* Incomplete habits */}
            {filteredHabits.filter((h) => h.done < h.goal).length > 0 && (
              <div>
                {filteredHabits.filter((h) => h.done < h.goal).map((habit) => (
                  <EnhancedHabitRow
                    key={habit.id}
                    habit={habit}
                    streak={streakData[habit.id]}
                    selected={selectedIds.has(habit.id)}
                    onToggleSelect={() => toggleSelect(habit.id)}
                    onAddTimes={(n) =>
                      setHabits((prev) =>
                        prev.map((x) => (x.id === habit.id ? { ...x, done: Math.max(0, x.done + n) } : x))
                      )
                    }
                    menuOpen={menuOpenId === habit.id}
                    onMenuToggle={() => setMenuOpenId(menuOpenId === habit.id ? null : habit.id)}
                    onEdit={() => setEditHabit(habit)}
                    onDuplicate={() => duplicateHabit(habit)}
                    onArchive={() => archiveHabit(habit.id)}
                    onDelete={() => deleteHabit(habit.id)}
                    onStartTimer={() => setTimerHabit({ habit, date: selectedDate })}
                  />
                ))}
              </div>
            )}
            {/* Success section */}
            {filteredHabits.filter((h) => h.done >= h.goal).length > 0 && (
              <div>
                <h3 className="mb-2 text-sm font-semibold text-[#111827]">
                  {filteredHabits.filter((h) => h.done >= h.goal).length} Success
                </h3>
                {filteredHabits.filter((h) => h.done >= h.goal).map((habit) => (
                  <EnhancedHabitRow
                    key={habit.id}
                    habit={habit}
                    streak={streakData[habit.id]}
                    selected={selectedIds.has(habit.id)}
                    completed
                    onToggleSelect={() => toggleSelect(habit.id)}
                    onAddTimes={(n) =>
                      setHabits((prev) =>
                        prev.map((x) => (x.id === habit.id ? { ...x, done: Math.max(0, x.done + n) } : x))
                      )
                    }
                    menuOpen={menuOpenId === habit.id}
                    onMenuToggle={() => setMenuOpenId(menuOpenId === habit.id ? null : habit.id)}
                    onEdit={() => setEditHabit(habit)}
                    onDuplicate={() => duplicateHabit(habit)}
                    onArchive={() => archiveHabit(habit.id)}
                    onDelete={() => deleteHabit(habit.id)}
                    onStartTimer={() => setTimerHabit({ habit, date: selectedDate })}
                  />
                ))}
              </div>
            )}
            {/* 1 Mood Logged section */}
            <div>
              <h3 className="mb-2 text-sm font-semibold text-[#111827]">1 Mood Logged</h3>
              <div className="flex items-center gap-3 rounded-lg border border-[#E5E7EB] bg-white px-4 py-3">
                <span className="text-xl" aria-hidden>😊</span>
                <span className="font-medium text-[#111827]">Good</span>
                <span className="ml-auto text-sm text-[#6B7280]">18:40</span>
              </div>
            </div>
          </div>
        ) : (
          /* Journal grid: rows = habits, columns = dates */
          (() => {
            const daysCount = dateRangePreset === 'week' ? 7 : 31;
            const end = new Date(selectedDate);
            const gridDates: Date[] = [];
            for (let i = daysCount - 1; i >= 0; i--) {
              const d = new Date(end);
              d.setDate(d.getDate() - i);
              gridDates.push(d);
            }
            return (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className="border border-[#E5E7EB] bg-[#F9FAFB] px-2 py-2 text-left font-medium text-[#111827] sticky left-0 z-10 min-w-[140px]">
                        Habit
                      </th>
                      {gridDates.map((d) => (
                        <th
                          key={d.toISOString()}
                          className={cn(
                            'border border-[#E5E7EB] px-1 py-2 text-center font-medium min-w-[2.5rem]',
                            isToday(d) ? 'bg-[#2a67f4] text-white' : 'bg-[#F9FAFB] text-[#6B7280]'
                          )}
                        >
                          <span className="block text-[10px]">{DAYS[d.getDay()]}</span>
                          <span className="block text-xs">{d.getDate()}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredHabits.map((habit) => (
                      <tr key={habit.id}>
                        <td className="border border-[#E5E7EB] bg-white px-2 py-1.5 sticky left-0 font-medium text-[#111827]">
                          {habit.name}
                        </td>
                        {gridDates.map((d) => {
                          const log = getLog(habit.id, d);
                          const note = getNote(habit.id, d);
                          const popover = cellPopover?.habitId === habit.id && cellPopover?.date.getTime() === d.getTime();
                          return (
                            <td
                              key={d.toISOString()}
                              className="border border-[#E5E7EB] p-0 align-middle"
                            >
                              <div className="relative flex items-center justify-center min-h-[2.5rem]">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setCellEditor({ habitId: habit.id, date: d });
                                  }}
                                  className={cn(
                                    'h-full min-w-[2.5rem] rounded transition',
                                    log?.status === 'completed' && 'bg-[#10B981] text-white',
                                    log?.status === 'skipped' && 'bg-[#F59E0B]/30 text-[#B45309]',
                                    log?.status === 'missed' && 'bg-[#EF4444]/20 text-[#DC2626]',
                                    !log && 'hover:bg-[#F3F4F6] text-[#9CA3AF]'
                                  )}
                                  title={log ? 'Click to edit' : 'Mark complete'}
                                >
                                  {log?.status === 'completed' && <CheckIcon size={16} />}
                                  {log?.status === 'skipped' && <span>−</span>}
                                  {log?.value != null && <span className="text-[10px]">{log.value}</span>}
                                </button>
                                {note && (
                                  <span className="absolute bottom-0 right-0 text-[10px] text-[#6B7280]" title={note}>
                                    <FileTextIcon size={10} />
                                  </span>
                                )}
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          })()
        )}
      </div>

      {/* Bottom bar - match expected: + Add habit blue text; Nothing selected; Complete/Skip/Fail grey when inactive */}
      <div className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-between gap-4 border-t border-[#E5E7EB] bg-white px-4 py-3 shadow-[0_-1px_3px_rgba(0,0,0,0.06)] lg:left-[260px]">
        <button
          type="button"
          onClick={() => setAddDropdownOpen((o) => !o)}
          className="flex items-center gap-1.5 text-sm font-medium text-[#2a67f4] hover:underline"
        >
          <PlusIcon size={18} />
          Add habit
        </button>
        <p className="text-sm text-[#9CA3AF]">
          {selectedIds.size === 0 ? 'Nothing selected' : `${selectedIds.size} selected`}
        </p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            disabled={selectedIds.size === 0}
            onClick={() => setStatus('complete')}
            className={cn(
              'flex items-center gap-1.5 text-sm font-medium',
              selectedIds.size > 0
                ? 'text-[#10B981] hover:underline'
                : 'cursor-default text-[#9CA3AF]'
            )}
          >
            <CheckIcon size={16} />
            Complete
          </button>
          <button
            type="button"
            disabled={selectedIds.size === 0}
            onClick={() => setStatus('skip')}
            className={cn(
              'flex items-center gap-1.5 text-sm font-medium',
              selectedIds.size > 0
                ? 'text-[#F59E0B] hover:underline'
                : 'cursor-default text-[#9CA3AF]'
            )}
          >
            <ChevronRightIcon size={16} />
            Skip
          </button>
          <button
            type="button"
            disabled={selectedIds.size === 0}
            onClick={() => setStatus('fail')}
            className={cn(
              'flex items-center gap-1.5 text-sm font-medium',
              selectedIds.size > 0
                ? 'text-[#EF4444] hover:underline'
                : 'cursor-default text-[#9CA3AF]'
            )}
          >
            <XIcon size={16} />
            Fail
          </button>
        </div>
      </div>

      <NewHabitModal areas={areas}
        open={newHabitOpen}
        onOpenChange={setNewHabitOpen}
        onSave={handleSaveHabit}
      />
      <EditHabitModal habit={editHabit} onClose={() => setEditHabit(null)} onSave={handleUpdateHabit} areas={areas} />

      {/* Cell Editor Modal */}
      {cellEditor && habits.find((h) => h.id === cellEditor.habitId) && (
        <HabitCellEditor
          habitId={cellEditor.habitId}
          habitName={habits.find((h) => h.id === cellEditor.habitId)?.name || ''}
          habitType={habits.find((h) => h.id === cellEditor.habitId)?.type || 'checkbox'}
          habitUnit={habits.find((h) => h.id === cellEditor.habitId)?.unit}
          date={cellEditor.date}
          initialEntry={habitLogs[logKey(cellEditor.habitId, cellEditor.date)]}
          onSave={(entry) => {
            if (entry) {
              setLog(cellEditor.habitId, cellEditor.date, entry);
            } else {
              setLog(cellEditor.habitId, cellEditor.date, null);
              setNote(cellEditor.habitId, cellEditor.date, '');
            }
            setCellEditor(null);
          }}
          onCancel={() => setCellEditor(null)}
        />
      )}

      {/* Timer Modal */}
      {timerHabit && (
        <HabitTimer
          habitName={timerHabit.habit.name}
          initialSeconds={habitLogs[logKey(timerHabit.habit.id, timerHabit.date)]?.durationMinutes ? habitLogs[logKey(timerHabit.habit.id, timerHabit.date)].durationMinutes! * 60 : 0}
          onSave={(durationSeconds) => {
            const durationMinutes = Math.round(durationSeconds / 60);
            setLog(timerHabit.habit.id, timerHabit.date, {
              status: 'completed',
              durationMinutes,
            });
            setTimerHabit(null);
          }}
          onCancel={() => setTimerHabit(null)}
        />
      )}
    </div>
  );
}
