import { PageHeader } from "@/components/shared/PageHeader";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { dummyBookings } from "@/dummy/booking.dummy";
import { formatDateTime } from "@/utils/date";
import { Link } from "react-router-dom";

export function BookingPage() {
  return (
    <SectionContainer>
      <PageHeader
        title="Active bookings"
        description="Open and close commands are mocked until hardware/backend is available."
      />
      <div className="mt-5 space-y-3">
        {[].length === 0 ? (
          <EmptyState
            title="No active bookings"
            description="Book a locker from the locations page."
          />
        ) : null}
        {dummyBookings.map((booking) => (
          <Link
            key={booking.id}
            to={`/bookings/${booking.id}`}
            className="block rounded-lg ring-teal-700/20 outline-none focus:ring-4"
          >
            <Card className="transition hover:border-teal-300">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-semibold text-slate-950">
                      Locker {booking.lockerId.slice(0, 8)}
                    </h2>
                    <Badge tone="success">{booking.status}</Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">
                    {formatDateTime(booking.startAt)} -{" "}
                    {formatDateTime(booking.endAt)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-teal-700">
                    View booking
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
}
