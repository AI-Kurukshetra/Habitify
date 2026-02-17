# Next.js Supabase CRUD Application

A production-ready full-stack application built with Next.js 15, TypeScript, Tailwind CSS, and Supabase. Features complete CRUD operations with authentication, file storage, and Row Level Security.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **File Storage**: Supabase Storage
- **Deployment**: Vercel

## ✨ Features

- ✅ Email/Password Authentication
- ✅ Protected Routes with Middleware
- ✅ Full CRUD Operations (Create, Read, Update, Delete)
- ✅ Image Upload to Supabase Storage
- ✅ Row Level Security (RLS)
- ✅ Responsive UI with Tailwind CSS
- ✅ Loading and Error States
- ✅ Server and Client Components
- ✅ TypeScript Type Safety

## 📁 Project Structure

```
/app
  /(auth)
    /login          # Login page
    /signup         # Signup page
  /(dashboard)
    /dashboard      # User dashboard
    /crud-test      # CRUD operations page
  /layout.tsx       # Root layout
  /page.tsx         # Home/Landing page
  /globals.css      # Global styles
/components
  /ItemCard.tsx     # Item display component
  /ItemForm.tsx     # Create/Edit form component
  /LogoutButton.tsx # Logout button component
/lib
  /supabaseClient.ts    # Client-side Supabase client
  /serverClient.ts      # Server-side Supabase client
/services
  /crudService.ts       # CRUD operations
  /storageService.ts    # File upload/delete
/types
  /database.ts      # Database types
  /index.ts         # Application types
/scripts
  /seed.ts          # Database seed script
```

## 🛠️ Setup Instructions

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Wait for the database to be ready (2-3 minutes)
4. Go to **Project Settings** → **API**
5. Copy your **Project URL** and **anon public** key

### 2. Set Up Database

1. Go to **SQL Editor** in your Supabase dashboard
2. Copy the contents of `supabase-schema.sql`
3. Paste and run the SQL to create the `items` table with RLS policies

### 3. Create Storage Bucket

envUse the same name as `NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET` in your env (default: `item-images`).

**Option A: Via Dashboard (Recommended)**
1. Go to **Storage** in Supabase dashboard
2. Click **"Create a new bucket"**
3. Bucket name: same as `NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET` (e.g. `item-images`)
4. Public bucket: **Yes** (checked)
5. Click **"Create bucket"**

**Option B: Via SQL**
1. Copy contents of `supabase-storage.sql`
2. Run in SQL Editor

### 4. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and set your Supabase credentials and optional bucket name:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET=item-images
   ```
   For the **universal DB utility** (`lib/db`), see [lib/db/README.md](lib/db/README.md).

### 5. Install Dependencies

```bash
npm install
```

### 6. Run Database Seed (Optional)

This creates a demo user and 3 sample items:

```bash
npm run seed
```

**Demo credentials:**
- Email: `demo@example.com`
- Password: `demo123456`

### 7. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deploy to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin your-repo-url
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Click **Deploy**

### 3. Run Seed on Production (Optional)

After deployment, you can run the seed script with production env vars:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_url NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key npm run seed
```

## 🧪 Testing the Application

### Test Authentication

1. Go to `/signup`
2. Create an account with email and password
3. You'll be automatically redirected to `/dashboard`

### Test CRUD Operations

1. Go to `/crud-test` from dashboard
2. Click **"Create New Item"**
3. Fill in title, description, and optionally upload an image
4. Click **"Create Item"**
5. Your item appears in the list
6. Click **"Edit"** to update an item
7. Click **"Delete"** to remove an item

### Test Image Upload

1. When creating/editing an item, select an image file
2. Image is uploaded to Supabase Storage
3. Public URL is saved in the database
4. Image displays in the item card

## 🔐 Security Features

- **Row Level Security (RLS)**: Users can only access their own data
- **Protected Routes**: Middleware checks authentication
- **Server-Side Auth**: Server components verify user session
- **Environment Variables**: Secrets are not exposed to client
- **Image Permissions**: Users can only delete their own images

## 📊 Database Schema

### Items Table

| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key |
| user_id | uuid | Foreign key to auth.users |
| title | text | Item title (required) |
| description | text | Item description (optional) |
| image_url | text | Public URL of uploaded image |
| created_at | timestamp | Auto-generated timestamp |

## 🎨 Customization

### Change Theme Colors

Edit `tailwind.config.ts` to customize colors:
```typescript
theme: {
  extend: {
    colors: {
      primary: {...},
      secondary: {...},
    },
  },
}
```

### Add More Fields

1. Update database schema in Supabase
2. Update types in `/types/database.ts`
3. Update form in `/components/ItemForm.tsx`
4. Update service in `/services/crudService.ts`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run seed` - Seed database with demo data

## 🐛 Troubleshooting

### "Missing Supabase environment variables"
- Make sure `.env.local` exists with correct values
- Restart dev server after changing env vars

### Images not uploading
- Check that `item-images` bucket is created and public
- Verify storage policies are in place
- Check browser console for errors

### RLS errors
- Ensure you're logged in
- Check that RLS policies are correctly set up
- Verify `user_id` matches authenticated user

### Build errors on Vercel
- Ensure all environment variables are set in Vercel dashboard
- Check build logs for specific errors
- Make sure Supabase project is accessible

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📄 License

MIT
