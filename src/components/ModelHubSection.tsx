"use client";

import React from "react";
import { modelHubRows } from "@/data/landingData";
import {
  Cpu,
  ShieldAlert,
  Server,
  FileText,
  Search,
  Eye,
  Mic,
  Code
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Brand Logo SVGs
const OpenAILogo = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0 transition-transform duration-500 group-hover:rotate-180 text-[#10a37f]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.3,10.6C21.4,10.1,21.5,9.6,21.5,9.1c0-2.9-2.3-5.2-5.2-5.2c-0.7,0-1.4,0.1-2,0.4C13.8,3.3,13,2.8,12,2.8 c-1.5,0-2.8,1.2-2.8,2.8c0,0.1,0,0.2,0,0.2C8.6,5.4,7.9,5.2,7.2,5.2C4.3,5.2,2,7.5,2,10.4c0,0.5,0.1,1,0.2,1.5 C1.6,12.5,1.2,13.4,1.2,14.4c0,2.4,2,4.4,4.4,4.4c0.2,0,0.4,0,0.6-0.1c0.5,0.8,1.4,1.4,2.5,1.4c0.5,0,1-0.1,1.5-0.4 c0.5,0.6,1.3,1.1,2.2,1.1c1.5,0,2.8-1.2,2.8-2.8c0-0.1,0-0.2,0-0.2c0.6,0.4,1.3,0.6,2.1,0.6c2.9,0,5.2-2.3,5.2-5.2 C22,12.2,21.7,11.3,21.3,10.6z M12.8,4.3c0.4-0.1,0.8-0.1,1.2,0.1l3.3,1.9c0.4,0.2,0.6,0.6,0.6,1v3.8l-3.3-1.9L12.8,4.3z M8.9,5.8l2.9,1.7v3.4L8.9,9.2V5.8z M4.5,11.5c0.1-0.4,0.3-0.8,0.7-1L8.5,8.6l1.8,3.1L6.9,13.7L4.5,11.5z M6,17.2l3.3-1.9l2.9,1.7v3.4 L6,17.2z M15.1,19.2c-0.4,0.1-0.8,0.1-1.2-0.1l-3.3-1.9c-0.4-0.2-0.6-0.6-0.6-1V12.4l3.3,1.9V19.2z M18,14.2l-2.9-1.7V9.1L18,10.8 V14.2z M20,11.8l-1.8,1.1l-2.9-1.7l3.7-2.1c0.4,0.2,0.7,0.6,0.8,1.1C20.1,10.6,20.1,11.2,20,11.8z" />
  </svg>
);

const ClaudeLogo = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0 transition-transform duration-500 group-hover:scale-110 text-[#cc9966]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.8 14.6H10.2l-1 2.4H6.8l4-12h2.4l4 12h-2.4l-1-2.4zm-1.8-6l-1.2 4.2h2.4L12 10.6z" />
  </svg>
);

const DeepSeekLogo = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0 transition-all duration-300 group-hover:translate-y-[-1px] text-[#1e88e5]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,1.86,5.77l-1.63,4.9a1,1,0,0,0,1.26,1.26l4.9-1.63A9.89,9.89,0,0,0,12,22,10,10,0,0,0,12,2Zm4,11H8V10h8Z" />
  </svg>
);

const CohereLogo = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0 transition-transform duration-500 group-hover:skew-x-6 text-[#6c5ce7]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.8,11.5A3.8,3.8,0,1,1,12,8.2,3.8,3.8,0,0,1,15.8,13.5Z" />
  </svg>
);

const ElevenLabsLogo = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-105 text-[#00cec9]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 18h2v-4H4v4zm4 0h2V6H8v12zm4 0h2V10h-2v8zm4 0h2v-6h-2v6zm4 0h2v-8h-2v8z" />
  </svg>
);

const QwenLogo = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0 transition-all duration-300 group-hover:rotate-45 text-[#ff7675]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.06-1.37l3.66 1.13c.53.16 1.05-.36.88-.88l-1.13-3.66C21.5 15.58 22 13.85 22 12c0-5.52-4.48-10-10-10zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
  </svg>
);

// Map model name string to detailed brand configs
const modelBrands: Record<string, { name: string; logo: React.ReactNode; bgColor: string; textColor: string; borderColor: string }> = {
  "GPT-4o": { name: "OpenAI GPT-4o", logo: <OpenAILogo />, bgColor: "bg-[#10a37f]/5 group-hover:bg-[#10a37f]/10", textColor: "text-[#10a37f]", borderColor: "border-[#10a37f]/20 group-hover:border-[#10a37f]/45" },
  "GPT-4o-mini": { name: "OpenAI GPT-4o Mini", logo: <OpenAILogo />, bgColor: "bg-[#10a37f]/5 group-hover:bg-[#10a37f]/10", textColor: "text-[#10a37f]", borderColor: "border-[#10a37f]/20 group-hover:border-[#10a37f]/45" },
  "Claude 3.5": { name: "Anthropic Claude 3.5", logo: <ClaudeLogo />, bgColor: "bg-[#cc9966]/5 group-hover:bg-[#cc9966]/10", textColor: "text-[#cc9966]", borderColor: "border-[#cc9966]/20 group-hover:border-[#cc9966]/45" },
  "Claude Sonnet": { name: "Anthropic Claude Sonnet", logo: <ClaudeLogo />, bgColor: "bg-[#cc9966]/5 group-hover:bg-[#cc9966]/10", textColor: "text-[#cc9966]", borderColor: "border-[#cc9966]/20 group-hover:border-[#cc9966]/45" },
  "DeepSeek-V3": { name: "DeepSeek V3", logo: <DeepSeekLogo />, bgColor: "bg-[#1e88e5]/5 group-hover:bg-[#1e88e5]/10", textColor: "text-[#1e88e5]", borderColor: "border-[#1e88e5]/20 group-hover:border-[#1e88e5]/45" },
  "DeepSeek-Coder": { name: "DeepSeek Coder", logo: <DeepSeekLogo />, bgColor: "bg-[#1e88e5]/5 group-hover:bg-[#1e88e5]/10", textColor: "text-[#1e88e5]", borderColor: "border-[#1e88e5]/20 group-hover:border-[#1e88e5]/45" },
  "text-embedding-3": { name: "OpenAI Embedding", logo: <OpenAILogo />, bgColor: "bg-[#10a37f]/5 group-hover:bg-[#10a37f]/10", textColor: "text-[#10a37f]", borderColor: "border-[#10a37f]/20 group-hover:border-[#10a37f]/45" },
  "Cohere Embed": { name: "Cohere Embed", logo: <CohereLogo />, bgColor: "bg-[#6c5ce7]/5 group-hover:bg-[#6c5ce7]/10", textColor: "text-[#6c5ce7]", borderColor: "border-[#6c5ce7]/20 group-hover:border-[#6c5ce7]/45" },
  "Qwen-VL": { name: "Alibaba Qwen-VL", logo: <QwenLogo />, bgColor: "bg-[#ff7675]/5 group-hover:bg-[#ff7675]/10", textColor: "text-[#ff7675]", borderColor: "border-[#ff7675]/20 group-hover:border-[#ff7675]/45" },
  "Qwen-Coder": { name: "Alibaba Qwen-Coder", logo: <QwenLogo />, bgColor: "bg-[#ff7675]/5 group-hover:bg-[#ff7675]/10", textColor: "text-[#ff7675]", borderColor: "border-[#ff7675]/20 group-hover:border-[#ff7675]/45" },
  "Whisper Large": { name: "OpenAI Whisper", logo: <OpenAILogo />, bgColor: "bg-[#10a37f]/5 group-hover:bg-[#10a37f]/10", textColor: "text-[#10a37f]", borderColor: "border-[#10a37f]/20 group-hover:border-[#10a37f]/45" },
  "ElevenLabs": { name: "ElevenLabs Voice", logo: <ElevenLabsLogo />, bgColor: "bg-[#00cec9]/5 group-hover:bg-[#00cec9]/10", textColor: "text-[#00cec9]", borderColor: "border-[#00cec9]/20 group-hover:border-[#00cec9]/45" },
};

// Help helper to match custom SVGs
const parseModels = (exampleStr: string) => {
  return exampleStr.split(",").map(item => item.trim());
};

// Category need Icons
const getNeedIcon = (index: number) => {
  switch (index) {
    case 0:
      return FileText;
    case 1:
      return Search;
    case 2:
      return Eye;
    case 3:
      return Mic;
    case 4:
      return Code;
    default:
      return FileText;
  }
};

export default function ModelHubSection() {
  const { language, t } = useLanguage();
  const currentRows = modelHubRows[language];

  return (
    <section id="model-hub" className="py-20 bg-slate-50/50 border-t border-slate-200/60 relative overflow-hidden">
      
      {/* Glow animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes sweepGlow {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .bg-sweep {
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.03), transparent);
          background-size: 200% 100%;
        }
        .group:hover .bg-sweep {
          animation: sweepGlow 2.5s infinite linear;
        }
      `}} />

      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/[0.015] rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/[0.015] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
            <Cpu className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
            <span>AI Model Hub</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t({ vi: "Chọn Đúng Model AI Trước Khi Triển Khai", en: "Choose the Right AI Model Before Deployment" })}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed tracking-wide">
            {t({
              vi: "Chúng tôi tư vấn tích hợp model tối ưu theo 5 tiêu chí kỹ thuật: độ chính xác, chi phí, tốc độ, bảo mật và khả năng mở rộng.",
              en: "We advise integrating the optimal model based on 5 technical criteria: accuracy, cost, speed, security, and scalability.",
            })}
          </p>
        </div>

        {/* Balanced Horizontal Dashboard (Desktop) */}
        <div className="hidden lg:block max-w-6xl mx-auto space-y-4">
          
          {/* Header Row */}
          <div className="grid grid-cols-12 px-6 text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest pb-2 border-b border-slate-200">
            <div className="col-span-3">{t({ vi: "Nhu cầu thực tế", en: "Real-world Needs" })}</div>
            <div className="col-span-3">{t({ vi: "Loại model phù hợp", en: "Suitable Model Type" })}</div>
            <div className="col-span-3">{t({ vi: "Ví dụ ứng dụng & Hãng", en: "Supported Brands" })}</div>
            <div className="col-span-3 text-right">{t({ vi: "Cách triển khai", en: "Deployment Method" })}</div>
          </div>

          {/* Row Cards */}
          {currentRows.map((row, index) => {
            const Icon = getNeedIcon(index);
            const brands = parseModels(row.example);

            return (
              <div
                key={index}
                className="grid grid-cols-12 items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/[0.04] transition-all duration-300 group relative overflow-hidden"
              >
                {/* Sweep hover glow effect */}
                <div className="absolute inset-0 bg-sweep pointer-events-none"></div>

                {/* Column 1: Nhu cầu thực tế */}
                <div className="col-span-3 flex items-center gap-3.5 relative z-10">
                  <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300 leading-snug">
                      {row.need}
                    </h4>
                  </div>
                </div>

                {/* Column 2: Loại model phù hợp */}
                <div className="col-span-3 pl-2 relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-blue-700 transition-all duration-300">
                    <Cpu className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500 group-hover:animate-pulse" />
                    <span>{row.modelType}</span>
                  </div>
                </div>

                {/* Column 3: Ví dụ model (Logos) */}
                <div className="col-span-3 flex items-center gap-2 flex-wrap relative z-10">
                  {brands.map((brandName, idx) => {
                    const meta = modelBrands[brandName];
                    return (
                      <div
                        key={idx}
                        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border bg-slate-50 font-mono text-[10px] transition-all duration-300 ${
                          meta 
                            ? `${meta.bgColor} ${meta.textColor} ${meta.borderColor}` 
                            : "border-slate-200 text-slate-500"
                        }`}
                      >
                        {meta?.logo}
                        <span className="font-semibold">{brandName}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Column 4: Cách triển khai */}
                <div className="col-span-3 text-right relative z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50/50 border border-emerald-150 text-xs font-mono font-bold text-emerald-800 group-hover:bg-emerald-50 group-hover:border-emerald-250 transition-all duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>{row.deployment}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsive Mobile Layout (md and below) */}
        <div className="lg:hidden space-y-4 max-w-lg mx-auto">
          {currentRows.map((row, index) => {
            const Icon = getNeedIcon(index);
            const brands = parseModels(row.example);

            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Header: Need */}
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 text-blue-600">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold font-mono text-slate-400 uppercase tracking-wider block">
                      {t({ vi: "Nhu cầu thực tế", en: "Real-world Need" })}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 mt-0.5">{row.need}</h4>
                  </div>
                </div>

                {/* Grid items */}
                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-100">
                  <div>
                    <span className="text-[9px] font-bold font-mono text-slate-400 uppercase tracking-wider block">
                      {t({ vi: "Model phù hợp", en: "Suitable Model" })}
                    </span>
                    <span className="inline-block mt-1 text-[11px] font-bold text-blue-700">
                      {row.modelType}
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold font-mono text-slate-400 uppercase tracking-wider block">
                      {t({ vi: "Cách triển khai", en: "Deployment" })}
                    </span>
                    <p className="text-[10px] font-mono text-emerald-700 mt-1 font-semibold flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                      {row.deployment}
                    </p>
                  </div>
                </div>

                {/* Brands/Logos */}
                <div className="pt-2">
                  <span className="text-[9px] font-bold font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                    {t({ vi: "Mẫu Model & Hãng", en: "Supported Brands" })}
                  </span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {brands.map((brandName, idx) => {
                      const meta = modelBrands[brandName];
                      return (
                        <div
                          key={idx}
                          className={`flex items-center gap-1 px-2.5 py-1.5 rounded bg-slate-50 border font-mono text-[9px] ${
                            meta 
                              ? `${meta.textColor} ${meta.borderColor}` 
                              : "border-slate-200 text-slate-600"
                          }`}
                        >
                          {meta?.logo}
                          <span>{brandName}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote card */}
        <div className="mt-12 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-700 font-medium bg-blue-50/60 py-4 rounded-2xl border border-blue-100 max-w-3xl mx-auto px-5 text-center shadow-sm leading-relaxed">
          <ShieldAlert className="w-4.5 h-4.5 text-blue-600 flex-shrink-0 animate-bounce" />
          <span>
            {t({
              vi: "Chúng tôi cam kết không bán model thương mại chung chung mà tư vấn cấu hình RAG/Fine-tuning tối ưu.",
              en: "We pledge not to sell generic commercial models but to advise on optimal RAG/Fine-tuning configuration.",
            })}
          </span>
        </div>

      </div>
    </section>
  );
}
