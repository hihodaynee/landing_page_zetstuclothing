"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-white text-black py-16 px-4 md:px-8 border-t border-black/5">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo & About */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <Link href="/" className="inline-block">
              <Image
                src="/image/logo-no-bg-2.png"
                alt="zetstuclothing"
                width={160}
                height={40}
                className="h-8 w-auto opacity-80"
              />
            </Link>
            <p className="text-[11px] font-medium leading-relaxed max-w-xs text-black/60">
              {t("footer.aboutText")}
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="#"
                className="hover:opacity-60 transition-opacity text-black/60"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="hover:opacity-60 transition-opacity text-black/60"
              >
                <FaTiktok size={18} />
              </a>
              <a
                href="#"
                className="hover:opacity-60 transition-opacity text-black/60"
              >
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3">
            <h4 className="text-[12px] font-bold tracking-widest mb-6 uppercase">
              {t("footer.brand")}
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  className="text-[11px] font-semibold text-black/50 hover:text-black transition-colors"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[11px] font-semibold text-black/50 hover:text-black transition-colors"
                >
                  SEASON 1
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[11px] font-semibold text-black/50 hover:text-black transition-colors"
                >
                  {t("nav.products")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[11px] font-semibold text-black/50 hover:text-black transition-colors"
                >
                  OUR STORY
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[11px] font-semibold text-black/50 hover:text-black transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[12px] font-bold tracking-widest mb-6 uppercase">
              {t("footer.help")}
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="#"
                  className="text-[11px] font-semibold text-black/50 hover:text-black transition-colors"
                >
                  SHIPPING
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[11px] font-semibold text-black/50 hover:text-black transition-colors"
                >
                  RETURNS
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[11px] font-semibold text-black/50 hover:text-black transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h4 className="text-[12px] font-bold tracking-widest mb-6 uppercase">
              {t("footer.newsletter")}
            </h4>
            <div className="flex flex-col gap-4">
              <p className="text-[11px] text-black/60">
                {t("footer.newsletterText")}
              </p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder={t("promo.placeholder")}
                  className="w-full px-4 py-3 text-[11px] border border-black/10 focus:outline-none focus:border-black transition-colors"
                />
                <button className="w-full bg-black text-white py-3 text-[11px] font-bold tracking-widest hover:bg-black/90 transition-colors uppercase">
                  {t("promo.button")}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold tracking-widest text-black/40">
            © 2026 ZETSTUCLOTHING. {t("footer.rights").toUpperCase()}
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-[10px] font-bold tracking-widest text-black/40 hover:text-black transition-colors"
            >
              PRIVACY POLICY
            </Link>
            <Link
              href="#"
              className="text-[10px] font-bold tracking-widest text-black/40 hover:text-black transition-colors"
            >
              TERMS OF SERVICE
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
