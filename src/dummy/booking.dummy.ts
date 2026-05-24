import type { ApiResponse, PaginatedResponse } from "@/types/api";
import type { Booking } from "@/types/booking";

export const dummyBookings: Booking[] = [
  {
    id: "9d2c8a74-32f4-4b1a-8e20-d9cb1f8b9861",
    userId: "2cc34a61-3398-46d4-87d5-f956b8c53221",
    lockerId: "a4374f6d-41a6-48a7-9987-01917c16dd97",
    locationId: "cf726a74-52e9-46d1-a2c2-6f6c084bc4f6",
    status: "ACTIVE",
    startAt: "2026-05-24T02:00:00Z",
    endAt: "2026-05-24T06:00:00Z",
    cancelledAt: null,
    completedAt: null,
    createdAt: "2026-05-24T01:55:00Z",
    updatedAt: "2026-05-24T01:55:00Z",
  },
];

export const dummyActiveBookingsResponse: ApiResponse<Booking[]> = {
  message: "Success",
  data: dummyBookings.filter((booking) => booking.status === "ACTIVE"),
};

export const dummyBookingHistoryResponse: PaginatedResponse<Booking> = {
  message: "Success",
  data: dummyBookings,
  meta: {
    page: 1,
    limit: 10,
    total: dummyBookings.length,
    totalPages: 1,
  },
};
