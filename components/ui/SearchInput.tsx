'use client';

import * as React from 'react';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import { Input } from './Input';

export type SearchInputProps = {
  value: string;
  onValueChange: (value: string) => void;
  onSearch?: (value: string) => void;
  debounceMs?: number;
  placeholder?: string;
  label?: string;
};

export function SearchInput({
  value,
  onValueChange,
  onSearch,
  debounceMs = 250,
  placeholder = 'Search…',
  label,
}: SearchInputProps) {
  const debounced = useDebouncedValue(value, debounceMs);

  React.useEffect(() => {
    onSearch?.(debounced);
  }, [debounced, onSearch]);

  return (
    <Input
      label={label}
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      placeholder={placeholder}
      type="search"
      autoComplete="off"
      aria-label={label ?? placeholder}
    />
  );
}

