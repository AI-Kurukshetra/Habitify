'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';
import { HabitifyLogo } from '@/components/ui/HabitifyLogo';

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      const { data, error: err } = await supabase.auth.signUp({ email, password });
      if (err) throw err;
      if (data.user) {
        if (data.user.identities && data.user.identities.length === 0) {
          setError('This email is already registered. Please sign in.');
        } else {
          setSuccess(true);
          setTimeout(() => {
            router.push('/dashboard');
            router.refresh();
          }, 1500);
        }
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to sign up');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[400px] flex flex-col items-center">
      <HabitifyLogo className="mb-6" />
      <h1 className="text-xl font-semibold text-[#111827]">Create new Account</h1>
      <p className="mt-1 text-sm text-[#6B7280]">Your journey to better habits starts here</p>

      {error && (
        <div className="mt-6 w-full rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </div>
      )}
      {success && (
        <div className="mt-6 w-full rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
          Account created. Redirecting...
        </div>
      )}

      <form onSubmit={handleSignup} className="mt-6 w-full space-y-4">
        <div>
          <label htmlFor="signup-email" className="block text-xs font-medium uppercase tracking-wide text-[#374151]">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="signup-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="your-email@example.com"
            className="mt-1.5 w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#2a67f4] focus:outline-none focus:ring-1 focus:ring-[#2a67f4]"
          />
        </div>
        <div>
          <label htmlFor="signup-password" className="block text-xs font-medium uppercase tracking-wide text-[#374151]">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            id="signup-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            placeholder="Password"
            className="mt-1.5 w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#2a67f4] focus:outline-none focus:ring-1 focus:ring-[#2a67f4]"
          />
        </div>
        <div>
          <label htmlFor="signup-confirm" className="block text-xs font-medium uppercase tracking-wide text-[#374151]">
            Re-enter Pass <span className="text-red-500">*</span>
          </label>
          <input
            id="signup-confirm"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={6}
            placeholder="Password"
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
          {loading ? 'Creating account...' : 'Sign Up'}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-[#6B7280]">
        Already have an account?{' '}
        <Link href="/login" className="font-medium text-[#2a67f4] hover:underline">
          Sign In
        </Link>
      </p>

      <p className="mt-10 text-center text-xs text-[#9CA3AF]">
        By continuing, you agree to our{' '}
        <Link href="/" className="text-[#2a67f4] hover:underline">Terms of Service</Link>
        {' '}and{' '}
        <Link href="/" className="text-[#2a67f4] hover:underline">Privacy Policy</Link>
      </p>
    </div>
  );
}
