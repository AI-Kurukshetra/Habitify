'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { useDashboard } from '@/contexts/DashboardContext';
import Link from 'next/link';
import { FolderOpenIcon, InfinityIcon } from '@/components/ui/icons';
import { EnhancedHabitRow } from '@/components/dashboard/EnhancedHabitRow';
import { useState } from 'react';
import { habitMatchesTimeOfDay, type TimeOfDayFilter } from '@/lib/habitUtils';

export default function AreaViewPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const timeFilter = searchParams?.get('filter') as TimeOfDayFilter | null;
  const id = params?.id as string | undefined;
  const { areas, habits, setNewAreaModalOpen } = useDashboard();
  const area = areas.find((a) => a.id === id);
  const areaHabitsRaw = id ? habits.filter((h) => !h.isArchived && h.areaId === id) : [];
  const areaHabits = timeFilter
    ? areaHabitsRaw.filter((h) => habitMatchesTimeOfDay(h, timeFilter as string))
    : areaHabitsRaw;
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);

  if (!id || !area) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <p className="text-[#6B7280]">Area not found.</p>
        <Link href="/dashboard" className="mt-2 text-sm font-medium text-[#2a67f4] hover:underline">
          Back to All Habits
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-white min-h-full overflow-x-hidden">
      {/* Header */}
      <div className="border-b border-[#E5E7EB] px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div 
            className="flex h-10 w-10 items-center justify-center rounded-lg"
            style={{ backgroundColor: area.color }}
          >
            <FolderOpenIcon size={18} className="text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-2xl font-bold text-[#111827]">{area.name}</h1>
            <p className="text-sm text-[#6B7280]">
              {areaHabits.length} habit{areaHabits.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-4 sm:px-6 overflow-y-auto pb-24">
        {areaHabits.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="flex justify-center gap-6 mb-6 opacity-60">
              <span className="text-5xl" aria-hidden>📋</span>
              <span className="text-5xl" aria-hidden>✨</span>
            </div>
            <h2 className="text-xl font-semibold text-[#111827] mb-2">No habits yet</h2>
            <p className="text-sm text-[#6B7280] max-w-sm mb-6">
              Create your first habit in {area.name} to get started on your journey.
            </p>
            <button
              type="button"
              onClick={() => setNewAreaModalOpen(false)}
              className="inline-flex items-center gap-2 rounded-lg bg-[#2a67f4] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#2360dd]"
            >
              <InfinityIcon size={18} />
              Build new Habit
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-[#111827]">Habits in {area.name}</h2>
            {areaHabits.map((habit) => (
              <EnhancedHabitRow
                key={habit.id}
                habit={habit}
                menuOpen={menuOpenId === habit.id}
                onMenuToggle={() => setMenuOpenId(menuOpenId === habit.id ? null : habit.id)}
                onAddTimes={() => {}}
                onToggleSelect={() => {}}
                selected={false}
              />
            ))}
          </div>
        )}
      </div>

      {/* Bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-between gap-4 border-t border-[#E5E7EB] bg-white px-4 py-3 shadow-[0_-1px_3px_rgba(0,0,0,0.06)] lg:left-[260px]">
        <button
          type="button"
          className="flex items-center gap-1.5 text-sm font-medium text-[#2a67f4] hover:underline"
        >
          + Add habit
        </button>
        <p className="text-sm text-[#9CA3AF]">Nothing selected</p>
        <div className="flex items-center gap-3 text-sm font-medium text-[#9CA3AF]">
          <span>✓ Complete</span>
          <span>→ Skip</span>
          <span>✕ Fail</span>
        </div>
      </div>
    </div>
  );
}
