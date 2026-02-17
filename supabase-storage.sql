-- Storage bucket configuration for Supabase
-- Bucket name here must match NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET in .env

-- Instructions to create storage bucket via Supabase Dashboard:
-- 1. Go to Storage in your Supabase project dashboard
-- 2. Click "Create a new bucket"
-- 3. Bucket name: use the same value as NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET (e.g. item-images)
-- 4. Public bucket: Yes (checked)
-- 5. Click "Create bucket"

-- Alternative: Create bucket via SQL (if you have access to SQL editor)
-- Replace 'item-images' with your NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET value if different
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'item-images',
    'item-images',
    true,
    5242880, -- 5MB limit
    ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp']
)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for the item-images bucket
-- These allow authenticated users to upload and delete their own images

-- Policy: Allow authenticated users to upload images
CREATE POLICY "Authenticated users can upload images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
    bucket_id = 'item-images' AND
    (storage.foldername(name))[1] = auth.uid()::text
);

-- Policy: Allow users to view all public images
CREATE POLICY "Public images are accessible to everyone"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'item-images');

-- Policy: Allow users to update their own images
CREATE POLICY "Users can update their own images"
ON storage.objects FOR UPDATE
TO authenticated
USING (
    bucket_id = 'item-images' AND
    (storage.foldername(name))[1] = auth.uid()::text
)
WITH CHECK (
    bucket_id = 'item-images' AND
    (storage.foldername(name))[1] = auth.uid()::text
);

-- Policy: Allow users to delete their own images
CREATE POLICY "Users can delete their own images"
ON storage.objects FOR DELETE
TO authenticated
USING (
    bucket_id = 'item-images' AND
    (storage.foldername(name))[1] = auth.uid()::text
);
