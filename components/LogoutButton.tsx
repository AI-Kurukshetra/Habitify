'use client';

import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="flex-1 py-4 px-6 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg transition-colors"
    >
      Logout
    </button>
  );
}
