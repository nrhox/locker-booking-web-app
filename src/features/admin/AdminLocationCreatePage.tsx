import { useMemo, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { InputField } from "@/components/forms/InputField";
import { SelectField } from "@/components/forms/SelectField";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { TextareaField } from "@/components/forms/TextareaField";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import {
  LOCATION_STATUS_OPTIONS,
  LOCKER_STATUS_OPTIONS,
} from "@/constants/status";
import { ROUTES } from "@/constants/routes";
import { useLocationStore } from "@/stores/location.store";
import { useLockerStore } from "@/stores/locker.store";
import type { LockerStatus } from "@/types/common";
import type { LocationFormValues } from "@/types/location";

type LockerDraft = {
  id: string;
  code: string;
  label: string;
  status: LockerStatus;
};

type LockerDraftFormValues = {
  code: string;
  label: string;
  status: LockerStatus;
};

const locationSchema: Yup.ObjectSchema<LocationFormValues> = Yup.object({
  name: Yup.string().required("Name is required"),
  code: Yup.string().required("Code is required"),
  description: Yup.string().required("Description is required"),
  address: Yup.string().required("Address is required"),
  status: Yup.mixed<"ACTIVE" | "INACTIVE">()
    .oneOf(["ACTIVE", "INACTIVE"])
    .required(),
});

const lockerSchema: Yup.ObjectSchema<LockerDraftFormValues> = Yup.object({
  code: Yup.string().required("Locker code is required"),
  label: Yup.string().required("Locker label is required"),
  status: Yup.mixed<LockerStatus>()
    .oneOf(["AVAILABLE", "MAINTENANCE", "DISABLED"])
    .required(),
});

export function AdminLocationCreatePage() {
  const navigate = useNavigate();
  const addLocation = useLocationStore((state) => state.addLocation);
  const addLockers = useLockerStore((state) => state.addLockers);
  const [lockerDrafts, setLockerDrafts] = useState<LockerDraft[]>([]);

  const locationFormik = useFormik<LocationFormValues>({
    initialValues: {
      name: "",
      code: "",
      description: "",
      address: "",
      status: "ACTIVE",
    },
    validationSchema: locationSchema,
    onSubmit: (values) => {
      const location = addLocation(values);
      addLockers(
        lockerDrafts.map((locker) => ({
          locationId: location.id,
          code: locker.code,
          label: locker.label,
          status: locker.status,
        })),
      );
      navigate(ROUTES.adminLocations);
    },
  });

  const lockerFormik = useFormik<LockerDraftFormValues>({
    initialValues: { code: "", label: "", status: "AVAILABLE" },
    validationSchema: lockerSchema,
    onSubmit: (values, helpers) => {
      setLockerDrafts((current) => [
        ...current,
        { id: crypto.randomUUID(), ...values },
      ]);
      helpers.resetForm();
    },
  });

  const lockerCountLabel = useMemo(
    () =>
      `${lockerDrafts.length} temporary locker${lockerDrafts.length === 1 ? "" : "s"}`,
    [lockerDrafts.length],
  );

  return (
    <SectionContainer>
      <PageHeader
        title="Add location"
        description="Create a location and prepare its initial locker inventory."
      />
      <div className="mt-5 grid gap-5 lg:grid-cols-[380px_1fr]">
        <Card className="h-fit">
          <h2 className="font-semibold text-slate-950">Location data</h2>
          <form
            className="mt-4 space-y-4"
            onSubmit={locationFormik.handleSubmit}
          >
            <InputField
              name="name"
              label="Name"
              value={locationFormik.values.name}
              touched={locationFormik.touched.name}
              error={locationFormik.errors.name}
              onChange={locationFormik.handleChange}
              onBlur={locationFormik.handleBlur}
            />
            <InputField
              name="code"
              label="Code"
              value={locationFormik.values.code}
              touched={locationFormik.touched.code}
              error={locationFormik.errors.code}
              onChange={locationFormik.handleChange}
              onBlur={locationFormik.handleBlur}
            />
            <SelectField
              name="status"
              label="Status"
              value={locationFormik.values.status}
              options={LOCATION_STATUS_OPTIONS}
              touched={locationFormik.touched.status}
              error={locationFormik.errors.status}
              onChange={locationFormik.handleChange}
              onBlur={locationFormik.handleBlur}
            />
            <TextareaField
              name="address"
              label="Address"
              value={locationFormik.values.address}
              touched={locationFormik.touched.address}
              error={locationFormik.errors.address}
              onChange={locationFormik.handleChange}
              onBlur={locationFormik.handleBlur}
            />
            <TextareaField
              name="description"
              label="Description"
              value={locationFormik.values.description}
              touched={locationFormik.touched.description}
              error={locationFormik.errors.description}
              onChange={locationFormik.handleChange}
              onBlur={locationFormik.handleBlur}
            />
            <SubmitButton isLoading={locationFormik.isSubmitting}>
              Create location
            </SubmitButton>
          </form>
        </Card>

        <div className="space-y-5">
          <Card>
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="font-semibold text-slate-950">Add locker</h2>
                <p className="mt-1 text-sm text-slate-500">
                  {lockerCountLabel}
                </p>
              </div>
            </div>
            <form
              className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_180px_auto]"
              onSubmit={lockerFormik.handleSubmit}
            >
              <InputField
                name="code"
                label="Code"
                value={lockerFormik.values.code}
                touched={lockerFormik.touched.code}
                error={lockerFormik.errors.code}
                onChange={lockerFormik.handleChange}
                onBlur={lockerFormik.handleBlur}
              />
              <InputField
                name="label"
                label="Label"
                value={lockerFormik.values.label}
                touched={lockerFormik.touched.label}
                error={lockerFormik.errors.label}
                onChange={lockerFormik.handleChange}
                onBlur={lockerFormik.handleBlur}
              />
              <SelectField
                name="status"
                label="Status"
                value={lockerFormik.values.status}
                options={LOCKER_STATUS_OPTIONS}
                touched={lockerFormik.touched.status}
                error={lockerFormik.errors.status}
                onChange={lockerFormik.handleChange}
                onBlur={lockerFormik.handleBlur}
              />
              <div className="flex items-end">
                <Button
                  type="submit"
                  className="w-full"
                  icon={<Plus className="h-4 w-4" />}
                >
                  Add
                </Button>
              </div>
            </form>
          </Card>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {lockerDrafts.length === 0 ? (
              <div className="sm:col-span-2 xl:col-span-4">
                <EmptyState
                  title="No temporary lockers"
                  description="Add lockers here before creating the location."
                />
              </div>
            ) : null}
            {lockerDrafts.map((locker) => (
              <Card key={locker.id}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-slate-950">
                      {locker.code}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {locker.label}
                    </p>
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
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-9 w-9 px-0 text-rose-700 hover:bg-rose-50"
                    onClick={() =>
                      setLockerDrafts((current) =>
                        current.filter((item) => item.id !== locker.id),
                      )
                    }
                    aria-label={`Remove locker ${locker.code}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
