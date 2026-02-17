# Complete Next.js + Supabase Project Template

## Project Overview

Full-stack CRUD application with **Next.js 15 (App Router)**, **TypeScript**, **Supabase** (Auth, Database, Storage), and **Tailwind CSS**. It implements a **universal table manager** that auto-creates tables via the Supabase Management API when missing, session-ensured auth for RLS-safe requests, and optional smart CRUD + React hook for any table. The UI and table schemas are flexible; replicate the architecture and patterns below.

---

## Tech Stack Requirements

- **Next.js 15+** (App Router)
- **TypeScript** (strict)
- **Supabase**: Auth, Database (PostgREST), Storage
- **@supabase/ssr** for cookie-based browser client and server middleware client
- **Tailwind CSS** for styling
- **React 19** (as per Next 15)

---

## Environment Setup

```env
# Required – Supabase project (Dashboard → Settings → API)
NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-key>

# Storage bucket name (create in Dashboard → Storage; use same name here)
NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET=item-images

# Required for auto table creation (Dashboard → Account → Access Tokens → Generate)
SUPABASE_MANAGEMENT_API_TOKEN=<sbp_...>
```

---

## Project Structure

```
app/
  layout.tsx                 # Root layout, metadata, globals.css
  page.tsx                   # Public home/landing
  globals.css
  (auth)/
    login/page.tsx           # Client: signInWithPassword, redirect to /dashboard
    signup/page.tsx         # Client: signUp, redirect to /dashboard
  (dashboard)/
    layout.tsx               # Passthrough layout
    dashboard/page.tsx       # Server: createClient(), getUser(), show email + links
    crud-test/page.tsx       # Client: CRUD UI, calls services/crudService
  api/
    supabase/
      ensure-table/
        route.ts             # POST: ensure table (create via Management API if missing)

components/
  ItemCard.tsx               # Display one item (title, description, image, edit/delete)
  ItemForm.tsx               # Create/Edit form (title, description, image file)
  LogoutButton.tsx           # Client: signOut, router.push('/login')

lib/
  supabaseClient.ts          # createBrowserClient(@supabase/ssr) – single browser client
  serverClient.ts            # createServerClient(@supabase/ssr) with next/headers cookies
  supabase/
    ensureSession.ts         # ensureSession(auth): getSession → getUser or refreshSession
    tableManager.ts          # tableExists, createTable (Management API), ensureTableExists, cache
    crudWithAutoCreate.ts    # smartInsert, smartSelect, smartUpdate, smartDelete
    schemas/
      items.schema.ts        # itemsTableSchema (TableSchema), ITEMS_TABLE_NAME

hooks/
  useSmartTable.ts           # useSmartTable({ client, tableName, schema }) → insert, select, update, remove, loading, error

services/
  crudService.ts             # getItems, createItem, updateItem, deleteItem (ensureSession + ensureTableExists + Supabase CRUD)
  storageService.ts          # uploadImage(file, userId), deleteImage(url) – bucket from env

types/
  index.ts                   # Item, CreateItemData, UpdateItemData
  database.types.ts          # TableSchema, TableColumn, TableIndex, TableRlsPolicy

middleware.ts                # createServerClient, getUser(); protect /dashboard, /crud-test; redirect authed from /login,/signup
```

---

## Configuration

### package.json (core)

- **Dependencies**: `next`, `react`, `react-dom`, `@supabase/ssr`, `@supabase/supabase-js`
- **DevDependencies**: `typescript`, `@types/node`, `@types/react`, `@types/react-dom`, `tailwindcss`, `postcss`, `autoprefixer`, `eslint`, `eslint-config-next`, `tsx`
- **Scripts**: `dev`, `build`, `start`, `lint`, `seed` (e.g. `tsx scripts/seed.ts`)

### tsconfig.json

- `paths`: `"@/*": ["./*"]`
- `strict: true`, `moduleResolution: "bundler"`, `jsx: "preserve"`

### next.config

- `images.remotePatterns`: allow `https://*.supabase.co` for Supabase Storage images.

### Tailwind

- `content`: `./pages/**/*`, `./components/**/*`, `./app/**/*`
- Theme extend as needed; no required plugins.

---

## Supabase Integration

### Client initialization

- **Browser**: One singleton from `createBrowserClient(supabaseUrl, anonKey)` in `lib/supabaseClient.ts`. Uses default cookie storage so session is available to middleware and server.
- **Server**: `createServerClient` with `cookies()` from `next/headers` in `lib/serverClient.ts`; use in Server Components or Route Handlers that need the server-side user.

### Auth flow

- **Login/Signup**: Client pages call `signInWithPassword` / `signUp`; on success redirect with `window.location.href = '/dashboard'` for a full reload so cookies are set.
- **Session for data**: Before any data operation, call `ensureSession(supabase.auth)`: it runs `getSession()` then `getUser()`; if no valid user, runs `refreshSession()` and returns the user or throws. This ensures the next Supabase request sends the JWT so RLS sees `auth.uid()`.

### Table manager (auto-create tables)

- **tableExists(client, tableName)**: `client.from(tableName).select('*').limit(0)`; treat PostgREST error code `PGRST205` as “table not found”.
- **createTable(schema)**: Build SQL from `TableSchema` (CREATE TABLE, indexes; optionally RLS only if `rls_enabled: true` and `rls_policies` set). POST to `https://api.supabase.com/v1/projects/{projectRef}/database/query` with `Authorization: Bearer SUPABASE_MANAGEMENT_API_TOKEN` and body `{ "query": "<sql>" }`. Project ref parsed from `NEXT_PUBLIC_SUPABASE_URL`.
- **ensureTableExists(client, tableName, schema)**: In-memory cache of table names. If not cached, run `tableExists`; if false, on server call `createTable(schema)`, on client call `POST /api/supabase/ensure-table` with `{ tableName, schema }` (token stays server-side).
- **TableSchema** (types/database.types.ts): `name`, `columns[]` (name, type, is_primary, is_nullable, default_value, references), optional `indexes[]`, optional `rls_enabled`, optional `rls_policies[]`. RLS off by default for code-created tables.

### Storage

- Bucket name from `NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET` (e.g. `item-images`). Upload path `{userId}/{timestamp}.{ext}`; public URL via `getPublicUrl`. Storage policies: authenticated upload/update/delete scoped by folder = `auth.uid()::text`, public read for the bucket.

### API route: ensure-table

- **POST /api/supabase/ensure-table**: Body `{ tableName, schema }`. Server creates Supabase client, runs `tableExists`; if missing and `SUPABASE_MANAGEMENT_API_TOKEN` set, runs `createTable(schema)`. Returns 200 `{ ok: true }` or 4xx/5xx with message.

---

## Core Architecture Patterns

### Table manager pattern

- Before any CRUD on a table, call `ensureTableExists(client, tableName, schema)`.
- Schema is the single source of truth for table shape; SQL is generated in code (no pg dependency). Management API runs the SQL.

### CRUD wrapper pattern

- **smartInsert / smartSelect / smartUpdate / smartDelete** in `lib/supabase/crudWithAutoCreate.ts`: each calls `ensureTableExists` then runs the corresponding Supabase client method. Accept `TableSchema` so any table can be used with the same API.

### Custom hook pattern

- **useSmartTable({ client, tableName, schema })**: Returns `insert`, `select`, `update`, `remove` (wrapping smart* functions), plus `loading`, `error`, `clearError`. Wraps calls in try/finally and sets loading/error state.

### Type safety

- **TableSchema** and related interfaces in `types/database.types.ts`. Entity types (e.g. `Item`, `CreateItemData`, `UpdateItemData`) in `types/index.ts`. Use generics in smart CRUD and hook where appropriate (e.g. `smartInsert<T>`).

### Error handling

- Services throw on Supabase errors; pages catch and set error state or show message. ensureSession and ensureTableExists throw with clear messages. API route returns JSON `{ message }` and appropriate status codes.

### Loading states

- Page-level loading (e.g. crud-test) and optional hook-level loading in useSmartTable.

---

## Feature Implementation

### Auth pages

- **Login**: Client component; form email/password; `signInWithPassword`; on success `window.location.href = '/dashboard'`.
- **Signup**: Same pattern with `signUp` and optional redirect to dashboard.

### CRUD flow (example: items)

- **Service layer**: `getItems`, `createItem`, `updateItem`, `deleteItem` in `services/crudService.ts`. Each calls `ensureSession(supabase.auth)` then `ensureTableExists(supabase, ITEMS_TABLE_NAME, itemsTableSchema)` then Supabase from('items').*.
- **Page**: Client component loads list via `getItems()`, create/update/delete via `createItem`/`updateItem`/`deleteItem`, then refetches list. Form in modal or inline; image upload via storageService.

### File upload

- `uploadImage(file, userId)`: upload to bucket at `{userId}/{Date.now()}.{ext}`, return public URL. `deleteImage(imageUrl)`: parse path from URL and remove object. Bucket and path logic use env bucket name.

### Form handling

- Controlled inputs; onSubmit calls service; on success close form and refresh list; on error set error state.

### Data fetching

- Client-side: services called from Client Components (useEffect or on user action). No server actions in this template; can be added for mutations if desired.

---

## Security Patterns

- **RLS**: Optional. When `rls_enabled: true` in TableSchema, generate `ALTER TABLE ... ENABLE ROW LEVEL SECURITY` and CREATE POLICY statements. Default is RLS off for code-created tables.
- **Session**: Always use `ensureSession` before data operations so the anon client sends the JWT and Postgres sees `auth.uid()`.
- **Keys**: Only anon key in client; Management API token only in server env and used in server API route and server-side createTable.
- **Storage**: Path includes `userId`; storage policies restrict write by `auth.uid()::text` in folder name.

---

## Optional SQL (manual setup)

If you prefer to create tables manually instead of via Management API:

- **supabase-schema.sql**: Example CREATE TABLE + indexes + RLS for an `items` table (can be adapted or skipped if using only auto-create).
- **supabase-storage.sql**: Example bucket insert and storage policies for the images bucket (bucket name must match env).

---

## Replication Checklist for Another AI

1. Create Next.js 15 App Router app with TypeScript and Tailwind.
2. Add Supabase env vars and create `lib/supabaseClient.ts` (createBrowserClient) and `lib/serverClient.ts` (createServerClient with cookies).
3. Implement `types/database.types.ts` (TableSchema, TableColumn, TableIndex, TableRlsPolicy) and entity types in `types/index.ts`.
4. Implement `lib/supabase/ensureSession.ts` (getSession → getUser or refreshSession).
5. Implement `lib/supabase/tableManager.ts` (tableExists, schemaToSql, runManagementQuery, createTable, ensureTableExists, cache).
6. Implement `app/api/supabase/ensure-table/route.ts` (POST, validate body, tableExists, createTable if missing).
7. Implement `lib/supabase/crudWithAutoCreate.ts` (smartInsert, smartSelect, smartUpdate, smartDelete).
8. Implement `hooks/useSmartTable.ts` wrapping smart CRUD with loading/error.
9. Add middleware with createServerClient; protect dashboard/crud routes; redirect authed users from login/signup.
10. Add login and signup pages (client); redirect to dashboard on success with full reload.
11. Add dashboard page (server) and crud-test page (client) using crudService; implement storageService and one table schema (e.g. items).
12. Add components (e.g. ItemCard, ItemForm, LogoutButton). Use flexible UI; table schemas and routes can differ.

Keep UI and table schemas flexible; preserve the patterns above (session ensure, table manager, smart CRUD, hook, single browser client, env-based bucket and Management API token).
