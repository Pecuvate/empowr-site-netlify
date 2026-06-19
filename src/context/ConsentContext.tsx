"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { ConsentLevel, getStoredConsent, storeConsent, clearStoredConsent } from "@/lib/consent";

type ConsentContextValue = {
  consent: ConsentLevel | null;
  bannerVisible: boolean;
  accept: (level: ConsentLevel) => void;
  openPreferences: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentLevel | null>(null);
  const [bannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      setConsent(stored);
    } else {
      setBannerVisible(true);
    }
  }, []);

  const accept = (level: ConsentLevel) => {
    storeConsent(level);
    setConsent(level);
    setBannerVisible(false);
  };

  const openPreferences = () => {
    clearStoredConsent();
    setConsent(null);
    setBannerVisible(true);
  };

  return (
    <ConsentContext.Provider value={{ consent, bannerVisible, accept, openPreferences }}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within ConsentProvider");
  return ctx;
}
