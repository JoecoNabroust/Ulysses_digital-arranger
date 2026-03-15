"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

interface ArrangerModeContextValue {
  arrangerMode: boolean;
  toggleArrangerMode: () => void;
}

const ArrangerModeContext = createContext<ArrangerModeContextValue | null>(null);

export function ArrangerModeProvider({ children }: { children: ReactNode }) {
  const [arrangerMode, setArrangerMode] = useState(false);

  const value = useMemo(
    () => ({
      arrangerMode,
      toggleArrangerMode: () => setArrangerMode((current) => !current)
    }),
    [arrangerMode]
  );

  return <ArrangerModeContext.Provider value={value}>{children}</ArrangerModeContext.Provider>;
}

export function useArrangerMode() {
  const context = useContext(ArrangerModeContext);

  if (!context) {
    throw new Error("useArrangerMode must be used within ArrangerModeProvider");
  }

  return context;
}
