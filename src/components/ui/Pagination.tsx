import type { PaginationMeta } from '@/types/common';
import { Button } from './Button';

export function Pagination({ meta, onPageChange }: { meta: PaginationMeta; onPageChange: (page: number) => void }) {
  return (
    <div className="flex items-center justify-between text-sm text-slate-600">
      <span>Page {meta.page} of {Math.max(meta.totalPages, 1)}</span>
      <div className="flex gap-2">
        <Button type="button" variant="secondary" disabled={meta.page <= 1} onClick={() => onPageChange(meta.page - 1)}>Prev</Button>
        <Button type="button" variant="secondary" disabled={meta.page >= meta.totalPages} onClick={() => onPageChange(meta.page + 1)}>Next</Button>
      </div>
    </div>
  );
}

