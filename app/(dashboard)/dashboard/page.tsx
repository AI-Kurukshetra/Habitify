import { createClient } from '@/lib/serverClient';
import Link from 'next/link';
import LogoutButton from '@/components/LogoutButton';

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Dashboard
          </h1>

          <div className="space-y-6">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Logged in as:</p>
              <p className="text-lg font-semibold text-gray-900">
                {user?.email}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/crud-test"
                className="flex-1 py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors text-center"
              >
                Open CRUD Test
              </Link>

              <LogoutButton />
            </div>

            <div className="pt-6 border-t">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Quick Links
              </h2>
              <div className="space-y-2">
                <Link
                  href="/crud-test"
                  className="block text-indigo-600 hover:text-indigo-700 hover:underline"
                >
                  → Manage Items (CRUD Operations)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
