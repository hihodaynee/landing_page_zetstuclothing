"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { useEffect, useState } from "react";
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
  const [showPopup, setShowPopup] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch("/api/subscribe/count");
        if (res.ok) {
          const data = await res.json();
          setSubscriberCount(data.count);
        }
      } catch (err) {
        console.error("Failed to fetch count:", err);
      }
    };
    fetchCount();
  }, []);

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
        setShowPopup(true);
        // Cập nhật lại số lượng người đăng ký ngay lập tức
        try {
          const countRes = await fetch("/api/subscribe/count");
          if (countRes.ok) {
            const countData = await countRes.json();
            setSubscriberCount(countData.count);
          }
        } catch (err) {
          console.error("Failed to refresh count:", err);
        }
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
      {/* Popup thành công */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl border border-black/5 transform animate-in zoom-in-95 duration-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                Đăng ký thành công!
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Kiểm tra email trong hòm thư của bạn để hoàn thiện thông tin
                đăng ký sớm.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="w-full py-3 bg-black text-white font-bold rounded-xl hover:bg-black/90 transition-all active:scale-95"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

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
            <div className="bg-white min-h-104.5 md:h-107.5 border border-black/10 animate-slide-down animation-delay-300">
              <div className="h-full flex flex-col px-7 sm:px-8 py-4 sm:py-6">
                <div className="mb-4 flex justify-center">
                  <Image
                    src="/image/logo-no-bg-2.png"
                    alt="zetstuclothing"
                    width={150}
                    height={36}
                    className="h-auto w-32 sm:w-40"
                  />
                </div>

                <div className="flex justify-between items-center text-[#252525] text-[10px] sm:text-xs mb-3 sm:mb-4 tracking-tight font-semibold px-4">
                  <span>{t("countdown.targetDate")}</span>
                  <span>{t("countdown.startTime")}</span>
                </div>

                <div className="text-center mb-3 sm:mb-4 px-2">
                  <h1 className="text-base sm:text-lg md:text-lg leading-[1.2] font-black tracking-wide text-black mb-1">
                    {t("promo.registerNow")}{" "}
                    <span className="text-[#ff1b1b]">
                      {t("promo.discount")}
                    </span>
                  </h1>
                </div>

                <div className="mb-3 sm:mb-4 scale-90 sm:scale-100 origin-center">
                  <Countdown />
                </div>

                <div className="mb-4 sm:mb-6 flex flex-col items-center">
                  {subscriberCount !== null && (
                    <div className="mb-3 text-[10px] sm:text-xs font-bold text-black/60 bg-black/5 px-3 py-1 rounded-full border border-black/5">
                      Đã có{" "}
                      <span className="text-[#ff1b1b]">{subscriberCount}</span>
                      /100 người đăng ký
                    </div>
                  )}
                  <form
                    onSubmit={handleSubmit}
                    className="relative w-full max-w-70"
                  >
                    <div className="flex items-center bg-white border border-black/20 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] overflow-hidden">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t("promo.placeholder")}
                        required
                        className="flex-1 px-4 py-2 text-[0.75rem] sm:text-[0.8rem] outline-none placeholder:text-black/30 placeholder:text-[0.7rem] sm:placeholder:text-[0.75rem] text-black/70 font-medium"
                      />
                      <button
                        type="submit"
                        disabled={loading || !email}
                        className="px-4 py-2 text-[0.8rem] sm:text-[0.875rem] bg-black text-white font-bold hover:bg-black/80 hover:scale-105 active:scale-95 transition-all disabled:bg-black/20 disabled:cursor-not-allowed disabled:scale-100 cursor-pointer"
                      >
                        {loading ? "..." : t("promo.button")}
                      </button>
                    </div>
                  </form>
                  {status && (
                    <p
                      className={`mt-2 text-[10px] font-semibold text-center ${status.type === "success" ? "text-green-600" : "text-red-500"}`}
                    >
                      {status.type === "success"
                        ? t("promo.successMessage")
                        : status.message}
                    </p>
                  )}
                </div>

                <p className="text-center text-[9px] sm:text-[10px] leading-tight text-[#1e1e1e] mb-4 font-medium italic">
                  {t("promo.tagline")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
