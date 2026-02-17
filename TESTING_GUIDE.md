# Testing Guide - Habitify Dynamic Areas Implementation

## Pre-Testing Setup

### Required Environment
```bash
# Ensure .env.local has:
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key

# Run SQL script from supabase-areas-schema.sql
# in Supabase Dashboard → SQL Editor

# Start dev server:
npm run dev
```

---

## Test Scenarios

### Test 1: Create Dynamic Area
**Objective:** Verify areas persist to Supabase

**Steps:**
1. Navigate to http://localhost:3000/dashboard
2. Look at sidebar → AREAS section
3. Click "+ New Area" button
4. Fill form:
   - Name: "Fitness"
   - Color: Green (#10B981)
5. Click "Save"

**Expected Results:**
- ✅ Modal closes
- ✅ "Fitness" appears in sidebar under AREAS
- ✅ Area has green folder icon
- ✅ Area persists on page refresh
- ✅ No console errors

**Troubleshooting:**
- If area doesn't appear: Check browser console for errors
- If area disappears on refresh: Verify Supabase credentials
- If modal doesn't close: Check network tab for failed requests

---

### Test 2: Navigate to Area View
**Objective:** Verify area page displays correctly

**Steps:**
1. Create area (from Test 1) or use existing area
2. Click "Fitness" in sidebar
3. Observe page

**Expected Results:**
- ✅ Page title shows "Fitness" with green icon
- ✅ Shows "0 habits" or habit count
- ✅ URL changed to `/dashboard/area/{id}`
- ✅ Area link in sidebar is highlighted blue
- ✅ No horizontal scrollbar visible

**Troubleshooting:**
- If page is blank: Check if area ID is valid
- If highlight doesn't work: Verify usePathname() is working
- If scrollbar appears: Check DashboardLayoutShell classes

---

### Test 3: Create Habit with Area Assignment
**Objective:** Verify habits can be assigned to areas

**Steps:**
1. From area view page, click "+ Add habit" or scroll down
2. Click "+ New Habit" button
3. In New Habit modal:
   - Name: "Gym Workout"
   - Type: Checkbox
   - Area dropdown: Select "Fitness"
4. Fill other fields as desired
5. Click "Save"

**Expected Results:**
- ✅ Modal closes
- ✅ Habit appears on area page
- ✅ Area dropdown showed only "Fitness" (not defaults)
- ✅ Area field in habit is saved
- ✅ Modal has vertical scrollbar if needed

**Troubleshooting:**
- If area dropdown is empty: Check Supabase areas table
- If modal doesn't scroll: Verify Dialog.tsx changes
- If habit doesn't appear: Check habits table in Supabase

---

### Test 4: Modal Vertical Scrolling
**Objective:** Verify modal scrolls with many habit details

**Steps:**
1. Click "+ New Habit" from dashboard
2. Scroll down inside the modal
3. Add multiple reminders (click "+ Add New Reminder" 5+ times)
4. Add multiple checklist items
5. Scroll in modal

**Expected Results:**
- ✅ Scrollbar appears on right side of modal
- ✅ Can scroll to see all fields
- ✅ Header (title) stays fixed at top
- ✅ Footer (buttons) stays fixed at bottom
- ✅ Content in middle scrolls smoothly
- ✅ No horizontal scrollbar in modal

**Troubleshooting:**
- If no scrollbar: Check CSS classes on Dialog component
- If header/footer move: Verify shrink-0 classes
- If modal is cut off: Check max-h-[90vh] class

---

### Test 5: Responsive Layout (No Horizontal Scroll)
**Objective:** Verify dashboard is responsive at all sizes

**Steps:**
1. Go to dashboard at `/dashboard`
2. Open browser DevTools (F12)
3. Test at different screen sizes:
   - Mobile: 375px (iPhone SE)
   - Tablet: 768px (iPad)
   - Desktop: 1024px+

**Screen Size Tests:**

#### Mobile (375px)
- [ ] Sidebar hidden
- [ ] Menu button visible in header
- [ ] Main content fills screen
- [ ] **NO horizontal scrollbar**
- [ ] Click menu → overlay sidebar appears
- [ ] Click area → closes sidebar
- [ ] All content visible without scrolling left/right

#### Tablet (768px)
- [ ] Sidebar still hidden
- [ ] Content takes full width
- [ ] **NO horizontal scrollbar**
- [ ] Responsive grid layouts visible

#### Desktop (1024px+)
- [ ] Sidebar visible on left (260px)
- [ ] Main content takes remaining space
- [ ] **NO horizontal scrollbar**
- [ ] All elements properly aligned

**Expected Results:**
- ✅ No horizontal scrollbar at any size
- ✅ Content always fits screen width
- ✅ Mobile menu (hamburger) works
- ✅ Proper responsive behavior

**Troubleshooting:**
- If scrollbar appears: 
  1. Inspect element in DevTools
  2. Check for fixed-width elements
  3. Verify min-w-0 on flex children
  4. Check DashboardLayoutShell layout

---

### Test 6: Sidebar Dynamic Highlighting
**Objective:** Verify navigation highlights correctly

**Steps:**
1. Go to `/dashboard` → all habits route
2. Observe sidebar
3. Click different sidebar links
4. Observe highlight color

**Navigation Tests:**

| Route | Link | Expected Highlight |
|-------|------|-------------------|
| `/dashboard` | All Habits | Blue |
| `/dashboard/today` | Today | Blue |
| `/dashboard/habits` | Habits (under PREFERENCES) | Blue |
| `/dashboard/areas` | Areas (under PREFERENCES) | Blue |
| `/dashboard/area/{id}` | Area name (under AREAS) | Blue |

**Expected Results:**
- ✅ Current route link is highlighted blue (#2a67f4)
- ✅ Other links are gray (#374151)
- ✅ Highlight updates when navigating
- ✅ Area name shows when viewing area

**Troubleshooting:**
- If highlighting doesn't work:
  1. Check usePathname() hook
  2. Verify basePath calculation
  3. Check active prop in SidebarLink

---

### Test 7: Areas Persistence
**Objective:** Verify areas stay after page refresh

**Steps:**
1. Create 2-3 areas with different names and colors
2. Refresh page (Ctrl+R or F5)
3. Observe sidebar

**Expected Results:**
- ✅ All created areas still in sidebar
- ✅ Colors preserved
- ✅ Order preserved
- ✅ No data loss

**Troubleshooting:**
- If areas lost on refresh:
  1. Check Supabase credentials in .env.local
  2. Verify areas table has data (check Supabase dashboard)
  3. Check browser console for fetch errors

---

### Test 8: Area Not Found Handling
**Objective:** Verify graceful error handling

**Steps:**
1. Go to `/dashboard/area/invalid-id-12345`
2. Observe page

**Expected Results:**
- ✅ Shows "Area not found" message
- ✅ Link to go back to dashboard
- ✅ No console errors
- ✅ No broken UI

---

### Test 9: Empty Area View
**Objective:** Verify empty state in area view

**Steps:**
1. Create area "Future" (no habits)
2. Click "Future" in sidebar
3. Observe page

**Expected Results:**
- ✅ Shows area name "Future" with color
- ✅ Shows "0 habits"
- ✅ Shows empty state message
- ✅ "Build new Habit" button visible
- ✅ Could click button to create habit in area

---

### Test 10: Area with Multiple Habits
**Objective:** Verify habits display correctly in area

**Steps:**
1. Create area with 3+ habits assigned to it
2. Click area name in sidebar
3. Observe habit list

**Expected Results:**
- ✅ All habits for area displayed
- ✅ Shows correct habit count
- ✅ Each habit shows name and details
- ✅ Habit rows are interactive (menu, etc.)
- ✅ No horizontal scroll visible
- ✅ All habitrows displayed properly without overflow

---

## Performance & Error Testing

### Test 11: Loading States
**Objective:** Verify loading indicators work

**Steps:**
1. Open DevTools Network tab
2. Slow down network: 3G Fast setting
3. Create new area
4. Observe loading state

**Expected Results:**
- ✅ Button shows "Creating..." text
- ✅ Inputs disabled during save
- ✅ Request visible in Network tab
- ✅ Modal closes after success

---

### Test 12: Error Handling
**Objective:** Verify error handling

**Steps:**
1. Go to Network tab
2. Create area
3. Simulate error by disconnecting network
4. Try again

**Expected Results:**
- ✅ Loading state appears
- ✅ Request fails (visible in Network tab)
- ✅ No crash or error message in UI
- ✅ Usually falls back gracefully

---

## Browser Compatibility Testing

### Test 13: Cross-Browser Support
**Browsers to test:**
- [ ] Chrome/Chromium (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest on macOS)
- [ ] Edge (latest)

**Per browser check:**
- [ ] No console errors
- [ ] Modal scrolls correctly
- [ ] Layout responsive
- [ ] Highlighting works

---

## Accessibility Testing

### Test 14: Keyboard Navigation
**Steps:**
1. Use Tab key to navigate
2. Use Enter to activate buttons
3. Use Escape to close modals

**Expected Results:**
- ✅ Can tab through all interactive elements
- ✅ Can open/close modals with keyboard
- ✅ Focus visible on all buttons
- ✅ Proper tab order

---

## Final Verification Checklist

### Core Features
- [ ] Areas created and persist in Supabase
- [ ] Areas appear dynamically in sidebar
- [ ] Can navigate to area view page
- [ ] Area page shows area details and habits
- [ ] Can create habits assigned to areas
- [ ] Area dropdown in habit form shows all dynamic areas

### Layout & Responsiveness
- [ ] No horizontal scrollbar at any resolution
- [ ] Modal has vertical scrollbar when needed
- [ ] Mobile layout works (375px+)
- [ ] Tablet layout works (768px+)
- [ ] Desktop layout works (1024px+)

### Navigation & Highlighting
- [ ] Sidebar links highlight blue when active
- [ ] Area links highlight when viewing area
- [ ] Highlighting updates on navigation
- [ ] All navigation routes work

### Data & Persistence
- [ ] Areas persist on page refresh
- [ ] Habits persist on page refresh
- [ ] Area-habit relationships maintained
- [ ] No data loss on navigation

### User Experience
- [ ] Create area modal works smoothly
- [ ] Loading states visible during save
- [ ] Error messages clear if needed
- [ ] Empty states show helpful messages
- [ ] All buttons and links responsive

---

## Debugging Tips

### Check Supabase Data
1. Go to Supabase dashboard
2. Tables → areas → Browse
3. Verify areas table has your created areas
4. Check user_id matches authenticated user

### Check Browser Console
```javascript
// Test fetchUserAreas()
import { fetchUserAreas } from '@/services/areasService';
const areas = await fetchUserAreas();
console.log(areas);

// Check current user
import { supabase } from '@/lib/supabaseClient';
const { data: { user } } = await supabase.auth.getUser();
console.log(user);
```

### Network DevTools
1. Open Network tab
2. Create area
3. Look for POST to Supabase
4. Check request/response

### Layout Debugging
```html
<!-- Add to DashboardLayoutShell temporarily -->
<div className="flex..." style={{ border: '2px solid red' }}>
  <!-- helps visualize flex containers -->
</div>
```

---

## Test Results Log

| Test # | Test Name | Result | Notes | Date |
|--------|-----------|--------|-------|------|
| 1 | Create Dynamic Area | | | |
| 2 | Navigate to Area View | | | |
| 3 | Create Habit with Area | | | |
| 4 | Modal Vertical Scrolling | | | |
| 5 | Responsive Layout | | | |
| 6 | Sidebar Highlighting | | | |
| 7 | Areas Persistence | | | |
| 8 | Area Not Found | | | |
| 9 | Empty Area View | | | |
| 10 | Area with Habits | | | |

---

## Known Issues & Workarounds

### Issue: Areas not loading
**Cause:** Supabase credentials invalid
**Fix:** Verify .env.local has correct values

### Issue: Modal cut off
**Cause:** CSS not applied
**Fix:** Hard refresh (Ctrl+Shift+R) browser cache

### Issue: Horizontal scrollbar appears
**Cause:** Fixed-width element exceeds viewport
**Fix:** Check DevTools inspector for offending element

---

## Success Criteria

All tests should pass with:
- ✅ No console errors
- ✅ No horizontal scrollbars
- ✅ Modal scrolls vertically
- ✅ Areas persist to Supabase
- ✅ Navigation highlights correctly
- ✅ Mobile responsive at all sizes
- ✅ All data saved and retrieved correctly
