import { AdminLayout } from "@/components/layouts/AdminLayout";
import { PublicLayout } from "@/components/layouts/PublicLayout";
import { UserLayout } from "@/components/layouts/UserLayout";
import { ROUTES } from "@/constants/routes";
import { AdminBookingsPage } from "@/pages/admin/booking/AdminBookingsPage";
import { AdminDashboardPage } from "@/pages/admin/dashboard/AdminDashboardPage";
import { AdminLocationsPage } from "@/pages/admin/location/AdminLocationsPage";
import { AdminLocationCreatePage } from "@/pages/admin/location/create/AdminLocationCreatePage";
import { AdminLocationDetailPage } from "@/pages/admin/location/detail/AdminLocationDetailPage";
import { BookingPage } from "@/pages/booking/BookingPage";
import { BookingDetailPage } from "@/pages/booking/detail/BookingDetailPage";
import { HistoryPage } from "@/pages/history/HistoryPage";
import { LocationDetailPage } from "@/pages/location/detail/LocationDetailPage";
import { LocationPage } from "@/pages/location/LocationPage";
import { LoginPage } from "@/pages/login/LoginPage";
import { ProfilePage } from "@/pages/profile/ProfilePage";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <Navigate replace to={ROUTES.login} /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
  {
    element: (
      <ProtectedRoute>
        <UserLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "locations", loader: () => null, element: <LocationPage /> },
      {
        path: "locations/:id",
        loader: () => null,
        element: <LocationDetailPage />,
      },
      { path: "bookings", loader: () => null, element: <BookingPage /> },
      {
        path: "history",
        loader: () => null,
        element: <HistoryPage />,
      },
      {
        path: "bookings/:id",
        loader: () => null,
        element: <BookingDetailPage />,
      },
      { path: "profile", loader: () => null, element: <ProfilePage /> },
    ],
  },
  {
    path: "admin",
    element: (
      <ProtectedRoute role="ADMIN">
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate replace to={ROUTES.adminDashboard} /> },
      {
        path: "dashboard",
        loader: () => null,
        element: <AdminDashboardPage />,
      },
      {
        path: "locations",
        loader: () => null,
        element: <AdminLocationsPage />,
      },
      {
        path: "locations/new",
        loader: () => null,
        element: <AdminLocationCreatePage />,
      },
      {
        path: "locations/:id",
        loader: () => null,
        element: <AdminLocationDetailPage />,
      },
      { path: "bookings", loader: () => null, element: <AdminBookingsPage /> },
    ],
  },
]);
