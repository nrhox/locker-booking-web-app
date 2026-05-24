import { X } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "./Button";

export function Drawer({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/40 lg:hidden">
      <aside className="h-full w-72 bg-white p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-semibold text-slate-950">{title}</h2>
          <Button
            type="button"
            variant="ghost"
            className="h-9 w-9 px-0"
            onClick={onClose}
            aria-label="Close drawer"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        {children}
      </aside>
    </div>
  );
}
