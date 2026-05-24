import { cn } from "@/utils/cn";
import type {
  ChangeEventHandler,
  FocusEventHandler,
  InputHTMLAttributes,
} from "react";
import { FormError } from "./FormError";

type InputFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "name"> & {
  name: string;
  label: string;
  error?: string;
  touched?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
};

export function InputField({
  label,
  error,
  touched,
  className,
  ...props
}: InputFieldProps) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </span>
      <input
        className={cn(
          "h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm transition outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 disabled:bg-slate-50",
          touched && error ? "border-rose-400" : "",
          className,
        )}
        {...props}
      />
      <FormError touched={touched} error={error} />
    </label>
  );
}
