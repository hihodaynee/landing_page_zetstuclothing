import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormSection from "@/components/FormSection";

export default function FormPage() {
  return (
    <div
      className="relative flex flex-col min-h-screen bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/image/Zetstuclothing Clo - Nháp 1.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <Header logoVariant="form" />
      <main className="relative z-10 flex-1">
        <FormSection />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
