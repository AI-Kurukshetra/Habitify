'use client';

import { useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { MailIcon } from '@/components/ui/icons';

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
      const redirectTo = `${window.location.origin}/login`;
      const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo });
      if (error) throw error;
      setSent(true);
    } catch (err: any) {
      setError(err.message || 'Failed to send reset email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-fg">Reset password</h1>
          <p className="mt-1 text-sm text-muted">We’ll email you a secure reset link.</p>
        </div>
        <Link href="/login" className="text-sm font-medium text-primary hover:underline">
          Back
        </Link>
      </div>

      {error ? (
        <div className="mt-6 rounded-2xl border border-danger/30 bg-danger/5 p-3 text-sm text-danger">
          {error}
        </div>
      ) : null}

      {sent ? (
        <div className="mt-6 rounded-2xl border border-success/30 bg-success/5 p-3 text-sm text-success">
          If an account exists for <span className="font-medium">{email}</span>, a reset email has been sent.
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="you@example.com"
          leftAdornment={<MailIcon size={16} />}
          autoComplete="email"
        />

        <Button type="submit" loading={loading} className="w-full">
          Send reset link
        </Button>
      </form>

      <p className="mt-6 text-sm text-muted">
        Remembered it?{' '}
        <Link href="/login" className="font-medium text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
