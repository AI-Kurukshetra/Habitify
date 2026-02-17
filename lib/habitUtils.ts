import type { HabitItem } from '@/lib/dashboard-types';

export type TimeOfDayFilter = string; // e.g. 'morning', 'afternoon', 'evening', or custom slot name

/** Payload from NewHabitModal onSave */
export type NewHabitPayload = {
  name: string;
  description?: string;
  repeat: string;
  goal: string;
  timeOfDay: string[];
  startDate: string;
  reminders: string[];
  area: string;
  type?: 'checkbox' | 'number' | 'duration';
  target_value?: number;
  unit?: string;
  days_of_week?: number[];
  color?: string;
  icon?: string;
};

/** Map NewHabitModal payload to habit create shape (for addHabit / createHabit) */
export function newHabitPayloadToItem(payload: NewHabitPayload): Omit<HabitItem, 'id' | 'done' | 'createdAt' | 'updatedAt'> & { target_value?: number; days_of_week?: number[] } {
  return {
    name: payload.name || 'New Habit',
    description: payload.description,
    goal: parseInt(payload.goal, 10) || 1,
    type: (payload.type ?? 'checkbox') as HabitItem['type'],
    areaId: payload.area || undefined,
    color: payload.color,
    icon: payload.icon,
    frequency: { type: 'daily' },
    timeOfDay: payload.timeOfDay?.length ? payload.timeOfDay : undefined,
    reminders: payload.reminders,
    startDate: payload.startDate,
    unit: payload.unit,
    ...(payload.target_value != null && { target_value: payload.target_value }),
    ...(payload.days_of_week != null && { days_of_week: payload.days_of_week }),
  };
}

/** Normalize habit's timeOfDay to an array of lowercase strings for matching */
function getTimeOfDayValues(habit: HabitItem): string[] {
  const t = habit.timeOfDay;
  if (!t) return [];
  const arr = Array.isArray(t) ? t : [t];
  return arr.map((s) => s.toLowerCase().trim()).filter(Boolean);
}

/** Returns true if habit matches the time-of-day filter (e.g. morning, afternoon, evening, or custom slot name) */
export function habitMatchesTimeOfDay(habit: HabitItem, filter: TimeOfDayFilter): boolean {
  const values = getTimeOfDayValues(habit);
  if (values.length === 0) return true; // no preference = show in all
  const f = (filter || '').toLowerCase().trim();
  return values.some((v) => v === f || v.replace(/\s+/g, '-') === f.replace(/\s+/g, '-'));
}
