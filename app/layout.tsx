import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Habitify - Habit Tracking App for Better Daily Routines | iOS, Android & Web",
  description: "Transform your life with Habitify, the beautiful habit tracking app. Build lasting habits, track progress, and achieve your goals. Available on iPhone, iPad, Mac, Windows, Web, Android.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
