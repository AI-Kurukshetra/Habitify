import { supabase } from '@/lib/supabaseClient';
import type { AreaItem } from '@/lib/dashboard-types';
import { ensureTableExists } from '@/lib/supabase/tableManager';
import { AREAS_TABLE_NAME, areasTableSchema } from '@/lib/supabase/schemas/areas.schema';

export async function fetchUserAreas(): Promise<AreaItem[]> {
  try {
    await ensureTableExists(supabase as any, AREAS_TABLE_NAME, areasTableSchema);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];

    const { data, error } = await supabase
      .from('areas')
      .select('*')
      .eq('user_id', user.id)
      .order('sort_order', { ascending: true });

    if (error) {
      console.error('Error fetching areas:', error);
      return [];
    }

    return (data || []).map((area: any) => ({
      id: area.id,
      name: area.name,
      color: area.color,
      icon: area.icon,
      order: area.sort_order,
    }));
  } catch (error) {
    console.error('Error fetching areas:', error);
    return [];
  }
}

export async function createArea(area: Omit<AreaItem, 'id' | 'order'>): Promise<AreaItem | null> {
  try {
    await ensureTableExists(supabase as any, AREAS_TABLE_NAME, areasTableSchema);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    // Get the next sort_order value
    const { data: existingAreas } = await supabase
      .from('areas')
      .select('sort_order')
      .eq('user_id', user.id)
      .order('sort_order', { ascending: false })
      .limit(1);

    const nextOrder = (existingAreas && existingAreas.length > 0) ? existingAreas[0].sort_order + 1 : 0;

    const { data, error } = await supabase
      .from('areas')
      .insert({
        user_id: user.id,
        name: area.name,
        color: area.color,
        icon: area.icon,
        sort_order: nextOrder,
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating area:', error);
      return null;
    }

    return {
      id: data.id,
      name: data.name,
      color: data.color,
      icon: data.icon,
      order: data.sort_order,
    };
  } catch (error) {
    console.error('Error creating area:', error);
    return null;
  }
}

export async function updateArea(id: string, area: Partial<Omit<AreaItem, 'id'>>): Promise<AreaItem | null> {
  try {
    await ensureTableExists(supabase as any, AREAS_TABLE_NAME, areasTableSchema);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data, error } = await supabase
      .from('areas')
      .update({
        ...(area.name && { name: area.name }),
        ...(area.color && { color: area.color }),
        ...(area.icon && { icon: area.icon }),
        ...(area.order !== undefined && { sort_order: area.order }),
      })
      .eq('id', id)
      .eq('user_id', user.id)
      .select()
      .single();

    if (error) {
      console.error('Error updating area:', error);
      return null;
    }

    return {
      id: data.id,
      name: data.name,
      color: data.color,
      icon: data.icon,
      order: data.sort_order,
    };
  } catch (error) {
    console.error('Error updating area:', error);
    return null;
  }
}

export async function deleteArea(id: string): Promise<boolean> {
  try {
    await ensureTableExists(supabase as any, AREAS_TABLE_NAME, areasTableSchema);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const { error } = await supabase
      .from('areas')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id);

    if (error) {
      console.error('Error deleting area:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error deleting area:', error);
    return false;
  }
}
