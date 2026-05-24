import { Badge } from '@/components/ui/Badge';
import { VISUALIZATION_LABEL } from '@/constants/status';
import type { LockerVisualizationItem } from '@/types/locker';
import { cn } from '@/utils/cn';
import { CheckCircle2, Lock, UserCheck } from 'lucide-react';

export function LockerVisualizationGrid({ lockers, selectedLockerId, onSelect }: { lockers: LockerVisualizationItem[]; selectedLockerId: string | null; onSelect: (lockerId: string) => void; }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {lockers.map((locker) => {
        const available = locker.visualizationStatus === 'AVAILABLE' && locker.lockerStatus === 'AVAILABLE';
        const selected = locker.id === selectedLockerId;
        const Icon = locker.visualizationStatus === 'MY_BOOKING' ? UserCheck : available ? CheckCircle2 : Lock;
        return (
          <button
            type="button"
            key={locker.id}
            disabled={!available}
            onClick={() => onSelect(locker.id)}
            className={cn('rounded-lg h-fit min-h-28 border bg-white p-3 text-left transition disabled:opacity-70', selected ? 'border-teal-700 ring-2 ring-teal-700/10' : 'border-slate-200', available ? 'hover:border-teal-300' : '')}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-slate-950">{locker.code}</p>
                <p className="mt-1 text-xs text-slate-500">{locker.label}</p>
              </div>
              <Icon className={cn('h-5 w-5', available ? 'text-teal-700' : 'text-slate-400')} />
            </div>
            <Badge className="mt-4" tone={locker.visualizationStatus === 'AVAILABLE' ? 'success' : locker.visualizationStatus === 'MY_BOOKING' ? 'info' : 'neutral'}>
              {VISUALIZATION_LABEL[locker.visualizationStatus]}
            </Badge>
          </button>
        );
      })}
    </div>
  );
}

