import type { PaginatedResponse } from "@/types/api";
import type { Location } from "@/types/location";

export const dummyLocations: Location[] = [
  {
    id: "cf726a74-52e9-46d1-a2c2-6f6c084bc4f6",
    name: "Main Library",
    code: "LIBRARY_A",
    description: "Ground floor public lockers near the study area.",
    address: "North Campus Library",
    status: "ACTIVE",
    timezone: "Asia/Jakarta",
    createdAt: "2026-05-24T01:00:00Z",
    updatedAt: "2026-05-24T01:00:00Z",
  },
  {
    id: "66b0674d-7244-4c92-b5fc-26c2ab30c092",
    name: "Sports Center",
    code: "SPORTS_CENTER",
    description: "Lockers beside the indoor court entrance.",
    address: "West Campus Sports Center",
    status: "ACTIVE",
    timezone: "Asia/Jakarta",
    createdAt: "2026-05-24T01:00:00Z",
    updatedAt: "2026-05-24T01:00:00Z",
  },
];

export const dummyLocationsResponse: PaginatedResponse<Location> = {
  message: "Success",
  data: dummyLocations,
  meta: {
    page: 1,
    limit: 10,
    total: dummyLocations.length,
    totalPages: 1,
  },
};
