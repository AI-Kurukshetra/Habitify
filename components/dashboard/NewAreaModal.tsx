'use client';

import { useState } from 'react';
import { Dialog } from '@/components/ui/Dialog';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { useDashboard } from '@/contexts/DashboardContext';

const COLORS = ['#2a67f4', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];

export function NewAreaModal() {
  const { newAreaModalOpen, setNewAreaModalOpen, addArea } = useDashboard();
  const [name, setName] = useState('');
  const [color, setColor] = useState(COLORS[0]);

  const handleSave = () => {
    if (!name.trim()) return;
    addArea({ name: name.trim(), color });
    setName('');
    setColor(COLORS[0]);
    setNewAreaModalOpen(false);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setName('');
      setColor(COLORS[0]);
    }
    setNewAreaModalOpen(open);
  };

  return (
    <Dialog
      open={newAreaModalOpen}
      onOpenChange={handleOpenChange}
      title="New Area"
      footer={
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={() => handleOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      }
    >
      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#374151]">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. todo list"
            className="w-full rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#2a67f4] focus:outline-none focus:ring-1 focus:ring-[#2a67f4]"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#374151]">Color</label>
          <div className="flex flex-wrap gap-2">
            {COLORS.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setColor(c)}
                className={cn(
                  'h-8 w-8 rounded-full border-2 transition',
                  color === c ? 'border-[#111827] scale-110' : 'border-transparent'
                )}
                style={{ backgroundColor: c }}
                aria-label={`Color ${c}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Dialog>
  );
}
