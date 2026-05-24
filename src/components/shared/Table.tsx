import { EmptyState } from '@/components/ui/EmptyState';
import type { ReactNode } from 'react';

export type TableColumn<TItem> = {
  key: string;
  header: string;
  render: (item: TItem) => ReactNode;
};

export function Table<TItem>({ items, columns, getRowKey, emptyTitle }: { items: TItem[]; columns: TableColumn<TItem>[]; getRowKey: (item: TItem) => string; emptyTitle: string; }) {
  if (items.length === 0) return <EmptyState title={emptyTitle} />;
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              {columns.map((column) => <th key={column.key} className="px-4 py-3 font-semibold">{column.header}</th>)}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {items.map((item) => (
              <tr key={getRowKey(item)}>
                {columns.map((column) => <td key={column.key} className="px-4 py-3 text-slate-700">{column.render(item)}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

