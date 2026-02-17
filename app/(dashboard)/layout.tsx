import { createClient } from '@/lib/serverClient';
import { DashboardLayoutShell } from '@/components/layout/DashboardLayoutShell';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userLabel = user?.email ?? 'Guest';

  return <DashboardLayoutShell userLabel={userLabel}>{children}</DashboardLayoutShell>;
}
