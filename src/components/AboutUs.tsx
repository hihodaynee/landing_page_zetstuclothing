"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

// Hero Section
const HeroSection = ({ t }: { t: unknown }) => {
  const tFunc = t as (key: string) => string;
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/overview/us/bg-about-us-1.jpg"
          alt="About Us Background"
          fill
          className="object-cover opacity-80"
          priority
        />
      </div>
      {/* Fashion-style gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/80 z-10" />

      <div className="relative text-center text-white z-20 px-4 max-w-4xl mx-auto flex flex-col items-center">
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6 text-white/70">
          {tFunc("about.subtitle")}
        </p>
        <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter uppercase leading-none">
          {tFunc("about.title")}
        </h1>
        <div className="w-px h-24 mb-8 bg-linear-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
};

// Story Section with Image
const StorySection = ({ t }: { t: unknown }) => {
  const tFunc = t as (key: string) => string;
  return (
    <section className="py-20 px-4 md:px-8 max-w-[1500px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative h-[60vh] md:h-[600px] w-full order-2 md:order-1">
          <Image
            src="/image/overview/us/image-about-us-2.jpg"
            alt="About Us Story"
            fill
            className="object-cover md:object-center shadow-2xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="order-1 md:order-2 flex flex-col justify-center">
          <h2 className="text-sm font-bold tracking-[0.2em] text-black/50 mb-4 uppercase">
            {tFunc("about.subtitle")}
          </h2>
          <h3 className="text-4xl md:text-6xl font-black mb-8 text-black leading-tight">
            THE STORY
          </h3>
          <div className="w-12 h-1 bg-black mb-8" />
          <p className="text-base md:text-xl leading-relaxed text-black/70 whitespace-pre-line font-light">
            {tFunc("about.story")}
          </p>
        </div>
      </div>
    </section>
  );
};

// DNA Section
const DNASection = ({ t }: { t: unknown }) => {
  const tFunc = t as (key: string) => string;
  const about = (t as (key: string) => Record<string, unknown>)(
    "about",
  ) as Record<string, unknown>;
  const dnaArray = Array.isArray(about.dna) ? about.dna : [];

  return (
    <section className="py-20 px-4 md:px-8 bg-black text-white">
      <div className="max-w-[1500px] mx-auto">
        <div className="mb-16 md:mb-24">
          <h2 className="text-sm font-bold tracking-[0.2em] text-white/50 mb-4 uppercase">
            {tFunc("about.dnaSubtitle")}
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase mb-8">
            {tFunc("about.dnaTitle")}
          </h3>
          <div className="w-16 md:w-32 h-1 bg-white" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {dnaArray.map((item: unknown, index: number) => {
            const itemData = item as Record<string, string>;
            return (
              <div
                key={index}
                className="group border-t border-white/20 pt-6 md:pt-8 hover:border-white transition-colors duration-500"
              >
                <div className="mb-4 md:mb-6 flex flex-col md:flex-row md:justify-between md:items-start gap-1 md:gap-0">
                  <span className="text-sm font-bold text-white/50 group-hover:text-white/90 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-3xl md:text-2xl font-black text-white tracking-widest uppercase">
                    {itemData.title}
                  </h4>
                </div>
                <p className="text-base md:text-sm text-white/70 group-hover:text-white transition-colors leading-relaxed font-light">
                  {itemData.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Manifesto Section
const ManifestoSection = ({ t }: { t: unknown }) => {
  const tFunc = t as (key: string) => string;

  return (
    <section className="py-20 px-4 md:px-8 max-w-[1500px] mx-auto">
      <div className="w-full bg-white py-20 px-8 text-black relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('/image/overview/us/bg-about-us.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay group-hover:opacity-30 transition-opacity duration-1000" />
        <p className="text-center text-xl md:text-3xl font-light leading-relaxed max-w-4xl mx-auto italic relative z-10">
          &quot;{tFunc("about.manifestoClosing")}&quot;
        </p>
      </div>
    </section>
  );
};

// Audience Section with Image
const AudienceSection = ({ t }: { t: unknown }) => {
  const tFunc = t as (key: string) => string;
  const about = (t as (key: string) => Record<string, unknown>)(
    "about",
  ) as Record<string, unknown>;
  const audienceArray = Array.isArray(about.audienceItems)
    ? about.audienceItems
    : [];

  return (
    <section className="py-20 px-4 md:px-8 bg-black text-white">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-sm font-bold tracking-[0.2em] text-white/50 mb-4 uppercase">
            {tFunc("about.audienceSubtitle")}
          </h2>
          <h3 className="text-4xl md:text-6xl font-black mb-8 text-white leading-tight uppercase">
            {tFunc("about.audienceTitle")}
          </h3>
          <div className="w-12 h-1 bg-white mb-10" />

          <ul className="space-y-8">
            {audienceArray.map((item: unknown, index: number) => (
              <li
                key={index}
                className="flex items-start gap-6 text-lg md:text-xl text-white/70 font-light"
              >
                <div className="w-1.5 h-1.5 bg-white mt-3 shrink-0 rounded-full" />
                <span className="leading-relaxed">{item as string}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="relative h-[60vh] md:h-[600px] w-full">
          <Image
            src="/image/overview/us/image-about-us-4.png"
            alt="About Us Audience"
            fill
            className="object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default function AboutUs() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <HeroSection t={t} />
      <StorySection t={t} />
      <DNASection t={t} />
      <ManifestoSection t={t} />
      <AudienceSection t={t} />
    </div>
  );
}
