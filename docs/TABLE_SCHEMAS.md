# Supabase table schemas: Areas & Habits

Use these definitions to create or align your Supabase tables. For a ready-to-run migration, use `supabase-areas-schema.sql` in the project root.

---

## 1. `public.areas`

Stores user-created areas (categories) for grouping habits. Used in sidebar, create-habit dialog, and area dropdowns.

| Column      | Type      | Nullable | Default | Description                    |
|------------|-----------|----------|---------|--------------------------------|
| `id`       | UUID      | NO       | `gen_random_uuid()` | Primary key            |
| `user_id`  | UUID      | NO       | —       | References `auth.users(id)` ON DELETE CASCADE |
| `name`     | TEXT      | NO       | —       | Area name (e.g. "Health", "todo list") |
| `color`    | TEXT      | NO       | `'#2a67f4'` | Hex color for UI       |
| `icon`     | TEXT      | YES      | —       | Optional icon identifier       |
| `sort_order` | INTEGER   | YES      | `0`     | Sort order for listing (column name avoids reserved `order`) |
| `created_at` | TIMESTAMPTZ | NO     | `now()` | Creation time                  |
| `updated_at` | TIMESTAMPTZ | NO     | `now()` | Last update time               |

**Indexes:** `user_id`, `(user_id, sort_order)`  
**RLS:** All operations restricted to `auth.uid() = user_id`.

---

## 2. `public.habits`

Stores user habits. Used across dashboard, today, habits list, area view, and time-of-day filters (morning / afternoon / evening).

| Column        | Type       | Nullable | Default     | Description |
|---------------|------------|----------|-------------|-------------|
| `id`          | UUID       | NO       | `gen_random_uuid()` | Primary key |
| `user_id`     | UUID       | NO       | —           | References `auth.users(id)` ON DELETE CASCADE |
| `name`        | TEXT       | NO       | —           | Habit name |
| `description`  | TEXT       | YES      | —           | Optional description |
| `type`        | TEXT       | NO       | `'checkbox'` | `checkbox` \| `number` \| `duration` |
| `area_id`     | UUID       | YES      | —           | References `public.areas(id)` ON DELETE SET NULL |
| `color`       | TEXT       | YES      | —           | Hex color for UI |
| `icon`        | TEXT       | YES      | —           | Optional icon identifier |
| `frequency`   | JSONB      | YES      | —           | e.g. `{ "type": "daily" }` |
| `time_of_day` | TEXT[]    | YES      | —           | **Time-of-day filter:** e.g. `['Morning','Afternoon','Evening']` |
| `reminders`   | TEXT[]     | YES      | —           | e.g. `['09:00','18:00']` |
| `start_date`  | DATE       | YES      | —           | YYYY-MM-DD |
| `end_date`    | DATE       | YES      | —           | YYYY-MM-DD (optional) |
| `goal`        | INTEGER    | YES      | `1`         | Target count per day (or similar) |
| `unit`        | TEXT       | YES      | —           | e.g. "km", "minutes", "pages" |
| `target_value`| INTEGER    | YES      | —           | For number/duration habits |
| `days_of_week`| INTEGER[]  | YES      | —           | 0=Sun … 6=Sat for weekly habits |
| `tags`        | TEXT[]     | YES      | —           | Optional tags |
| `is_archived` | BOOLEAN    | NO       | `false`     | Soft-archive flag |
| `created_at`  | TIMESTAMPTZ| NO       | `now()`     | Creation time |
| `updated_at`  | TIMESTAMPTZ| NO       | `now()`     | Last update time |

**Indexes:** `user_id`, `area_id`, `created_at` (desc)  
**RLS:** All operations restricted to `auth.uid() = user_id`.

**Time-of-day filtering:**  
- Sidebar links: `/dashboard?filter=morning`, `?filter=afternoon`, `?filter=evening`.  
- A habit is included in a filter when its `time_of_day` array contains the matching value (case-insensitive), e.g. `Morning` for `filter=morning`.  
- If `time_of_day` is null or empty, the habit is shown for all time filters.

---

## 3. `public.habit_logs`

Stores per-day status and notes for each habit (Done / Skipped / Failed and optional note). Used for status actions and the note modal; created automatically if missing (RLS disabled).

| Column             | Type      | Nullable | Description |
|--------------------|-----------|----------|-------------|
| `id`               | UUID      | NO       | Primary key |
| `habit_id`         | UUID      | NO       | Habit reference |
| `user_id`         | UUID      | NO       | References `auth.users(id)` ON DELETE CASCADE |
| `log_date`        | DATE      | NO       | YYYY-MM-DD |
| `status`          | TEXT      | NO       | `completed` \| `skipped` \| `missed` |
| `value`           | INTEGER   | YES      | For number habits |
| `duration_minutes`| INTEGER   | YES      | For duration habits |
| `note`            | TEXT      | YES      | Note for this habit on this date |
| `created_at`     | TIMESTAMPTZ | NO     | |
| `updated_at`     | TIMESTAMPTZ | NO     | |

**Indexes:** `habit_id`, `(user_id, log_date)`, `(habit_id, log_date)`.  
**RLS:** Disabled (table created from app via `ensureTableExists`).

---

## 4. `public.time_of_day`

Stores user-defined time-of-day slots (e.g. Morning, Afternoon, Evening or custom names). Used in App Settings → Time of Day, sidebar filter links, habits page filter, and New/Edit habit modals. Table is created automatically if missing (RLS disabled).

| Column       | Type      | Nullable | Default | Description |
|-------------|-----------|----------|---------|-------------|
| `id`        | UUID      | NO       | `gen_random_uuid()` | Primary key |
| `user_id`   | UUID      | NO       | —       | References `auth.users(id)` ON DELETE CASCADE |
| `name`      | TEXT      | NO       | —       | Slot name (e.g. "Morning", "Night") |
| `icon`      | TEXT      | YES      | —       | Icon key (e.g. "sun", "moon", "cloud") |
| `start_time`| TEXT      | NO       | —       | "HH:mm" (e.g. "00:00", "12:00") |
| `end_time`  | TEXT      | NO       | —       | "HH:mm" (e.g. "12:00", "00:00" for midnight) |
| `color`     | TEXT      | YES      | —       | Hex color for timeline/list UI |
| `sort_order`| INTEGER   | YES      | `0`     | Display order |
| `created_at`| TIMESTAMPTZ | NO     | `now()` | Creation time |
| `updated_at`| TIMESTAMPTZ | NO     | `now()` | Last update time |

**Indexes:** `user_id`, `(user_id, sort_order)`.  
**RLS:** Disabled (table created from app via `ensureTableExists`).

---

## Quick reference (app ↔ DB)

- **Areas:** `areasService` — `fetchUserAreas`, `createArea`, `updateArea`, `deleteArea`. Context: `areas`, `addArea`, `updateArea`, `deleteArea`.
- **Habits:** `habitsService` — `fetchUserHabits`, `createHabit`, `updateHabit`, `deleteHabit`. Context: `habits`, `addHabit`, `updateHabit`, `deleteHabit`, `archiveHabit`.
- **Habit logs (status + notes):** `habitLogsService` — `fetchLogsForDateRange`, `upsertLog`, `deleteLog`, `deleteAllLogsForHabit`. Used by dashboard list (Done/Skip/Fail, Add note, View notes, Remove logs).
- **Time of day (slots):** `timeOfDayService` — `fetchUserTimeOfDaySlots`, `createTimeOfDaySlot`, `updateTimeOfDaySlot`, `deleteTimeOfDaySlot`. Context: `timeOfDaySlots`, `addTimeOfDaySlot`, `updateTimeOfDaySlot`, `deleteTimeOfDaySlot`. Settings → App setting → Time of Day; sidebar and habits page use these slots for filter options.
- **Time-of-day matching:** `lib/habitUtils.ts` — `habitMatchesTimeOfDay(habit, filterKey)`; filter key is slot name lowercased with spaces to `-` (e.g. "Morning" → "morning", "Afternoon" → "afternoon"); used in dashboard list, today page, area page, and habits page filters.
