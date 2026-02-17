'use client';

import { useState, useCallback } from 'react';
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
} from '@/components/ui/icons';
import { NewHabitModal } from '@/components/dashboard/NewHabitModal';

export type HabitItem = {
  id: string;
  name: string;
  done: number;
  goal: number;
  status?: 'complete' | 'skip' | 'fail';
};

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const INITIAL_HABITS: HabitItem[] = [
  { id: '1', name: 'test', done: 0, goal: 1 },
  { id: '2', name: 'Set a To-do List', done: 1, goal: 1 },
];

function HabitRow({
  habit,
  selected,
  onToggleSelect,
  onAddTimes,
  completed,
}: {
  habit: HabitItem;
  selected: boolean;
  onToggleSelect: () => void;
  onAddTimes: (delta: number) => void;
  completed?: boolean;
}) {
  const initial = habit.name.charAt(0).toUpperCase();
  const isWrench = habit.name.toLowerCase().includes('to-do');
  const isRun = habit.name.toLowerCase() === 'test';
  return (
    <div
      className={cn(
        'flex items-center gap-3 border border-[#E5E7EB] px-4 py-3',
        selected && 'border-[#2a67f4] bg-[#EFF6FF]'
      )}
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E5E7EB] text-sm font-medium text-[#6B7280]">
        {isWrench ? <WrenchIcon size={16} /> : isRun ? <RunIcon size={16} /> : initial}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate font-medium text-[#111827]">{habit.name}</p>
        <p className="text-sm text-[#6B7280]">
          {habit.done}/{habit.goal} times
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-1">
        <span className="text-xs text-[#6B7280]">Add (times)</span>
        <div className="flex items-center rounded border border-[#E5E7EB] bg-white">
          <button
            type="button"
            onClick={() => onAddTimes(-1)}
            className="flex h-7 w-6 items-center justify-center text-[#6B7280] hover:bg-[#F3F4F6]"
            aria-label="Decrease"
          >
            −
          </button>
          <span className="min-w-[1.5rem] py-0.5 text-center text-sm">{habit.goal}</span>
          <button
            type="button"
            onClick={() => onAddTimes(1)}
            className="flex h-7 w-6 items-center justify-center text-[#6B7280] hover:bg-[#F3F4F6]"
            aria-label="Increase"
          >
            +
          </button>
        </div>
      </div>
      <button
        type="button"
        onClick={onToggleSelect}
        className={cn(
          'flex h-6 w-6 shrink-0 items-center justify-center rounded-full',
          completed || habit.done >= habit.goal ? 'text-[#10B981]' : 'text-[#2a67f4]'
        )}
        aria-label={selected ? 'Deselect' : 'Select'}
      >
        <CheckIcon size={18} />
      </button>
      <button
        type="button"
        className="rounded p-1.5 text-[#6B7280] hover:bg-[#F3F4F6]"
        aria-label="More options"
      >
        <MoreVerticalIcon size={18} />
      </button>
    </div>
  );
}

function getDaysInMonth(year: number, month: number) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const start = first.getDay();
  const count = last.getDate();
  return { start, count };
}

export function DashboardContent() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [habits, setHabits] = useState<HabitItem[]>(INITIAL_HABITS);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [addDropdownOpen, setAddDropdownOpen] = useState(false);
  const [newHabitOpen, setNewHabitOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(() => new Date());
  const [todoInput, setTodoInput] = useState('');

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

  const filteredHabits = searchQuery.trim()
    ? habits.filter((h) => h.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : habits;

  const openNewHabit = () => {
    setAddDropdownOpen(false);
    setNewHabitOpen(true);
  };

  const handleSaveHabit = useCallback(
    (habit: { name: string; repeat: string; goal: string; timeOfDay: string[]; startDate: string; reminders: string[]; area: string }) => {
      setHabits((prev) => [
        ...prev,
        {
          id: String(Date.now()),
          name: habit.name,
          done: 0,
          goal: parseInt(habit.goal, 10) || 1,
        },
      ]);
    },
    []
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
          <h1 className="text-xl font-semibold text-[#111827] lg:text-2xl">All Habits</h1>
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
                  <HabitRow
                    key={habit.id}
                    habit={habit}
                    selected={selectedIds.has(habit.id)}
                    onToggleSelect={() => toggleSelect(habit.id)}
                    onAddTimes={(n) =>
                      setHabits((prev) =>
                        prev.map((x) => (x.id === habit.id ? { ...x, goal: Math.max(1, x.goal + n) } : x))
                      )
                    }
                  />
                ))}
              </div>
            )}
            {/* 1 Success section */}
            {filteredHabits.filter((h) => h.done >= h.goal).length > 0 && (
              <div>
                <h3 className="mb-2 text-sm font-semibold text-[#111827]">
                  {filteredHabits.filter((h) => h.done >= h.goal).length} Success
                </h3>
                {filteredHabits.filter((h) => h.done >= h.goal).map((habit) => (
                  <HabitRow
                    key={habit.id}
                    habit={habit}
                    selected={selectedIds.has(habit.id)}
                    onToggleSelect={() => toggleSelect(habit.id)}
                    onAddTimes={(n) =>
                      setHabits((prev) =>
                        prev.map((x) => (x.id === habit.id ? { ...x, goal: Math.max(1, x.goal + n) } : x))
                      )
                    }
                    completed
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
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredHabits.map((habit) => (
              <div
                key={habit.id}
                onClick={() => toggleSelect(habit.id)}
                className={cn(
                  'cursor-pointer rounded-xl border p-4 transition',
                  selectedIds.has(habit.id)
                    ? 'border-[#2a67f4] bg-[#EFF6FF]'
                    : 'border-[#E5E7EB] bg-white hover:border-[#D1D5DB]'
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="font-medium text-[#111827]">{habit.name}</p>
                  <span className={cn(
                    'flex h-6 w-6 shrink-0 items-center justify-center rounded-full',
                    selectedIds.has(habit.id) && 'bg-[#2a67f4] text-white',
                    habit.done >= habit.goal && !selectedIds.has(habit.id) && 'bg-[#10B981] text-white'
                  )}>
                    {(selectedIds.has(habit.id) || habit.done >= habit.goal) && <CheckIcon size={14} />}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[#6B7280]">{habit.done}/{habit.goal} times</p>
              </div>
            ))}
          </div>
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

      <NewHabitModal
        open={newHabitOpen}
        onOpenChange={setNewHabitOpen}
        onSave={handleSaveHabit}
      />
    </div>
  );
}
