import { PageHeader } from "@/components/shared/PageHeader";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Card } from "@/components/ui/Card";
import { dummyBookings } from "@/dummy/booking.dummy";
import { dummyLocations } from "@/dummy/location.dummy";
import { dummyLockers } from "@/dummy/locker.dummy";

export function AdminDashboardPage() {
  const locations = dummyLocations.length;
  const lockers = dummyLockers.length;
  const bookings = dummyBookings.length;
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
