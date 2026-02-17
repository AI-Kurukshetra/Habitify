# Habitify Dashboard - Quick Start Guide

## 🎯 What's New

All the features from your structured analysis have been implemented! Here's how to use them.

---

## 📱 Main Navigation

### Sidebar Menu
- **Today** - See today's habits and mood
- **Journal / All Habits** - View all habits in list or grid view
- **Habits** - Manage your habit library
- **Areas** - Create & organize habit categories
- **Analytics / Insights** - Track trends and stats
- **Settings** - Customize preferences

---

## 🚀 Getting Started

### 1. Create Your First Habit

**Path**: Sidebar → Journal / All Habits → "+ Add habit" → "Create Good Habit"

Or on **Today** page → "+ New Habit"

**Form Fields**:
- Name (e.g., "Morning Exercise")
- Type: Checkbox, Number, or Duration
- Goal/Target
- Repeat frequency
- Time of day
- Area/Category
- Reminders

---

## 📊 Features Breakdown

### ✅ Today Page
Quick overview of today's habits and your mood.

**What you can do**:
1. See how many habits you've completed (progress bar)
2. Select your mood (😢, 😐, 🙂, 😊)
3. Click any habit to mark as done
4. Show/hide notes
5. Start timers for timed habits
6. Edit numeric values

### 📝 Journal / All Habits (Dashboard)
Main view for logging daily entries.

**Features**:
- **List View**: See all habits with completion status
  - Incomplete section
  - Success/Completed section
  - Mood logged section
  
- **Grid View**: Calendar-style grid
  - Rows = Habits
  - Columns = Dates
  - Click any cell to log entry
  - View notes on cells

**Filters**:
- Search by habit name
- Filter by Area
- Filter by specific Habit
- Date range (This week / This month)

### ⏱️ Timer / Duration Habits
For habits tracking time (e.g., meditation, exercise).

**To use timer**:
1. Create habit with type = "Duration"
2. When logging: Click "Timer" button OR click habit cell
3. In Today page or Dashboard: Click timer icon
4. Timer modal opens → Click "Start" → Timer counts up
5. Click "Stop" when done
6. Duration auto-saves

### 🔢 Numeric Habits
Track quantities (e.g., 5 pushups, 2 km run).

**To use**:
1. Create habit with type = "Number"
2. Set unit (optional: "km", "pushups", "pages", etc.)
3. Set goal (e.g., target: 5)
4. Click cell or "Edit value" button
5. In modal: Enter value
6. Save

### 📌 Add Notes
Attach notes to any habit entry.

**To add note**:
1. Click habit cell or "Edit entry" button
2. Scroll down in modal → "Add" note button
3. Type your note
4. Notes appear with 📄 icon on grid

### 🔥 Streak Tracking
Automatic streak counting.

**What you see**:
- 🔥 Number = Current streak (consecutive days)
- "Best: X" = Longest streak ever
- Displayed on every habit

### 📋 Habit Management

#### Edit Habit
1. Click habit → Three-dot menu (⋮)
2. Select "Edit"
3. Modify details
4. Save

#### Duplicate Habit
1. Click habit → Three-dot menu (⋮)
2. Select "Duplicate"
3. Creates copy with "(copy)" suffix

#### Archive Habit
1. Click habit → Three-dot menu (⋮)
2. Select "Archive"
3. Moves to archived section
4. Can restore later

#### Delete Habit
1. Click habit → Three-dot menu (⋮)
2. Select "Delete"
3. Permanent removal (confirm)

---

## 🎨 UI Elements Explained

### Habit Row Example
```
[Icon] Habit Name    (🔥 5)
       0/1 times    [Streak]
       
       [−  0  +]    [✓]    [⋮]
       
- Icon: Colored avatar
- Name: Habit title
- Streak: Current streak with flame
- [−  +]: Add/remove for numeric habits
- [✓]: Checkbox to mark done
- [⋮]: Menu for more actions
```

### Grid Cell Colors
- 🟢 **Green** = Completed
- 🟡 **Amber** = Skipped
- 🔴 **Red** = Missed
- ⚪ **Gray** = Not logged
- 📄 **Note icon**: Has attached note

### Status Options
When editing a log entry:
- ✅ **Done** = Completed
- **−** = Skipped
- ❌ = Missed

---

## 🔧 Habit Types

### 1. Checkbox (Default)
Simple yes/no completion.
- Goal: How many times (default: 1)
- Example: "Read", "Meditate", "Workout"

### 2. Number
Track quantities.
- Goal: Target number
- Unit: Optional (km, pushups, pages, etc.)
- Example: "Run 5 km", "Do 50 pushups"

### 3. Duration
Track time spent.
- Goal: Minutes target
- Has timer button
- Example: "Meditation 30min", "Exercise 45min"

---

## 💡 Tips & Tricks

1. **Quick Complete**: Click any habit's checkmark to toggle
2. **Bulk Actions**: Select multiple habits (checkmarks) → Bottom bar shows Complete/Skip/Fail
3. **Quick Search**: Click search icon → type habit name
4. **Date Navigation**: Click date in journal to switch days
5. **Mood Tracking**: Set daily mood on Today page
6. **Notes Everywhere**: Add notes to any log entry
7. **Color Habits**: Customize habit colors for visual organization
8. **Timer Flexibility**: Start anytime, stop anytime - duration auto-saves

---

## 📊 Data Structure (For Developers)

If integrating with backend:

### Habit Object
```typescript
{
  id: string;
  name: string;
  type: 'checkbox' | 'number' | 'duration';
  goal: number;
  unit?: string;  // For numeric/duration
  areaId?: string;
  color?: string;
  isArchived?: boolean;
  done: number;   // Today's progress
}
```

### Log Entry
```typescript
{
  habitId: string;
  date: YYYY-MM-DD;
  status: 'completed' | 'skipped' | 'missed';
  value?: number;        // For numeric
  durationMinutes?: number;  // For duration
  note?: string;
}
```

### Streak Data
```typescript
{
  habitId: string;
  currentStreak: number;
  longestStreak: number;
  lastCompletedDate: YYYY-MM-DD;
}
```

---

## 🎯 Common Workflows

### Daily Routine
1. Open "Today" page
2. Set mood emoji
3. Go through habits:
   - Check off completed ones
   - Add values for numeric habits
   - Click timer for duration habits
   - Add notes if needed

### Weekly Review
1. Open "Journal / All Habits"
2. Set date range to "This week"
3. View grid to see patterns
4. Click problem areas for editing

### New Habit Setup
1. Dashboard → "+ Add habit"
2. Choose type (checkbox/number/duration)
3. Set goal
4. Choose frequency
5. Done!

---

## ✨ What Gets Synced/Saved

- Habit creation/edits
- Daily log entries
- Notes on entries
- Mood selections
- Streak calculations
- Archive status
- Progress indicators

---

## 🚨 Important Notes

- **All changes auto-save** to local state (ready for backend integration)
- **Streaks auto-calculate** based on completion history
- **Notes survive edits** - won't disappear
- **Timers are flexible** - can stop/start anytime
- **Archive doesn't delete** - you can restore
- **Grid cells are clickable** - use modal for full control

---

## 🔗 Feature to Video Mapping

If your video shows different UI/flow:

**Please describe**:
1. Layout differences (grid vs cards vs list)
2. Button positions or labels
3. Modal/popup behaviors
4. Data display format
5. Any animations or transitions
6. Color scheme
7. Mobile vs desktop view

**I can adapt the UI to match** if you provide specifics!

---

## 📞 Need Help?

- Check the sidebar menu for different views
- Three-dot menus (⋮) show all options
- Modals have clear sections: Status → Value/Duration → Notes → Save
- Click anywhere outside modals to cancel
- All buttons have hover states for feedback

---

**Start with**: Today → Set mood → Check off habits → View Journal for history

Enjoy tracking! 🎯
