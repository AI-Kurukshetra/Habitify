'use client';

import { useCallback, useState } from 'react';
import { smartInsert, smartSelect, smartUpdate, smartDelete } from '@/lib/supabase/crudWithAutoCreate';
import type { TableSchema } from '@/types/database.types';

type SupabaseClientLike = unknown;

export interface UseSmartTableOptions {
  client: SupabaseClientLike;
  tableName: string;
  schema: TableSchema;
}

export function useSmartTable<T = unknown>({
  client,
  tableName,
  schema,
}: UseSmartTableOptions) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const clearError = useCallback(() => setError(null), []);

  const insert = useCallback(
    async (data: Record<string, unknown> | Record<string, unknown>[]) => {
      setLoading(true);
      setError(null);
      try {
        const result = await smartInsert<T>(client, tableName, schema, data);
        if (result.error) throw result.error;
        return result;
      } catch (e) {
        setError(e instanceof Error ? e : new Error(String(e)));
        throw e;
      } finally {
        setLoading(false);
      }
    },
    [client, tableName, schema]
  );

  const select = useCallback(
    async (query?: {
      columns?: string;
      orderBy?: string;
      ascending?: boolean;
      limit?: number;
      eq?: Record<string, unknown>;
      single?: boolean;
    }) => {
      setLoading(true);
      setError(null);
      try {
        const result = await smartSelect<T>(client, tableName, schema, query ?? {});
        if (result.error) throw result.error;
        return result;
      } catch (e) {
        setError(e instanceof Error ? e : new Error(String(e)));
        throw e;
      } finally {
        setLoading(false);
      }
    },
    [client, tableName, schema]
  );

  const update = useCallback(
    async (
      match: Record<string, unknown>,
      data: Record<string, unknown>
    ) => {
      setLoading(true);
      setError(null);
      try {
        const result = await smartUpdate<T>(client, tableName, schema, match, data);
        if (result.error) throw result.error;
        return result;
      } catch (e) {
        setError(e instanceof Error ? e : new Error(String(e)));
        throw e;
      } finally {
        setLoading(false);
      }
    },
    [client, tableName, schema]
  );

  const remove = useCallback(
    async (match: Record<string, unknown>) => {
      setLoading(true);
      setError(null);
      try {
        const result = await smartDelete(client, tableName, schema, match);
        if (result.error) throw result.error;
        return result;
      } catch (e) {
        setError(e instanceof Error ? e : new Error(String(e)));
        throw e;
      } finally {
        setLoading(false);
      }
    },
    [client, tableName, schema]
  );

  return {
    insert,
    select,
    update,
    remove,
    loading,
    error,
    clearError,
  };
}
