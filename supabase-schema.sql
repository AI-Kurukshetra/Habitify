-- Run this entire file in Supabase Dashboard: SQL Editor → New query → Paste → Run
-- This creates the items table and RLS policies required for the CRUD app.

-- Create items table
CREATE TABLE IF NOT EXISTS public.items (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create index on user_id for faster queries
CREATE INDEX IF NOT EXISTS items_user_id_idx ON public.items(user_id);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS items_created_at_idx ON public.items(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.items ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view their own items" ON public.items;
DROP POLICY IF EXISTS "Users can insert their own items" ON public.items;
DROP POLICY IF EXISTS "Users can update their own items" ON public.items;
DROP POLICY IF EXISTS "Users can delete their own items" ON public.items;

-- Create RLS policies
-- Users can only view their own items
CREATE POLICY "Users can view their own items"
    ON public.items FOR SELECT
    USING (auth.uid() = user_id);

-- Users can only insert items with their own user_id
CREATE POLICY "Users can insert their own items"
    ON public.items FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Users can only update their own items
CREATE POLICY "Users can update their own items"
    ON public.items FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- Users can only delete their own items
CREATE POLICY "Users can delete their own items"
    ON public.items FOR DELETE
    USING (auth.uid() = user_id);
