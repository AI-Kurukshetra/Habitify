'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Tabs } from '@/components/ui/Tabs';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const assetBase = '/images/cdn.prod.website-files.com/5d3aa39f8474c472841a7dfc';
const cdnBase = 'https://cdn.prod.website-files.com/5d3aa39f8474c472841a7dfc';

const tabItems = [
  { id: 'Desktop', label: 'Desktop' },
  { id: 'IOS', label: 'iOS' },
  { id: 'Android', label: 'Android' },
  { id: 'watchOS', label: 'watchOS' },
  { id: 'Wear OS', label: 'Wear OS' },
];

const tabImages: Record<string, string> = {
  Desktop: `${cdnBase}/68a1d69accd947662b8908dc_4dabb83696d897fe28efff18930cc7dc_Download%20-%20Desktop%20App.jpg`,
  IOS: `${cdnBase}/68a1ad7b69d0d522d9070242_b814f357a3b86aad515be02aada4ded5_Download%20-%20IOS.jpg`,
  Android: `${cdnBase}/68a1a702d001c130cc23b081_Download%20-%20Android.jpg`,
  watchOS: `${cdnBase}/68a1bb04956b6b807c881358_5300f174b3b8b92514d5c10cac106543_Download%20-%20WatchOS.jpg`,
  'Wear OS': `${cdnBase}/68a1ce0ba156f0ba31df20ae_0e4c75c8167f352c6f5d4cba84f4fb99_Download%20-%20WearOS.avif`,
};

const desktopLinks = [
  { label: 'macOS Apple Silicon', href: '#' },
  { label: 'macOS Intel', href: '#' },
  { label: 'Find on Windows Store', href: 'https://apps.microsoft.com/detail/9nzwvwrqmclk?hl=en-US&gl=US' },
  { label: 'Web: Sign In', href: 'https://app.habitify.me/signin' },
  { label: 'Web: Sign Up', href: 'https://app.habitify.me/signup' },
];

const mobileLinks = [
  { label: 'iOS: Find on App Store', href: 'https://apps.apple.com/us/app/habitify-habit-tracker/id1111447047?platform=iphone' },
  { label: 'Android: Find on Play Store', href: 'https://play.google.com/store/apps/details?id=co.unstatic.habitify&hl=en' },
];

const watchLinks = [
  { label: 'watchOS: Find on App Store', href: 'https://apps.apple.com/us/app/habitify-habit-tracker/id1111447047?platform=appleWatch' },
  { label: 'Wear OS: Find on Play Store', href: 'https://play.google.com/store/apps/details?id=co.unstatic.habitify&hl=en' },
];

export default function DownloadPage() {
  const [activeTab, setActiveTab] = useState('Desktop');

  return (
    <div className="min-h-screen app-bg flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <ScrollReveal className="mx-auto max-w-[1200px] px-4 py-16 text-center" as="section">
          <p className="text-sm font-medium text-primary">#1 Data-driven Habit Tracker</p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-fg sm:text-5xl">
            Download <span className="text-gradient font-bold">Habitify.</span>
          </h1>
          <p className="mt-3 text-muted">Available for macOS, Windows, iOS, and Android.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://apps.apple.com/us/app/habitify-habit-tracker/id1111447047?platform=iphone"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-medium text-primary-fg hover:opacity-90"
              onClick={() => console.log('App Store')}
            >
              Find on App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=co.unstatic.habitify"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-border/70 bg-card px-6 text-sm font-medium text-fg hover:bg-bg"
              onClick={() => console.log('Play Store')}
            >
              Find on Play Store
            </a>
            <a
              href="https://apps.microsoft.com/detail/9nzwvwrqmclk"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-border/70 bg-card px-6 text-sm font-medium text-fg hover:bg-bg"
              onClick={() => console.log('Windows Store')}
            >
              Find on Windows Store
            </a>
          </div>
        </ScrollReveal>

        {/* Device tabs */}
        <ScrollReveal className="mx-auto max-w-[1200px] px-4 pb-16" as="section">
          <Tabs items={tabItems} value={activeTab} onValueChange={setActiveTab} className="mb-6 flex-wrap justify-center" />
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card">
            {tabImages[activeTab] && (
              <div className="relative aspect-video w-full">
                <Image
                  src={tabImages[activeTab]}
                  alt={`Habitify on ${activeTab}`}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* All Version Of Habitify */}
        <ScrollReveal className="border-t border-border/60 bg-card/50 py-16" as="section">
          <div className="mx-auto max-w-[1200px] px-4">
            <h2 className="font-display text-2xl font-bold text-fg">All Version Of Habitify.</h2>
            <div className="mt-10 space-y-12">
              <div>
                <h3 className="font-display text-lg font-semibold text-fg">Desktop App</h3>
                <p className="text-sm text-muted">Best for complex and keyboard focus use.</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="hover-lift flex items-center gap-3 rounded-xl border border-border/60 bg-bg p-4">
                    <Image src={`${assetBase}/689340445777c050c0d5d3db_macOS.svg`} alt="" width={32} height={32} />
                    <div className="flex-1">
                      <h4 className="font-medium text-fg">macOS</h4>
                      <a href="#" className="mt-1 flex items-center gap-1 text-sm text-primary hover:underline" onClick={() => console.log('macOS Silicon')}>
                        macOS Apple Silicon
                        <Image src={`${assetBase}/6893454b1558af84ae17931c_Right%20Arrow.svg`} alt="" width={16} height={16} />
                      </a>
                      <a href="#" className="mt-1 flex items-center gap-1 text-sm text-primary hover:underline" onClick={() => console.log('macOS Intel')}>
                        macOS Intel
                        <Image src={`${assetBase}/6893454b1558af84ae17931c_Right%20Arrow.svg`} alt="" width={16} height={16} />
                      </a>
                    </div>
                  </div>
                  <div className="hover-lift flex items-center gap-3 rounded-xl border border-border/60 bg-bg p-4">
                    <Image src={`${assetBase}/68934044678e4eb4e17da011_Window.svg`} alt="" width={32} height={32} />
                    <div className="flex-1">
                      <h4 className="font-medium text-fg">Windows</h4>
                      <a href="https://apps.microsoft.com/detail/9nzwvwrqmclk" target="_blank" rel="noreferrer" className="mt-1 flex items-center gap-1 text-sm text-primary hover:underline">
                        Find on Windows Store
                        <Image src={`${assetBase}/6893454b1558af84ae17931c_Right%20Arrow.svg`} alt="" width={16} height={16} />
                      </a>
                    </div>
                  </div>
                  <div className="hover-lift flex items-center gap-3 rounded-xl border border-border/60 bg-bg p-4">
                    <Image src={`${assetBase}/6893404420959c47d6b21007_Browser.svg`} alt="" width={32} height={32} />
                    <div className="flex-1">
                      <h4 className="font-medium text-fg">Web App</h4>
                      <a href="https://app.habitify.me/signin" target="_blank" rel="noreferrer" className="mt-1 flex items-center gap-1 text-sm text-primary hover:underline">Sign In</a>
                      <a href="https://app.habitify.me/signup" target="_blank" rel="noreferrer" className="mt-1 flex items-center gap-1 text-sm text-primary hover:underline">Sign Up</a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-fg">Mobile & Tablet</h3>
                <p className="text-sm text-muted">Best for on-the-go productivity and seamless task management.</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="hover-lift flex items-center gap-3 rounded-xl border border-border/60 bg-bg p-4">
                    <Image src={`${assetBase}/689340445777c050c0d5d3db_macOS.svg`} alt="" width={32} height={32} />
                    <div className="flex-1">
                      <h4 className="font-medium text-fg">iOS</h4>
                      <a href="https://apps.apple.com/us/app/habitify-habit-tracker/id1111447047?platform=iphone" target="_blank" rel="noreferrer" className="mt-1 flex items-center gap-1 text-sm text-primary hover:underline">
                        Find on App Store
                        <Image src={`${assetBase}/6893454b1558af84ae17931c_Right%20Arrow.svg`} alt="" width={16} height={16} />
                      </a>
                    </div>
                  </div>
                  <div className="hover-lift flex items-center gap-3 rounded-xl border border-border/60 bg-bg p-4">
                    <Image src={`${assetBase}/68a0bc0e61fda760fd80cc30_Androi Logo.svg`} alt="" width={32} height={32} />
                    <div className="flex-1">
                      <h4 className="font-medium text-fg">Android</h4>
                      <a href="https://play.google.com/store/apps/details?id=co.unstatic.habitify" target="_blank" rel="noreferrer" className="mt-1 flex items-center gap-1 text-sm text-primary hover:underline">
                        Find on Play Store
                        <Image src={`${assetBase}/6893454b1558af84ae17931c_Right%20Arrow.svg`} alt="" width={16} height={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-fg">Smart Watch</h3>
                <p className="text-sm text-muted">Ideal for quick access to your tasks and notifications.</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="hover-lift flex items-center gap-3 rounded-xl border border-border/60 bg-bg p-4">
                    <Image src={`${assetBase}/68934044bef079eae0aa9fb0_watchOS.svg`} alt="" width={32} height={32} />
                    <div className="flex-1">
                      <h4 className="font-medium text-fg">watchOS</h4>
                      <a href="https://apps.apple.com/us/app/habitify-habit-tracker/id1111447047?platform=appleWatch" target="_blank" rel="noreferrer" className="mt-1 flex items-center gap-1 text-sm text-primary hover:underline">
                        Find on App Store
                        <Image src={`${assetBase}/6893454b1558af84ae17931c_Right%20Arrow.svg`} alt="" width={16} height={16} />
                      </a>
                    </div>
                  </div>
                  <div className="hover-lift flex items-center gap-3 rounded-xl border border-border/60 bg-bg p-4">
                    <Image src={`${assetBase}/6893404403ec38af84bcc06e_Wear OS.svg`} alt="" width={32} height={32} />
                    <div className="flex-1">
                      <h4 className="font-medium text-fg">Wear OS</h4>
                      <a href="https://play.google.com/store/apps/details?id=co.unstatic.habitify" target="_blank" rel="noreferrer" className="mt-1 flex items-center gap-1 text-sm text-primary hover:underline">
                        Find on Play Store
                        <Image src={`${assetBase}/6893454b1558af84ae17931c_Right%20Arrow.svg`} alt="" width={16} height={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </main>

      <SiteFooter />
    </div>
  );
}
