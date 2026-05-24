import { SelectField } from "@/components/forms/SelectField";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Card } from "@/components/ui/Card";
import { ROUTES } from "@/constants/routes";
import { USER_ROLE_OPTIONS } from "@/constants/status";
import type { UserRole } from "@/types/common";
import { useFormik } from "formik";
import { LockKeyhole } from "lucide-react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

type LoginValues = { role: UserRole };

export function LoginPage() {
  const navigate = useNavigate();
  const formik = useFormik<LoginValues>({
    initialValues: { role: "USER" },
    validationSchema: Yup.object({
      role: Yup.mixed<UserRole>().oneOf(["USER", "ADMIN"]).required(),
    }),
    onSubmit: (values) => {
      navigate(
        values.role === "ADMIN" ? ROUTES.adminDashboard : ROUTES.locations,
      );
    },
  });

  return (
    <SectionContainer className="grid min-h-[calc(100svh-66px)] place-items-center">
      <Card className="w-full max-w-md p-6">
        <div className="mb-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-700 text-white">
            <LockKeyhole className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-semibold text-slate-950">
            Mock OAuth login
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Temporary dummy auth state until OAuth backend is available.
          </p>
        </div>
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <SelectField
            name="role"
            label="Login as"
            value={formik.values.role}
            options={USER_ROLE_OPTIONS}
            touched={formik.touched.role}
            error={formik.errors.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <SubmitButton isLoading={formik.isSubmitting}>Continue</SubmitButton>
        </form>
      </Card>
    </SectionContainer>
  );
}
