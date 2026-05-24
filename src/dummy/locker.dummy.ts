import type { ApiResponse, PaginatedResponse } from "@/types/api";
import type { Locker, LockerVisualization } from "@/types/locker";

export const dummyLockers: Locker[] = [
  {
    id: "a4374f6d-41a6-48a7-9987-01917c16dd97",
    locationId: "cf726a74-52e9-46d1-a2c2-6f6c084bc4f6",
    code: "A-001",
    label: "Aisle A Locker 001",
    status: "AVAILABLE",
    position: { row: 1, column: 1 },
    createdAt: "2026-05-24T01:00:00Z",
    updatedAt: "2026-05-24T01:00:00Z",
  },
  {
    id: "ba8e42df-4d12-45d9-a0c8-ff6d717d7880",
    locationId: "cf726a74-52e9-46d1-a2c2-6f6c084bc4f6",
    code: "A-002",
    label: "Aisle A Locker 002",
    status: "AVAILABLE",
    position: { row: 1, column: 2 },
    createdAt: "2026-05-24T01:00:00Z",
    updatedAt: "2026-05-24T01:00:00Z",
  },
  {
    id: "d4b035fb-e4b9-4a1a-a601-8db481d9b7f6",
    locationId: "cf726a74-52e9-46d1-a2c2-6f6c084bc4f6",
    code: "A-003",
    label: "Maintenance locker",
    status: "MAINTENANCE",
    position: { row: 1, column: 3 },
    createdAt: "2026-05-24T01:00:00Z",
    updatedAt: "2026-05-24T01:00:00Z",
  },
];

export const dummyLockersResponse: PaginatedResponse<Locker> = {
  message: "Success",
  data: dummyLockers,
  meta: {
    page: 1,
    limit: 10,
    total: dummyLockers.length,
    totalPages: 1,
  },
};

export const dummyLockerVisualizationResponse: ApiResponse<LockerVisualization> =
  {
    message: "Success",
    data: {
      locationId: "cf726a74-52e9-46d1-a2c2-6f6c084bc4f6",
      generatedAt: "2026-05-24T02:10:00Z",
      lockers: [
        {
          id: "a4374f6d-41a6-48a7-9987-01917c16dd97",
          code: "A-001",
          label: "Aisle A Locker 001",
          lockerStatus: "AVAILABLE",
          visualizationStatus: "AVAILABLE",
          position: { row: 1, column: 1 },
          activeBookingId: null,
        },
        {
          id: "ba8e42df-4d12-45d9-a0c8-ff6d717d7880",
          code: "A-002",
          label: "Aisle A Locker 002",
          lockerStatus: "AVAILABLE",
          visualizationStatus: "OCCUPIED",
          position: { row: 1, column: 2 },
          activeBookingId: null,
        },
        {
          id: "d4b035fb-e4b9-4a1a-a601-8db481d9b7f6",
          code: "A-003",
          label: "Maintenance locker",
          lockerStatus: "MAINTENANCE",
          visualizationStatus: "OCCUPIED",
          position: { row: 1, column: 3 },
          activeBookingId: null,
        },
      ],
    },
  };
