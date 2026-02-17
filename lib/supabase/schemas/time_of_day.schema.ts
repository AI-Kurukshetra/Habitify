import type { TableSchema } from '@/types/database.types';

export const TIME_OF_DAY_TABLE_NAME = 'time_of_day';

export const timeOfDayTableSchema: TableSchema = {
  name: TIME_OF_DAY_TABLE_NAME,
  columns: [
    { name: 'id', type: 'UUID', default_value: 'gen_random_uuid()', is_primary: true },
    { name: 'user_id', type: 'UUID', is_nullable: false, references: 'auth.users(id) ON DELETE CASCADE' },
    { name: 'name', type: 'TEXT', is_nullable: false },
    { name: 'icon', type: 'TEXT', is_nullable: true },
    { name: 'start_time', type: 'TEXT', is_nullable: false },
    { name: 'end_time', type: 'TEXT', is_nullable: false },
    { name: 'color', type: 'TEXT', is_nullable: true },
    { name: 'sort_order', type: 'INTEGER', is_nullable: true, default_value: '0' },
    { name: 'created_at', type: 'TIMESTAMP WITH TIME ZONE', default_value: "timezone('utc'::text, now())", is_nullable: false },
    { name: 'updated_at', type: 'TIMESTAMP WITH TIME ZONE', default_value: "timezone('utc'::text, now())", is_nullable: false },
  ],
  indexes: [
    { name: 'time_of_day_user_id_idx', columns: 'user_id' },
    { name: 'time_of_day_user_sort_idx', columns: ['user_id', 'sort_order'] },
  ],
  rls_enabled: false,
};
