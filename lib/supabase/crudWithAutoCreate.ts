/**
 * CRUD operations with automatic table creation (ensure table exists first).
 */

import type { TableSchema } from '@/types/database.types';
import { ensureTableExists } from './tableManager';

/** Supabase client (from createBrowserClient / createClient). */
type SupabaseClientLike = unknown;

/**
 * Insert row(s). Creates table if it doesn't exist, then inserts.
 */
export async function smartInsert<T = unknown>(
  client: SupabaseClientLike,
  tableName: string,
  schema: TableSchema,
  data: Record<string, unknown> | Record<string, unknown>[]
): Promise<{ data: T | T[] | null; error: unknown }> {
  await ensureTableExists(client as any, tableName, schema);
  const c = client as any;
  const payload = Array.isArray(data) ? data : [data];
  const { data: result, error } = await c.from(tableName).insert(payload).select();
  const single = !Array.isArray(data);
  return {
    data: single && result?.[0] != null ? (result[0] as T) : (result as T[] | null),
    error,
  };
}

/**
 * Select rows. Creates table if it doesn't exist, then selects.
 */
export async function smartSelect<T = unknown>(
  client: SupabaseClientLike,
  tableName: string,
  schema: TableSchema,
  query: {
    columns?: string;
    orderBy?: string;
    ascending?: boolean;
    limit?: number;
    eq?: Record<string, unknown>;
    single?: boolean;
  } = {}
): Promise<{ data: T | T[] | null; error: unknown }> {
  await ensureTableExists(client as any, tableName, schema);
  const c = client as any;
  let q = c.from(tableName).select(query.columns ?? '*');
  if (query.orderBy) q = q.order(query.orderBy, { ascending: query.ascending ?? false });
  if (query.limit != null) q = q.limit(query.limit);
  if (query.eq) {
    for (const [k, v] of Object.entries(query.eq)) q = q.eq(k, v);
  }
  if (query.single) {
    const { data, error } = await q.single();
    return { data: data as T | null, error };
  }
  const { data, error } = await q;
  return { data: data as T[] | null, error };
}

/**
 * Update rows matching criteria. Creates table if it doesn't exist, then updates.
 */
export async function smartUpdate<T = unknown>(
  client: SupabaseClientLike,
  tableName: string,
  schema: TableSchema,
  match: Record<string, unknown>,
  data: Record<string, unknown>
): Promise<{ data: T | T[] | null; error: unknown }> {
  await ensureTableExists(client as any, tableName, schema);
  const c = client as any;
  let q = c.from(tableName).update(data);
  for (const [k, v] of Object.entries(match)) q = q.eq(k, v);
  const { data: result, error } = await q.select();
  return { data: result as T | T[] | null, error };
}

/**
 * Delete rows matching criteria. Creates table if it doesn't exist, then deletes.
 */
export async function smartDelete(
  client: SupabaseClientLike,
  tableName: string,
  schema: TableSchema,
  match: Record<string, unknown>
): Promise<{ error: unknown }> {
  await ensureTableExists(client as any, tableName, schema);
  const c = client as any;
  let q = c.from(tableName).delete();
  for (const [k, v] of Object.entries(match)) q = q.eq(k, v);
  const { error } = await q;
  return { error };
}
