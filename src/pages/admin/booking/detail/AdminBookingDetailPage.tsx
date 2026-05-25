import { PageHeader } from "@/components/shared/PageHeader";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { dummyUser } from "@/dummy/auth.dummy";
import { dummyBookings } from "@/dummy/booking.dummy";
import { formatDateTime } from "@/utils/date";
import { useParams } from "react-router-dom";

export function AdminBookingDetailPage() {
  const { id = "" } = useParams();
  const booking = dummyBookings.find((d) => d.id === id);
  const lockerOpen = false;
  const user = dummyUser;

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
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <UserAvatar user={user} className="h-20 w-20 text-2xl" />
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-xl font-semibold text-slate-950">
                      {user?.displayName ?? "User"}
                    </h2>
                    {user?.role ? (
                      <Badge tone={user.role === "ADMIN" ? "info" : "success"}>
                        {user.role}
                      </Badge>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm text-slate-500">
                    {user?.email ?? "No email available"}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </SectionContainer>
  );
}
