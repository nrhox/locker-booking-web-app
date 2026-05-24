import { create } from 'zustand';
import { dummyLockerVisualizationResponse, dummyLockers } from '@/dummy/locker.dummy';
import type { Locker, LockerFormValues, LockerVisualization } from '@/types/locker';

type LockerState = {
  lockers: Locker[];
  visualization: LockerVisualization;
  selectedLockerId: string | null;
  selectLocker: (id: string | null) => void;
  addLocker: (values: LockerFormValues) => void;
  addLockers: (lockers: LockerFormValues[]) => void;
  getByLocationId: (locationId: string) => Locker[];
  markMyBooking: (lockerId: string, bookingId: string) => void;
};

function createLocker(values: LockerFormValues): Locker {
  return {
    id: crypto.randomUUID(),
    ...values,
    position: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

export const useLockerStore = create<LockerState>((set, get) => ({
  lockers: dummyLockers,
  visualization: dummyLockerVisualizationResponse.data,
  selectedLockerId: null,
  selectLocker: (id) => set({ selectedLockerId: id }),
  addLocker: (values) =>
    set((state) => ({
      lockers: [...state.lockers, createLocker(values)],
    })),
  addLockers: (lockers) =>
    set((state) => ({
      lockers: [...state.lockers, ...lockers.map(createLocker)],
    })),
  getByLocationId: (locationId) => get().lockers.filter((locker) => locker.locationId === locationId),
  markMyBooking: (lockerId, bookingId) =>
    set((state) => ({
      visualization: {
        ...state.visualization,
        lockers: state.visualization.lockers.map((locker) =>
          locker.id === lockerId
            ? { ...locker, visualizationStatus: 'MY_BOOKING', activeBookingId: bookingId }
            : locker,
        ),
      },
    })),
}));
