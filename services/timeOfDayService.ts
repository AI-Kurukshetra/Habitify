import { supabase } from '@/lib/supabaseClient';
import { ensureTableExists } from '@/lib/supabase/tableManager';
import { TIME_OF_DAY_TABLE_NAME, timeOfDayTableSchema } from '@/lib/supabase/schemas/time_of_day.schema';

export type TimeOfDaySlot = {
  id: string;
  name: string;
  icon: string | null;
  startTime: string;
  endTime: string;
  color: string | null;
  sortOrder: number;
  createdAt?: string;
  updatedAt?: string;
};

export async function fetchUserTimeOfDaySlots(): Promise<TimeOfDaySlot[]> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  await ensureTableExists(supabase as any, TIME_OF_DAY_TABLE_NAME, timeOfDayTableSchema);

  const { data, error } = await supabase
    .from(TIME_OF_DAY_TABLE_NAME)
    .select('*')
    .eq('user_id', user.id)
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('Error fetching time of day slots:', error);
    return [];
  }

  return (data || []).map((row: any) => ({
    id: row.id,
    name: row.name,
    icon: row.icon,
    startTime: row.start_time,
    endTime: row.end_time,
    color: row.color,
    sortOrder: row.sort_order ?? 0,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  }));
}

export async function createTimeOfDaySlot(
  slot: Omit<TimeOfDaySlot, 'id' | 'createdAt' | 'updatedAt'>
): Promise<TimeOfDaySlot | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  await ensureTableExists(supabase as any, TIME_OF_DAY_TABLE_NAME, timeOfDayTableSchema);

  const { data: existing } = await supabase
    .from(TIME_OF_DAY_TABLE_NAME)
    .select('sort_order')
    .eq('user_id', user.id)
    .order('sort_order', { ascending: false })
    .limit(1)
    .maybeSingle();

  const sort_order = (existing?.sort_order ?? -1) + 1;

  const { data, error } = await supabase
    .from(TIME_OF_DAY_TABLE_NAME)
    .insert({
      user_id: user.id,
      name: slot.name,
      icon: slot.icon,
      start_time: slot.startTime,
      end_time: slot.endTime,
      color: slot.color,
      sort_order,
    })
    .select()
    .single();

  if (error) {
    console.error('Error creating time of day slot:', error);
    return null;
  }

  return {
    id: data.id,
    name: data.name,
    icon: data.icon,
    startTime: data.start_time,
    endTime: data.end_time,
    color: data.color,
    sortOrder: data.sort_order,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };
}

export async function updateTimeOfDaySlot(
  id: string,
  updates: Partial<Omit<TimeOfDaySlot, 'id' | 'createdAt' | 'updatedAt'>>
): Promise<TimeOfDaySlot | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  await ensureTableExists(supabase as any, TIME_OF_DAY_TABLE_NAME, timeOfDayTableSchema);

  const row: Record<string, unknown> = {};
  if (updates.name != null) row.name = updates.name;
  if (updates.icon != null) row.icon = updates.icon;
  if (updates.startTime != null) row.start_time = updates.startTime;
  if (updates.endTime != null) row.end_time = updates.endTime;
  if (updates.color != null) row.color = updates.color;
  if (updates.sortOrder != null) row.sort_order = updates.sortOrder;
  row.updated_at = new Date().toISOString();

  const { data, error } = await supabase
    .from(TIME_OF_DAY_TABLE_NAME)
    .update(row)
    .eq('id', id)
    .eq('user_id', user.id)
    .select()
    .single();

  if (error) {
    console.error('Error updating time of day slot:', error);
    return null;
  }

  return {
    id: data.id,
    name: data.name,
    icon: data.icon,
    startTime: data.start_time,
    endTime: data.end_time,
    color: data.color,
    sortOrder: data.sort_order,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };
}

export async function deleteTimeOfDaySlot(id: string): Promise<boolean> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;

  await ensureTableExists(supabase as any, TIME_OF_DAY_TABLE_NAME, timeOfDayTableSchema);

  const { error } = await supabase
    .from(TIME_OF_DAY_TABLE_NAME)
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) {
    console.error('Error deleting time of day slot:', error);
    return false;
  }
  return true;
}
