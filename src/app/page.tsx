import type { Metadata } from "next";
import Header from "@/components/Header";
import TrustBar from "@/components/TrustBar";
import ProblemSection from "@/components/ProblemSection";
import AgentVsChatGPTSection from "@/components/AgentVsChatGPTSection";
import CaseStudySection from "@/components/CaseStudySection";
import ResponsibleAISection from "@/components/ResponsibleAISection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { faqItems } from "@/data/landingData";
import MainHero from "@/components/MainHero";

export const metadata: Metadata = {
  title: "NextgenAI | Cài đặt AI cá nhân, Model AI và Giáo dục AI cho trường học",
  description:
    "Tư vấn triển khai AI cá nhân, cung cấp model AI và đào tạo AI thực chiến cho giáo viên, học sinh cấp 1, cấp 2, cấp 3 và doanh nghiệp vừa và nhỏ tại Việt Nam.",
  keywords: [
    "NextgenAI",
    "cài đặt AI cá nhân",
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
    title: "NextgenAI | Cài đặt AI cá nhân, Model AI và Giáo dục AI cho trường học",
    description:
      "Tư vấn triển khai AI cá nhân, cung cấp model AI và đào tạo AI thực chiến cho giáo viên, học sinh cấp 1, cấp 2, cấp 3 và doanh nghiệp vừa và nhỏ.",
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
        "@type": "WebSite",
        "@id": "https://nextgenai.vn/#website",
        "url": "https://nextgenai.vn",
        "name": "NextgenAI",
        "description": "Cài đặt AI cá nhân, Model AI & Đào tạo AI Thực chiến cho giáo viên, học sinh, trường học, doanh nghiệp.",
        "inLanguage": "vi-VN"
      },
      {
        "@type": "WebPage",
        "@id": "https://nextgenai.vn/#webpage",
        "url": "https://nextgenai.vn",
        "name": "NextgenAI | Cài đặt AI cá nhân, Model AI và Giáo dục AI cho trường học",
        "isPartOf": { "@id": "https://nextgenai.vn/#website" },
        "description": "Tư vấn triển khai AI cá nhân, cung cấp model AI và đào tạo AI thực chiến cho giáo viên, học sinh cấp 1, cấp 2, cấp 3 và doanh nghiệp vừa và nhỏ tại Việt Nam.",
        "inLanguage": "vi-VN"
      },
      {
        "@type": "FAQPage",
        "@id": "https://nextgenai.vn/#faq",
        "isPartOf": { "@id": "https://nextgenai.vn/#webpage" },
        "mainEntity": faqItems.vi.map((item) => ({
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
        <h1 className="sr-only">NextgenAI - Hệ sinh thái dịch vụ AI cá nhân, model AI và đào tạo AI thực chiến</h1>

        <Header />

        <main className="flex-grow">
          <MainHero />
          <AgentVsChatGPTSection />
          <TrustBar />
          <ProblemSection />
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
