import { createBrowserClient } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

/**
 * Browser Supabase client from @supabase/ssr.
 * Uses cookies so the session is available to middleware and server components.
 */
export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);
