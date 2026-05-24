import { useState } from "react";
import { useParams } from "react-router-dom";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { PageHeader } from "@/components/shared/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Modal } from "@/components/ui/Modal";
import { useBookingStore } from "@/stores/booking.store";
import { formatDateTime } from "@/utils/date";

export function BookingDetailPage() {
  const { id = "" } = useParams();
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const { cancelBooking, getById, isLockerOpen, toggleLockerAccess } =
    useBookingStore();
  const booking = getById(id);
  const lockerOpen = booking ? isLockerOpen(booking.id) : false;
  const canUseActions = booking?.status === "ACTIVE";

  const confirmCancel = () => {
    if (!booking) return;
    cancelBooking(booking.id);
    setCancelModalOpen(false);
  };

  return (
    <SectionContainer>
      <PageHeader
        title="Booking detail"
        description="Typed booking view based on the OpenAPI booking schema."
      />
      <div className="mt-5">
        {!booking ? (
          <EmptyState title="Booking not found" />
        ) : (
          <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
            <Card>
              <dl className="grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-sm text-slate-500">Status</dt>
                  <dd className="mt-1">
                    <Badge
                      tone={booking.status === "ACTIVE" ? "success" : "neutral"}
                    >
                      {booking.status}
                    </Badge>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">Locker state</dt>
                  <dd className="mt-1">
                    <Badge tone={lockerOpen ? "info" : "neutral"}>
                      {lockerOpen ? "OPEN" : "CLOSED"}
                    </Badge>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">Locker</dt>
                  <dd className="mt-1 font-medium text-slate-950">
                    {booking.lockerId}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">Location</dt>
                  <dd className="mt-1 font-medium text-slate-950">
                    {booking.locationId}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">Start</dt>
                  <dd className="mt-1 font-medium text-slate-950">
                    {formatDateTime(booking.startAt)}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">End</dt>
                  <dd className="mt-1 font-medium text-slate-950">
                    {formatDateTime(booking.endAt)}
                  </dd>
                </div>
              </dl>
            </Card>

            <Card className="h-fit">
              <h2 className="font-semibold text-slate-950">Locker actions</h2>
              <p className="mt-1 text-sm text-slate-500">
                {canUseActions
                  ? "Use the locker while this booking is active."
                  : "Actions are disabled for inactive bookings."}
              </p>
              <div className="mt-4 grid gap-2">
                <Button
                  type="button"
                  variant="secondary"
                  disabled={!canUseActions}
                  onClick={() => toggleLockerAccess(booking.id)}
                >
                  {lockerOpen ? "Close locker" : "Open locker"}
                </Button>
                <Button
                  type="button"
                  variant="danger"
                  disabled={!canUseActions}
                  onClick={() => setCancelModalOpen(true)}
                >
                  Cancel booking
                </Button>
              </div>
            </Card>

            <Modal
              open={cancelModalOpen}
              title="Cancel booking?"
              onClose={() => setCancelModalOpen(false)}
            >
              <p className="text-sm text-slate-600">
                Are you sure you want to cancel this booking? This action will
                release the locker for other users.
              </p>
              <div className="mt-5 grid gap-2 sm:flex sm:justify-end">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setCancelModalOpen(false)}
                >
                  Keep booking
                </Button>
                <Button type="button" variant="danger" onClick={confirmCancel}>
                  Yes, cancel booking
                </Button>
              </div>
            </Modal>
          </div>
        )}
      </div>
    </SectionContainer>
  );
}
