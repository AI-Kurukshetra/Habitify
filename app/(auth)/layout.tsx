import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';

export const dynamic = 'force-dynamic';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen app-bg flex flex-col">
      <SiteHeader />
      <div className="flex-1">
        <div className="mx-auto max-w-[1200px] px-4 py-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="card p-8 hidden lg:block relative overflow-hidden">
              <div className="subtle-grid absolute inset-0 opacity-40 pointer-events-none" />
              <div className="relative">
                <h1 className="font-display text-4xl font-semibold tracking-tight text-fg">
                  Build habits that stick.
                </h1>
                <p className="mt-4 text-muted">
                  A clean, prompt-friendly Next.js + Supabase starter with reusable components and working flows.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-3xl border border-border/60 bg-bg p-4">
                    <div className="text-sm font-medium text-fg">Auth</div>
                    <div className="mt-1 text-sm text-muted">Email/password</div>
                  </div>
                  <div className="rounded-3xl border border-border/60 bg-bg p-4">
                    <div className="text-sm font-medium text-fg">Database</div>
                    <div className="mt-1 text-sm text-muted">RLS + CRUD</div>
                  </div>
                  <div className="rounded-3xl border border-border/60 bg-bg p-4">
                    <div className="text-sm font-medium text-fg">Storage</div>
                    <div className="mt-1 text-sm text-muted">Uploads</div>
                  </div>
                  <div className="rounded-3xl border border-border/60 bg-bg p-4">
                    <div className="text-sm font-medium text-fg">Vercel</div>
                    <div className="mt-1 text-sm text-muted">Ready</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6 sm:p-8">{children}</div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
