import { ROUTES } from "@/constants/routes";
import { dummyAdmin } from "@/dummy/auth.dummy";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setAuth } from "@/stores/authSlice";
import type { UserRole } from "@/types/common";
import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router";

export function ProtectedRoute({
  children,
  role,
}: {
  children: ReactNode;
  role?: UserRole;
}) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const statusAuth = useAppSelector((state) => state.auth.status);

  useEffect(() => {
    if (statusAuth === "loading") {
      dispatch(setAuth(dummyAdmin));
    }
  }, [dispatch, statusAuth]);

  if (statusAuth === "unauthorized") {
    navigate(ROUTES.login);
  }

  console.log(role);
  // const location = useLocation();
  // const isAuthenticated = true;
  // const user = dummyUser;

  // if (!isAuthenticated) {
  //   return (
  //     <Navigate replace to={ROUTES.login} state={{ from: location.pathname }} />
  //   );
  // }

  // if (role && user?.role !== role) {
  //   return <Navigate replace to={ROUTES.locations} />;
  // }

  return children;
}
