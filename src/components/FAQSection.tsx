"use client";

import React, { useState } from "react";
import { faqItems } from "@/data/landingData";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section id="faq" className="py-24 bg-transparent border-t border-slate-200/60 relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-500/[0.01] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Câu Hỏi Thường Gặp</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Giải Đáp Thắc Mắc Về Giải Pháp AI
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed tracking-wide">
            Tìm hiểu nhanh các thông tin quan tâm trước khi quyết định triển khai hoặc hợp tác cùng chúng tôi.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {item.question}
                  </span>
                  <span className="p-1 rounded bg-slate-50 border border-slate-200 text-slate-500 flex-shrink-0 group-hover:border-blue-500/20 group-hover:text-blue-600 transition-all">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[550px] border-t border-slate-100" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <div className="px-6 py-5 text-sm sm:text-base text-slate-600 leading-relaxed bg-slate-50/50 tracking-wide">
                    {item.answer}
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
