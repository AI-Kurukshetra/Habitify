'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Card, CardContent } from '@/components/ui/Card';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

const cdnBase = 'https://cdn.prod.website-files.com/5d3aa39f8474c472841a7dfc';

const organizeColumns = [
  {
    label: 'Morning',
    icon: `${cdnBase}/6481c37cceaac1f822d6f6ea_sunrise.svg`,
    habits: [
      { name: 'Run', time: '8 AM' },
      { name: 'Meditate', time: '8:30 AM' },
      { name: 'Plan the day', time: '9 AM' },
      { name: 'Read', time: '10 AM' },
      { name: 'Hydrate', time: '9:30 AM' },
    ],
    className: '',
  },
  {
    label: 'Noon',
    icon: `${cdnBase}/6481c37cceaac1f822d6f6ea_sunrise.svg`,
    habits: [
      { name: 'Healthy Lunch', time: '12 PM' },
      { name: 'Connect with a colleague', time: '2 PM' },
      { name: 'Express gratitude', time: '4 PM' },
    ],
    className: 'border-l border-r border-border/60',
  },
  {
    label: 'Night',
    icon: `${cdnBase}/6481c37cceaac1f822d6f6ea_sunrise.svg`,
    habits: [
      { name: 'Reflect', time: '8 PM' },
      { name: 'Wind Down', time: '9 PM' },
      { name: 'Disconnect from screens', time: '9:30 PM' },
      { name: 'Prepare for tomorrow', time: '10 PM' },
    ],
    className: '',
  },
];

const progressImages = [
  `${cdnBase}/6480a277275ec417eb65c134_Frame%20678.jpg`,
  `${cdnBase}/6480a0be71bc812f55132e88_Frame%20671.jpg`,
  `${cdnBase}/6480a0d971bc812f55134cec_Frame%20692.jpg`,
  `${cdnBase}/6480a0d0edc25a1226233052_Frame%20694.jpg`,
];

const tools = [
  { icon: `${cdnBase}/6480a87f7483633e7ac6236f_hourglass-01.svg`, title: 'Built-in Timer', desc: 'Our intuitive built-in timer helps you stay focused, improving your productivity and saving you valuable time.' },
  { icon: `${cdnBase}/6486c34538fc97cc3ecaf8c8_pencil-02.svg`, title: 'Built-in Notes', desc: 'Capture and reflect on your thoughts, fostering self-awareness and enabling continuous growth.' },
  { icon: `${cdnBase}/6480b405f617bb88f9e39a64_face-smile.svg`, title: 'Mood Tracking', desc: 'Track your emotional health, understand its effects on your habits, and create a holistic approach to self-improvement.' },
  { icon: `${cdnBase}/6480b41d7e2a85a542efb16b_lock-04.svg`, title: 'Privacy Lock', desc: 'Preserve your privacy with our secure feature, safeguarding your personal habit data.' },
  { icon: `${cdnBase}/6480b47ff9add6c5c117cdca_Rectangle%2085%402x.png`, title: 'Apple Health Sync', desc: 'Synchronize your health data from Apple Health, achieving a comprehensive view of your wellness journey.' },
  { icon: `${cdnBase}/6480b4a5a5760f03102c1c53_Frame%20143.png`, title: 'Google Fit Sync', desc: 'Seamlessly integrate with Google Fit, effortlessly tracking your fitness milestones.' },
  { icon: `${cdnBase}/6480b4bbce3ce00b40709621_server-03.svg`, title: 'API Access', desc: 'Personalize your habit tracking experience with API access, facilitating advanced customization.' },
  { icon: `${cdnBase}/6480b4ccf030976b53d9ee88_Frame%20698.png`, title: 'Zapier, IFTT Connect', desc: 'Link Habitify with your favorite apps, automating your habit tracking for a smooth, intuitive experience.' },
  { icon: `${cdnBase}/6480b4f9218da6dfefb5ddd3_image%206.png`, title: 'Apple Calendar Sync', desc: 'Synchronize your habit schedule with Apple Calendar, facilitating effortless organization and planning.' },
];

const testimonials = [
  { quote: "Before Habitify, I struggled with managing my time effectively and often felt overwhelmed. But the app has helped me create a well-structured routine and stick to it. I've improved my productivity, and I feel more balanced and in control.", name: 'Jennifer Ellison', role: 'Product Manager', avatar: `${cdnBase}/6486be69c649a2be099d938a_Rectangle%20168.jpg` },
  { quote: "Habitify is a game-changer for me. I've been able to set fitness goals and maintain consistency, all while tracking my progress. The app not only tracks my habits but also motivates me to keep going.", name: 'Thomas Maxwell', role: 'Fitness Enthusiast', avatar: `${cdnBase}/6486bdd6d982eb5bc9b8d772_Rectangle%20168.png` },
  { quote: "As an entrepreneur, my days are extremely busy. Habitify has helped me create a daily routine that keeps me grounded, focused, and productive. I love the built-in timer and the ability to track my moods.", name: 'John McLemore', role: 'Entrepreneur', avatar: `${cdnBase}/6486be7af4a4543398711bef_Rectangle%20169.jpg` },
  { quote: "I was having trouble balancing my studies, part-time job, and personal life. Habitify helped me organize my day better, kept me motivated, and turned my life around. My grades have improved.", name: 'Carol Hardison', role: 'Student', avatar: `${cdnBase}/6486be75bfa0a739d88648d2_Rectangle%20171.jpg` },
];

export default function HomePage() {
  return (
    <div className="min-h-screen app-bg flex flex-col">
      <SiteHeader />

      {/* Hero — fade in on load */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-card to-bg"
      >
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-fg sm:text-5xl lg:text-[3rem]">
                Build Better Habits, <br /> Build a Better Life
              </h1>
              <p className="mt-4 max-w-lg text-lg text-muted">
                Harness the power of our personalized habit tracker app to streamline your everyday routines and achieve your goals.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=co.unstatic.habitify"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block"
                  onClick={() => console.log('Play Store')}
                >
                  <Image src={`${cdnBase}/6483199d4e3f72cc3a832e05_google-play-download%402x.png`} alt="Google Play" width={152} height={45} className="h-11 w-auto" unoptimized />
                </a>
                <a
                  href="https://apps.apple.com/app/apple-store/id1111447047?pt=95512966&ct=landing-page-v2&mt=8"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block"
                  onClick={() => console.log('App Store')}
                >
                  <Image src={`${cdnBase}/64831917f8f86e07bd2e82ef_app-store-download%402x.png`} alt="App Store" width={152} height={45} className="h-11 w-auto" unoptimized />
                </a>
              </div>
              <a
                href="https://app.habitify.me/signin"
                target="_blank"
                rel="noreferrer"
                className="btn-hover-shadow mt-4 inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-medium text-primary-fg shadow-soft hover:opacity-90"
                onClick={() => console.log('Try Habitify Free')}
              >
                Try Habitify Free
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col items-center gap-6"
            >
              <div className="flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-border/60 bg-card/80 p-6">
                <div className="flex items-center gap-2">
                  <Image src={`${cdnBase}/647f5ef10361cedd6a6b4144_appstore-grayscale.svg`} alt="" width={24} height={24} unoptimized />
                  <span className="text-sm font-semibold text-fg">App Store</span>
                </div>
                <Image src={`${cdnBase}/647f5f9ddcd8436b0fea1bc3_4point6-star.svg`} alt="4.6" width={80} height={20} unoptimized />
                <span className="text-sm text-muted">AVG 4.6 from 152,093+ users</span>
                <div className="h-8 w-px bg-border" />
                <div className="flex items-center gap-2">
                  <Image src={`${cdnBase}/647f5ef10361cedd6a6b4144_appstore-grayscale.svg`} alt="" width={24} height={24} unoptimized />
                  <span className="text-sm font-semibold text-fg">Play Store</span>
                </div>
                <span className="text-sm text-muted">AVG 4.4 from 28,125+ users</span>
              </div>
              <div className="relative w-full max-w-[940px]">
                <Image
                  src={`${cdnBase}/647f5daa8446c87626bbfe23_Frame%2044%20(1).png`}
                  alt="Habitify multiplatform"
                  width={1217}
                  height={600}
                  className="h-auto w-full object-contain"
                  unoptimized
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Organize, Execute, Triumph — scroll reveal */}
      <ScrollReveal className="py-16 md:py-20" as="section">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="flex flex-col items-center text-center">
            <Image src={`${cdnBase}/6480ae01528a527a4ce3ff21_target-04.svg`} alt="" width={48} height={48} className="mb-4" unoptimized />
            <h2 className="font-display text-3xl font-bold text-fg md:text-4xl">Organize, Execute, Triumph</h2>
            <p className="mt-3 max-w-2xl text-muted">
              Start your day right with a clear, organized schedule that keeps you on track for success. Here&apos;s an example of how your day with Habitify could look:
            </p>
          </div>
          <div className="mt-12 grid gap-0 md:grid-cols-3">
            {organizeColumns.map((col) => (
              <div key={col.label} className={`hover-lift flex flex-col rounded-xl border border-border/60 bg-card p-6 ${col.className}`}>
                <div className="flex items-center gap-2 border-b border-border/60 pb-3">
                  <Image src={col.icon} alt="" width={24} height={24} unoptimized />
                  <span className="font-semibold text-fg">{col.label}</span>
                </div>
                <div className="mt-3 space-y-2">
                  {col.habits.map((h) => (
                    <div key={h.name} className="flex items-center justify-between text-sm">
                      <span className="text-fg">{h.name}</span>
                      <span className="text-muted">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Stay Empowered by Your Progress */}
      <ScrollReveal className="relative border-y border-border/60 bg-card/50 py-16 md:py-20" as="section">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="flex flex-col items-center text-center">
            <Image src={`${cdnBase}/64809eaa717400595633adea_bar-chart-12.svg`} alt="" width={48} height={48} className="mb-4" unoptimized />
            <h2 className="font-display text-3xl font-bold text-fg md:text-4xl">
              Stay Empowered by <br /> Your Progress
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Scientific studies show that tracking your progress can significantly boost your chances of successfully building and maintaining habits. Fuel your journey with insightful metrics, celebrate your milestones, and stay motivated.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {progressImages.map((src, i) => (
              <div key={i} className="hover-lift overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft">
                <div className="relative aspect-[4/3]">
                  <Image src={src} alt="" fill className="object-cover" unoptimized />
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Challenges — alternating: text from left, image from right */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal variant="fromLeft" className="min-w-0">
              <Image src={`${cdnBase}/6480ae66c14325623a65ab27_Frame%20635.png`} alt="" width={90} height={90} className="mb-4" unoptimized />
              <h2 className="font-display text-3xl font-bold text-fg">Level Up the Fun with</h2>
              <h2 className="font-display text-3xl font-bold text-gradient">Challenges.</h2>
              <p className="mt-3 text-muted">
                Engage in friendly competitions and participate in monthly challenges to make habit-building a more exhilarating journey.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex gap-3">
                  <Image src={`${cdnBase}/6480b1acab34bb823d4055e4_users-up.svg`} alt="" width={24} height={24} className="shrink-0" unoptimized />
                  <p className="text-sm text-fg"><strong>Challenge your Friends.</strong> Boost your habit-forming journey with a bit of friendly rivalry.</p>
                </div>
                <div className="flex gap-3">
                  <Image src={`${cdnBase}/6480b2c0ce3ce00b406e28b9_calendar-heart-01.svg`} alt="" width={24} height={24} className="shrink-0" unoptimized />
                  <p className="text-sm text-fg"><strong>Join Monthly Challenge.</strong> Climb the leaderboards, make habit formation fun and rewarding.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fromRight" className="flex justify-center">
              <Image src={`${cdnBase}/6486bf95dad77b3e2da300af_Frame%20700.png`} alt="Challenges" width={280} height={280} className="h-auto w-full max-w-[280px] object-contain" unoptimized />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Innovative Tools — stagger children */}
      <ScrollReveal className="border-t border-border/60 bg-card/30 py-16 md:py-20" as="section">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="flex flex-col items-center text-center">
            <Image src={`${cdnBase}/6480ad41a9a9260a8cf7bd18_zap.svg`} alt="" width={48} height={48} className="mb-4" unoptimized />
            <h2 className="font-display text-3xl font-bold text-fg md:text-4xl">
              Innovative Tools for <br /> Habit Mastery
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Unlock a world of possibilities with our comprehensive toolkit, designed to ensure your success in habit-building.
            </p>
          </div>
          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((t) => (
              <StaggerItem key={t.title}>
                <Card className="hover-lift flex flex-row items-start gap-4">
                  <Image src={t.icon} alt="" width={40} height={40} className="shrink-0 rounded-lg" unoptimized />
                  <CardContent className="p-0 pt-0">
                    <h3 className="font-display font-semibold text-fg">{t.title}</h3>
                    <p className="mt-1 text-sm text-muted">{t.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </ScrollReveal>

      {/* Success Stories — stagger + card hover */}
      <ScrollReveal className="py-16 md:py-20" as="section">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="flex flex-col items-center text-center">
            <Image src={`${cdnBase}/6481d27e7918993e0b467f9f_hearts.svg`} alt="" width={48} height={48} className="mb-4" unoptimized />
            <h2 className="font-display text-3xl font-bold text-fg">Proven Success Stories</h2>
            <p className="mt-3 max-w-2xl text-muted">
              Habitify isn&apos;t just loved by our users — we&apos;ve also been recognized by industry leaders. Featured as the App of the Day on the Apple App Store.
            </p>
          </div>
          <StaggerContainer className="mt-12 grid gap-8 sm:grid-cols-2">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <Card className="hover-lift overflow-hidden">
                <CardContent className="p-6">
                  <p className="italic text-muted">&quot;{t.quote}&quot;</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full bg-muted">
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" unoptimized />
                    </div>
                    <div>
                      <p className="font-semibold text-fg">{t.name}</p>
                      <p className="text-sm text-muted">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </ScrollReveal>

      {/* Final CTA */}
      <ScrollReveal className="border-t border-border/60 bg-primary/5 py-16 md:py-20" as="section">
        <div className="mx-auto max-w-[1200px] px-4 text-center">
          <Image src={`${cdnBase}/6486c3a1dad77b3e2da701a3_trophy-01.svg`} alt="" width={48} height={48} className="mx-auto mb-4" unoptimized />
          <h2 className="font-display text-3xl font-bold text-fg md:text-4xl">
            Why Wait to <br /> Transform Your Life?
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-muted">
            Join over 2 million people who are taking control of their habits and building a better life with Habitify.
          </p>
          <a
            href="https://app.habitify.me/signup"
            target="_blank"
            rel="noreferrer"
            className="btn-hover-shadow mt-6 inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-sm font-medium text-primary-fg shadow-soft hover:opacity-90"
            onClick={() => console.log('Try Habitify Free')}
          >
            Try Habitify Free
          </a>
          <p className="mt-4 text-sm text-muted">Or download on your preferred platform:</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a href="https://apps.apple.com/app/apple-store/id1111447047" target="_blank" rel="noreferrer" className="inline-block" onClick={() => console.log('App Store')}>
              <Image src={`${cdnBase}/64831917f8f86e07bd2e82ef_app-store-download%402x.png`} alt="App Store" width={152} height={45} className="h-10 w-auto" unoptimized />
            </a>
            <a href="https://apps.apple.com/app/apple-store/id1111447047" target="_blank" rel="noreferrer" className="inline-block" onClick={() => console.log('Mac App Store')}>
              <Image src={`${cdnBase}/64831994dc0f09f22492d93c_mac-app-store-download%402x.png`} alt="Mac App Store" width={152} height={45} className="h-10 w-auto" unoptimized />
            </a>
            <a href="https://play.google.com/store/apps/details?id=co.unstatic.habitify" target="_blank" rel="noreferrer" className="inline-block" onClick={() => console.log('Google Play')}>
              <Image src={`${cdnBase}/6483199d4e3f72cc3a832e05_google-play-download%402x.png`} alt="Google Play" width={152} height={45} className="h-10 w-auto" unoptimized />
            </a>
          </div>
        </div>
      </ScrollReveal>

      <SiteFooter />
    </div>
  );
}
