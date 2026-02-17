#  Deploy to Vercel

## Deploy via Vercel Website (Easiest)

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign Up or Log In** (use GitHub for easiest integration)
   - If new: Sign up with GitHub
   - If existing: Log in with GitHub

3. **Import GitHub Repository**
   - Click "Add New Project"
   - Click "Import Git Repository"
   - Find and select `ravinandani78/test_project`
   - Click "Import"

4. **Configure Project**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: ./ (default)

5. **Add Environment Variables**
   - Click "Environment Variables" section
   - Add all your variables:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
     NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET=your_supabase_bucket
     SUPABASE_MANAGEMENT_API_TOKEN=your_management_token
     ```

6. Click "Deploy"

7. Wait for build to complete
   - You'll get a URL like: `https://test-project.vercel.app`