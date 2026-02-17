'use client';

import { useState, useCallback, useEffect } from 'react';
import { PlayIcon, StopIcon, XIcon } from '@/components/ui/icons';
import { cn } from '@/lib/utils';

interface TimerProps {
  habitName: string;
  onSave: (durationSeconds: number) => void;
  onCancel: () => void;
  initialSeconds?: number;
}

function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  if (hours > 0) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export function HabitTimer({ habitName, onSave, onCancel, initialSeconds = 0 }: TimerProps) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const toggleTimer = useCallback(() => {
    setIsRunning((prev) => !prev);
  }, []);

  const handleSave = useCallback(() => {
    setIsRunning(false);
    onSave(seconds);
  }, [seconds, onSave]);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="rounded-lg bg-white p-6 w-96 shadow-2xl">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Timer for {habitName}</h3>
        
        <div className="flex items-center justify-center mb-6">
          <div className="text-6xl font-mono font-bold text-blue-600">
            {formatTime(seconds)}
          </div>
        </div>

        <div className="flex gap-3 mb-4">
          <button
            type="button"
            onClick={toggleTimer}
            className={cn(
              'flex-1 flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition',
              isRunning
                ? 'bg-red-100 text-red-700 hover:bg-red-200'
                : 'bg-green-100 text-green-700 hover:bg-green-200'
            )}
          >
            {isRunning ? (
              <>
                <StopIcon size={18} />
                Stop
              </>
            ) : (
              <>
                <PlayIcon size={18} />
                Start
              </>
            )}
          </button>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
