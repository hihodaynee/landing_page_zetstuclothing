"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { vi } from "@/i18n/vi";
import { en } from "@/i18n/en";

type Language = "vi" | "en";

const dictionaries = { vi, en };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <T = string>(path: string) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("vi");
  const [mounted, setMounted] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "vi" || savedLang === "en")) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  const t = <T = string,>(path: string): T => {
    // If not mounted yet, always return VI to avoid hydration mismatch
    // (Or use a constant language for the first render)
    const currentLang = mounted ? language : "vi";
    const keys = path.split(".");
    let result: any = dictionaries[currentLang];

    for (const key of keys) {
      if (result && key in result) {
        result = result[key];
      } else {
        return path as unknown as T;
      }
    }

    return result as T;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
