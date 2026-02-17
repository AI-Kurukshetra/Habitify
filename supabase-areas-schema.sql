-- Supabase Schema for Habitify Areas
-- Run this entire file in Supabase Dashboard: SQL Editor → New query → Paste → Run

-- Create areas table
CREATE TABLE IF NOT EXISTS public.areas (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    color TEXT NOT NULL DEFAULT '#2a67f4',
    icon TEXT,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create index on user_id for faster queries
CREATE INDEX IF NOT EXISTS areas_user_id_idx ON public.areas(user_id);

-- Create index on user_id and sort_order
CREATE INDEX IF NOT EXISTS areas_user_sort_order_idx ON public.areas(user_id, sort_order);

-- Enable Row Level Security
ALTER TABLE public.areas ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view their own areas" ON public.areas;
DROP POLICY IF EXISTS "Users can insert their own areas" ON public.areas;
DROP POLICY IF EXISTS "Users can update their own areas" ON public.areas;
DROP POLICY IF EXISTS "Users can delete their own areas" ON public.areas;

-- Create RLS policies
-- Users can only view their own areas
CREATE POLICY "Users can view their own areas"
    ON public.areas FOR SELECT
    USING (auth.uid() = user_id);

-- Users can only insert areas with their own user_id
CREATE POLICY "Users can insert their own areas"
    ON public.areas FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Users can only update their own areas
CREATE POLICY "Users can update their own areas"
    ON public.areas FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- Users can only delete their own areas
CREATE POLICY "Users can delete their own areas"
    ON public.areas FOR DELETE
    USING (auth.uid() = user_id);

-- Create habits table (if not exists) and add area reference
CREATE TABLE IF NOT EXISTS public.habits (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    type TEXT DEFAULT 'checkbox',
    area_id UUID REFERENCES public.areas(id) ON DELETE SET NULL,
    color TEXT,
    icon TEXT,
    frequency JSONB,
    time_of_day TEXT[],
    reminders TEXT[],
    start_date DATE,
    end_date DATE,
    goal INTEGER DEFAULT 1,
    unit TEXT,
    target_value INTEGER,
    days_of_week INTEGER[],
    tags TEXT[],
    is_archived BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create index on user_id for habits
CREATE INDEX IF NOT EXISTS habits_user_id_idx ON public.habits(user_id);

-- Create index on area_id for habits
CREATE INDEX IF NOT EXISTS habits_area_id_idx ON public.habits(area_id);

-- Enable RLS for habits
ALTER TABLE public.habits ENABLE ROW LEVEL SECURITY;

-- Drop existing policies for habits
DROP POLICY IF EXISTS "Users can view their own habits" ON public.habits;
DROP POLICY IF EXISTS "Users can insert their own habits" ON public.habits;
DROP POLICY IF EXISTS "Users can update their own habits" ON public.habits;
DROP POLICY IF EXISTS "Users can delete their own habits" ON public.habits;

-- Create RLS policies for habits
CREATE POLICY "Users can view their own habits"
    ON public.habits FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own habits"
    ON public.habits FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own habits"
    ON public.habits FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own habits"
    ON public.habits FOR DELETE
    USING (auth.uid() = user_id);
