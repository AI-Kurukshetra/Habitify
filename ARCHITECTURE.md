# Architecture Overview - Habitify Dynamic Areas

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                       BROWSER / CLIENT                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │         DashboardLayoutShell (Main Layout)             │   │
│  │  - w-screen overflow-hidden (prevents h-scroll)        │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │                                                          │   │
│  │  ┌──────────────┐  ┌─────────────────────────────────┐ │   │
│  │  │  Sidebar     │  │  Main Content Area              │ │   │
│  │  │              │  │  (w-full min-w-0)              │ │   │
│  │  │ • All Habits │  │ ┌─────────────────────────────┐ │ │   │
│  │  │ • Today      │  │ │ Dashboard / Area View       │ │ │   │
│  │  │ • Areas:     │  │ │ • DashboardContent or       │ │ │   │
│  │  │  - Health    │  │ │   AreaViewPage              │ │ │   │
│  │  │  - Fitness   │  │ │                             │ │ │   │
│  │  │  - + New     │  │ │ Modal (Dialog):             │ │ │   │
│  │  │              │  │ │ • NewHabitModal             │ │ │   │
│  │  │ Dynamic:     │  │ │ • NewAreaModal              │ │ │   │
│  │  │ Links        │  │ │ • max-h-[90vh]             │ │ │   │
│  │  │ highlight    │  │ │ • overflow-y-auto (middle) │ │ │   │
│  │  │ blue when    │  │ │                             │ │ │   │
│  │  │ active       │  │ └─────────────────────────────┘ │ │   │
│  │  │              │  │                                  │ │   │
│  │  └──────────────┘  └─────────────────────────────────┘ │   │
│  │                                                          │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ API Calls
                              │
┌─────────────────────────────────────────────────────────────────┐
│              CONTEXT LAYER (DashboardProvider)                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  DashboardContext:                                              │
│  • areas: AreaItem[] (loaded from Supabase)                     │
│  • habits: HabitItem[] (from local state)                       │
│  • addArea(async) → calls areasService.createArea()            │
│  • setAreas, setHabits (setters)                                │
│  • newAreaModalOpen (state)                                     │
│  • isLoadingAreas (loading state)                               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ Services
                              │
┌─────────────────────────────────────────────────────────────────┐
│              SERVICES LAYER (Supabase Operations)               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  areasService.ts:                                               │
│  • fetchUserAreas() → SELECT * FROM areas                      │
│  • createArea(area) → INSERT INTO areas                        │
│  • updateArea(id, area) → UPDATE areas                         │
│  • deleteArea(id) → DELETE FROM areas                          │
│                                                                  │
│  habitsService.ts:                                              │
│  • fetchUserHabits() → SELECT * FROM habits                    │
│  • createHabit(habit) → INSERT INTO habits                     │
│  • updateHabit(id, habit) → UPDATE habits                      │
│  • archiveHabit(id) → UPDATE habits (is_archived)             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP/HTTPS
                              │
┌─────────────────────────────────────────────────────────────────┐
│              SUPABASE (Backend as a Service)                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Authentication:                                                │
│  • supabase.auth - User sessions                               │
│  • auth.users table (built-in)                                 │
│  • JWT tokens for requests                                     │
│                                                                  │
│  Database:                                                      │
│  ┌──────────────────┐  ┌──────────────────────────────┐        │
│  │    areas table   │  │     habits table            │        │
│  ├──────────────────┤  ├──────────────────────────────┤        │
│  │ id (UUID, PK)    │  │ id (UUID, PK)               │        │
│  │ user_id (FK)     │──┼─→ user_id (FK)             │        │
│  │ name             │  │    area_id (FK) ←──────┐   │        │
│  │ color            │  │    name                 │   │        │
│  │ icon             │  │    type                 │   │        │
│  │ order            │  │    goal                 │   │        │
│  │ created_at       │  │    created_at           │   │        │
│  │ updated_at       │  │    updated_at           │   │        │
│  │                  │  │    ...                  │   │        │
│  │ RLS: user_id ==  │  │ RLS: user_id ==         │   │        │
│  │ auth.uid()       │  │ auth.uid()              │   │        │
│  │                  │  │                         │   │        │
│  └──────────────────┘  └──────────────────────────────┘        │
│                                                                  │
│  Row Level Security Policies:                                   │
│  • SELECT: auth.uid() = user_id                                │
│  • INSERT: auth.uid() = user_id                                │
│  • UPDATE: auth.uid() = user_id                                │
│  • DELETE: auth.uid() = user_id                                │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Data Flow - Creating a New Area

```
User Action:
  Click "+ New Area"
       ↓
┌──────────────────────────────┐
│  NewAreaModal Component      │
│ • Input name & color         │
│ • Click "Save"               │
└──────────────────────────────┘
       ↓
  setIsLoading(true)
       ↓
┌──────────────────────────────┐
│  addArea() function          │
│  (from DashboardContext)     │
└──────────────────────────────┘
       ↓
  calls: areasService.createArea(area)
       ↓
┌──────────────────────────────┐
│  areasService.createArea()   │
│  • Get current user via      │
│    supabase.auth.getUser()   │
│  • Call supabase INSERT      │
│  • Return new area           │
└──────────────────────────────┘
       ↓
  HTTP POST to Supabase
       ↓
┌──────────────────────────────┐
│  Supabase                    │
│  • Check JWT token           │
│  • Verify auth.uid()         │
│  • RLS policy check passed   │
│  • INSERT new area           │
│  • Return inserted record    │
└──────────────────────────────┘
       ↓
  HTTP Response (JSON)
       ↓
┌──────────────────────────────┐
│  createArea() returns        │
│  AreaItem with id/name/color │
└──────────────────────────────┘
       ↓
  setAreas([...prev, newArea])
       ↓
  setIsLoading(false)
  
       ↓
┌──────────────────────────────┐
│  DashboardContext updates    │
│ • areas array updated        │
│ • Re-renders components      │
└──────────────────────────────┘
       ↓
┌──────────────────────────────┐
│  Sidebar re-renders          │
│ • New area appears under     │
│   "AREAS" section            │
│ • With name and folder icon  │
└──────────────────────────────┘
       ↓
  onOpenChange(false)
       ↓
  Modal closes
       ↓
Done! ✅
```

## Data Flow - Viewing Area

```
User Action:
  Click area name in sidebar
       ↓
  Navigate to /dashboard/area/{id}
       ↓
┌──────────────────────────────┐
│  AreaViewPage Component      │
│ • useParams() → get id       │
│ • useDashboard() → get areas │
│ • Find area by id            │
│ • Find habits for area       │
└──────────────────────────────┘
       ↓
┌──────────────────────────────┐
│  Render Area View:           │
│ • Area name + color          │
│ • Habit count                │
│ • List habits via            │
│   EnhancedHabitRow           │
└──────────────────────────────┘
       ↓
┌──────────────────────────────┐
│  Sidebar updates:            │
│ • Area link highlights blue  │
│ • Based on pathname match    │
└──────────────────────────────┘
       ↓
Done! ✅
```

## Modal Scrolling Architecture

```
Dialog Component Structure:
┌────────────────────────────────────┐
│  Outer Container                   │
│  (fixed inset-0, z-50)             │
│  (overflow-hidden)                 │
│                                    │
│  ┌──────────────────────────────┐  │
│  │ Dialog Box (max-h-[90vh])    │  │
│  │ ┌──────────────────────────┐ │  │
│  │ │ Header (shrink-0)        │ │  │
│  │ │ • Title                  │ │  │
│  │ │ • Close button           │ │  │
│  │ └──────────────────────────┘ │  │
│  │ ┌──────────────────────────┐ │  │
│  │ │ Content (flex-1, min-h-0)│ │  │
│  │ │ overflow-y-auto          │ │  │
│  │ │ • Field 1                │ │  │
│  │ │ • Field 2                │ │  │
│  │ │ [Scrollbar ▼]            │ │  │ ← Scrollbar appears here
│  │ │ • Field 3                │ │  │
│  │ │ • Field 4                │ │  │
│  │ └──────────────────────────┘ │  │
│  │ ┌──────────────────────────┐ │  │
│  │ │ Footer (shrink-0)        │ │  │
│  │ │ • Save / Cancel buttons  │ │  │
│  │ └──────────────────────────┘ │  │
│  └──────────────────────────────┘  │
│                                    │
└────────────────────────────────────┘

Key CSS:
- Outer: overflow-hidden (no auto scroll)
- Box: max-h-[90vh] (max height)
- Header: shrink-0 (fixed height)
- Content: flex-1 overflow-y-auto min-h-0 (scrollbar)
- Footer: shrink-0 (fixed height)
```

## Responsive Layout Architecture

```
Desktop (1024px+):
┌─────────────────────────────────────┐
│ Sidebar (260px)  │  Content (flex) │
└─────────────────────────────────────┘

Tablet (768px):
┌──────────────────────────────────────┐
│ [≡] │ Content (mobile sidebar)       │
└──────────────────────────────────────┘

Mobile (375px):
┌────────────────────┐
│ [≡] │ Content      │
└────────────────────┘

CSS Classes:
- Main: w-screen overflow-hidden
- Main Content: w-full min-w-0 overflow-x-hidden
- Sidebar, Header: shrink-0 (don't shrink)
- All flex children: min-w-0 (allow shrinking)

Result: No horizontal scrollbar at any size ✅
```

## Component Interaction Map

```
DashboardLayoutShell
├── DashboardProvider (Context)
│   ├── DashboardSidebar
│   │   ├── Display areas from context
│   │   └── Highlight active area
│   │
│   ├── Main Content (children)
│   │   ├── DashboardContent
│   │   │   ├── Uses NewHabitModal
│   │   │   └── Uses EditHabitModal
│   │   │
│   │   └── AreaViewPage
│   │       ├── Display area details
│   │       └── List habits for area
│   │
│   └── NewAreaModal
│       ├── Calls areasService.createArea()
│       └── Updates context.areas
│
└── Dialog (displayed via Portal)
    ├── NewHabitModal
    │   ├── Shows dynamic areas
    │   └── Scrolls vertically
    │
    └── NewAreaModal
        ├── Creates area
        └── Scrolls if needed
```

## State Management Flow

```
Global State (DashboardContext):
┌────────────────────────────────────┐
│ areas: AreaItem[]                  │
│ → Loaded from Supabase            │
│ → Updates on create/update/delete │
│                                    │
│ habits: HabitItem[]                │
│ → Local state (could be Supabase) │
│                                    │
│ newAreaModalOpen: boolean          │
│ → Controls NewAreaModal display   │
│                                    │
│ isLoadingAreas: boolean            │
│ → Loading state during fetch      │
└────────────────────────────────────┘
         ↓
  Used by Components:
         ↓
    ├── DashboardSidebar
    │   └── Display areas & highlights
    │
    ├── NewHabitModal
    │   └── Show areas in dropdown
    │
    ├── AreaViewPage
    │   └── Find area & habits
    │
    └── NewAreaModal
        └── Create area function
```

## Database Relationships

```
auth.users (Supabase built-in)
    │
    ├─ Has many → areas
    │   └─ user_id FK
    │
    └─ Has many → habits
        ├─ user_id FK
        └─ area_id FK → areas

Cascade:
- Delete user → delete all areas & habits
- Delete area → delete or orphan habits (depends on setup)
```

---

This architecture ensures:
✅ User data isolation via RLS
✅ Dynamic area management
✅ Responsive layout at all sizes
✅ Smooth modal interactions
✅ Clean separation of concerns
✅ Scalable design for future features
