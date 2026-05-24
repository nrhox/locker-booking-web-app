import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { X } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "./Button";

export function Modal({
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
    <Dialog
      open={open}
      as="div"
      className="relative z-20 focus:outline-none"
      onClose={onClose}
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end p-3 sm:items-center sm:justify-center">
          <DialogPanel
            transition
            className="w-full rounded-lg bg-white p-4 duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 sm:max-w-lg"
          >
            <div className="mb-4 flex items-center justify-between">
              <DialogTitle
                as="h3"
                className="text-lg font-semibold text-slate-950"
              >
                {title}
              </DialogTitle>
              <Button
                type="button"
                variant="ghost"
                className="h-9 w-9 px-0"
                onClick={onClose}
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
