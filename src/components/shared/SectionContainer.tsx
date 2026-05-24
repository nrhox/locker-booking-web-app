import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export function SectionContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </section>
  );
}
