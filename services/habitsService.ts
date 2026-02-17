import { supabase } from '@/lib/supabaseClient';
import type { HabitItem } from '@/lib/dashboard-types';
import { ensureTableExists } from '@/lib/supabase/tableManager';
import { HABITS_TABLE_NAME, habitsTableSchema } from '@/lib/supabase/schemas/habits.schema';

export async function fetchUserHabits(): Promise<HabitItem[]> {
  try {
    await ensureTableExists(supabase as any, HABITS_TABLE_NAME, habitsTableSchema);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];

    const { data, error } = await supabase
      .from('habits')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching habits:', error);
      return [];
    }

    return (data || []).map((habit: any) => {
      const timeOfDay = habit.time_of_day;
      return {
        id: habit.id,
        name: habit.name,
        description: habit.description,
        done: 0,
        goal: habit.goal || 1,
        type: habit.type || 'checkbox',
        unit: habit.unit,
        areaId: habit.area_id,
        isArchived: habit.is_archived || false,
        color: habit.color,
        icon: habit.icon,
        frequency: habit.frequency,
        timeOfDay: Array.isArray(timeOfDay) ? timeOfDay : timeOfDay != null ? [timeOfDay] : undefined,
        reminders: habit.reminders,
        startDate: habit.start_date,
        endDate: habit.end_date,
        tags: habit.tags,
        createdAt: habit.created_at,
        updatedAt: habit.updated_at,
      };
    });
  } catch (error) {
    console.error('Error fetching habits:', error);
    return [];
  }
}

export async function createHabit(habit: Omit<HabitItem, 'id' | 'done' | 'createdAt' | 'updatedAt'>): Promise<HabitItem | null> {
  try {
    await ensureTableExists(supabase as any, HABITS_TABLE_NAME, habitsTableSchema);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data, error } = await supabase
      .from('habits')
      .insert({
        user_id: user.id,
        name: habit.name,
        description: habit.description,
        type: habit.type || 'checkbox',
        area_id: habit.areaId,
        color: habit.color,
        icon: habit.icon,
        frequency: habit.frequency,
        time_of_day: habit.timeOfDay,
        reminders: habit.reminders,
        start_date: habit.startDate,
        end_date: habit.endDate,
        goal: habit.goal || 1,
        unit: habit.unit,
        target_value: (habit as any).target_value,
        days_of_week: (habit as any).days_of_week,
        tags: habit.tags,
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating habit:', error);
      return null;
    }

    return {
      id: data.id,
      name: data.name,
      description: data.description,
      done: 0,
      goal: data.goal || 1,
      type: data.type || 'checkbox',
      unit: data.unit,
      areaId: data.area_id,
      isArchived: data.is_archived || false,
      color: data.color,
      icon: data.icon,
      frequency: data.frequency,
      timeOfDay: data.time_of_day,
      reminders: data.reminders,
      startDate: data.start_date,
      endDate: data.end_date,
      tags: data.tags,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    };
  } catch (error) {
    console.error('Error creating habit:', error);
    return null;
  }
}

export async function updateHabit(id: string, habit: Partial<Omit<HabitItem, 'id' | 'createdAt' | 'updatedAt'>>): Promise<HabitItem | null> {
  try {
    await ensureTableExists(supabase as any, HABITS_TABLE_NAME, habitsTableSchema);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const updateData: Record<string, any> = {};
    if (habit.name) updateData.name = habit.name;
    if (habit.description !== undefined) updateData.description = habit.description;
    if (habit.type) updateData.type = habit.type;
    if (habit.areaId !== undefined) updateData.area_id = habit.areaId;
    if (habit.color) updateData.color = habit.color;
    if (habit.icon !== undefined) updateData.icon = habit.icon;
    if (habit.frequency !== undefined) updateData.frequency = habit.frequency;
    if (habit.timeOfDay !== undefined) updateData.time_of_day = habit.timeOfDay;
    if (habit.reminders !== undefined) updateData.reminders = habit.reminders;
    if (habit.startDate !== undefined) updateData.start_date = habit.startDate;
    if (habit.endDate !== undefined) updateData.end_date = habit.endDate;
    if (habit.goal !== undefined) updateData.goal = habit.goal;
    if (habit.unit !== undefined) updateData.unit = habit.unit;
    if (habit.isArchived !== undefined) updateData.is_archived = habit.isArchived;
    if ((habit as any).target_value !== undefined) updateData.target_value = (habit as any).target_value;
    if ((habit as any).days_of_week !== undefined) updateData.days_of_week = (habit as any).days_of_week;

    const { data, error } = await supabase
      .from('habits')
      .update(updateData)
      .eq('id', id)
      .eq('user_id', user.id)
      .select()
      .single();

    if (error) {
      console.error('Error updating habit:', error);
      return null;
    }

    return {
      id: data.id,
      name: data.name,
      description: data.description,
      done: 0,
      goal: data.goal || 1,
      type: data.type || 'checkbox',
      unit: data.unit,
      areaId: data.area_id,
      isArchived: data.is_archived || false,
      color: data.color,
      icon: data.icon,
      frequency: data.frequency,
      timeOfDay: data.time_of_day,
      reminders: data.reminders,
      startDate: data.start_date,
      endDate: data.end_date,
      tags: data.tags,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    };
  } catch (error) {
    console.error('Error updating habit:', error);
    return null;
  }
}

export async function deleteHabit(id: string): Promise<boolean> {
  try {
    await ensureTableExists(supabase as any, HABITS_TABLE_NAME, habitsTableSchema);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const { error } = await supabase
      .from('habits')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id);

    if (error) {
      console.error('Error deleting habit:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error deleting habit:', error);
    return false;
  }
}

export async function archiveHabit(id: string): Promise<HabitItem | null> {
  return updateHabit(id, { isArchived: true });
}
