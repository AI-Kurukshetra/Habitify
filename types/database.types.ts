/**
 * Universal table schema for dynamic table creation via Supabase Management API.
 */

export interface TableColumn {
  name: string;
  type: string;
  is_primary?: boolean;
  is_nullable?: boolean;
  default_value?: string;
  references?: string;
}

export interface TableIndex {
  name: string;
  columns: string | string[];
  unique?: boolean;
}

export interface TableRlsPolicy {
  name: string;
  operation: 'ALL' | 'SELECT' | 'INSERT' | 'UPDATE' | 'DELETE';
  roles: string[];
  using?: string;
  check?: string;
}

export interface TableSchema {
  name: string;
  columns: TableColumn[];
  indexes?: TableIndex[];
  /** When true, enables RLS and creates rls_policies. Default false = RLS off for tables created from code. */
  rls_enabled?: boolean;
  rls_policies?: TableRlsPolicy[];
}
