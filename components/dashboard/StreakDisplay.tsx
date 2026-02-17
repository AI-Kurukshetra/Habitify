'use client';

import { StreakData } from '@/lib/dashboard-types';
import { FlameIcon } from '@/components/ui/icons';

interface StreakDisplayProps {
  streakData: StreakData;
  size?: 'sm' | 'md' | 'lg';
}

export function StreakDisplay({ streakData, size = 'md' }: StreakDisplayProps) {
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-2.5 py-1.5',
    lg: 'text-base px-3 py-2',
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18,
  };

  return (
    <div className="flex items-center gap-1">
      {streakData.currentStreak > 0 && (
        <div className={`flex items-center gap-1 rounded-full bg-orange-100 text-orange-700 font-medium ${sizeClasses[size]}`}>
          <FlameIcon size={iconSizes[size]} />
          <span>{streakData.currentStreak}</span>
        </div>
      )}
      {streakData.longestStreak > 0 && streakData.longestStreak !== streakData.currentStreak && (
        <div className={`flex items-center gap-0.5 rounded text-gray-600 text-xs px-1.5 py-1`}>
          <span>Best: {streakData.longestStreak}</span>
        </div>
      )}
    </div>
  );
}
