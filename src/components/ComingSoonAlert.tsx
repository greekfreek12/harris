"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

const ComingSoonContext = createContext<() => void>(() => {});

export function useComingSoon() {
  return useContext(ComingSoonContext);
}

export function ComingSoonProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);

  const trigger = useCallback(() => {
    setVisible(true);
    setTimeout(() => setVisible(false), 2500);
  }, []);

  return (
    <ComingSoonContext.Provider value={trigger}>
      {children}
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 pointer-events-none ${visible ? "opacity-100" : "opacity-0"}`}
      >
        <div className={`bg-[#1a1a1a] border border-[#c8964e]/30 rounded-2xl px-10 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-300 ${visible ? "scale-100" : "scale-90"}`}>
          <p className="font-display text-[24px] sm:text-[28px] text-white tracking-tight text-center">
            Coming Soon
          </p>
          <p className="mt-2 text-[14px] text-white/50 text-center">
            This feature is not available yet.
          </p>
        </div>
      </div>
    </ComingSoonContext.Provider>
  );
}
