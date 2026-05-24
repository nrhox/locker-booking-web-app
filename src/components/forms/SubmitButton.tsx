import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

export function SubmitButton({
  children,
  isLoading,
  disabled,
}: {
  children: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
}) {
  return (
    <Button
      type="submit"
      className="w-full sm:w-auto"
      isLoading={isLoading}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}
