'use client';

import * as React from 'react';
import { Badge } from './Badge';

export type StatusKind = 'active' | 'paused' | 'error' | 'ok';

export function StatusBadge({ status }: { status: StatusKind }) {
  const variant =
    status === 'active' ? 'primary' : status === 'paused' ? 'accent' : status === 'ok' ? 'success' : 'danger';

  const label =
    status === 'active' ? 'Active' : status === 'paused' ? 'Paused' : status === 'ok' ? 'OK' : 'Error';

  return <Badge variant={variant}>{label}</Badge>;
}

