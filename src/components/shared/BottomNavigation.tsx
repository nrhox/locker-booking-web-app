import { CalendarCheck, History, MapPin, UserCircle } from "lucide-react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/utils/cn";

const items = [
  { label: "Locations", to: ROUTES.locations, icon: MapPin },
  { label: "Bookings", to: ROUTES.bookings, icon: CalendarCheck },
  { label: "History", to: ROUTES.bookingHistory, icon: History },
  { label: "Profile", to: ROUTES.profile, icon: UserCircle },
];

export function BottomNavigation() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white sm:hidden">
      <div className="grid grid-cols-4">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center gap-1 px-2 py-2 text-xs font-medium",
                isActive ? "text-teal-700" : "text-slate-500",
              )
            }
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
