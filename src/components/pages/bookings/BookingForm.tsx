import { InputField } from "@/components/forms/InputField";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { Alert } from "@/components/ui/Alert";
import type { BookingFormValues, CreateBookingRequest } from "@/types/booking";
import { toUtcISOStringFromLocal } from "@/utils/date";
import { useFormik } from "formik";
import * as Yup from "yup";

const schema: Yup.ObjectSchema<BookingFormValues> = Yup.object({
  lockerId: Yup.string().required("Choose a locker first"),
  startAt: Yup.string().required("Start time is required"),
  endAt: Yup.string().required("End time is required"),
});

export function BookingForm({
  selectedLockerId,
  onSubmit,
}: {
  selectedLockerId: string | null;
  onSubmit: (request: CreateBookingRequest) => void;
}) {
  const formik = useFormik<BookingFormValues>({
    enableReinitialize: true,
    initialValues: { lockerId: selectedLockerId ?? "", startAt: "", endAt: "" },
    validationSchema: schema,
    onSubmit: (values) =>
      onSubmit({
        lockerId: values.lockerId,
        startAt: toUtcISOStringFromLocal(values.startAt),
        endAt: toUtcISOStringFromLocal(values.endAt),
      }),
  });

  return (
    <form className="space-y-4" onSubmit={formik.handleSubmit}>
      {!selectedLockerId ? (
        <Alert>Select an available locker to continue.</Alert>
      ) : null}
      <InputField
        name="startAt"
        label="Start time"
        type="datetime-local"
        value={formik.values.startAt}
        touched={formik.touched.startAt}
        error={formik.errors.startAt}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        disabled={!selectedLockerId}
      />
      <InputField
        name="endAt"
        label="End time"
        type="datetime-local"
        value={formik.values.endAt}
        touched={formik.touched.endAt}
        error={formik.errors.endAt}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        disabled={!selectedLockerId}
      />
      <SubmitButton
        disabled={!selectedLockerId}
        isLoading={formik.isSubmitting}
      >
        Confirm booking
      </SubmitButton>
    </form>
  );
}
