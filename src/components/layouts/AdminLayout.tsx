import { Button } from "@/components/ui/Button";
import { Drawer } from "@/components/ui/Drawer";
import { ROUTES } from "@/constants/routes";
import { useAppSelector } from "@/hooks";
import { toggleAdminDrawer } from "@/stores/uiSlice";
import { cn } from "@/utils/cn";
import {
  BookOpen,
  CalendarRange,
  LayoutDashboard,
  LogOut,
  MapPinned,
  Menu,
  User,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

const nav = [
  { label: "Dashboard", to: ROUTES.adminDashboard, icon: LayoutDashboard },
  { label: "Locations", to: ROUTES.adminLocations, icon: MapPinned },
  { label: "Bookings", to: ROUTES.adminBookings, icon: CalendarRange },
  { label: "Users", to: ROUTES.adminUsers, icon: User },
];

function AdminNav() {
  return (
    <nav className="space-y-1">
      {nav.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            cn(
              "flex h-10 items-center gap-2 rounded-md px-3 text-sm font-medium",
              isActive
                ? "bg-teal-50 text-teal-800"
                : "text-slate-600 hover:bg-slate-100",
            )
          }
        >
          <item.icon className="h-4 w-4" />
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

export function AdminLayout() {
  const user = useAppSelector((state) => state.auth.user);
  const isDrawerOpen = useAppSelector((state) => state.ui.adminDrawerOpen);
  const dispatch = useDispatch();
  return (
    <div className="min-h-svh bg-slate-50">
      <aside className="fixed top-0 hidden min-h-svh w-65 border-r border-slate-200 bg-white p-4 lg:block">
        <div className="mb-6 flex items-center gap-2 font-semibold text-slate-950">
          <BookOpen className="h-5 w-5 text-teal-700" />
          Admin Console
        </div>
        <AdminNav />
      </aside>
      <Drawer
        open={isDrawerOpen}
        title="Admin Console"
        onClose={() => dispatch(toggleAdminDrawer())}
      >
        <AdminNav />
      </Drawer>
      <div className="lg:ml-65">
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <Button
                type="button"
                variant="ghost"
                className="h-10 w-10 px-0 lg:hidden"
                onClick={() => dispatch(toggleAdminDrawer())}
                aria-label="Open admin navigation"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div>
                <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                  Admin
                </p>
                <p className="text-sm font-semibold text-slate-950">
                  {user?.displayName}
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="ghost"
              onClick={() => console.log("logout")}
              icon={<LogOut className="h-4 w-4" />}
            >
              Logout
            </Button>
          </div>
        </header>
        <Outlet />
      </div>
    </div>
  );
}
