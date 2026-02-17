import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full px-6 py-12 bg-white rounded-2xl shadow-xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Next.js CRUD App
          </h1>
          <p className="text-gray-600 mb-8">
            Full-stack application with Supabase
          </p>
          
          <div className="space-y-4">
            <Link
              href="/login"
              className="block w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
            >
              Login
            </Link>
            
            <Link
              href="/signup"
              className="block w-full py-3 px-4 bg-white hover:bg-gray-50 text-indigo-600 font-medium rounded-lg border-2 border-indigo-600 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
