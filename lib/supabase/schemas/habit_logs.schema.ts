import type { TableSchema } from '@/types/database.types';

export const HABIT_LOGS_TABLE_NAME = 'habit_logs';

export const habitLogsTableSchema: TableSchema = {
  name: HABIT_LOGS_TABLE_NAME,
  columns: [
    { name: 'id', type: 'UUID', default_value: 'gen_random_uuid()', is_primary: true },
    { name: 'habit_id', type: 'UUID', is_nullable: false },
    { name: 'user_id', type: 'UUID', is_nullable: false, references: 'auth.users(id) ON DELETE CASCADE' },
    { name: 'log_date', type: 'DATE', is_nullable: false },
    { name: 'status', type: 'TEXT', is_nullable: false },
    { name: 'value', type: 'INTEGER', is_nullable: true },
    { name: 'duration_minutes', type: 'INTEGER', is_nullable: true },
    { name: 'note', type: 'TEXT', is_nullable: true },
    { name: 'created_at', type: 'TIMESTAMP WITH TIME ZONE', default_value: "timezone('utc'::text, now())", is_nullable: false },
    { name: 'updated_at', type: 'TIMESTAMP WITH TIME ZONE', default_value: "timezone('utc'::text, now())", is_nullable: false },
  ],
  indexes: [
    { name: 'habit_logs_habit_id_idx', columns: 'habit_id' },
    { name: 'habit_logs_user_date_idx', columns: ['user_id', 'log_date'] },
    { name: 'habit_logs_habit_date_idx', columns: ['habit_id', 'log_date'] },
  ],
  rls_enabled: false,
};
