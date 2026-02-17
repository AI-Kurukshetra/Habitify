'use client';

import React, { createContext, useCallback, useContext, useState } from 'react';
import type { AreaItem, HabitItem } from '@/lib/dashboard-types';
import { DEFAULT_AREAS, DEFAULT_HABITS } from '@/lib/dashboard-types';

type DashboardContextValue = {
  areas: AreaItem[];
  setAreas: React.Dispatch<React.SetStateAction<AreaItem[]>>;
  addArea: (area: Omit<AreaItem, 'id' | 'order'>) => AreaItem;
  habits: HabitItem[];
  setHabits: React.Dispatch<React.SetStateAction<HabitItem[]>>;
  newAreaModalOpen: boolean;
  setNewAreaModalOpen: (open: boolean) => void;
};

const DashboardContext = createContext<DashboardContextValue | null>(null);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areas, setAreas] = useState<AreaItem[]>(DEFAULT_AREAS);
  const [habits, setHabits] = useState<HabitItem[]>(DEFAULT_HABITS);
  const [newAreaModalOpen, setNewAreaModalOpen] = useState(false);

  const addArea = useCallback((area: Omit<AreaItem, 'id' | 'order'>) => {
    const newArea: AreaItem = {
      ...area,
      id: `area-${Date.now()}`,
      order: areas.length,
    };
    setAreas((prev) => [...prev, newArea]);
    return newArea;
  }, [areas.length]);

  const value: DashboardContextValue = {
    areas,
    setAreas,
    addArea,
    habits,
    setHabits,
    newAreaModalOpen,
    setNewAreaModalOpen,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error('useDashboard must be used within DashboardProvider');
  return ctx;
}
