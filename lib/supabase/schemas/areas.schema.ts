import type { TableSchema } from '@/types/database.types';

export const AREAS_TABLE_NAME = 'areas';

export const areasTableSchema: TableSchema = {
  name: AREAS_TABLE_NAME,
  columns: [
    { name: 'id', type: 'UUID', default_value: 'gen_random_uuid()', is_primary: true },
    { name: 'user_id', type: 'UUID', is_nullable: false, references: 'auth.users(id) ON DELETE CASCADE' },
    { name: 'name', type: 'TEXT', is_nullable: false },
    { name: 'color', type: 'TEXT', is_nullable: false, default_value: "'#2a67f4'" },
    { name: 'icon', type: 'TEXT', is_nullable: true },
    { name: 'sort_order', type: 'INTEGER', is_nullable: true, default_value: '0' },
    { name: 'created_at', type: 'TIMESTAMP WITH TIME ZONE', default_value: "timezone('utc'::text, now())", is_nullable: false },
    { name: 'updated_at', type: 'TIMESTAMP WITH TIME ZONE', default_value: "timezone('utc'::text, now())", is_nullable: false },
  ],
  indexes: [
    { name: 'areas_user_id_idx', columns: 'user_id' },
    { name: 'areas_user_sort_order_idx', columns: ['user_id', 'sort_order'] },
  ],
  rls_enabled: false, // RLS off for tables created from code (same as items)
};
