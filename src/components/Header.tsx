"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  logoVariant?: "home" | "form";
}

export default function Header({ logoVariant = "home" }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 animate-slide-down animation-delay-100">
      <div className="max-w-[1500px] h-16 sm:h-[78px] px-4 sm:px-8 mx-auto">
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-full gap-3 sm:gap-6">
          {/* Left: Logo */}
          <div className="shrink-0">
            <Link href="/" className="inline-flex items-center">
              {logoVariant === "home" ? (
                <Image
                  src="/image/logo-no-bg.png"
                  alt="zetstuclothing"
                  width={330}
                  height={70}
                  priority
                  className="h-7 sm:h-8 w-auto"
                />
              ) : (
                <Image
                  src="/image/logo-no-bg-2.png"
                  alt="zetstuclothing"
                  width={180}
                  height={56}
                  priority
                  className="h-7 sm:h-8 w-auto"
                />
              )}
            </Link>
          </div>

          {/* Center: Navigation - Hidden on mobile */}
          <div className="hidden md:flex justify-center gap-3 lg:gap-4 text-white/90">
            <a
              href="#home"
              className="text-[10px] lg:text-[10px] font-semibold tracking-[0.09em] hover:text-white transition-colors"
            >
              {t("home")}
            </a>
            <span className="text-white/70">/</span>
            <a
              href="#products"
              className="text-[10px] lg:text-[10px] font-semibold tracking-[0.09em] hover:text-white transition-colors"
            >
              {t("products")}
            </a>
            <span className="text-white/70">/</span>
            <a
              href="#about"
              className="text-[10px] lg:text-[10px] font-semibold tracking-[0.09em] hover:text-white transition-colors"
            >
              {t("about")}
            </a>
          </div>

          {/* Right: Tagline + Controls */}
          <div className="flex items-center justify-end gap-3 sm:gap-4">
            {/* Tagline - Hidden on mobile */}
            <div className="hidden lg:block text-[10px] text-white/80 text-right whitespace-nowrap font-semibold tracking-[0.16em]">
              <p>&quot;THE PURITY OF CHAOS&quot; // 2026.SS</p>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-black/20"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-white/20 mt-2 bg-black/25 backdrop-blur-sm rounded-lg px-2 pt-2">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-black/25"
            >
              {t("home")}
            </a>
            <a
              href="#products"
              className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-black/25"
            >
              {t("products")}
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-black/25"
            >
              {t("about")}
            </a>
            <button
              onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
              className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-black/25"
            >
              {language === "vi" ? "EN" : "VI"}
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
