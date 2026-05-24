import type { BookingStatus, DateTimeUtc, PublicId } from './common';

export type Booking = {
  id: PublicId;
  userId: PublicId;
  lockerId: PublicId;
  locationId: PublicId;
  status: BookingStatus;
  startAt: DateTimeUtc;
  endAt: DateTimeUtc;
  cancelledAt?: DateTimeUtc | null;
  completedAt?: DateTimeUtc | null;
  createdAt: DateTimeUtc;
  updatedAt: DateTimeUtc;
};

export type BookingFormValues = {
  lockerId: PublicId;
  startAt: string;
  endAt: string;
};

export type CreateBookingRequest = {
  lockerId: PublicId;
  startAt: DateTimeUtc;
  endAt: DateTimeUtc;
};

