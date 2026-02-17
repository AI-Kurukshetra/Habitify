'use client';

import { useState, useCallback, useMemo } from 'react';
import { cn } from '@/lib/utils';
import {
  PlusIcon,
  MoreVerticalIcon,
  PencilIcon,
  CopyIcon,
  ArchiveIcon,
  TrashIcon,
  FolderOpenIcon,
  InfinityIcon,
  SunIcon,
  MoonIcon,
} from '@/components/ui/icons';
import { NewHabitModal } from '@/components/dashboard/NewHabitModal';
import { EditHabitModal } from '@/components/dashboard/EditHabitModal';
import type { HabitItem } from '@/lib/dashboard-types';
import { useDashboard } from '@/contexts/DashboardContext';
import { habitMatchesTimeOfDay, newHabitPayloadToItem, type TimeOfDayFilter } from '@/lib/habitUtils';

function slotFilterKey(name: string): string {
  return name.toLowerCase().trim().replace(/\s+/g, '-');
}

const DEFAULT_TIME_OPTIONS = [
  { value: 'any', label: 'Any Time' },
  { value: 'morning', label: 'Morning' },
  { value: 'afternoon', label: 'Afternoon' },
  { value: 'evening', label: 'Evening' },
];

export default function HabitsPage() {
  const { habits, areas, timeOfDaySlots, addHabit, updateHabit, deleteHabit, archiveHabit } = useDashboard();
  const timeFilterOptions = useMemo(() => {
    if (timeOfDaySlots.length === 0) return DEFAULT_TIME_OPTIONS;
    return [
      { value: 'any', label: 'Any Time' },
      ...timeOfDaySlots.map((s) => ({ value: slotFilterKey(s.name), label: s.name })),
    ];
  }, [timeOfDaySlots]);
  const [newHabitOpen, setNewHabitOpen] = useState(false);
  const [editHabit, setEditHabit] = useState<HabitItem | null>(null);
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'active' | 'archived'>('active');
  const [timeFilter, setTimeFilter] = useState<string>('any');
  const [areaFilter, setAreaFilter] = useState<string>('');
  const [selectedHabitId, setSelectedHabitId] = useState<string | null>(null);

  const activeHabits = habits.filter((h) => !h.isArchived);
  const archivedHabits = habits.filter((h) => h.isArchived);
  const filtered = habits.filter((h) => {
    if (statusFilter === 'active' && h.isArchived) return false;
    if (statusFilter === 'archived' && !h.isArchived) return false;
    if (searchQuery.trim() && !h.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (areaFilter && h.areaId !== areaFilter) return false;
    if (timeFilter !== 'any' && !habitMatchesTimeOfDay(h, timeFilter as TimeOfDayFilter)) return false;
    return true;
  });

  const countByArea = (areaId: string | undefined) =>
    habits.filter((h) => !h.isArchived && (areaId ? h.areaId === areaId : !h.areaId)).length;

  const countByTime = (t: string) =>
    t === 'any' ? activeHabits.length : activeHabits.filter((h) => habitMatchesTimeOfDay(h, t as TimeOfDayFilter)).length;

  const handleSaveHabit = useCallback(
    async (payload: Parameters<typeof newHabitPayloadToItem>[0]) => {
      await addHabit(newHabitPayloadToItem(payload));
    },
    [addHabit]
  );

  const handleUpdateHabit = useCallback((updated: HabitItem) => {
    updateHabit(updated.id, {
      name: updated.name,
      description: updated.description,
      goal: updated.goal,
      areaId: updated.areaId,
      isArchived: updated.isArchived,
    });
    setEditHabit(null);
    setMenuOpenId(null);
  }, [updateHabit]);

  const duplicateHabit = useCallback(async (habit: HabitItem) => {
    const { id: _id, done: _d, createdAt: _c, updatedAt: _u, ...rest } = habit;
    await addHabit({ ...rest, name: `${habit.name} (copy)` });
    setMenuOpenId(null);
  }, [addHabit]);

  const archiveHabitLocal = useCallback((id: string) => {
    archiveHabit(id);
    setMenuOpenId(null);
  }, [archiveHabit]);

  const deleteHabitLocal = useCallback((id: string) => {
    deleteHabit(id);
    setMenuOpenId(null);
    setEditHabit((h) => (h?.id === id ? null : h));
    setSelectedHabitId((sid) => (sid === id ? null : sid));
  }, [deleteHabit]);

  const displayTime = (h: HabitItem) => h.reminders?.[0] ?? h.timeOfDay ?? '09:00';

  return (
    <div className="flex flex-col bg-white min-h-full overflow-x-hidden">
      <div className="border-b border-[#E5E7EB] px-4 py-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-xl font-semibold text-[#111827] lg:text-2xl">Manage Habits</h1>
          <div className="flex items-center gap-2">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search habits..."
              className="w-40 rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#2a67f4] focus:outline-none sm:w-52"
            />
            <button
              type="button"
              onClick={() => setNewHabitOpen(true)}
              className="flex items-center gap-1.5 rounded-lg bg-[#2a67f4] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#2360dd]"
            >
              <InfinityIcon size={18} />
              Build a new habit
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex min-h-0">
        {/* Left filters */}
        <aside className="w-52 shrink-0 border-r border-[#E5E7EB] bg-[#F9FAFB] p-4 space-y-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] mb-2">Status</p>
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => setStatusFilter('active')}
                className={cn('flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium', statusFilter === 'active' ? 'bg-[#2a67f4] text-white' : 'text-[#374151] hover:bg-[#E5E7EB]')}
              >
                <FolderOpenIcon size={16} />
                Active
                <span className="ml-auto text-xs opacity-80">{activeHabits.length}</span>
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter('archived')}
                className={cn('flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium', statusFilter === 'archived' ? 'bg-[#2a67f4] text-white' : 'text-[#374151] hover:bg-[#E5E7EB]')}
              >
                <FolderOpenIcon size={16} />
                Archived
                <span className="ml-auto text-xs opacity-80">{archivedHabits.length}</span>
              </button>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] mb-2">Time of Day</p>
            <div className="space-y-1">
              {timeFilterOptions.map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setTimeFilter(value)}
                  className={cn('flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm', timeFilter === value ? 'bg-[#EFF6FF] text-[#2a67f4] font-medium' : 'text-[#374151] hover:bg-[#E5E7EB]')}
                >
                  {value === 'any' ? <span className="w-4 h-4" /> : value === 'evening' ? <MoonIcon size={16} /> : <SunIcon size={16} />}
                  {label}
                  <span className="ml-auto text-xs text-[#6B7280]">{countByTime(value)}</span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] mb-2">AREAS</p>
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => setAreaFilter('')}
                className={cn('flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm', areaFilter === '' ? 'bg-[#EFF6FF] text-[#2a67f4] font-medium' : 'text-[#374151] hover:bg-[#E5E7EB]')}
              >
                <FolderOpenIcon size={16} />
                Uncategorized
                <span className="ml-auto text-xs text-[#6B7280]">{countByArea(undefined)}</span>
              </button>
              {areas.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setAreaFilter(a.id)}
                  className={cn('flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm', areaFilter === a.id ? 'bg-[#EFF6FF] text-[#2a67f4] font-medium' : 'text-[#374151] hover:bg-[#E5E7EB]')}
                >
                  <FolderOpenIcon size={16} />
                  {a.name}
                  <span className="ml-auto text-xs text-[#6B7280]">{countByArea(a.id)}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Habit list */}
        <div className="flex-1 min-w-0 overflow-x-hidden">
          <ul className="divide-y divide-[#E5E7EB]">
            {filtered.map((habit) => (
              <li key={habit.id}>
                <div
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 cursor-pointer',
                    selectedHabitId === habit.id ? 'bg-[#EFF6FF]' : 'hover:bg-[#F9FAFB]'
                  )}
                  onClick={() => setSelectedHabitId(habit.id)}
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-medium"
                    style={habit.color ? { backgroundColor: habit.color + '30', color: habit.color } : { backgroundColor: '#E5E7EB', color: '#6B7280' }}
                  >
                    {habit.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-[#111827] truncate">{habit.name}</p>
                  </div>
                  <span className="text-sm text-[#6B7280] shrink-0">{displayTime(habit)}</span>
                  <div className="relative shrink-0" onClick={(e) => e.stopPropagation()}>
                    <button
                      type="button"
                      onClick={() => setMenuOpenId(menuOpenId === habit.id ? null : habit.id)}
                      className="rounded p-2 text-[#6B7280] hover:bg-[#F3F4F6]"
                      aria-label="More options"
                    >
                      <MoreVerticalIcon size={18} />
                    </button>
                    {menuOpenId === habit.id && (
                      <>
                        <div className="fixed inset-0 z-10" aria-hidden onClick={() => setMenuOpenId(null)} />
                        <div className="absolute right-0 top-full z-20 mt-1 w-48 rounded-lg border border-[#E5E7EB] bg-white py-1 shadow-lg">
                          <button type="button" onClick={() => { setEditHabit(habit); setMenuOpenId(null); }} className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-[#374151] hover:bg-[#F3F4F6]">
                            <PencilIcon size={16} /> Edit
                          </button>
                          <button type="button" onClick={() => duplicateHabit(habit)} className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-[#374151] hover:bg-[#F3F4F6]">
                            <CopyIcon size={16} /> Duplicate
                          </button>
                          <button type="button" onClick={() => archiveHabitLocal(habit.id)} className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-[#374151] hover:bg-[#F3F4F6]">
                            <ArchiveIcon size={16} /> Archive
                          </button>
                          <button type="button" onClick={() => deleteHabitLocal(habit.id)} className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-[#EF4444] hover:bg-[#FEF2F2]">
                            <TrashIcon size={16} /> Delete
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center text-[#6B7280]">
              <p className="text-sm">No habits match the filters.</p>
              <button type="button" onClick={() => setNewHabitOpen(true)} className="mt-2 text-sm font-medium text-[#2a67f4] hover:underline">
                Build a new habit
              </button>
            </div>
          )}
        </div>
      </div>

      <NewHabitModal open={newHabitOpen} onOpenChange={setNewHabitOpen} onSave={handleSaveHabit} areas={areas} timeOfDayOptions={timeOfDaySlots.length ? timeOfDaySlots.map((s) => s.name) : undefined} />
      <EditHabitModal habit={editHabit} onClose={() => setEditHabit(null)} onSave={handleUpdateHabit} areas={areas} />
    </div>
  );
}
