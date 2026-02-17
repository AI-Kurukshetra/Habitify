'use client';

import { useParams } from 'next/navigation';
import { useDashboard } from '@/contexts/DashboardContext';
import Link from 'next/link';
import { InfinityIcon } from '@/components/ui/icons';

export default function AreaViewPage() {
  const params = useParams();
  const id = params?.id as string | undefined;
  const { areas, habits } = useDashboard();
  const area = areas.find((a) => a.id === id);
  const areaHabits = id ? habits.filter((h) => !h.isArchived && h.areaId === id) : [];

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
      <div className="border-b border-[#E5E7EB] px-4 py-4 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-[#111827]">Today</span>
          <span className="text-[#6B7280]">▾</span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <button type="button" className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-medium text-[#2a67f4]">
            Grid
          </button>
          <button type="button" className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-medium text-[#6B7280] hover:bg-[#F9FAFB]">
            List
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 text-center">
        <div className="flex justify-center gap-6 mb-6 opacity-60">
          <span className="text-5xl" aria-hidden>🧘</span>
          <span className="text-5xl" aria-hidden>🏃</span>
        </div>
        <h2 className="text-xl font-semibold text-[#111827] mb-2">Welcome to Journal</h2>
        <p className="text-sm text-[#6B7280] max-w-sm mb-6">
          Journal makes your habit progress visible day by day. It&apos;s empty now, but your journey can start with a single habit.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/dashboard?new=habit"
            className="inline-flex items-center gap-2 rounded-lg bg-[#2a67f4] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#2360dd]"
          >
            <InfinityIcon size={18} />
            Build new Habit
          </Link>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-medium text-[#374151] hover:bg-[#F9FAFB]"
          >
            <span aria-hidden>⊘</span>
            Break a Habit
          </button>
        </div>
        {areaHabits.length > 0 && (
          <p className="mt-4 text-xs text-[#9CA3AF]">
            {areaHabits.length} habit{areaHabits.length !== 1 ? 's' : ''} in {area.name}
          </p>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-between gap-4 border-t border-[#E5E7EB] bg-white px-4 py-3 shadow-[0_-1px_3px_rgba(0,0,0,0.06)] lg:left-[260px]">
        <Link href="/dashboard?new=habit" className="flex items-center gap-1.5 text-sm font-medium text-[#2a67f4] hover:underline">
          + Add habit
        </Link>
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
