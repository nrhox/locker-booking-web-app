import type { ChangeEventHandler, FocusEventHandler, TextareaHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';
import { FormError } from './FormError';

type TextareaFieldProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'> & {
  name: string;
  label: string;
  error?: string;
  touched?: boolean;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  onBlur: FocusEventHandler<HTMLTextAreaElement>;
};

export function TextareaField({ label, error, touched, className, ...props }: TextareaFieldProps) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">{label}</span>
      <textarea
        className={cn('min-h-24 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10', className)}
        {...props}
      />
      <FormError touched={touched} error={error} />
    </label>
  );
}

