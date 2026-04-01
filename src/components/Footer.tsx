"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 animate-slide-down animation-delay-400">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 py-3 sm:py-4">
        <div className="flex justify-between items-center text-white">
          {/* Left: Language and location */}
          <div className="flex items-center gap-2 text-[10px] sm:text-[10px] tracking-[0.06em] font-semibold">
            <svg
              className="w-4 h-4 sm:w-[14px] sm:h-[14px] text-white/85"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h3a2 2 0 002-2v-1a2 2 0 012-2h2.049M19 13M9 19h6"
              />
            </svg>
            <span>
              {language === "vi"
                ? "Tiếng Việt - Việt Nam"
                : "English - Vietnam"}
            </span>
          </div>

          <div className="text-right text-[10px] sm:text-[10px] font-semibold tracking-[0.08em]">
            <p>{t("collection")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
