import Image from 'next/image';
import Link from 'next/link';

const cdnBase = 'https://cdn.prod.website-files.com/5d3aa39f8474c472841a7dfc';

const resources = [
  { label: 'Help Center', href: 'https://intercom.help/habitify-app/en/' },
  { label: 'API Documentation', href: 'https://docs.habitify.me/' },
  { label: 'Translate Habitify', href: 'https://crowdin.com/project/habitify' },
  { label: 'Zapier Integration', href: 'https://zapier.com/apps/habitify/integrations' },
  { label: 'IFTTT Integration', href: 'https://ifttt.com/habitify' },
];

const social = [
  { label: 'Twitter', href: 'https://twitter.com/UseHabitify' },
  { label: 'Facebook', href: 'https://www.facebook.com/habitify/' },
  { label: 'Community', href: 'https://feedback.habitify.me' },
];

const learnMore = [
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: 'mailto:contact@habitify.me' },
  { label: 'Habit Tracking Apps Review', href: '/our-reviews' },
  { label: 'PolyPlan: Daily Planner', href: 'https://polyplan.app', external: true },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-[rgb(18,24,38)] text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h5 className="text-sm font-semibold text-white/90">Resources</h5>
            <div className="mt-3 flex flex-col gap-2">
              {resources.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="text-sm text-white/70 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-white/90">Social</h5>
            <div className="mt-3 flex flex-col gap-2">
              {social.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/70 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-white/90">Learn more</h5>
            <div className="mt-3 flex flex-col gap-2">
              {learnMore.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.href} href={link.href} className="text-sm text-white/70 hover:text-white">
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-white/90">Download</h5>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href="https://apps.apple.com/app/apple-store/id1111447047?pt=95512966&ct=landing-page-v2&mt=8"
                target="_blank"
                rel="noreferrer"
                className="inline-block"
                onClick={() => console.log('App Store')}
              >
                <Image
                  src={`${cdnBase}/64831917f8f86e07bd2e82ef_app-store-download%402x.png`}
                  alt="App Store"
                  width={152}
                  height={45}
                  className="h-10 w-auto"
                />
              </a>
              <a
                href="https://apps.apple.com/app/apple-store/id1111447047"
                target="_blank"
                rel="noreferrer"
                className="inline-block"
                onClick={() => console.log('Mac App Store')}
              >
                <Image
                  src={`${cdnBase}/64831994dc0f09f22492d93c_mac-app-store-download%402x.png`}
                  alt="Mac App Store"
                  width={152}
                  height={45}
                  className="h-10 w-auto"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=co.unstatic.habitify"
                target="_blank"
                rel="noreferrer"
                className="inline-block"
                onClick={() => console.log('Play Store')}
              >
                <Image
                  src={`${cdnBase}/6483199d4e3f72cc3a832e05_google-play-download%402x.png`}
                  alt="Google Play"
                  width={152}
                  height={45}
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-white/20 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/" className="font-display text-lg font-semibold text-white">
              Habitify
            </Link>
            <a href="https://habitify.me/ja" className="text-sm text-white/70 hover:text-white">Japanese</a>
            <a href="https://habitify.me/de" className="text-sm text-white/70 hover:text-white">German</a>
            <a href="https://habitify.me/es" className="text-sm text-white/70 hover:text-white">Spanish</a>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
            <Link href="/terms-of-use" className="hover:text-white">Terms</Link>
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <span>© 2025 Habitify</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
