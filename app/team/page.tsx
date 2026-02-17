'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Dialog } from '@/components/ui/Dialog';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const cdnBase = 'https://cdn.prod.website-files.com/5d3aa39f8474c472841a7dfc';

const steps = [
  { id: 'Step-1', number: '1', title: 'Submit Purchase Details.', desc: 'Fill in the required information to initiate your purchase.', img: '68a2a5deef83f7891cd88feb_01.png' },
  { id: 'Step-2', number: '2', title: 'Make Payment.', desc: 'Enter your email account and payment details to complete the purchase. All payment methods are secured and encrypted.', img: '68a2a5de5aa2b48f425ac596_02.png' },
  { id: 'Step-3', number: '3', title: 'Receive Activation Code.', desc: 'Check your inbox for the Premium code and everything you need to get started.', img: '68a2a5de1c705d568fe39311_03.png' },
  { id: 'Step-4', number: '4', title: 'Distribute Code to Members.', desc: 'Share the Premium code with your team so everyone can activate their access.', img: '68a2a5de04ce983f5aab2f93_04.png' },
  { id: 'Step-5', number: '5', title: 'Track Code Usage.', desc: "Monitor when your code have been activated and see who's joined your Premium team.", img: '68a2ad41a7681f6518b993e6_05.png' },
];

export default function TeamPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [duration, setDuration] = useState<'1-month' | '12-month'>('12-month');
  const [userCount, setUserCount] = useState<string>('10');

  const pricePerUser = duration === '1-month' ? 10 : 48;
  const users = Math.max(1, Math.min(1000, parseInt(userCount, 10) || 0));
  const total = pricePerUser * users;

  return (
    <div className="min-h-screen app-bg flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <ScrollReveal className="mx-auto max-w-[1200px] px-4 py-16 text-center" as="section">
          <p className="text-sm font-medium text-primary">#1 Data-driven Habit Tracker</p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-fg sm:text-5xl">
            Habitify <span className="text-gradient font-bold">For Team.</span>
          </h1>
          <p className="mt-3 text-muted">Empower your team to grow with Habitify Premium.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button onClick={() => setModalOpen(true)}>Upgrade Your Team</Button>
            <a
              href="#how-it-works"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-border/70 bg-card px-6 text-sm font-medium text-fg hover:bg-bg"
              onClick={() => console.log('How It Works')}
            >
              How It Works
            </a>
          </div>
        </ScrollReveal>

        {/* How It Work */}
        <ScrollReveal id="how-it-works" className="mx-auto max-w-[1200px] scroll-mt-24 px-4 pb-16" as="section">
          <h2 className="font-display text-2xl font-bold text-fg">How It Work?</h2>
          <div className="mt-10 grid gap-12 lg:grid-cols-[280px_1fr]">
            <div className="space-y-2">
              {steps.map((step) => (
                <a
                  key={step.id}
                  href={`#${step.id}`}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-card"
                  onClick={() => console.log(step.id)}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                    {step.number}
                  </span>
                  <span className="text-sm font-medium text-fg">{step.title.replace('.', '')}</span>
                </a>
              ))}
              <div className="pt-4">
                <Button onClick={() => setModalOpen(true)} className="w-full">Upgrade Your Team</Button>
              </div>
            </div>
            <div className="space-y-16">
              {steps.map((step) => (
                <div key={step.id} id={step.id} className="scroll-mt-24">
                  <h3 className="font-display text-xl font-semibold text-fg">{step.title}</h3>
                  <p className="mt-2 text-muted">{step.desc}</p>
                  <div className="mt-4 overflow-hidden rounded-2xl border border-border/60 bg-card">
                    <Image
                      src={`${cdnBase}/${step.img}`}
                      alt={step.title}
                      width={807}
                      height={450}
                      className="h-auto w-full object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Banner */}
        <ScrollReveal className="border-t border-border/60 bg-primary/5 py-16" as="section">
          <div className="mx-auto max-w-[1200px] px-4 text-center">
            <h3 className="font-display text-2xl font-bold text-fg">Ready to grow with your team?</h3>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href="mailto:Contact@habitify.me" className="inline-flex h-12 items-center justify-center rounded-xl border border-border/70 bg-card px-6 text-sm font-medium text-fg hover:bg-bg">
                Contact Support
              </a>
              <Button onClick={() => setModalOpen(true)}>Upgrade Now</Button>
            </div>
          </div>
        </ScrollReveal>
      </main>

      <SiteFooter />

      {/* Purchase Modal */}
      <Dialog
        open={modalOpen}
        onOpenChange={setModalOpen}
        title="Purchase Habitify Premium For Your Team."
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button onClick={() => { console.log('Purchase', { duration, users, total }); setModalOpen(false); }}>Purchase</Button>
          </div>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-fg">Select subscription duration</label>
            <p className="text-xs text-muted">Price excludes applicable taxes</p>
            <div className="mt-2 flex gap-3">
              <button
                type="button"
                onClick={() => setDuration('1-month')}
                className={`flex-1 rounded-xl border-2 p-4 text-left transition ${
                  duration === '1-month' ? 'border-primary bg-primary/5' : 'border-border/60 bg-bg'
                }`}
              >
                <span className="block text-sm font-medium text-fg">1-Month License</span>
                <span className="block text-lg font-semibold text-primary">$10/user</span>
              </button>
              <button
                type="button"
                onClick={() => setDuration('12-month')}
                className={`flex-1 rounded-xl border-2 p-4 text-left transition ${
                  duration === '12-month' ? 'border-primary bg-primary/5' : 'border-border/60 bg-bg'
                }`}
              >
                <span className="block text-sm font-medium text-fg">12-Month License</span>
                <span className="block text-lg font-semibold text-primary">$48/user</span>
                <span className="block text-xs text-muted">$4/user per month</span>
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="userCount" className="block text-sm font-medium text-fg">Number of Users</label>
            <input
              id="userCount"
              type="number"
              min={1}
              max={1000}
              value={userCount}
              onChange={(e) => setUserCount(e.target.value)}
              placeholder="Input your number of user"
              className="mt-1 w-full rounded-xl border border-border/70 bg-bg px-4 py-3 text-fg"
            />
          </div>
          <div className="rounded-xl bg-primary/10 p-4">
            <span className="text-sm text-muted">Total </span>
            <span className="text-2xl font-bold text-primary">${total}</span>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
