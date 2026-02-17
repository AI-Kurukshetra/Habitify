'use client';

import { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import {
  PlusIcon,
  MoreVerticalIcon,
  PencilIcon,
  TrashIcon,
  FolderOpenIcon,
} from '@/components/ui/icons';
import { Dialog } from '@/components/ui/Dialog';
import { Button } from '@/components/ui/Button';
import type { AreaItem } from '@/lib/dashboard-types';
import { useDashboard } from '@/contexts/DashboardContext';

const COLORS = ['#2a67f4', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];

export default function AreasPage() {
  const { areas, addArea, updateArea, deleteArea: deleteAreaInDb } = useDashboard();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [color, setColor] = useState(COLORS[0]);

  const openCreate = () => {
    setEditingId(null);
    setName('');
    setColor(COLORS[0]);
    setModalOpen(true);
  };

  const openEdit = (area: AreaItem) => {
    setEditingId(area.id);
    setName(area.name);
    setColor(area.color);
    setMenuOpenId(null);
    setModalOpen(true);
  };

  const saveArea = async () => {
    if (!name.trim()) return;
    if (editingId) {
      await updateArea(editingId, { name: name.trim(), color });
    } else {
      await addArea({ name: name.trim(), color });
    }
    setModalOpen(false);
  };

  const deleteArea = useCallback(async (id: string) => {
    const ok = await deleteAreaInDb(id);
    if (ok) setMenuOpenId(null);
  }, [deleteAreaInDb]);

  return (
    <div className="flex flex-col bg-white min-h-full">
      <div className="border-b border-[#E5E7EB] px-4 py-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-xl font-semibold text-[#111827] lg:text-2xl">Areas</h1>
          <Button onClick={openCreate} className="gap-1.5">
            <PlusIcon size={18} />
            New Area
          </Button>
        </div>
        <p className="mt-1 text-sm text-[#6B7280]">Group habits by area. New areas also appear in the sidebar.</p>
      </div>

      <div className="flex-1 px-4 py-4 sm:px-6">
        <ul className="space-y-2">
          {areas.map((area) => (
            <li
              key={area.id}
              className="flex items-center gap-3 rounded-xl border border-[#E5E7EB] bg-white px-4 py-3"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white"
                style={{ backgroundColor: area.color }}
              >
                <FolderOpenIcon size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-[#111827]">{area.name}</p>
              </div>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setMenuOpenId(menuOpenId === area.id ? null : area.id)}
                  className="rounded p-2 text-[#6B7280] hover:bg-[#F3F4F6]"
                  aria-label="More options"
                >
                  <MoreVerticalIcon size={18} />
                </button>
                {menuOpenId === area.id && (
                  <>
                    <div className="fixed inset-0 z-10" aria-hidden onClick={() => setMenuOpenId(null)} />
                    <div className="absolute right-0 top-full z-20 mt-1 w-44 rounded-lg border border-[#E5E7EB] bg-white py-1 shadow-lg">
                      <button type="button" onClick={() => openEdit(area)} className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-[#374151] hover:bg-[#F3F4F6]">
                        <PencilIcon size={16} /> Rename
                      </button>
                      <button type="button" onClick={() => deleteArea(area.id)} className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-[#EF4444] hover:bg-[#FEF2F2]">
                        <TrashIcon size={16} /> Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen} title={editingId ? 'Rename Area' : 'New Area'} footer={
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={() => setModalOpen(false)}>Cancel</Button>
          <Button onClick={saveArea}>Save</Button>
        </div>
      }>
        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[#374151]">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Area name" className="w-full rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#2a67f4] focus:outline-none focus:ring-1 focus:ring-[#2a67f4]" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[#374151]">Color</label>
            <div className="flex flex-wrap gap-2">
              {COLORS.map((c) => (
                <button key={c} type="button" onClick={() => setColor(c)} className={cn('h-8 w-8 rounded-full border-2 transition', color === c ? 'border-[#111827] scale-110' : 'border-transparent')} style={{ backgroundColor: c }} aria-label={`Color ${c}`} />
              ))}
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
