"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "vi" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  vi: {
    home: "TRANG CHỦ",
    products: "SẢN PHẨM",
    about: "VỀ CHÚNG TÔI",
    registerNow: "ĐĂNG KÝ SỚM NHẬN",
    discount: "OFF",
    button: "Tại Đây",
    tagline: "“Simply Street. Purely You.”",
    collection: "S01 // COLLECTION IS COMING",
    collectionTitle: '"THE PURITY OF CHAOS" // 2026.SS',
  },
  en: {
    home: "HOME",
    products: "PRODUCTS",
    about: "ABOUT US",
    registerNow: "SIGN UP EARLY",
    discount: "OFF",
    button: "Right Here",
    tagline: "“Simply Street. Purely You.”",
    collection: "S01 // COLLECTION IS COMING",
    collectionTitle: '"THE PURITY OF CHAOS" // 2026.SS',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("vi");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["vi"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
