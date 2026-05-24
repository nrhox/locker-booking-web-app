import type { BookingStatus, LockerStatus, LockerVisualizationStatus, SelectOption, UserRole } from '@/types/common';
import type { LocationStatus } from '@/types/location';

export const USER_ROLE_OPTIONS: SelectOption<UserRole>[] = [
  { label: 'User', value: 'USER' },
  { label: 'Admin', value: 'ADMIN' },
];

export const LOCATION_STATUS_OPTIONS: SelectOption<LocationStatus>[] = [
  { label: 'Active', value: 'ACTIVE' },
  { label: 'Inactive', value: 'INACTIVE' },
];

export const LOCKER_STATUS_OPTIONS: SelectOption<LockerStatus>[] = [
  { label: 'Available', value: 'AVAILABLE' },
  { label: 'Maintenance', value: 'MAINTENANCE' },
  { label: 'Disabled', value: 'DISABLED' },
];

export const BOOKING_STATUS_OPTIONS: SelectOption<BookingStatus>[] = [
  { label: 'Active', value: 'ACTIVE' },
  { label: 'Completed', value: 'COMPLETED' },
  { label: 'Cancelled', value: 'CANCELLED' },
  { label: 'Expired', value: 'EXPIRED' },
];

export const VISUALIZATION_LABEL: Record<LockerVisualizationStatus, string> = {
  AVAILABLE: 'Available',
  OCCUPIED: 'In use',
  MY_BOOKING: 'My booking',
};

