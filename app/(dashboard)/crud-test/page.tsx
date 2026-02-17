'use client';

import { useState, useEffect } from 'react';
import { Item, CreateItemData, UpdateItemData } from '@/types';
import { getItems, createItem, updateItem, deleteItem } from '@/services/crudService';
import ItemForm from '@/components/ItemForm';
import ItemCard from '@/components/ItemCard';
import Link from 'next/link';

export default function CrudTestPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getItems();
      setItems(data);
    } catch (err: any) {
      setError(err.message || 'Failed to load items');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (data: CreateItemData) => {
    try {
      await createItem(data);
      await loadItems();
      setIsFormOpen(false);
      setError('');
    } catch (err: any) {
      setError(err.message || 'Failed to create item');
      throw err;
    }
  };

  const handleUpdate = async (data: UpdateItemData) => {
    try {
      await updateItem(data);
      await loadItems();
      setEditingItem(null);
      setIsFormOpen(false);
      setError('');
    } catch (err: any) {
      setError(err.message || 'Failed to update item');
      throw err;
    }
  };

  const handleSubmit = async (data: CreateItemData | UpdateItemData) => {
    if (editingItem && 'id' in data) {
      await handleUpdate(data as UpdateItemData);
    } else {
      await handleCreate(data as CreateItemData);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    try {
      await deleteItem(id);
      await loadItems();
      setError('');
    } catch (err: any) {
      setError(err.message || 'Failed to delete item');
    }
  };

  const handleEdit = (item: Item) => {
    setEditingItem(item);
    setIsFormOpen(true);
  };

  const handleCancelForm = () => {
    setIsFormOpen(false);
    setEditingItem(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl font-bold text-gray-900">
              CRUD Test
            </h1>
            <Link
              href="/dashboard"
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              ← Back to Dashboard
            </Link>
          </div>
          <p className="text-gray-600">
            Create, Read, Update, and Delete items with image upload
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {/* Create Button */}
        {!isFormOpen && (
          <button
            onClick={() => setIsFormOpen(true)}
            className="mb-6 py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
          >
            + Create New Item
          </button>
        )}

        {/* Form */}
        {isFormOpen && (
          <div className="mb-8 bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {editingItem ? 'Edit Item' : 'Create New Item'}
            </h2>
            <ItemForm
              item={editingItem}
              onSubmit={handleSubmit}
              onCancel={handleCancelForm}
            />
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            <p className="mt-4 text-gray-600">Loading items...</p>
          </div>
        )}

        {/* Items List */}
        {!loading && items.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl shadow">
            <p className="text-gray-500 text-lg">
              No items yet. Create your first item!
            </p>
          </div>
        )}

        {!loading && items.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
