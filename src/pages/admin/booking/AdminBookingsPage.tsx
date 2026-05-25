import { PageHeader } from "@/components/shared/PageHeader";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Table, type TableColumn } from "@/components/shared/Table";
import { Badge } from "@/components/ui/Badge";
import { Pagination } from "@/components/ui/Pagination";
import { ROUTES } from "@/constants/routes";
import {
  dummyBookingHistoryResponse,
  dummyBookings,
} from "@/dummy/booking.dummy";
import type { Booking } from "@/types/booking";
import { formatDateTime } from "@/utils/date";
import { Eye } from "lucide-react";
import { Link } from "react-router";

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
    {
      key: "detail",
      header: "",
      render: (booking) => (
        <div className="flex items-center gap-2">
          <Link
            className="inline-flex h-9 items-center gap-2 rounded-md px-3 text-sm font-medium text-teal-700 hover:bg-teal-50"
            to={ROUTES.adminBookingDetail(booking.id)}
          >
            <Eye className="size-4" />
            Detail
          </Link>
        </div>
      ),
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
