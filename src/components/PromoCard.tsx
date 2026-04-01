"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { useState } from "react";
import Countdown from "./Countdown";

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
      <div className="w-full max-w-245 animate-slide-down animation-delay-200">
        <div className="relative">
          <div className="absolute top-4 left-4 -right-3.5 -bottom-3.5 bg-black/32 -z-10" />
          <div className="grid grid-cols-1 md:grid-cols-[1fr_0.9fr] bg-transparent">
            {/* Left: video panel */}
            <div className="relative h-75 sm:h-90 md:h-107.5 overflow-hidden bg-black">
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
            <div className="bg-white h-104.5 sm:h-107.5 md:h-107.5 border border-black/10 animate-slide-down animation-delay-300">
              <div className="h-full flex flex-col px-7 sm:px-8 py-5 sm:py-10">
                <div className="mb-6 flex justify-center">
                  <Image
                    src="/image/logo-no-bg-2.png"
                    alt="zetstuclothing"
                    width={170}
                    height={42}
                    className="h-auto w-40 sm:w-50"
                  />
                </div>

                <div className="flex justify-between items-center text-[#252525] text-xs sm:text-xs mb-4 sm:mb-6 tracking-tight font-semibold px-4">
                  <span>15/05/2026</span>
                  <span>Tới 00:00</span>
                </div>

                <div className="text-center mb-4 sm:mb-6 px-2">
                  <h1 className="text-lg sm:text-lg md:text-lg leading-[1.2] font-black tracking-wide text-black mb-1">
                    {t("registerNow")}{" "}
                    <span className="text-[#ff1b1b]">10%</span>{" "}
                    <span>{t("discount")}</span>
                  </h1>
                </div>

                <div className="mb-4 sm:mb-6">
                  <Countdown />
                </div>

                <div className="mb-6 sm:mb-8 flex flex-col items-center">
                  <form
                    onSubmit={handleSubmit}
                    className="relative w-full max-w-70"
                  >
                    <div className="flex items-center bg-white border border-black/20 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] overflow-hidden">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
