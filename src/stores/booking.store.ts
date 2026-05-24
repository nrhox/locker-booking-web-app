import { create } from 'zustand';
import { dummyBookings } from '@/dummy/booking.dummy';
import type { Booking, CreateBookingRequest } from '@/types/booking';

type BookingState = {
  bookings: Booking[];
  openBookingIds: Record<string, boolean>;
  createBooking: (request: CreateBookingRequest, userId: string, locationId: string) => Booking;
  cancelBooking: (id: string) => void;
  toggleLockerAccess: (bookingId: string) => void;
  isLockerOpen: (bookingId: string) => boolean;
  getById: (id: string) => Booking | undefined;
};

export const useBookingStore = create<BookingState>((set, get) => ({
  bookings: dummyBookings,
  openBookingIds: {},
  createBooking: (request, userId, locationId) => {
    const booking: Booking = {
      id: crypto.randomUUID(),
      userId,
      lockerId: request.lockerId,
      locationId,
      status: 'ACTIVE',
      startAt: request.startAt,
      endAt: request.endAt,
      cancelledAt: null,
      completedAt: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    set((state) => ({ bookings: [booking, ...state.bookings] }));
    return booking;
  },
  cancelBooking: (id) =>
    set((state) => ({
      bookings: state.bookings.map((booking) =>
        booking.id === id
          ? { ...booking, status: 'CANCELLED', cancelledAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
          : booking,
      ),
      openBookingIds: { ...state.openBookingIds, [id]: false },
    })),
  toggleLockerAccess: (bookingId) =>
    set((state) => ({
      openBookingIds: {
        ...state.openBookingIds,
        [bookingId]: !state.openBookingIds[bookingId],
      },
    })),
  isLockerOpen: (bookingId) => Boolean(get().openBookingIds[bookingId]),
  getById: (id) => get().bookings.find((booking) => booking.id === id),
}));
