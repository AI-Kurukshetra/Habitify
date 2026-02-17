/** Shared types for dashboard (habits, areas, logs, mood, streaks). */

/**
 * Habit type determines how the habit is tracked:
 * - checkbox: simple yes/no completion (default)
 * - number: numeric tracking (e.g., 5 pushups, 2 km run)
 * - duration: time-based tracking (e.g., 30 min meditation)
 */
export type HabitType = 'checkbox' | 'number' | 'duration';

/**
 * Frequency type for recurring habits
 */
export type FrequencyType = 'daily' | 'weekly' | 'monthly' | 'custom';

/**
 * Frequency schedule for habits
 */
export type FrequencySchedule = {
  type: FrequencyType;
  daysOfWeek?: number[]; // 0 = Sunday, 6 = Saturday
  monthlyDate?: number; // 1-31
  customRule?: string;
};

/**
 * Main Habit Item
 */
export type HabitItem = {
  id: string;
  name: string;
  description?: string;
  done: number; // Current completion count today
  goal: number; // Target completion count
  status?: 'complete' | 'skip' | 'fail';
  type: HabitType; // checkbox, number, or duration
  unit?: string; // e.g., "km", "minutes", "pages"
  areaId?: string;
  isArchived?: boolean;
  color?: string;
  icon?: string;
  
  // Schedule
  frequency?: FrequencySchedule;
  /** Time of day: "Morning" | "Afternoon" | "Evening" or array of them (for filtering) */
  timeOfDay?: string | string[];
  startDate?: string; // YYYY-MM-DD
  endDate?: string; // YYYY-MM-DD (optional)
  
  // Reminders
  reminders?: string[]; // e.g., ["08:00", "18:00"]
  
  // Tags/Categories
  tags?: string[];
  
  // Metadata
  createdAt?: string;
  updatedAt?: string;
};

/**
 * Streak tracking
 */
export type StreakData = {
  habitId: string;
  currentStreak: number; // Consecutive days completed
  longestStreak: number; // Historical longest streak
  lastCompletedDate?: string; // YYYY-MM-DD
};

/**
 * Area/Category
 */
export type AreaItem = {
  id: string;
  name: string;
  color: string;
  icon?: string;
  order: number;
};

/**
 * Individual log entry for a habit on a specific date
 */
export type HabitLog = {
  habitId: string;
  date: string; // YYYY-MM-DD
  status: 'completed' | 'skipped' | 'missed';
  value?: number; // For numeric habits
  durationMinutes?: number; // For duration habits
  durationSeconds?: number; // Fine-grained time tracking
};

/**
 * Note attached to a habit on a specific date
 */
export type HabitNote = {
  habitId: string;
  date: string; // YYYY-MM-DD
  note: string;
  imageUrl?: string;
};

/**
 * Daily mood tracking
 */
export type MoodEntry = {
  userId: string;
  date: string; // YYYY-MM-DD
  moodLevel: number; // 1-4 or 1-5 scale
  emoji?: string; // e.g., "😊"
  note?: string;
};

/**
 * Timer/Session tracking for duration habits
 */
export type TimerSession = {
  id: string;
  habitId: string;
  date: string; // YYYY-MM-DD
  startTime: string; // ISO timestamp
  endTime?: string; // ISO timestamp (null if still running)
  durationSeconds: number;
};

export const DEFAULT_AREAS: AreaItem[] = [
  { id: 'area-1', name: 'Health', color: '#10B981', order: 0 },
  { id: 'area-2', name: 'todo list', color: '#2a67f4', order: 1 },
];

export const DEFAULT_HABITS: HabitItem[] = [
  { 
    id: '1', 
    name: 'test', 
    done: 0, 
    goal: 1, 
    type: 'checkbox',
    areaId: 'area-1',
    frequency: { type: 'daily' }
  },
  { 
    id: '2', 
    name: 'Set a To-do List', 
    done: 1, 
    goal: 1, 
    type: 'checkbox',
    areaId: 'area-2',
    frequency: { type: 'daily' }
  },
];
