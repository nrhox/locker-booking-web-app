import { LockKeyhole } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { ROUTES } from "@/constants/routes";

export function PublicLayout() {
  return (
    <div className="min-h-svh bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <SectionContainer className="flex items-center justify-between py-3">
          <Link
            to={ROUTES.locations}
            className="flex items-center gap-2 font-semibold text-slate-950"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-teal-700 text-white">
              <LockKeyhole className="h-5 w-5" />
            </span>
            Locker Booking
          </Link>
        </SectionContainer>
      </header>
      <Outlet />
    </div>
  );
}
