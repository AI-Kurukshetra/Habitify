# Habitify Supabase Setup - Areas Implementation

## Overview
This document outlines the setup steps needed to implement dynamic areas functionality with Supabase database storage.

## Prerequisites
- Supabase project created and configured
- `.env.local` file with `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Required Setup Steps

### 1. Create Supabase Tables and Policies

Run the SQL script in your Supabase dashboard:
- Go to **SQL Editor** → **New query**
- Copy the contents of `supabase-areas-schema.sql`
- Paste and execute the entire script

This will create:
- **areas** table: stores user areas/folders for organizing habits
  - Fields: id, user_id, name, color, icon, order, created_at, updated_at
  - RLS enabled with user-specific policies
  
- **habits** table: stores user habits with area references
  - Fields: id, user_id, name, description, type, area_id, color, icon, frequency, etc.
  - RLS enabled with user-specific policies

### 2. Environment Variables

Ensure your `.env.local` contains:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Features Implemented

#### Dynamic Areas Management
- ✅ Areas are now fetched from Supabase on app initialization
- ✅ New areas persist to database when created
- ✅ Areas appear dynamically in the sidebar
- ✅ Clicking an area shows habits for that area

#### Responsive Layout Fixes
- ✅ Modal vertical scrolling with scrollbar for tall content
- ✅ Dashboard no longer has horizontal scrollbar on any resolution
- ✅ Proper responsive design that fits page width

#### Navigation Highlighting
- ✅ Sidebar navigation links highlight in blue when active
- ✅ Dynamic highlighting based on current route
- ✅ Area selection highlighting works automatically

#### Area View Page
- ✅ Dynamic area header with color and name
- ✅ Lists habits belonging to that area
- ✅ Shows empty state when no habits in area
- ✅ Quick access to create new habits in area

#### Multiple Integration Points
- ✅ NewHabitModal shows only dynamically created areas
- ✅ EditHabitModal shows only dynamically created areas
- ✅ DashboardContent filters show area options
- ✅ All area data is live and updates in real-time

## Services Created

### areasService.ts
Provides CRUD operations for areas:
- `fetchUserAreas()` - Fetch all areas for current user
- `createArea()` - Create a new area in Supabase
- `updateArea()` - Update an existing area
- `deleteArea()` - Delete an area

### habitsService.ts
Provides CRUD operations for habits:
- `fetchUserHabits()` - Fetch all habits for current user
- `createHabit()` - Create a new habit in Supabase
- `updateHabit()` - Update an existing habit
- `deleteHabit()` - Delete a habit
- `archiveHabit()` - Archive a habit (soft delete)

## Context Updates

### DashboardContext.tsx
- Now loads areas from Supabase on mount
- `addArea()` is now async and saves to Supabase
- Falls back to default areas if user has none
- Provides loading state with `isLoadingAreas` flag

## Component Updates

### NewAreaModal.tsx
- Now async when saving to Supabase
- Shows loading state during creation
- Disables inputs while saving

### DashboardLayoutShell.tsx
- Fixed layout to prevent horizontal scrolling
- Proper flex layout with `w-full` and `min-w-0` constraints
- `overflow-hidden` on main container

### Dialog.tsx
- Proper vertical scrollbar for overflowing content
- `max-h-[90vh]` with `overflow-y-auto` on content area
- Better mobile support with proper spacing

### AreaViewPage.tsx
- Displays area header with color
- Shows habits for the area
- Responsive layout with proper overflow handling
- Quick action buttons for creating habits

## Testing Checklist

- [ ] Create a new area - verify it appears in sidebar
- [ ] Navigate to area - verify area page loads with correct name
- [ ] Create a habit - verify area appears in dropdown
- [ ] Click area in sidebar - verify highlighted in blue
- [ ] Check modal scrolling - add many habit details to verify scrollbar appears
- [ ] Test responsive layout - verify no horizontal scroll on mobile/tablet
- [ ] Verify areas load on page refresh - should persist in Supabase

## Default Data

The system includes default areas that will be used if no custom areas exist:
- Health (green)
- todo list (blue)

These can be replaced by creating new areas - they're only used as fallback.

## Troubleshooting

### Areas not loading
1. Check Supabase URL and key in `.env.local`
2. Verify user authentication is working
3. Check browser console for error messages
4. Ensure RLS policies are enabled on areas table

### Modal appears cut off
- The Dialog component now has proper scrolling
- Verify CSS is loaded correctly
- Check browser dev tools for z-index conflicts

### Horizontal scroll appearing
- Verify all flex containers use `min-w-0`
- Check for fixed-width elements exceeding viewport
- Use browser dev tools to inspect layout

## Notes

- All areas are user-specific via RLS policies
- Areas are fetched on DashboardProvider mount
- No data is lost if database connection fails - defaults are used
- Areas can be created offline (in memory) but won't persist without Supabase
