import Header from "@/components/Header";
import PromoCard from "@/components/PromoCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div
        className="fixed inset-0 bg-center bg-cover bg-no-repeat -z-10"
        style={{
          backgroundImage: "url('/image/Zetstuclothing Clo - Nháp 1.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/15" />
      </div>

      <Header logoVariant="home" />

      <main className="relative z-10 flex-1">
        <PromoCard backgroundImage={process.env.NEXT_PUBLIC_HERO_IMAGE_URL} />
      </main>

      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}
