/**
 * Ensures the Supabase client has a valid session so REST API requests
 * include the JWT and RLS sees auth.uid(). Call before any data operation.
 */

import type { User } from '@supabase/supabase-js';

type SupabaseAuthClient = {
  getSession: () => Promise<{ data: { session: unknown } }>;
  getUser: () => Promise<{ data: { user: User | null } }>;
  refreshSession: () => Promise<{ data: { session: unknown; user: User | null }; error: unknown }>;
};

/**
 * Ensures a valid session is loaded (and refreshed if needed) so the next
 * request from this client will include Authorization: Bearer <access_token>.
 * Returns the current user or throws.
 */
export async function ensureSession(auth: SupabaseAuthClient): Promise<User> {
  const { data: { session } } = await auth.getSession();
  if (session && typeof (session as { access_token?: string }).access_token === 'string') {
    const { data: { user } } = await auth.getUser();
    if (user) return user;
  }

  const { data: { session: newSession, user }, error } = await auth.refreshSession();
  if (error) throw new Error('Session expired or invalid. Please sign in again.');
  const hasToken = newSession && typeof (newSession as { access_token?: string }).access_token === 'string';
  if (!hasToken || !user) throw new Error('User not authenticated');

  return user;
}
