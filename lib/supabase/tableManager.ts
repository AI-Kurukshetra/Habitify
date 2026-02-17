/**
 * Universal table manager for Supabase: check existence, create via Management API, cache.
 */

import type { TableSchema } from '@/types/database.types';

const PGRST205 = 'PGRST205';

/** Client that has .from(table).select().limit(0) returning a thenable with .error */
type TableExistsClient = {
  from: (table: string) => {
    select: (cols?: string) => { limit: (n: number) => Promise<{ error: { code?: string } | null }> };
  };
};

const tableExistsCache = new Set<string>();

function quoteId(name: string): string {
  return `"${String(name).replace(/"/g, '""')}"`;
}

/**
 * Build CREATE TABLE (and indexes, RLS) SQL from TableSchema.
 */
function schemaToSql(schema: TableSchema): string {
  const tableName = schema.name;
  const fullTable = `public.${quoteId(tableName)}`;
  const parts: string[] = [];

  const columnDefs = schema.columns.map((col) => {
    let def = `${quoteId(col.name)} ${col.type}`;
    if (col.default_value != null) def += ` DEFAULT ${col.default_value}`;
    if (col.is_nullable === false) def += ' NOT NULL';
    if (col.is_primary) def += ' PRIMARY KEY';
    if (col.references) def += ` REFERENCES ${col.references}`;
    return def;
  });
  parts.push(`CREATE TABLE IF NOT EXISTS ${fullTable} (${columnDefs.join(', ')})`);

  if (schema.indexes?.length) {
    for (const idx of schema.indexes) {
      const cols = Array.isArray(idx.columns) ? idx.columns.join(', ') : idx.columns;
      const unique = idx.unique ? ' UNIQUE' : '';
      parts.push(`CREATE${unique} INDEX IF NOT EXISTS ${quoteId(idx.name)} ON ${fullTable} (${cols})`);
    }
  }

  // RLS off by default for tables created from code; only enable when rls_enabled is true
  if (schema.rls_enabled && schema.rls_policies?.length) {
    parts.push(`ALTER TABLE ${fullTable} ENABLE ROW LEVEL SECURITY`);
    for (const policy of schema.rls_policies) {
      parts.push(`DROP POLICY IF EXISTS ${quoteId(policy.name)} ON ${fullTable}`);
      const op = policy.operation === 'ALL' ? 'ALL' : policy.operation;
      const roles = policy.roles.join(', ');
      let stmt = `CREATE POLICY ${quoteId(policy.name)} ON ${fullTable} FOR ${op} TO ${roles}`;
      if (policy.using) stmt += ` USING (${policy.using})`;
      if (policy.check) stmt += ` WITH CHECK (${policy.check})`;
      stmt += ';';
      parts.push(stmt);
    }
  }

  return parts.join('; ');
}

/**
 * Run SQL via Supabase Management API (requires SUPABASE_MANAGEMENT_API_TOKEN).
 */
async function runManagementQuery(query: string): Promise<void> {
  const token = process.env.SUPABASE_MANAGEMENT_API_TOKEN;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!token) throw new Error('SUPABASE_MANAGEMENT_API_TOKEN is required for table creation');
  if (!url) throw new Error('NEXT_PUBLIC_SUPABASE_URL is required');
  const projectRef = url.replace(/^https:\/\//, '').split('.')[0];
  const apiUrl = `https://api.supabase.com/v1/projects/${projectRef}/database/query`;

  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || err.error || `Management API ${res.status}: ${res.statusText}`);
  }
}

/**
 * Check if a table exists using the Supabase REST API (lightweight select).
 */
export async function tableExists(
  client: TableExistsClient,
  tableName: string
): Promise<boolean> {
  const { error } = await client.from(tableName).select('*').limit(0);
  if (!error) return true;
  if (error.code === PGRST205) return false;
  throw error;
}

/**
 * Create a table (and indexes, RLS) using the Management API.
 */
export async function createTable(schema: TableSchema): Promise<void> {
  const sql = schemaToSql(schema);
  await runManagementQuery(sql);
  tableExistsCache.add(schema.name);
}

/**
 * Ensure table exists: use cache, then check via REST API, then create via Management API if missing.
 * On the client, creation is done via the /api/supabase/ensure-table route (token stays server-side).
 */
export async function ensureTableExists(
  client: TableExistsClient,
  tableName: string,
  schema: TableSchema
): Promise<void> {
  if (tableExistsCache.has(tableName)) return;

  const exists = await tableExists(client, tableName);
  if (exists) {
    tableExistsCache.add(tableName);
    return;
  }

  const isServer = typeof window === 'undefined';
  if (isServer) {
    await createTable(schema);
  } else {
    const base = typeof window !== 'undefined' && window.location?.origin ? window.location.origin : '';
    const res = await fetch(`${base}/api/supabase/ensure-table`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tableName, schema }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ message: res.statusText }));
      throw new Error(err.message || 'Failed to ensure table');
    }
    tableExistsCache.add(tableName);
  }
}

/**
 * Invalidate cache for a table (e.g. after manual drop). Use for testing.
 */
export function invalidateTableCache(tableName: string): void {
  tableExistsCache.delete(tableName);
}

export { schemaToSql };
