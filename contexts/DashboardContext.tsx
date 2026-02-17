'use client';

import React, { createContext, useCallback, useContext, useState, useEffect } from 'react';
import type { AreaItem, HabitItem } from '@/lib/dashboard-types';
import { fetchUserAreas, createArea as createAreaInSupabase, updateArea as updateAreaInSupabase, deleteArea as deleteAreaInSupabase } from '@/services/areasService';
import { fetchUserHabits, createHabit as createHabitInSupabase, updateHabit as updateHabitInSupabase, deleteHabit as deleteHabitInSupabase } from '@/services/habitsService';
import type { TimeOfDaySlot } from '@/services/timeOfDayService';
import { fetchUserTimeOfDaySlots, createTimeOfDaySlot, updateTimeOfDaySlot as updateTimeOfDaySlotInSupabase, deleteTimeOfDaySlot as deleteTimeOfDaySlotInSupabase } from '@/services/timeOfDayService';

type DashboardContextValue = {
  areas: AreaItem[];
  setAreas: React.Dispatch<React.SetStateAction<AreaItem[]>>;
  addArea: (area: Omit<AreaItem, 'id' | 'order'>) => Promise<AreaItem | null>;
  updateArea: (id: string, area: Partial<Omit<AreaItem, 'id'>>) => Promise<AreaItem | null>;
  deleteArea: (id: string) => Promise<boolean>;
  habits: HabitItem[];
  setHabits: React.Dispatch<React.SetStateAction<HabitItem[]>>;
  addHabit: (habit: Omit<HabitItem, 'id' | 'done' | 'createdAt' | 'updatedAt'>) => Promise<HabitItem | null>;
  updateHabit: (id: string, habit: Partial<Omit<HabitItem, 'id' | 'createdAt' | 'updatedAt'>>) => Promise<HabitItem | null>;
  deleteHabit: (id: string) => Promise<boolean>;
  archiveHabit: (id: string) => Promise<HabitItem | null>;
  timeOfDaySlots: TimeOfDaySlot[];
  addTimeOfDaySlot: (slot: Omit<TimeOfDaySlot, 'id' | 'createdAt' | 'updatedAt'>) => Promise<TimeOfDaySlot | null>;
  updateTimeOfDaySlot: (id: string, updates: Partial<Omit<TimeOfDaySlot, 'id' | 'createdAt' | 'updatedAt'>>) => Promise<TimeOfDaySlot | null>;
  deleteTimeOfDaySlot: (id: string) => Promise<boolean>;
  isLoadingTimeOfDaySlots: boolean;
  newAreaModalOpen: boolean;
  setNewAreaModalOpen: (open: boolean) => void;
  isLoadingAreas: boolean;
  isLoadingHabits: boolean;
};

const DashboardContext = createContext<DashboardContextValue | null>(null);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areas, setAreas] = useState<AreaItem[]>([]);
  const [habits, setHabits] = useState<HabitItem[]>([]);
  const [timeOfDaySlots, setTimeOfDaySlots] = useState<TimeOfDaySlot[]>([]);
  const [newAreaModalOpen, setNewAreaModalOpen] = useState(false);
  const [isLoadingAreas, setIsLoadingAreas] = useState(true);
  const [isLoadingHabits, setIsLoadingHabits] = useState(true);
  const [isLoadingTimeOfDaySlots, setIsLoadingTimeOfDaySlots] = useState(true);

  // Load areas from Supabase on mount – single source of truth
  useEffect(() => {
    const loadAreas = async () => {
      try {
        setIsLoadingAreas(true);
        const userAreas = await fetchUserAreas();
        setAreas(userAreas);
      } catch (error) {
        console.error('Error loading areas:', error);
      } finally {
        setIsLoadingAreas(false);
      }
    };

    loadAreas();
  }, []);

  const addArea = useCallback(async (area: Omit<AreaItem, 'id' | 'order'>) => {
    try {
      const newArea = await createAreaInSupabase(area);
      if (newArea) {
        setAreas((prev) => [...prev, newArea]);
        return newArea;
      }
      return null;
    } catch (error) {
      console.error('Error adding area:', error);
      return null;
    }
  }, []);

  const updateArea = useCallback(async (id: string, area: Partial<Omit<AreaItem, 'id'>>) => {
    try {
      const updated = await updateAreaInSupabase(id, area);
      if (updated) {
        setAreas((prev) => prev.map((a) => (a.id === id ? updated : a)));
        return updated;
      }
      return null;
    } catch (error) {
      console.error('Error updating area:', error);
      return null;
    }
  }, []);

  const deleteArea = useCallback(async (id: string) => {
    try {
      const ok = await deleteAreaInSupabase(id);
      if (ok) {
        setAreas((prev) => prev.filter((a) => a.id !== id));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error deleting area:', error);
      return false;
    }
  }, []);

  // Load habits from Supabase on mount – single source of truth
  useEffect(() => {
    const loadHabits = async () => {
      try {
        setIsLoadingHabits(true);
        const userHabits = await fetchUserHabits();
        setHabits(userHabits);
      } catch (error) {
        console.error('Error loading habits:', error);
      } finally {
        setIsLoadingHabits(false);
      }
    };

    loadHabits();
  }, []);

  const addHabit = useCallback(async (habit: Omit<HabitItem, 'id' | 'done' | 'createdAt' | 'updatedAt'>) => {
    try {
      const newHabit = await createHabitInSupabase(habit);
      if (newHabit) {
        setHabits((prev) => [...prev, newHabit]);
        return newHabit;
      }
      return null;
    } catch (error) {
      console.error('Error adding habit:', error);
      return null;
    }
  }, []);

  const updateHabit = useCallback(async (id: string, habit: Partial<Omit<HabitItem, 'id' | 'createdAt' | 'updatedAt'>>) => {
    try {
      const updated = await updateHabitInSupabase(id, habit);
      if (updated) {
        setHabits((prev) => prev.map((h) => (h.id === id ? updated : h)));
        return updated;
      }
      return null;
    } catch (error) {
      console.error('Error updating habit:', error);
      return null;
    }
  }, []);

  const deleteHabit = useCallback(async (id: string) => {
    try {
      const ok = await deleteHabitInSupabase(id);
      if (ok) {
        setHabits((prev) => prev.filter((h) => h.id !== id));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error deleting habit:', error);
      return false;
    }
  }, []);

  const archiveHabit = useCallback(async (id: string) => {
    return updateHabit(id, { isArchived: true });
  }, [updateHabit]);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoadingTimeOfDaySlots(true);
        const slots = await fetchUserTimeOfDaySlots();
        setTimeOfDaySlots(slots);
      } catch (error) {
        console.error('Error loading time of day slots:', error);
      } finally {
        setIsLoadingTimeOfDaySlots(false);
      }
    };
    load();
  }, []);

  const addTimeOfDaySlot = useCallback(async (slot: Omit<TimeOfDaySlot, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const created = await createTimeOfDaySlot(slot);
      if (created) {
        setTimeOfDaySlots((prev) => [...prev, created]);
        return created;
      }
      return null;
    } catch (error) {
      console.error('Error adding time of day slot:', error);
      return null;
    }
  }, []);

  const updateTimeOfDaySlot = useCallback(async (id: string, updates: Partial<Omit<TimeOfDaySlot, 'id' | 'createdAt' | 'updatedAt'>>) => {
    try {
      const updated = await updateTimeOfDaySlotInSupabase(id, updates);
      if (updated) {
        setTimeOfDaySlots((prev) => prev.map((s) => (s.id === id ? updated : s)));
        return updated;
      }
      return null;
    } catch (error) {
      console.error('Error updating time of day slot:', error);
      return null;
    }
  }, []);

  const deleteTimeOfDaySlot = useCallback(async (id: string) => {
    try {
      const ok = await deleteTimeOfDaySlotInSupabase(id);
      if (ok) {
        setTimeOfDaySlots((prev) => prev.filter((s) => s.id !== id));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error deleting time of day slot:', error);
      return false;
    }
  }, []);

  const value: DashboardContextValue = {
    areas,
    setAreas,
    addArea,
    updateArea,
    deleteArea,
    habits,
    setHabits,
    addHabit,
    updateHabit,
    deleteHabit,
    archiveHabit,
    timeOfDaySlots,
    addTimeOfDaySlot,
    updateTimeOfDaySlot,
    deleteTimeOfDaySlot,
    isLoadingTimeOfDaySlots,
    newAreaModalOpen,
    setNewAreaModalOpen,
    isLoadingAreas,
    isLoadingHabits,
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
