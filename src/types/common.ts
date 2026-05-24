export type PublicId = string;
export type DateTimeUtc = string;

export type UserRole = "USER" | "ADMIN";
export type LockerStatus = "AVAILABLE" | "MAINTENANCE" | "DISABLED";
export type LockerSize = "EXTRA" | "LARGE" | "MEDIUM" | "SMALL";
export type BookingStatus = "ACTIVE" | "COMPLETED" | "CANCELLED" | "EXPIRED";
export type LockerVisualizationStatus = "AVAILABLE" | "OCCUPIED" | "MY_BOOKING";
export type OAuthProvider = "google" | "github" | "microsoft" | "apple";

export type PaginationMeta = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type SelectOption<TValue extends string = string> = {
  label: string;
  value: TValue;
};
