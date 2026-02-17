/**
 * Server-only: ensure table exists (create via Management API if missing).
 * Called by tableManager.ensureTableExists when running on the client.
 */

import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { tableExists, createTable } from '@/lib/supabase/tableManager';
import type { TableSchema } from '@/types/database.types';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { tableName, schema } = body as { tableName: string; schema: TableSchema };

    if (!tableName || !schema?.name || !Array.isArray(schema?.columns)) {
      return NextResponse.json(
        { message: 'tableName and schema (with name and columns) are required' },
        { status: 400 }
      );
    }

    if (schema.name !== tableName) {
      return NextResponse.json(
        { message: 'schema.name must match tableName' },
        { status: 400 }
      );
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !anonKey) {
      return NextResponse.json({ message: 'Missing Supabase env vars' }, { status: 500 });
    }

    const client = createClient(url, anonKey);
    const exists = await tableExists(client as any, tableName);

    if (!exists) {
      if (!process.env.SUPABASE_MANAGEMENT_API_TOKEN) {
        return NextResponse.json(
          { message: 'SUPABASE_MANAGEMENT_API_TOKEN is required for table creation' },
          { status: 500 }
        );
      }
      await createTable(schema);
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Ensure table failed';
    return NextResponse.json({ message }, { status: 500 });
  }
}
