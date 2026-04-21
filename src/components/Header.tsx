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
  theme?: "dark" | "light"; // dark = white text, light = black text
}

export default function Header({
  logoVariant = "home",
  theme = "dark",
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    // Set initial hash after hydration
    setActiveHash(window.location.hash);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.products"), href: "/products" },
    { name: t("nav.about"), href: "/about" },
  ];

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-60 transition-all duration-300 ${isScrolled || theme === "light" ? "bg-white border-b border-black/10 shadow-sm h-7 sm:h-8" : "bg-black/95 backdrop-blur-md border-b border-white/5 h-8 sm:h-9"}`}
      >
        <div className="w-full h-full px-4 sm:px-8 flex justify-between items-center transition-colors duration-300">
          {/* Left: Socials */}
          <div
            className={`flex items-center gap-4 ${isScrolled || theme === "light" ? "text-black/60" : "text-white/60"}`}
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
          <div className="flex items-center gap-1.5 sm:gap-3">
            <button
              onClick={() => setLanguage("vi")}
              className={`text-[9px] sm:text-[11px] font-bold tracking-widest transition-all duration-300 px-1.5 py-0.5 rounded cursor-pointer ${
                language === "vi"
                  ? isScrolled || theme === "light"
                    ? "text-black bg-black/5 shadow-sm"
                    : "text-white bg-white/20 shadow-sm"
                  : isScrolled || theme === "light"
                    ? "text-black/30 hover:text-black/60 hover:bg-black/5"
                    : "text-white/30 hover:text-white/60 hover:bg-white/10"
              }`}
            >
              VN
            </button>
            <span
              className={`text-[9px] ${isScrolled || theme === "light" ? "text-black/10" : "text-white/10"}`}
            >
              |
            </span>
            <button
              onClick={() => setLanguage("en")}
              className={`text-[9px] sm:text-[11px] font-bold tracking-widest transition-all duration-300 px-1.5 py-0.5 rounded cursor-pointer ${
                language === "en"
                  ? isScrolled || theme === "light"
                    ? "text-black bg-black/5 shadow-sm"
                    : "text-white bg-white/20 shadow-sm"
                  : isScrolled || theme === "light"
                    ? "text-black/30 hover:text-black/60 hover:bg-black/5"
                    : "text-white/30 hover:text-white/60 hover:bg-white/10"
              }`}
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
          className={`w-full h-14 sm:h-17.5 px-4 sm:px-8 mx-auto transition-all duration-300 ${isScrolled || theme === "light" ? "bg-white border-b border-black/5" : "bg-transparent"}`}
        >
          <div className="flex justify-between items-center h-full gap-4">
            {/* Left: Logo */}
            <div className="shrink-0">
              <Link href="/" className="inline-flex items-center">
                {isScrolled || theme === "light" ? (
                  <Image
                    src="/image/logo-no-bg.png"
                    alt="zetstuclothing"
                    width={180}
                    height={56}
                    priority
                    className="h-4 sm:h-4 w-auto invert"
                  />
                ) : logoVariant === "home" ? (
                  <Image
                    src="/image/logo-no-bg.png"
                    alt="zetstuclothing"
                    width={180}
                    height={56}
                    priority
                    className="h-4 sm:h-4 w-auto"
                  />
                ) : (
                  <Image
                    src="/image/logo-no-bg-3.png"
                    alt="zetstuclothing"
                    width={180}
                    height={56}
                    priority
                    className="h-4 sm:h-4 w-auto"
                  />
                )}
              </Link>
            </div>

            {/* Center: Navigation - Hidden on mobile */}
            <div
              className={`hidden md:flex flex-1 justify-center items-center gap-3 lg:gap-6 ${isScrolled || theme === "light" ? "text-black/90" : "text-white/90"}`}
            >
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href.startsWith("#") && activeHash === link.href);
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
                            ? isScrolled || theme === "light"
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
                          isScrolled || theme === "light"
                            ? "text-black/20"
                            : "text-white/40"
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
                className={`hidden lg:block text-[10px] text-right whitespace-nowrap font-bold tracking-[0.16em] ${isScrolled || theme === "light" ? "text-black/60" : "text-white/80"}`}
              >
                <p>&quot;THE PURITY OF CHAOS&quot; // 2026.SS</p>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden inline-flex items-center justify-center p-2 rounded-md transition-colors ${isScrolled || theme === "light" ? "text-black hover:bg-black/5" : "text-white hover:bg-white/10"}`}
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
            className={`md:hidden backdrop-blur-lg border-t shadow-2xl ${isScrolled || theme === "light" ? "bg-white/95 border-black/5" : "bg-black/95 border-white/5"}`}
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block text-xs font-bold tracking-widest uppercase ${isScrolled || theme === "light" ? "text-black/90 hover:text-black" : "text-white/90 hover:text-white"}`}
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
