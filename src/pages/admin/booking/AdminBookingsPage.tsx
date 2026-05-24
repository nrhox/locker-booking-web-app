import { PageHeader } from "@/components/shared/PageHeader";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Table, type TableColumn } from "@/components/shared/Table";
import { Badge } from "@/components/ui/Badge";
import { Pagination } from "@/components/ui/Pagination";
import {
  dummyBookingHistoryResponse,
  dummyBookings,
} from "@/dummy/booking.dummy";
import type { Booking } from "@/types/booking";
import { formatDateTime } from "@/utils/date";

export function AdminBookingsPage() {
  const bookings = dummyBookings;

  const columns: TableColumn<Booking>[] = [
    {
      key: "user",
      header: "User",
      render: (booking) => booking.userId.slice(0, 8),
    },
    {
      key: "locker",
      header: "Locker",
      render: (booking) => booking.lockerId.slice(0, 8),
    },
    {
      key: "status",
      header: "Status",
      render: (booking) => <Badge>{booking.status}</Badge>,
    },
    {
      key: "time",
      header: "Time",
      render: (booking) =>
        `${formatDateTime(booking.startAt)} - ${formatDateTime(booking.endAt)}`,
    },
  ];
  return (
    <SectionContainer>
      <PageHeader
        title="Bookings"
        description="Admin view of all dummy bookings."
      />
      <div className="mt-5 space-y-4">
        <Table
          items={bookings}
          columns={columns}
          getRowKey={(booking) => booking.id}
          emptyTitle="No bookings"
        />
        <Pagination
          meta={{ ...dummyBookingHistoryResponse.meta, total: bookings.length }}
          onPageChange={() => undefined}
        />
      </div>
    </SectionContainer>
  );
}
