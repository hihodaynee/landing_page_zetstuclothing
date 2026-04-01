"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

interface HeaderProps {
  logoVariant?: "home" | "form";
}

export default function Header({ logoVariant = "home" }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("home"), href: "/" },
    { name: t("products"), href: "#products" },
    { name: t("about"), href: "#about" },
  ];

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-60 transition-all duration-300 ${isScrolled ? "bg-white border-b border-black/10 shadow-sm h-7 sm:h-8" : "bg-black/95 backdrop-blur-md border-b border-white/5 h-8 sm:h-9"}`}
      >
        <div className="w-full h-full px-4 sm:px-8 flex justify-between items-center transition-colors duration-300">
          {/* Left: Socials */}
          <div
            className={`flex items-center gap-4 ${isScrolled ? "text-black/60" : "text-white/60"}`}
          >
            <a
              href="https://instagram.com/zetstuclothing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-current transition-colors"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a
              href="https://tiktok.com/zetstuclothing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-current transition-colors"
            >
              <FaTiktok className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://facebook.com/zetstuclothing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-current transition-colors"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Language Switcher */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage("vi")}
              className={`text-[9px] font-bold tracking-widest transition-colors ${language === "vi" ? (isScrolled ? "text-black" : "text-white") : isScrolled ? "text-black/40 hover:text-black/70" : "text-white/40 hover:text-white/70"}`}
            >
              VN
            </button>
            <span
              className={`text-[9px] ${isScrolled ? "text-black/20" : "text-white/20"}`}
            >
              |
            </span>
            <button
              onClick={() => setLanguage("en")}
              className={`text-[9px] font-bold tracking-widest transition-colors ${language === "en" ? (isScrolled ? "text-black" : "text-white") : isScrolled ? "text-black/40 hover:text-black/70" : "text-white/40 hover:text-white/70"}`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      <header
        className={`fixed ${isScrolled ? "top-7 sm:top-8 shadow-md" : "top-8 sm:top-9"} left-0 right-0 z-50 transition-all duration-300`}
      >
        <div
          className={`w-full h-14 sm:h-17.5 px-4 sm:px-8 mx-auto transition-all duration-300 ${isScrolled ? "bg-white border-b border-black/5" : "bg-transparent"}`}
        >
          <div className="flex justify-between items-center h-full gap-4">
            {/* Left: Logo */}
            <div className="shrink-0">
              <Link href="/" className="inline-flex items-center">
                {isScrolled ? (
                  <Image
                    src="/image/logo-no-bg-4.png"
                    alt="zetstuclothing"
                    width={180}
                    height={56}
                    priority
                    className="h-7 sm:h-8 w-auto invert"
                  />
                ) : logoVariant === "home" ? (
                  <Image
                    src="/image/logo-no-bg.png"
                    alt="zetstuclothing"
                    width={330}
                    height={70}
                    priority
                    className="h-5 sm:h-4 w-auto"
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
            <div
              className={`hidden md:flex flex-1 justify-center items-center gap-3 lg:gap-6 ${isScrolled ? "text-black/90" : "text-white/90"}`}
            >
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href.startsWith("#") &&
                    typeof window !== "undefined" &&
                    window.location.hash === link.href);
                return (
                  <div
                    key={link.href}
                    className="flex items-center gap-3 lg:gap-6"
                  >
                    <Link
                      href={link.href}
                      className={`relative text-[10px] lg:text-[11px] font-bold tracking-[0.12em] uppercase transition-all duration-300 py-1
                        ${
                          isActive
                            ? isScrolled
                              ? "text-black border-b-2 border-black"
                              : "text-white border-b-2 border-white"
                            : "hover:opacity-70"
                        }`}
                    >
                      {link.name}
                    </Link>
                    {link.href !== "#about" && (
                      <span
                        className={
                          isScrolled ? "text-black/20" : "text-white/40"
                        }
                      >
                        /
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right: Tagline + Controls */}
            <div className="flex items-center justify-end gap-3 sm:gap-4">
              {/* Tagline - Hidden on mobile */}
              <div
                className={`hidden lg:block text-[10px] text-right whitespace-nowrap font-bold tracking-[0.16em] ${isScrolled ? "text-black/60" : "text-white/80"}`}
              >
                <p>&quot;THE PURITY OF CHAOS&quot; // 2026.SS</p>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden inline-flex items-center justify-center p-2 rounded-md transition-colors ${isScrolled ? "text-black hover:bg-black/5" : "text-white hover:bg-white/10"}`}
              >
                {isOpen ? (
                  <HiX className="h-6 w-6" />
                ) : (
                  <HiMenuAlt3 className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div
            className={`md:hidden backdrop-blur-lg border-t shadow-2xl ${isScrolled ? "bg-white/95 border-black/5" : "bg-black/95 border-white/5"}`}
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block text-xs font-bold tracking-widest uppercase ${isScrolled ? "text-black/90 hover:text-black" : "text-white/90 hover:text-white"}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
