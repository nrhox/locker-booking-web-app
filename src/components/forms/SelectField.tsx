import type {
  ChangeEventHandler,
  FocusEventHandler,
  SelectHTMLAttributes,
} from "react";
import type { SelectOption } from "@/types/common";
import { cn } from "@/utils/cn";
import { FormError } from "./FormError";

type SelectFieldProps<TValue extends string> = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "name"
> & {
  name: string;
  label: string;
  options: SelectOption<TValue>[];
  error?: string;
  touched?: boolean;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  onBlur: FocusEventHandler<HTMLSelectElement>;
};

export function SelectField<TValue extends string>({
  label,
  options,
  error,
  touched,
  className,
  ...props
}: SelectFieldProps<TValue>) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </span>
      <select
        className={cn(
          "h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm transition outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10",
          className,
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <FormError touched={touched} error={error} />
    </label>
  );
}
