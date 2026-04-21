import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-black">
      <Header logoVariant="home" theme="dark" />

      <main className="relative z-10 flex-1 pt-0">
        <AboutUs />
      </main>

      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}
