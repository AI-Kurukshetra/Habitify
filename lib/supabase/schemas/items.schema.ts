import type { TableSchema } from '@/types/database.types';

export const ITEMS_TABLE_NAME = 'items';

export const itemsTableSchema: TableSchema = {
  name: ITEMS_TABLE_NAME,
  columns: [
    { name: 'id', type: 'UUID', default_value: 'gen_random_uuid()', is_primary: true },
    { name: 'user_id', type: 'UUID', is_nullable: false, references: 'auth.users(id) ON DELETE CASCADE' },
    { name: 'title', type: 'TEXT', is_nullable: false },
    { name: 'description', type: 'TEXT', is_nullable: true },
    { name: 'image_url', type: 'TEXT', is_nullable: true },
    { name: 'created_at', type: 'TIMESTAMP WITH TIME ZONE', default_value: "timezone('utc'::text, now())", is_nullable: false },
  ],
  indexes: [
    { name: 'items_user_id_idx', columns: 'user_id' },
    { name: 'items_created_at_idx', columns: 'created_at DESC' },
  ],
  rls_enabled: false, // RLS off for tables created from code
};
