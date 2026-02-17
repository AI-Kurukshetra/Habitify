import { supabase } from '@/lib/supabaseClient';
import { ensureTableExists } from '@/lib/supabase/tableManager';
import { HABIT_LOGS_TABLE_NAME, habitLogsTableSchema } from '@/lib/supabase/schemas/habit_logs.schema';

export type LogStatus = 'completed' | 'skipped' | 'missed';

export type HabitLogRow = {
  id: string;
  habit_id: string;
  user_id: string;
  log_date: string;
  status: LogStatus;
  value?: number;
  duration_minutes?: number;
  note?: string;
  created_at?: string;
  updated_at?: string;
};

function dateToYMD(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export async function fetchLogsForDateRange(
  startDate: Date,
  endDate: Date
): Promise<HabitLogRow[]> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  await ensureTableExists(supabase as any, HABIT_LOGS_TABLE_NAME, habitLogsTableSchema);

  const start = dateToYMD(startDate);
  const end = dateToYMD(endDate);

  const { data, error } = await supabase
    .from(HABIT_LOGS_TABLE_NAME)
    .select('*')
    .eq('user_id', user.id)
    .gte('log_date', start)
    .lte('log_date', end)
    .order('log_date', { ascending: false });

  if (error) {
    console.error('Error fetching habit logs:', error);
    return [];
  }
  return (data || []) as HabitLogRow[];
}

export async function upsertLog(
  habitId: string,
  logDate: Date,
  entry: {
    status: LogStatus;
    value?: number;
    durationMinutes?: number;
    note?: string;
  }
): Promise<HabitLogRow | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  await ensureTableExists(supabase as any, HABIT_LOGS_TABLE_NAME, habitLogsTableSchema);

  const log_date = dateToYMD(logDate);
  const row = {
    habit_id: habitId,
    user_id: user.id,
    log_date,
    status: entry.status,
    value: entry.value ?? null,
    duration_minutes: entry.durationMinutes ?? null,
    note: entry.note ?? null,
    updated_at: new Date().toISOString(),
  };

  const { data: existing } = await supabase
    .from(HABIT_LOGS_TABLE_NAME)
    .select('id')
    .eq('habit_id', habitId)
    .eq('user_id', user.id)
    .eq('log_date', log_date)
    .maybeSingle();

  if (existing) {
    const { data: updated, error } = await supabase
      .from(HABIT_LOGS_TABLE_NAME)
      .update(row)
      .eq('id', existing.id)
      .select()
      .single();
    if (error) {
      console.error('Error updating habit log:', error);
      return null;
    }
    return updated as HabitLogRow;
  }

  const { data: inserted, error } = await supabase
    .from(HABIT_LOGS_TABLE_NAME)
    .insert(row)
    .select()
    .single();
  if (error) {
    console.error('Error inserting habit log:', error);
    return null;
  }
  return inserted as HabitLogRow;
}

export async function deleteLog(habitId: string, logDate: Date): Promise<boolean> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;

  await ensureTableExists(supabase as any, HABIT_LOGS_TABLE_NAME, habitLogsTableSchema);

  const log_date = dateToYMD(logDate);
  const { error } = await supabase
    .from(HABIT_LOGS_TABLE_NAME)
    .delete()
    .eq('habit_id', habitId)
    .eq('user_id', user.id)
    .eq('log_date', log_date);

  if (error) {
    console.error('Error deleting habit log:', error);
    return false;
  }
  return true;
}

export async function deleteAllLogsForHabit(habitId: string): Promise<boolean> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;

  await ensureTableExists(supabase as any, HABIT_LOGS_TABLE_NAME, habitLogsTableSchema);

  const { error } = await supabase
    .from(HABIT_LOGS_TABLE_NAME)
    .delete()
    .eq('habit_id', habitId)
    .eq('user_id', user.id);

  if (error) {
    console.error('Error deleting habit logs:', error);
    return false;
  }
  return true;
}
