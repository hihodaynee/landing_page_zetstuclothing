"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { t } = useLanguage();
  const tFunc = t as (key: string) => string;
  const [selectedSize, setSelectedSize] = useState<string>("L");
  const [showSizeChart, setShowSizeChart] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Hardcode product data
  const productData = {
    chaos: {
      name: "T-SHIRT CHAOS",
      price: "189.000 VNĐ",
      description: tFunc("products.chaosDesc") || "100% cotton khô 2 chiều...",
      images: [
        "/image/S01/product/chaos/s01-product-2-1.JPG",
        "/image/S01/product/chaos/s01-product-2-2.JPG",
        "/image/S01/product/chaos/s01-product-2-3.JPG",
        "/image/S01/product/chaos/s01-product-2-4.JPG",
        "/image/S01/product/chaos/s01-product-2-5.JPG",
      ],
    },
    rule: {
      name: "T-SHIRT RULE",
      price: "189.000 VNĐ",
      description: tFunc("products.ruleDesc") || "100% cotton khô 2 chiều...",
      images: [
        "/image/S01/product/rule/s01-product-1-1.JPG",
        "/image/S01/product/rule/s01-product-1-2.JPG",
        "/image/S01/product/rule/s01-product-1-3.JPG",
        "/image/S01/product/rule/s01-product-1-4.JPG",
        "/image/S01/product/rule/s01-product-1-5.JPG",
      ],
    },
  };

  const product = productData[id as keyof typeof productData];

  if (!product) {
    return (
      <div className="text-black text-center mt-20">
        {tFunc("products.notFound")}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col">
      <Header logoVariant="form" theme="light" />

      <main className="flex-1 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
        {/* Breadcrumbs */}
        <div className="mb-12">
          <div className="flex items-center gap-3 text-[10px] md:text-sm font-bold tracking-widest uppercase">
            <Link href="/" className="text-black/50 hover:text-black">
              {tFunc("nav.home") || "HOME"}
            </Link>
            <span className="text-black/30">/</span>
            <Link href="/products" className="text-black/50 hover:text-black">
              {tFunc("nav.products") || "PRODUCTS"}
            </Link>
            <span className="text-black/30">/</span>
            <span className="text-black">{product.name}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Images */}
          <div className="relative w-full">
            {/* Mobile Arrows */}
            <button
              onClick={() => scrollSlider("left")}
              className="lg:hidden absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/80 border border-black/10 text-black shadow-sm backdrop-blur-sm active:scale-95 transition-transform"
              aria-label="Previous image"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
                strokeLinejoin="miter"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scrollSlider("right")}
              className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/80 border border-black/10 text-black shadow-sm backdrop-blur-sm active:scale-95 transition-transform"
              aria-label="Next image"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
                strokeLinejoin="miter"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <div
              ref={sliderRef}
              className="flex flex-nowrap lg:flex-col gap-4 lg:gap-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory w-full overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {product.images.map((img, i) => (
                <div
                  key={i}
                  className="relative w-full shrink-0 snap-center bg-transparent aspect-[4/5] lg:aspect-[4/5]"
                >
                  <Image
                    src={img}
                    alt={`${product.name} img ${i + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover lg:object-cover object-center"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info Sticky */}
          <div className="relative">
            <div className="lg:sticky lg:top-32 space-y-10">
              {/* Title & Price */}
              <div className="flex flex-row items-end justify-between">
                <h1 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none">
                  {product.name}
                </h1>
                <p className="text-base md:text-xl font-light text-black/70 mb-1 shrink-0">
                  {product.price}
                </p>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-lg leading-relaxed font-light text-black/80 whitespace-pre-line border-t border-black/10 pt-6">
                  {product.description}
                </p>
              </div>

              {/* Size Options */}
              <div className="border-t border-black/10 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-bold tracking-[0.2em] uppercase text-black/50">
                    {tFunc("products.choiceOrControl")}
                  </span>
                  <button
                    onClick={() => setShowSizeChart(true)}
                    className="text-sm font-bold tracking-widest uppercase underline underline-offset-4 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    {tFunc("products.sizeChart")}
                  </button>
                </div>
                <div className="flex gap-4">
                  {["M", "L"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-16 h-16 border flex items-center justify-center text-lg font-black transition-all cursor-pointer ${
                        selectedSize === size
                          ? "border-black bg-black text-white"
                          : "border-black/20 hover:border-black"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8">
                <Link
                  href="https://instagram.com/zetstuclothing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-5 px-8 bg-black text-white text-center text-sm tracking-[0.2em] font-black uppercase hover:bg-black/80 transition-colors"
                >
                  {tFunc("products.directInstagram")}
                </Link>
              </div>

              {/* Size Chart Modal */}
              {showSizeChart && (
                <div
                  className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
                  onClick={() => setShowSizeChart(false)}
                >
                  <div
                    className="relative w-full max-w-2xl bg-white p-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image
                      src="/image/overview/size/size-chart-t-shirt.png"
                      alt="Size Chart"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                    <button
                      className="absolute top-4 right-4 text-black text-xs font-black uppercase tracking-widest bg-white/80 px-3 py-2 border border-black hover:bg-black hover:text-white transition-colors"
                      onClick={() => setShowSizeChart(false)}
                    >
                      {tFunc("products.close")}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
