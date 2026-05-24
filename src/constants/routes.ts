export const ROUTES = {
  login: "/login",
  locations: "/locations",
  bookings: "/bookings",
  profile: "/profile",
  bookingHistory: "/bookings/history",
  adminDashboard: "/admin/dashboard",
  adminLocations: "/admin/locations",
  adminLocationNew: "/admin/locations/new",
  adminLocationDetail: (id: string) => `/admin/locations/${id}`,
  adminBookings: "/admin/bookings",
} as const;
