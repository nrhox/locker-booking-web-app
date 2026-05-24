import { Navigate, createBrowserRouter } from 'react-router-dom';
import { AdminLayout } from '@/components/layouts/AdminLayout';
import { PublicLayout } from '@/components/layouts/PublicLayout';
import { UserLayout } from '@/components/layouts/UserLayout';
import { ROUTES } from '@/constants/routes';
import { AdminBookingsPage } from '@/features/admin/AdminBookingsPage';
import { AdminDashboardPage } from '@/features/admin/AdminDashboardPage';
import { AdminLocationCreatePage } from '@/features/admin/AdminLocationCreatePage';
import { AdminLocationDetailPage } from '@/features/admin/AdminLocationDetailPage';
import { AdminLocationsPage } from '@/features/admin/AdminLocationsPage';
import { LoginPage } from '@/features/auth/LoginPage';
import { ProfilePage } from '@/features/auth/ProfilePage';
import { BookingDetailPage } from '@/features/bookings/BookingDetailPage';
import { BookingHistoryPage } from '@/features/bookings/BookingHistoryPage';
import { BookingListPage } from '@/features/bookings/BookingListPage';
import { LocationDetailPage } from '@/features/locations/LocationDetailPage';
import { LocationListPage } from '@/features/locations/LocationListPage';
import { ProtectedRoute } from './ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <Navigate replace to={ROUTES.locations} /> },
      { path: 'login', element: <LoginPage /> },
    ],
  },
  {
    element: (
      <ProtectedRoute>
        <UserLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: 'locations', loader: () => null, element: <LocationListPage /> },
      { path: 'locations/:id', loader: () => null, element: <LocationDetailPage /> },
      { path: 'bookings', loader: () => null, element: <BookingListPage /> },
      { path: 'bookings/history', loader: () => null, element: <BookingHistoryPage /> },
      { path: 'bookings/:id', loader: () => null, element: <BookingDetailPage /> },
      { path: 'profile', loader: () => null, element: <ProfilePage /> },
    ],
  },
  {
    path: 'admin',
    element: (
      <ProtectedRoute role="ADMIN">
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate replace to={ROUTES.adminDashboard} /> },
      { path: 'dashboard', loader: () => null, element: <AdminDashboardPage /> },
      { path: 'locations', loader: () => null, element: <AdminLocationsPage /> },
      { path: 'locations/new', loader: () => null, element: <AdminLocationCreatePage /> },
      { path: 'locations/:id', loader: () => null, element: <AdminLocationDetailPage /> },
      { path: 'bookings', loader: () => null, element: <AdminBookingsPage /> },
    ],
  },
]);
