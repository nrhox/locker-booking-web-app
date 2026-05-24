import type { DateTimeUtc, PublicId } from "./common";

export type LocationStatus = "ACTIVE" | "INACTIVE";

export type Location = {
  id: PublicId;
  name: string;
  code: string;
  description?: string | null;
  address?: string | null;
  status: LocationStatus;
  createdAt: DateTimeUtc;
  updatedAt: DateTimeUtc;
};

export type LocationFormValues = {
  name: string;
  code: string;
  description: string;
  address: string;
  status: LocationStatus;
};
