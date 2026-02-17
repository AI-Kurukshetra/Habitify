import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Error: Missing Supabase environment variables');
  console.error('Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function seed() {
  console.log('🌱 Starting seed process...\n');

  try {
    // Create demo user
    console.log('📝 Creating demo user...');
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: 'demo@example.com',
      password: 'demo123456',
    });

    if (authError) {
      if (authError.message.includes('already registered')) {
        console.log('⚠️  Demo user already exists, signing in...');
        const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
          email: 'demo@example.com',
          password: 'demo123456',
        });
        
        if (signInError) throw signInError;
        console.log('✅ Signed in as demo user');
      } else {
        throw authError;
      }
    } else {
      console.log('✅ Demo user created: demo@example.com / demo123456');
    }

    // Get user session
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      throw new Error('Failed to get user session');
    }

    console.log('\n📦 Creating sample items...');

    // Sample items data
    const sampleItems = [
      {
        title: 'Welcome to the CRUD App',
        description: 'This is your first sample item. You can edit or delete it, or create new items!',
        image_path: null,
      },
      {
        title: 'Full-Stack Testing',
        description: 'This application demonstrates Create, Read, Update, and Delete operations with Supabase.',
        image_path: null,
      },
      {
        title: 'Production Ready',
        description: 'Built with Next.js 15, TypeScript, Tailwind CSS, and Supabase. Ready for deployment on Vercel!',
        image_path: null,
      },
    ];

    // Create items
    for (const item of sampleItems) {
      const { error } = await supabase
        .from('items')
        .insert({
          user_id: user.id,
          title: item.title,
          description: item.description,
          image_url: item.image_path,
        });

      if (error) {
        console.error(`❌ Error creating item "${item.title}":`, error.message);
      } else {
        console.log(`✅ Created: ${item.title}`);
      }
    }

    console.log('\n✅ Seed completed successfully!');
    console.log('\n📋 Demo credentials:');
    console.log('   Email: demo@example.com');
    console.log('   Password: demo123456');
    console.log('\n🚀 You can now login and test the CRUD operations!');

  } catch (error: any) {
    console.error('\n❌ Seed failed:', error.message);
    process.exit(1);
  }
}

// Run seed
seed();
