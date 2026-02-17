import type { TableSchema } from '@/types/database.types';

export const HABITS_TABLE_NAME = 'habits';

export const habitsTableSchema: TableSchema = {
  name: HABITS_TABLE_NAME,
  columns: [
    { name: 'id', type: 'UUID', default_value: 'gen_random_uuid()', is_primary: true },
    { name: 'user_id', type: 'UUID', is_nullable: false, references: 'auth.users(id) ON DELETE CASCADE' },
    { name: 'name', type: 'TEXT', is_nullable: false },
    { name: 'description', type: 'TEXT', is_nullable: true },
    { name: 'type', type: 'TEXT', is_nullable: false, default_value: "'checkbox'" },
    { name: 'area_id', type: 'UUID', is_nullable: true },
    { name: 'color', type: 'TEXT', is_nullable: true },
    { name: 'icon', type: 'TEXT', is_nullable: true },
    { name: 'frequency', type: 'JSONB', is_nullable: true },
    { name: 'time_of_day', type: 'TEXT[]', is_nullable: true },
    { name: 'reminders', type: 'TEXT[]', is_nullable: true },
    { name: 'start_date', type: 'DATE', is_nullable: true },
    { name: 'end_date', type: 'DATE', is_nullable: true },
    { name: 'goal', type: 'INTEGER', is_nullable: true, default_value: '1' },
    { name: 'unit', type: 'TEXT', is_nullable: true },
    { name: 'target_value', type: 'INTEGER', is_nullable: true },
    { name: 'days_of_week', type: 'INTEGER[]', is_nullable: true },
    { name: 'tags', type: 'TEXT[]', is_nullable: true },
    { name: 'is_archived', type: 'BOOLEAN', is_nullable: false, default_value: 'false' },
    { name: 'created_at', type: 'TIMESTAMP WITH TIME ZONE', default_value: "timezone('utc'::text, now())", is_nullable: false },
    { name: 'updated_at', type: 'TIMESTAMP WITH TIME ZONE', default_value: "timezone('utc'::text, now())", is_nullable: false },
  ],
  indexes: [
    { name: 'habits_user_id_idx', columns: 'user_id' },
    { name: 'habits_area_id_idx', columns: 'area_id' },
    { name: 'habits_created_at_idx', columns: 'created_at DESC' },
  ],
  rls_enabled: false, // RLS off for tables created from code (same as items/areas)
};
