import { InputField } from "@/components/forms/InputField";
import { TextareaField } from "@/components/forms/TextareaField";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { dummyLocations } from "@/dummy/location.dummy";
import { dummyLockers } from "@/dummy/locker.dummy";
import { useParams } from "react-router-dom";

export function AdminLocationDetailPage() {
  const { id = "" } = useParams();

  const location = dummyLocations.find((v) => v.id === id);
  const lockers = dummyLockers;

  return (
    <SectionContainer>
      <PageHeader
        title="Location detail"
        description="Read-only location and locker inventory."
      />
      {!location ? (
        <div className="mt-5">
          <EmptyState title="Location not found" />
        </div>
      ) : (
        <div className="mt-5 grid gap-5 lg:grid-cols-[380px_1fr]">
          <Card className="h-fit">
            <h2 className="font-semibold text-slate-950">Location data</h2>
            <div className="mt-4 space-y-4">
              <InputField
                name="name"
                label="Name"
                value={location.name}
                disabled
              />
              <InputField
                name="code"
                label="Code"
                value={location.code}
                disabled
              />
              <InputField
                name="status"
                label="Status"
                value={location.status}
                disabled
              />
              <TextareaField
                name="address"
                label="Address"
                value={location.address ?? ""}
                disabled
              />
              <TextareaField
                name="description"
                label="Description"
                value={location.description ?? ""}
                disabled
              />
            </div>
          </Card>

          <div>
            <div className="mb-3">
              <h2 className="font-semibold text-slate-950">Lockers</h2>
              <p className="mt-1 text-sm text-slate-500">
                {lockers.length} locker{lockers.length === 1 ? "" : "s"} in this
                location.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {lockers.length === 0 ? (
                <div className="sm:col-span-2 xl:col-span-4">
                  <EmptyState title="No lockers in this location" />
                </div>
              ) : null}
              {lockers.map((locker) => (
                <Card key={locker.id}>
                  <h3 className="font-semibold text-slate-950">
                    {locker.size}
                  </h3>
                  <Badge
                    className="mt-3"
                    tone={
                      locker.status === "AVAILABLE"
                        ? "success"
                        : locker.status === "MAINTENANCE"
                          ? "warning"
                          : "danger"
                    }
                  >
                    {locker.status}
                  </Badge>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </SectionContainer>
  );
}
