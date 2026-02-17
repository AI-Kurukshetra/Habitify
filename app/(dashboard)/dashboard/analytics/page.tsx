'use client';

import { cn } from '@/lib/utils';
import { BarChartIcon } from '@/components/ui/icons';
import { Progress } from '@/components/ui/Progress';

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col bg-white min-h-full">
      <div className="border-b border-[#E5E7EB] px-4 py-4 sm:px-6">
        <h1 className="text-xl font-semibold text-[#111827] lg:text-2xl">Analytics / Insights</h1>
        <p className="mt-1 text-sm text-[#6B7280]">Completion rate, streaks, and weekly/monthly trends.</p>
      </div>

      <div className="flex-1 px-4 py-6 sm:px-6 space-y-6">
        {/* Completion rate */}
        <section className="rounded-xl border border-[#E5E7EB] bg-white p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#6B7280] mb-3">
            Completion rate
          </h2>
          <div className="flex items-end gap-2 h-32">
            {[65, 80, 45, 90, 70, 85, 75].map((val, i) => (
              <div
                key={i}
                className="flex-1 flex flex-col items-center gap-1"
              >
                <div
                  className="w-full rounded-t bg-[#2a67f4] min-h-[4px] transition-all"
                  style={{ height: `${val}%` }}
                />
                <span className="text-[10px] text-[#6B7280]">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'][i]}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-2 text-sm text-[#6B7280]">Last 7 days</p>
        </section>

        {/* Streaks */}
        <section className="rounded-xl border border-[#E5E7EB] bg-white p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#6B7280] mb-3">
            Streaks
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-[#F9FAFB] p-4 text-center">
              <p className="text-2xl font-bold text-[#111827]">3</p>
              <p className="text-xs text-[#6B7280]">Current streak (days)</p>
            </div>
            <div className="rounded-lg bg-[#F9FAFB] p-4 text-center">
              <p className="text-2xl font-bold text-[#111827]">12</p>
              <p className="text-xs text-[#6B7280]">Longest streak</p>
            </div>
            <div className="rounded-lg bg-[#F9FAFB] p-4 text-center sm:col-span-1 col-span-2">
              <p className="text-2xl font-bold text-[#10B981]">78%</p>
              <p className="text-xs text-[#6B7280]">Weekly average</p>
            </div>
          </div>
        </section>

        {/* Weekly / monthly trends placeholder */}
        <section className="rounded-xl border border-[#E5E7EB] bg-white p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#6B7280] mb-3">
            Weekly / monthly trends
          </h2>
          <div className="flex flex-col items-center justify-center py-8 text-center text-[#9CA3AF]">
            <BarChartIcon size={48} className="mb-2" />
            <p className="text-sm">Charts derived from habit_logs (read-only).</p>
            <p className="text-xs mt-1">Wire to your data source for completion rate and streak calculations.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
