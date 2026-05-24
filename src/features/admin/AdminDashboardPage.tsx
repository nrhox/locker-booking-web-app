import { SectionContainer } from "@/components/shared/SectionContainer";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card } from "@/components/ui/Card";
import { useBookingStore } from "@/stores/booking.store";
import { useLocationStore } from "@/stores/location.store";
import { useLockerStore } from "@/stores/locker.store";

export function AdminDashboardPage() {
  const locations = useLocationStore((state) => state.locations.length);
  const lockers = useLockerStore((state) => state.lockers.length);
  const bookings = useBookingStore((state) => state.bookings.length);
  return (
    <SectionContainer>
      <PageHeader
        title="Dashboard"
        description="Mock operational summary from Zustand stores."
      />
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          ["Locations", locations],
          ["Lockers", lockers],
          ["Bookings", bookings],
        ].map(([label, value]) => (
          <Card key={label}>
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-2 text-3xl font-semibold text-slate-950">
              {value}
            </p>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
