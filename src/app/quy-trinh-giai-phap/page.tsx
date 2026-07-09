import type { Metadata } from "next";
import Header from "@/components/Header";
import SolutionCards from "@/components/SolutionCards";
import PersonalizedLearningSection from "@/components/PersonalizedLearningSection";
import ModelHubSection from "@/components/ModelHubSection";
import WorkflowSection from "@/components/WorkflowSection";
import Footer from "@/components/Footer";
import ProcessSolutionsHero from "@/components/ProcessSolutionsHero";

export const metadata: Metadata = {
  title: "Quy trình & Giải pháp AI | NextgenAI",
  description:
    "Khám phá các trụ cột dịch vụ cốt lõi, mô hình tối ưu và quy trình triển khai chuẩn hóa của NextgenAI.",
  keywords: [
    "NextgenAI",
    "quy trình AI",
    "giải pháp AI",
    "tư vấn AI",
    "model AI",
    "triển khai AI",
    "tối ưu AI",
  ],
};

export default function ProcessSolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fbfaf8] text-slate-800 selection:bg-blue-600 selection:text-white">
      <Header />

      <main className="flex-grow">
        <ProcessSolutionsHero />
        <SolutionCards />
        <PersonalizedLearningSection />
        <ModelHubSection />
        <WorkflowSection />
      </main>

      <Footer />
    </div>
  );
}
