"use client";

import React, { useState } from "react";
import { faqItems } from "@/data/landingData";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]); // Open the first one by default
  const { language, t } = useLanguage();
  const currentFaqItems = faqItems[language];

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [index]
    );
  };

  return (
    <section id="faq" className="py-24 bg-transparent border-t border-slate-200/60 relative overflow-hidden">
      {/* Tech Grid Pattern overlay with masked opacity */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35 pointer-events-none"></div>

      {/* Cyber ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-500/[0.025] rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-indigo-500/[0.025] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-bold text-blue-700 backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.08)]">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
            <span>{t({ vi: "HỖ TRỢ & GIẢI ĐÁP", en: "SUPPORT & FAQ" })}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t({ vi: "Giải Đáp Thắc Mắc Về Giải Pháp AI", en: "AI Solutions FAQ" })}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium tracking-wide">
            {t({
              vi: "Tìm hiểu nhanh các thông tin quan tâm trước khi quyết định triển khai hoặc hợp tác cùng chúng tôi.",
              en: "Quickly learn details about our solutions before planning deployment or requesting partnership.",
            })}
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4.5">
          {currentFaqItems.map((item, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                  isOpen
                    ? "bg-white border-blue-500/40 shadow-[0_15px_40px_-15px_rgba(59,130,246,0.15)] ring-1 ring-blue-500/10"
                    : "bg-white/40 backdrop-blur-md border-slate-200/80 hover:border-blue-500/25 hover:bg-white/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]"
                }`}
                onClick={() => toggleIndex(index)}
              >
                {/* Tech corner accents shown when open */}
                {isOpen && (
                  <>
                    <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-blue-500/40 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-blue-500/40 pointer-events-none"></div>
                  </>
                )}

                <div
                  className="w-full text-left px-6 sm:px-8 py-5.5 flex items-center justify-between gap-5 transition-colors select-none"
                >
                  <div className="flex items-center gap-4">
                    {/* Index identifier */}
                    <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      isOpen 
                        ? "bg-blue-500/10 text-blue-600 border border-blue-500/20" 
                        : "bg-slate-100 text-slate-400 border border-slate-200/60"
                    }`}>
                      Q_0{index + 1}
                    </span>
                    <span className={`text-base sm:text-lg font-bold leading-snug tracking-tight transition-colors duration-250 ${
                      isOpen ? "text-blue-600" : "text-slate-900 group-hover:text-blue-600"
                    }`}>
                      {item.question}
                    </span>
                  </div>
                  
                  {/* Rotating Chevron Icon with glow */}
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-300 flex-shrink-0 ${
                    isOpen 
                      ? "bg-blue-500 text-white border-blue-500 shadow-md shadow-blue-500/20 rotate-180" 
                      : "bg-slate-50 border-slate-200 text-slate-500 group-hover:border-blue-500/20 group-hover:text-blue-600 group-hover:bg-blue-50/50"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </div>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed tracking-wide flex gap-4">
                    {/* Decorative cyber gradient bar on the left */}
                    <div className="w-1 rounded bg-gradient-to-b from-blue-500 to-cyan-400 flex-shrink-0 my-0.5"></div>
                    <div className="flex-1 pl-1 pr-4">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
