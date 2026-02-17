'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Dropdown } from '@/components/ui/Dropdown';
import { Pagination } from '@/components/ui/Pagination';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { buttonClassName } from '@/components/ui/buttonStyles';

const cdnBase = 'https://cdn.prod.website-files.com';
const cdnBlog = 'https://cdn.prod.website-files.com/5d3aa41f4e11727a27d4e25c';

const categories = [
  { label: 'Morning Routines', value: 'morning-routines' },
  { label: 'Daily habits', value: 'daily-habits' },
  { label: 'Alternatives', value: 'alternatives' },
  { label: 'Busy life', value: 'busy-life' },
  { label: 'Habit Building Guide', value: 'habit-building' },
  { label: 'Success Story', value: 'success-story' },
  { label: 'Habitify Academy', value: 'habitify-academy' },
  { label: 'Personal Development', value: 'personal-development' },
];

const featuredPost = {
  title: 'Let Data Tell YOUR Story',
  excerpt: 'Each person has their own enjoyment, but the ultimate fun of tracking your habits is that we get to see the progress, the changes, through different metrics. At Habitify, we have come to realize the power of data in habit-tracking, and we feel the incredible urge to let our users see, understand and acquire that power.',
  image: `${cdnBlog}/5f4e156d7214a0a8f4a95e19_Let-Data-tell-your-story.png`,
  slug: 'let-data-tell-your-story',
  category: 'Featured',
};

const latestArticles = [
  { title: 'How to Focus with ADHD: 8+ Quick Tips for Better Focus', excerpt: "Learning how to focus with ADHD is not about pushing your brain to function differently. Let's explore 8+ simple ways to help you stay focused and feel more in control.", slug: 'how-to-focus-with-adhd', category: 'Personal Development', author: 'Jasmine Nguyen', thumb: '685b7463429f369a527f48fd_how-to-focus-with-adhd-habitify.me-thumbnail.png' },
  { title: '5 Steps for Breaking Unhealthy Habits That Actually Work in 2025', excerpt: 'Whether we want to change is not the question. The question is, how can we truly escape that never-ending cycle?', slug: 'breaking-unhealthy-habits', category: 'Daily habits', author: 'Jasmine Nguyen', thumb: '685b72044af8f054d9292001_breaking-unhealthy-habits-habitify.me-thumbnail.png' },
  { title: 'The 80/20 Principle in Time Management: How to Apply It to Your Daily Schedule', excerpt: "Efficiency means doing things right, and effectiveness means doing the RIGHT things. To achieve this, the 80/20 principle can make a significant difference.", slug: '80-20-principle-in-time-management', category: 'Daily habits', author: 'Jasmine Nguyen', thumb: '6853e7b7c1eec5d6354b7ab1_80-20-principle-in-time-management-habitify.me-thumbnail.png' },
  { title: 'How to Learn New Stuff Every Day (Even When You\'re Busy)', excerpt: "Lots of people think it's challenging to learn when life is so busy. But the truth is that it doesn't have to be overwhelming.", slug: 'learn-new-stuff-every-day', category: 'Daily habits', author: 'Jasmine Nguyen', thumb: '6853e659999e716602767ee7_Learn-New-Stuff-Every-Day-HABITIFY.me-thumbnail.png' },
  { title: 'How Long Does It Take to Create a Habit? (Science Says + 6 Tips)', excerpt: 'You may have heard it before. The well-known "21-day rule" says that it only takes three weeks to form any habit. But here\'s the thing. That 21-day number? It\'s not really the whole story.', slug: 'how-long-does-it-take-to-create-a-habit', category: 'Daily habits', author: 'Jasmine Nguyen', thumb: '6853e384c51638ae086b428e_how-long-does-it-take-to-create-a-habit-habitify.me-thumbnail.png' },
  { title: '10 Health Tips for Summer Season: Beat Heat & Stay Vibrant', excerpt: 'Summer is a present. Long days, warm weather, and vacation vibes create the perfect backdrop for making healthy choices feel easy and enjoyable.', slug: 'health-tips-for-summer-season', category: 'Daily habits', author: 'Jasmine Nguyen', thumb: '6853dea021fdc939be43d0f6_Health-Tips-for-Summer-Season-habitify.me-thumbnail.png' },
];

export default function BlogPage() {
  const [category, setCategory] = useState(categories[0].value);
  const [page, setPage] = useState(1);
  const totalPages = 3;

  return (
    <div className="min-h-screen app-bg flex flex-col">
      <SiteHeader />

      {/* Blog header */}
      <section className="border-b border-border/60 bg-card/80">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/blog" className="font-display text-xl font-semibold text-fg">
              Habitify Blog
            </Link>
            <span className="hidden text-sm text-muted sm:inline">#1 Data-driven Habit Tracker</span>
          </div>
          <div className="flex items-center gap-4">
            <Dropdown
              label="Categories"
              items={categories}
              value={category}
              onChange={(v) => setCategory(v)}
            />
            <a
              href="https://app.habitify.me/signup"
              target="_blank"
              rel="noreferrer"
              className={buttonClassName({ variant: 'primary', size: 'sm' })}
              onClick={() => console.log('Join')}
            >
              JOIN For free
            </a>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Featured */}
        <ScrollReveal className="mx-auto max-w-[1200px] px-4 py-10" as="section">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="hover-lift block overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft"
            onClick={() => console.log('Featured post')}
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto md:h-[320px]">
                <Image src={featuredPost.image} alt="" fill className="object-cover" unoptimized />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-8">
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">Featured</span>
                <h2 className="mt-2 font-display text-2xl font-bold text-fg md:text-3xl">{featuredPost.title}</h2>
                <p className="mt-3 text-muted">{featuredPost.excerpt}</p>
              </div>
            </div>
          </Link>
        </ScrollReveal>

        {/* Latest Articles */}
        <ScrollReveal className="mx-auto max-w-[1200px] px-4 pb-16" as="section">
          <h2 className="font-display text-2xl font-bold text-fg">Latest Articles</h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-primary" />
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {latestArticles.map((post) => (
              <article key={post.slug} className="hover-lift flex gap-4 rounded-xl p-2 transition-colors hover:bg-card/50">
                <Link href={`/blog/${post.slug}`} className="relative h-[70px] w-[70px] shrink-0 overflow-hidden rounded-lg sm:h-24 sm:w-32" onClick={() => console.log('Article')}>
                  <Image src={`${cdnBlog}/${post.thumb}`} alt="" fill className="object-cover" unoptimized />
                </Link>
                <div className="min-w-0 flex-1">
                  <Link href={`/blog/${post.slug}`} className="font-display text-lg font-semibold text-fg hover:text-primary" onClick={() => console.log('Article')}>
                    {post.title}
                  </Link>
                  <p className="mt-1 line-clamp-2 text-sm text-muted">{post.excerpt}</p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-muted">
                    <span>{post.author}</span>
                    <span>·</span>
                    <Link href={`/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary hover:underline">
                      {post.category}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 flex items-center justify-center gap-2">
            <Pagination current={page} total={totalPages} onPageChange={setPage} />
            <button
              type="button"
              className="ml-2 inline-flex items-center gap-1 rounded-lg border border-border/70 bg-card px-3 py-2 text-sm font-medium text-fg hover:bg-bg"
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            >
              Next
            </button>
          </div>
        </ScrollReveal>
      </main>

      <SiteFooter />
    </div>
  );
}
