import type { Metadata } from "next";
import Header from "@/components/Header";
import EducationHero from "@/components/EducationHero";
import HeroSection from "@/components/HeroSection";
import EducationTabs from "@/components/EducationTabs";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Giáo dục AI | NextgenAI",
  description:
    "Giải pháp và Đào tạo Giáo dục AI thực chiến chuẩn STEM K-12 cho học sinh, phụ huynh và trường học.",
  keywords: [
    "Giáo dục AI",
    "đào tạo AI",
    "STEM K-12",
    "AI cho học sinh",
    "AI cho giáo viên",
    "học lập trình AI",
  ],
};

export default function EducationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fbfaf8] text-slate-800 selection:bg-blue-600 selection:text-white">
      <Header />

      <main className="flex-grow">
        <EducationHero />
        <HeroSection />
        <div className="relative py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <EducationTabs />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
