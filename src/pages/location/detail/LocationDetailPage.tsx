import { PageHeader } from "@/components/shared/PageHeader";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Card } from "@/components/ui/Card";
import { ROUTES } from "@/constants/routes";
import { dummyLocations } from "@/dummy/location.dummy";
import { dummyLockerVisualizationResponse } from "@/dummy/locker.dummy";
import { BookingForm } from "@/components/pages/bookings/BookingForm";
import { LockerVisualizationGrid } from "@/components/pages/lockers/LockerGrid";
import type { CreateBookingRequest } from "@/types/booking";
import { useNavigate, useParams } from "react-router-dom";

export function LocationDetailPage() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const location = dummyLocations.find((v) => v.id === id);
  const visualization = dummyLockerVisualizationResponse.data;
  const selectedLockerId = dummyLockerVisualizationResponse.data.locationId;

  const submitBooking = (request: CreateBookingRequest) => {
    navigate(ROUTES.bookings);
    console.log(request);
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
          onSelect={(x) => console.log(x)}
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
