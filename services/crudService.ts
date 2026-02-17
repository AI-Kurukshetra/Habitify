import { supabase } from '@/lib/supabaseClient';
import { ensureSession } from '@/lib/supabase/ensureSession';
import { ensureTableExists } from '@/lib/supabase/tableManager';
import { ITEMS_TABLE_NAME, itemsTableSchema } from '@/lib/supabase/schemas/items.schema';
import { Item, CreateItemData, UpdateItemData } from '@/types';
import { uploadImage, deleteImage } from './storageService';

export async function getItems(): Promise<Item[]> {
  const user = await ensureSession(supabase.auth);

  await ensureTableExists(supabase as any, ITEMS_TABLE_NAME, itemsTableSchema);

  const { data, error } = await supabase
    .from('items')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  return data || [];
}

export async function createItem(itemData: CreateItemData): Promise<Item> {
  const user = await ensureSession(supabase.auth);

  let imageUrl = null;

  // Upload image if provided
  if (itemData.image) {
    imageUrl = await uploadImage(itemData.image, user.id);
  }

  await ensureTableExists(supabase as any, ITEMS_TABLE_NAME, itemsTableSchema);

  const { data, error } = await supabase
    .from('items')
    .insert([{
      user_id: user.id,
      title: itemData.title,
      description: itemData.description || null,
      image_url: imageUrl,
    }])
    .select()
    .single();

  if (error) {
    // Cleanup uploaded image if database insert fails
    if (imageUrl) {
      await deleteImage(imageUrl);
    }
    throw error;
  }

  return data;
}

export async function updateItem(itemData: UpdateItemData): Promise<Item> {
  const user = await ensureSession(supabase.auth);

  await ensureTableExists(supabase as any, ITEMS_TABLE_NAME, itemsTableSchema);

  // Get existing item to check ownership and old image
  const { data: existingItem, error: fetchError } = await supabase
    .from('items')
    .select('*')
    .eq('id', itemData.id)
    .eq('user_id', user.id)
    .single();

  if (fetchError || !existingItem) {
    throw new Error('Item not found or access denied');
  }

  let imageUrl = existingItem.image_url;

  // Upload new image if provided
  if (itemData.image) {
    // Delete old image if exists
    if (existingItem.image_url) {
      await deleteImage(existingItem.image_url);
    }
    imageUrl = await uploadImage(itemData.image, user.id);
  }

  const { data, error } = await supabase
    .from('items')
    .update({
      title: itemData.title,
      description: itemData.description || null,
      image_url: imageUrl,
    })
    .eq('id', itemData.id)
    .eq('user_id', user.id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function deleteItem(id: string): Promise<void> {
  const user = await ensureSession(supabase.auth);

  await ensureTableExists(supabase as any, ITEMS_TABLE_NAME, itemsTableSchema);

  // Get item to check ownership and get image URL
  const { data: item, error: fetchError } = await supabase
    .from('items')
    .select('*')
    .eq('id', id)
    .eq('user_id', user.id)
    .single();

  if (fetchError || !item) {
    throw new Error('Item not found or access denied');
  }

  // Delete from database
  const { error } = await supabase
    .from('items')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) {
    throw error;
  }

  // Delete image if exists
  if (item.image_url) {
    await deleteImage(item.image_url);
  }
}
