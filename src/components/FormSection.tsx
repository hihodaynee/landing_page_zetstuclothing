"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function FormSection() {
  const { language } = useLanguage();

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-8 pb-24 pt-24 sm:pt-28">
      <div className="w-full max-w-[680px] animate-slide-down animation-delay-200">
        <div className="relative">
          <div className="absolute top-4 left-4 right-[-14px] bottom-[-14px] bg-black/35 -z-10" />
          <div className="bg-[#f2f2f2] border border-black/10 p-6 sm:p-8 md:p-10">
            <h1 className="text-3xl sm:text-4xl font-black text-black mb-2">
              {language === "vi" ? "FORM ĐĂNG KÝ" : "REGISTRATION FORM"}
            </h1>
            <p className="text-base sm:text-lg text-black/70 mb-8">
              {language === "vi"
                ? "Đăng ký sớm để nhận ưu đãi 10%"
                : "Sign up early to get 10% off"}
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  {language === "vi" ? "Họ và tên" : "Full name"}
                </label>
                <input
                  type="text"
                  className="w-full h-12 px-4 border border-black/30 bg-white text-black outline-none focus:border-black"
                  placeholder={
                    language === "vi"
                      ? "Nhập họ và tên"
                      : "Enter your full name"
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full h-12 px-4 border border-black/30 bg-white text-black outline-none focus:border-black"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  {language === "vi" ? "Số điện thoại" : "Phone number"}
                </label>
                <input
                  type="tel"
                  className="w-full h-12 px-4 border border-black/30 bg-white text-black outline-none focus:border-black"
                  placeholder={
                    language === "vi"
                      ? "Nhập số điện thoại"
                      : "Enter your phone number"
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 mt-2 border border-black/40 bg-[#edf2f4] text-[#6e7781] font-bold text-lg shadow-[3px_4px_0_rgba(0,0,0,0.22)] hover:translate-y-px hover:shadow-[2px_3px_0_rgba(0,0,0,0.22)] transition-all"
              >
                {language === "vi" ? "GỬI ĐĂNG KÝ" : "SUBMIT"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
