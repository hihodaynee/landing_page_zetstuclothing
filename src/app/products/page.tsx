"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const products = [
  {
    id: "chaos",
    name: "T-SHIRT CHAOS",
    price: "189.000 VNĐ",
    imageDefault: "/image/S01/product/chaos/s01-product-no-bg-2-2.PNG",
    imageHover: "/image/S01/product/chaos/s01-product-no-bg-2-1.PNG",
  },
  {
    id: "rule",
    name: "T-SHIRT RULE",
    price: "189.000 VNĐ",
    imageDefault: "/image/S01/product/rule/s01-product-no-bg-1-2.PNG",
    imageHover: "/image/S01/product/rule/s01-product-no-bg-1-1.PNG",
  },
];

export default function ProductsPage() {
  const { t } = useLanguage();
  const tFunc = t as (key: string) => string;

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <Header logoVariant="form" theme="light" />

      <main className="flex-1 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full flex flex-col">
        <div className="text-center mb-16">
          <h1 className="text-sm font-bold tracking-[0.3em] text-black/50 mb-4 uppercase">
            COLLECTION S01
          </h1>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black">
            {tFunc("nav.products")}
          </h2>
          <div className="w-px h-16 bg-black/20 mx-auto mt-8" />
        </div>

        {/* Filter Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-black/10 pb-4 mb-12 gap-4">
          <div className="flex items-center gap-6 text-sm font-bold tracking-widest uppercase">
            <button className="text-black border-b-2 border-black pb-1">
              {tFunc("products.all")}
            </button>
            <button className="text-black/50 hover:text-black transition-colors pb-1 cursor-pointer">
              T-Shirts
            </button>
            <button className="text-black/50 hover:text-black transition-colors pb-1 cursor-pointer">
              Hoodies
            </button>
          </div>
          <div className="text-sm font-bold tracking-widest uppercase text-black/50">
            {products.length} {tFunc("products.items")}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-8 md:gap-x-12 md:gap-y-16">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group block relative w-full"
            >
              {/* Product Image Container */}
              <div className="relative aspect-square w-full bg-[#f7f7f7] overflow-hidden mb-4 md:mb-6 shadow-sm border border-black/5">
                <div className="absolute inset-4 md:inset-8">
                  {/* Default Image */}
                  <Image
                    src={product.imageDefault}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-contain object-center transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                  />
                  {/* Hover Image */}
                  <Image
                    src={product.imageHover}
                    alt={`${product.name} On Model`}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-contain object-center opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
                  />
                </div>

                {/* View More Overlay */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="px-4 py-2 md:px-8 md:py-3 bg-black text-white text-[10px] md:text-sm font-bold tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    XEM THÊM
                  </span>
                </div>
              </div>

              {/* Product Info w/ Name left, Price right */}
              <div className="flex flex-row items-start justify-between px-1 md:px-2 pt-1 md:pt-2 gap-2">
                <h3 className="text-xs sm:text-sm md:text-lg font-black uppercase tracking-wide group-hover:text-black/70 transition-colors leading-tight">
                  {product.name}
                </h3>
                <p className="text-[10px] sm:text-xs md:text-lg font-light text-black/60 shrink-0 mt-[1px] md:mt-0">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
