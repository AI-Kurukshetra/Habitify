export const dynamic = 'force-dynamic';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F7F8F8] flex flex-col items-center justify-center px-4 py-10">
      {children}
    </div>
  );
}
