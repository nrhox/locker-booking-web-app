import { CalendarCheck, History, MapPin } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { BottomNavigation } from "@/components/shared/BottomNavigation";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { ROUTES } from "@/constants/routes";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/utils/cn";

const items = [
  { label: "Locations", to: ROUTES.locations, icon: MapPin },
  { label: "Bookings", to: ROUTES.bookings, icon: CalendarCheck },
  { label: "History", to: ROUTES.bookingHistory, icon: History },
];

export function UserLayout() {
  const { user } = useAuth();
  return (
    <div className="min-h-svh bg-slate-50 pb-16 sm:pb-0">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <SectionContainer className="flex items-center justify-between py-3">
          <div>
            <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">
              Locker Booking
            </p>
            <p className="text-sm font-semibold text-slate-950">
              {user?.displayName}
            </p>
          </div>
          <nav className="hidden gap-1 sm:flex">
            {items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "inline-flex h-10 items-center gap-2 rounded-md px-3 text-sm font-medium",
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
          <Link
            className="hidden rounded-full ring-teal-700/20 outline-none focus:ring-4 sm:inline-flex"
            to={ROUTES.profile}
            aria-label="Open profile"
          >
            <UserAvatar user={user} />
          </Link>
        </SectionContainer>
      </header>
      <Outlet />
      <BottomNavigation />
    </div>
  );
}
