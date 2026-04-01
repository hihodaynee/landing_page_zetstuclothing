"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { useState } from "react";

interface PromoCardProps {
  backgroundImage?: string;
}

export default function PromoCard({
  backgroundImage = "/image/Zetstuclothing Clo - Nháp 1.png",
}: PromoCardProps) {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: "success", message: "Đăng ký thành công!" });
        setEmail("");
      } else {
        setStatus({ type: "error", message: data.error || "Có lỗi xảy ra" });
      }
    } catch {
      setStatus({ type: "error", message: "Lỗi kết nối server" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-8 pb-24 pt-20 sm:pt-24">
      <div className="w-full max-w-[980px] animate-slide-down animation-delay-200">
        <div className="relative">
          <div className="absolute top-4 left-4 right-[-14px] bottom-[-14px] bg-black/32 -z-10" />
          <div className="grid grid-cols-1 md:grid-cols-[1fr_0.9fr] bg-transparent">
            {/* Left: video panel */}
            <div className="relative h-[300px] sm:h-[360px] md:h-[430px] overflow-hidden bg-black">
              <video
                className="h-full w-full object-cover"
                src="/video/tearser.mp4"
                poster={backgroundImage}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            {/* Right: white card */}
            <div className="bg-white h-[418px] sm:h-[430px] md:h-[430px] border border-black/10 animate-slide-down animation-delay-300">
              <div className="h-full flex flex-col px-7 sm:px-8 py-5 sm:py-10">
                <div className="mb-6 flex justify-center">
                  <Image
                    src="/image/logo-no-bg-2.png"
                    alt="zetstuclothing"
                    width={170}
                    height={42}
                    className="h-auto w-[160px] sm:w-[200px]"
                  />
                </div>

                <div className="flex justify-between items-center text-[#252525] text-[10px] sm:text-[10px] mb-6 sm:mb-8 tracking-tight font-semibold px-4">
                  <span>01/05/2026</span>
                  <span>Tới 00:00</span>
                </div>

                <div className="text-center mb-6 sm:mb-8 px-2">
                  <h1 className="text-[1.2rem] sm:text-[1.2rem] md:text-[1.2rem] leading-[1.2] font-black tracking-wide text-black mb-1">
                    {t("registerNow")}{" "}
                    <span className="text-[#ff1b1b]">10%</span>{" "}
                    <span>{t("discount")}</span>
                  </h1>
                </div>

                <div className="mb-6 sm:mb-8 flex flex-col items-center">
                  <form
                    onSubmit={handleSubmit}
                    className="relative w-full max-w-[280px]"
                  >
                    <div className="flex items-center bg-white border border-black/20 rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] overflow-hidden">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Nhập email của bạn..."
                        required
                        className="flex-1 px-4 py-2.5 text-[0.875rem] outline-none placeholder:text-black/30 text-black/70 font-medium"
                      />
                      <button
                        type="submit"
                        disabled={loading}
                        className="px-4 py-2.5 text-[0.875rem] bg-black text-white font-bold hover:bg-black/90 transition-all disabled:bg-black/40"
                      >
                        {loading ? "..." : "GỬI"}
                      </button>
                    </div>
                  </form>
                  {status && (
                    <p
                      className={`mt-2 text-[10px] font-semibold text-center ${status.type === "success" ? "text-green-600" : "text-red-500"}`}
                    >
                      {status.message}
                    </p>
                  )}
                </div>

                <p className="text-center text-[10px] sm:text-[10px] leading-tight text-[#1e1e1e] mb-6 sm:mb-8 font-medium italic">
                  {t("tagline")}
                </p>

                <div className="flex justify-center gap-6 mt-auto">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-[12px] bg-white border border-black/10 shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-6 h-6 text-[#1b72ff]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-[12px] bg-white border border-black/10 shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-6 h-6 text-[#ff2b95]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zm4.25 3.1A5.35 5.35 0 1 1 6.65 12 5.35 5.35 0 0 1 12 6.9zm0 1.8A3.55 3.55 0 1 0 15.55 12 3.55 3.55 0 0 0 12 8.7zm5.58-3.45a1.28 1.28 0 1 1-1.28 1.28 1.28 1.28 0 0 1 1.28-1.28z" />
                    </svg>
                  </a>

                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-[12px] bg-white border border-black/10 shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                    aria-label="TikTok"
                  >
                    <svg
                      className="w-6 h-6 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.66 0 2.9 2.9 0 015.66-.08v-3.45a6.35 6.35 0 00-5.79 9.7 6.52 6.52 0 0010.86-5.23v-5.34a8.33 8.33 0 005.78 2.17v-3.45a4.81 4.81 0 01-.69-.05z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
