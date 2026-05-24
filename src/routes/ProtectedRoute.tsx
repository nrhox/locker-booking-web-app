import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { useAuth } from '@/hooks/useAuth';
import type { UserRole } from '@/types/common';

export function ProtectedRoute({ children, role }: { children: ReactNode; role?: UserRole }) {
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate replace to={ROUTES.login} state={{ from: location.pathname }} />;
  }

  if (role && user?.role !== role) {
    return <Navigate replace to={ROUTES.locations} />;
  }

  return children;
}

