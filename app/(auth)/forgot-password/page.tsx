'use client';

import { useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';
import { HabitifyLogo } from '@/components/ui/HabitifyLogo';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSent(false);
    try {
      const origin = typeof window !== 'undefined' ? window.location.origin : '';
      const redirectTo = `${origin}/auth/callback?next=/update-password`;
      const { error: err } = await supabase.auth.resetPasswordForEmail(email, { redirectTo });
      if (err) throw err;
      setSent(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to send reset email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[400px] flex flex-col items-center">
      <HabitifyLogo className="mb-6" />
      <h1 className="text-xl font-semibold text-[#111827]">Reset Your Password</h1>
      <p className="mt-2 text-center text-sm text-[#6B7280]">
        No worries! It happens to the best of us. We&apos;ll help you get back on track.
      </p>

      {error && (
        <div className="mt-6 w-full rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </div>
      )}
      {sent && (
        <div className="mt-6 w-full rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
          If an account exists for <span className="font-medium">{email}</span>, we&apos;ve sent a password reset link.
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 w-full space-y-4">
        <div>
          <label htmlFor="reset-email" className="block text-xs font-medium uppercase tracking-wide text-[#374151]">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="reset-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your registered email"
            className="mt-1.5 w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#2a67f4] focus:outline-none focus:ring-1 focus:ring-[#2a67f4]"
          />
        </div>
        <p className="text-xs text-[#6B7280]">
          We&apos;ll send a password reset link to this email if it matches our records.
        </p>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-[#2a67f4] py-3 text-sm font-medium text-white hover:bg-[#2360dd] disabled:opacity-60"
        >
          {loading ? 'Sending...' : 'Submit'}
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
