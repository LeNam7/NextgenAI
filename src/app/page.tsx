import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ProblemSection from "@/components/ProblemSection";
import SolutionCards from "@/components/SolutionCards";
import PersonalizedLearningSection from "@/components/PersonalizedLearningSection";
import ModelHubSection from "@/components/ModelHubSection";
import EducationTabs from "@/components/EducationTabs";
import WorkflowSection from "@/components/WorkflowSection";
import CaseStudySection from "@/components/CaseStudySection";
import ResponsibleAISection from "@/components/ResponsibleAISection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { faqItems } from "@/data/landingData";

export const metadata: Metadata = {
  title: "NextgenAI | Cài đặt AI riêng, Model AI và Giáo dục AI cho trường học",
  description:
    "Tư vấn triển khai AI riêng biệt, cung cấp model AI và đào tạo AI thực chiến cho giáo viên, học sinh cấp 1, cấp 2, cấp 3 và doanh nghiệp vừa và nhỏ tại Việt Nam.",
  keywords: [
    "NextgenAI",
    "cài đặt AI riêng",
    "tư vấn AI",
    "model AI",
    "giáo dục AI",
    "AI cho giáo viên",
    "AI cho học sinh cấp 1",
    "AI cho học sinh cấp 2",
    "AI cho học sinh cấp 3",
    "đào tạo AI thực chiến",
    "AI trong giáo dục",
  ],
  openGraph: {
    title: "NextgenAI | Cài đặt AI riêng, Model AI và Giáo dục AI cho trường học",
    description:
      "Tư vấn triển khai AI riêng biệt, cung cấp model AI và đào tạo AI thực chiến cho giáo viên, học sinh cấp 1, cấp 2, cấp 3 và doanh nghiệp vừa và nhỏ.",
    url: "https://nextgenai.vn",
    siteName: "NextgenAI",
    locale: "vi_VN",
    type: "website",
  },
};

export default function Home() {
  // Construct JSON-LD schemas
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://nextgenai.vn/#organization",
        "name": "NextgenAI",
        "url": "https://nextgenai.vn",
        "logo": "https://nextgenai.vn/logo.png",
        "sameAs": [],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+84-90-123-4567",
            "contactType": "customer service",
            "email": "contact@nextgenai.vn",
            "areaServed": "VN",
            "availableLanguage": "Vietnamese",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://nextgenai.vn/#service-ai-private",
        "name": "Cài đặt & Tư vấn AI riêng",
        "provider": { "@id": "https://nextgenai.vn/#organization" },
        "description": "Thiết kế, cài đặt và vận hành một AI Assistant riêng có khả năng hỏi đáp dựa trên tài liệu, kiến thức và quy trình nội bộ của cá nhân, doanh nghiệp hoặc tổ chức giáo dục.",
      },
      {
        "@type": "Service",
        "@id": "https://nextgenai.vn/#service-ai-models",
        "name": "Cung cấp & Tích hợp Model AI",
        "provider": { "@id": "https://nextgenai.vn/#organization" },
        "description": "Lựa chọn, tinh chỉnh và kết nối các model AI chuyên biệt phù hợp nhất với mục tiêu hoạt động: hỏi đáp, phân tích dữ liệu, xử lý hình ảnh, giọng nói.",
      },
      {
        "@type": "Service",
        "@id": "https://nextgenai.vn/#service-ai-education",
        "name": "Đào tạo & Giáo dục AI Thực chiến",
        "provider": { "@id": "https://nextgenai.vn/#organization" },
        "description": "Xây dựng lộ trình phát triển năng lực số (AI Literacy) bài bản cho giáo viên và học sinh từ cấp 1 đến cấp 3.",
      },
      {
        "@type": "FAQPage",
        "@id": "https://nextgenai.vn/#faq",
        "mainEntity": faqItems.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Main Landing Page Components */}
      <div className="flex flex-col min-h-screen bg-[#fbfaf8] text-slate-800 selection:bg-blue-600 selection:text-white">
        
        {/* H1 hidden for SEO hierarchy, since Hero contains a styled h1 */}
        <h1 className="sr-only">NextgenAI - Hệ sinh thái dịch vụ AI riêng biệt, model AI và đào tạo AI thực chiến</h1>

        <Header />

        <main className="flex-grow">
          <HeroSection />
          <TrustBar />
          <ProblemSection />
          <SolutionCards />
          <PersonalizedLearningSection />
          <ModelHubSection />
          <EducationTabs />
          <WorkflowSection />
          <CaseStudySection />
          <ResponsibleAISection />
          <PricingSection />
          <FAQSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
