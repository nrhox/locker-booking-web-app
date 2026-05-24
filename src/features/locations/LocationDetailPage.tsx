import { useNavigate, useParams } from "react-router-dom";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card } from "@/components/ui/Card";
import { BookingForm } from "@/features/bookings/BookingForm";
import { LockerVisualizationGrid } from "@/features/lockers/LockerVisualizationGrid";
import { ROUTES } from "@/constants/routes";
import { useAuth } from "@/hooks/useAuth";
import { useBookingStore } from "@/stores/booking.store";
import { useLocationStore } from "@/stores/location.store";
import { useLockerStore } from "@/stores/locker.store";
import type { CreateBookingRequest } from "@/types/booking";

export function LocationDetailPage() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const user = useAuth().user;
  const location = useLocationStore((state) => state.getById(id));
  const { visualization, selectedLockerId, selectLocker, markMyBooking } =
    useLockerStore();
  const createBooking = useBookingStore((state) => state.createBooking);

  const submitBooking = (request: CreateBookingRequest) => {
    const booking = createBooking(request, user?.id ?? "anonymous", id);
    markMyBooking(request.lockerId, booking.id);
    navigate(ROUTES.bookings);
  };

  return (
    <SectionContainer>
      <PageHeader
        title={location?.name ?? "Location"}
        description="Pick a locker, choose a time, and confirm your booking."
      />
      <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_360px]">
        <LockerVisualizationGrid
          lockers={visualization.lockers}
          selectedLockerId={selectedLockerId}
          onSelect={selectLocker}
        />
        <Card className="h-fit">
          <h2 className="text-lg font-semibold text-slate-950">
            Booking details
          </h2>
          <p className="mt-1 mb-4 text-sm text-slate-500">
            Dummy booking data follows the OpenAPI response schema.
          </p>
          <BookingForm
            selectedLockerId={selectedLockerId}
            onSubmit={submitBooking}
          />
        </Card>
      </div>
    </SectionContainer>
  );
}
