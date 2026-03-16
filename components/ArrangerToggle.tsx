"use client";

import { Zap } from "lucide-react";
import { useArrangerMode } from "@/context/ArrangerModeContext";

export function ArrangerToggle() {
  const { arrangerMode, toggleArrangerMode } = useArrangerMode();

  return (
    <button
      type="button"
      onClick={toggleArrangerMode}
      className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
        arrangerMode
          ? "border-oxford bg-oxford text-white"
          : "border-charcoal/20 bg-white text-charcoal hover:border-oxford/50"
      }`}
      aria-pressed={arrangerMode}
    >
      <Zap className="h-4 w-4" />
      Arranger Mode {arrangerMode ? "On" : "Off"}
    </button>
  );
}
