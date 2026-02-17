'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { HabitifyLogo } from '@/components/ui/HabitifyLogo';

export default function UpdatePasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user?.email) {
        setEmail(user.email);
      } else {
        router.replace('/login');
        return;
      }
      setChecking(false);
    };
    loadUser();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    setLoading(true);
    try {
      const { error: err } = await supabase.auth.updateUser({ password });
      if (err) throw err;
      window.location.href = '/dashboard';
      return;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to update password');
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return (
      <div className="flex w-full max-w-[400px] flex-col items-center justify-center py-12">
        <p className="text-sm text-[#6B7280]">Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[400px] flex flex-col items-center">
      <HabitifyLogo className="mb-6" />
      <h1 className="text-xl font-semibold text-[#111827]">Set new password</h1>
      <p className="mt-2 text-center text-sm text-[#6B7280]">
        Enter your new password below. You can then sign in with it.
      </p>

      {error && (
        <div className="mt-6 w-full rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 w-full space-y-4">
        <div>
          <label htmlFor="update-email" className="block text-xs font-medium uppercase tracking-wide text-[#374151]">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="update-email"
            type="email"
            value={email}
            readOnly
            className="mt-1.5 w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5 text-sm text-[#111827]"
          />
        </div>
        <div>
          <label htmlFor="update-password" className="block text-xs font-medium uppercase tracking-wide text-[#374151]">
            Reset password <span className="text-red-500">*</span>
          </label>
          <input
            id="update-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            placeholder="New password"
            className="mt-1.5 w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#2a67f4] focus:outline-none focus:ring-1 focus:ring-[#2a67f4]"
          />
        </div>
        <div>
          <label htmlFor="update-confirm" className="block text-xs font-medium uppercase tracking-wide text-[#374151]">
            Confirm password <span className="text-red-500">*</span>
          </label>
          <input
            id="update-confirm"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={6}
            placeholder="Confirm new password"
            className="mt-1.5 w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#2a67f4] focus:outline-none focus:ring-1 focus:ring-[#2a67f4]"
          />
          {confirmPassword && password !== confirmPassword && (
            <p className="mt-1 text-xs text-red-600">Passwords do not match</p>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-[#2a67f4] py-3 text-sm font-medium text-white hover:bg-[#2360dd] disabled:opacity-60"
        >
          {loading ? 'Updating...' : 'Update password & sign in'}
        </button>
      </form>

      <p className="mt-8 text-center">
        <Link href="/login" className="text-sm font-medium text-[#2a67f4] hover:underline">
          Back to Sign In
        </Link>
      </p>
    </div>
  );
}
