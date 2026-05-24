import {
  BookOpen,
  CalendarRange,
  LayoutDashboard,
  LogOut,
  Menu,
  MapPinned,
} from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { Drawer } from "@/components/ui/Drawer";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/constants/routes";
import { useAuth } from "@/hooks/useAuth";
import { useUiStore } from "@/stores/ui.store";
import { cn } from "@/utils/cn";

const nav = [
  { label: "Dashboard", to: ROUTES.adminDashboard, icon: LayoutDashboard },
  { label: "Locations", to: ROUTES.adminLocations, icon: MapPinned },
  { label: "Bookings", to: ROUTES.adminBookings, icon: CalendarRange },
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
  const { user, logout } = useAuth();
  const { adminDrawerOpen, openAdminDrawer, closeAdminDrawer } = useUiStore();
  return (
    <div className="min-h-svh bg-slate-50 lg:grid lg:grid-cols-[260px_1fr]">
      <aside className="hidden border-r border-slate-200 bg-white p-4 lg:block">
        <div className="mb-6 flex items-center gap-2 font-semibold text-slate-950">
          <BookOpen className="h-5 w-5 text-teal-700" />
          Admin Console
        </div>
        <AdminNav />
      </aside>
      <Drawer
        open={adminDrawerOpen}
        title="Admin Console"
        onClose={closeAdminDrawer}
      >
        <AdminNav />
      </Drawer>
      <div>
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <Button
                type="button"
                variant="ghost"
                className="h-10 w-10 px-0 lg:hidden"
                onClick={openAdminDrawer}
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
              onClick={logout}
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
