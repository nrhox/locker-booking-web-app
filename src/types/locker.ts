import type {
  DateTimeUtc,
  LockerSize,
  LockerStatus,
  LockerVisualizationStatus,
  PublicId,
} from "./common";

export type LockerPosition = {
  row?: number;
  column?: number;
};

export type Locker = {
  id: PublicId;
  locationId: PublicId;
  size: LockerSize;
  status: LockerStatus;
  position?: LockerPosition | null;
  createdAt: DateTimeUtc;
  updatedAt: DateTimeUtc;
};

export type LockerVisualizationItem = {
  id: PublicId;
  code: string;
  label?: string | null;
  lockerStatus: LockerStatus;
  visualizationStatus: LockerVisualizationStatus;
  position?: LockerPosition | null;
  activeBookingId?: PublicId | null;
};

export type LockerVisualization = {
  locationId: PublicId;
  generatedAt: DateTimeUtc;
  lockers: LockerVisualizationItem[];
};

export type LockerFormValues = {
  locationId: PublicId;
  size: LockerSize;
  status: LockerStatus;
};
