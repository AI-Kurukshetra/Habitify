import { supabase } from '@/lib/supabaseClient';
import type { AreaItem } from '@/lib/dashboard-types';

export async function fetchUserAreas(): Promise<AreaItem[]> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];

    const { data, error } = await supabase
      .from('areas')
      .select('*')
      .eq('user_id', user.id)
      .order('order', { ascending: true });

    if (error) {
      console.error('Error fetching areas:', error);
      return [];
    }

    return (data || []).map((area: any) => ({
      id: area.id,
      name: area.name,
      color: area.color,
      icon: area.icon,
      order: area.order,
    }));
  } catch (error) {
    console.error('Error fetching areas:', error);
    return [];
  }
}

export async function createArea(area: Omit<AreaItem, 'id' | 'order'>): Promise<AreaItem | null> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    // Get the next order value
    const { data: existingAreas } = await supabase
      .from('areas')
      .select('order')
      .eq('user_id', user.id)
      .order('order', { ascending: false })
      .limit(1);

    const nextOrder = (existingAreas && existingAreas.length > 0) ? existingAreas[0].order + 1 : 0;

    const { data, error } = await supabase
      .from('areas')
      .insert({
        user_id: user.id,
        name: area.name,
        color: area.color,
        icon: area.icon,
        order: nextOrder,
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
      order: data.order,
    };
  } catch (error) {
    console.error('Error creating area:', error);
    return null;
  }
}

export async function updateArea(id: string, area: Partial<Omit<AreaItem, 'id'>>): Promise<AreaItem | null> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data, error } = await supabase
      .from('areas')
      .update({
        ...(area.name && { name: area.name }),
        ...(area.color && { color: area.color }),
        ...(area.icon && { icon: area.icon }),
        ...(area.order !== undefined && { order: area.order }),
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
      order: data.order,
    };
  } catch (error) {
    console.error('Error updating area:', error);
    return null;
  }
}

export async function deleteArea(id: string): Promise<boolean> {
  try {
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
