'use client';

import * as React from 'react';
import { cn, sleep } from '@/lib/utils';
import { Button } from './Button';
import { Progress } from './Progress';

export type FileUploadResult<T = unknown> =
  | { ok: true; data: T }
  | { ok: false; error: string };

export type FileUploadProps<T = unknown> = {
  label?: string;
  accept?: string;
  maxSizeMb?: number;
  disabled?: boolean;
  onUpload: (file: File, setProgress: (value: number) => void) => Promise<FileUploadResult<T>>;
  onUploaded?: (result: T) => void;
  className?: string;
};

export function FileUpload<T>({
  label = 'Upload file',
  accept,
  maxSizeMb = 5,
  disabled,
  onUpload,
  onUploaded,
  className,
}: FileUploadProps<T>) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [fileName, setFileName] = React.useState<string | null>(null);

  const validate = (file: File) => {
    if (maxSizeMb && file.size > maxSizeMb * 1024 * 1024) {
      return `File too large. Max ${maxSizeMb}MB.`;
    }
    if (accept) {
      const accepted = accept.split(',').map((s) => s.trim().toLowerCase());
      const mime = file.type.toLowerCase();
      const ext = `.${file.name.split('.').pop()?.toLowerCase()}`;
      const ok = accepted.some((rule) => rule === mime || rule === ext || (rule.endsWith('/*') && mime.startsWith(rule.slice(0, -1))));
      if (!ok) return `Unsupported file type. Allowed: ${accept}`;
    }
    return null;
  };

  const pick = () => inputRef.current?.click();

  const runUpload = async (file: File) => {
    const validationError = validate(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    setFileName(file.name);
    setLoading(true);
    setProgress(1);

    // Smooth progress "ramp" for SDKs without native progress events.
    let cancelled = false;
    const ramp = (async () => {
      while (!cancelled) {
        await sleep(120);
        setProgress((p) => (p < 90 ? Math.min(90, p + Math.max(1, Math.round((90 - p) * 0.08))) : p));
      }
    })();

    try {
      const result = await onUpload(file, (v) => setProgress(v));
      cancelled = true;
      await ramp.catch(() => {});
      if (!result.ok) {
        setError(result.error);
        setProgress(0);
        return;
      }
      setProgress(100);
      onUploaded?.(result.data);
    } finally {
      setLoading(false);
      setTimeout(() => setProgress(0), 800);
    }
  };

  const onDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    if (disabled || loading) return;
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) await runUpload(file);
  };

  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-medium text-fg">{label}</div>
        <Button type="button" variant="secondary" size="sm" onClick={pick} disabled={disabled} loading={loading}>
          Choose file
        </Button>
      </div>

      <div
        className={cn(
          'rounded-3xl border border-border/70 bg-card p-5 transition',
          'focus-within:ring-2 focus-within:ring-primary/15',
          isDragging ? 'border-primary/50 bg-bg' : 'hover:bg-bg',
          disabled ? 'opacity-60' : ''
        )}
        onDragOver={(e) => {
          e.preventDefault();
          if (disabled || loading) return;
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={onDrop}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') pick();
        }}
        onClick={pick}
        aria-disabled={disabled || loading}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="font-medium text-fg">Drag & drop</div>
            <div className="mt-1 text-sm text-muted">
              {accept ? `Accepted: ${accept}` : 'Any file type'} · Up to {maxSizeMb}MB
            </div>
            {fileName ? <div className="mt-2 text-sm text-fg">Selected: {fileName}</div> : null}
          </div>
          <div className="hidden sm:block text-sm text-muted">or click to browse</div>
        </div>

        <input
          ref={inputRef}
          type="file"
          accept={accept}
          className="hidden"
          disabled={disabled || loading}
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (file) await runUpload(file);
            e.currentTarget.value = '';
          }}
        />
      </div>

      {loading || progress > 0 ? <Progress value={progress} /> : null}
      {error ? <p className="text-sm text-danger">{error}</p> : null}
    </div>
  );
}

