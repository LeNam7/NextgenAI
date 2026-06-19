"use client";

import React from "react";
import { modelHubRows } from "@/data/landingData";
import { Cpu, ShieldAlert } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ModelHubSection() {
  const { language, t } = useLanguage();
  const currentRows = modelHubRows[language];

  return (
    <section id="model-hub" className="py-24 bg-transparent border-t border-slate-200/60 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-500/[0.01] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span>AI Model Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t({ vi: "Chọn Đúng Model AI Trước Khi Triển Khai", en: "Choose the Right AI Model Before Deployment" })}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed tracking-wide">
            {t({
              vi: "Chúng tôi tư vấn tích hợp model tối ưu theo 5 tiêu chí kỹ thuật: độ chính xác, chi phí, tốc độ, bảo mật và khả năng mở rộng.",
              en: "We advise integrating the optimal model based on 5 technical criteria: accuracy, cost, speed, security, and scalability.",
            })}
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full divide-y divide-slate-200 text-left">
            <thead className="bg-slate-50 font-bold text-slate-700 text-xs uppercase tracking-wider font-mono border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">{t({ vi: "Nhu cầu thực tế", en: "Real-world Needs" })}</th>
                <th className="px-6 py-4">{t({ vi: "Loại model phù hợp", en: "Suitable Model Type" })}</th>
                <th className="px-6 py-4">{t({ vi: "Ví dụ ứng dụng", en: "Example Applications" })}</th>
                <th className="px-6 py-4 text-right">{t({ vi: "Cách triển khai", en: "Deployment Method" })}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 text-sm leading-relaxed">
              {currentRows.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td className="px-6 py-5 font-bold text-slate-900 max-w-[200px]">
                    {row.need}
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded bg-blue-50 border border-blue-150 text-blue-800 font-bold text-xs">
                      {row.modelType}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-slate-600">
                    {row.example}
                  </td>
                  <td className="px-6 py-5 text-right font-mono text-slate-600 text-xs">
                    {row.deployment}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Grid/Card View */}
        <div className="md:hidden space-y-4">
          {currentRows.map((row, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3.5 shadow-sm"
            >
              <div>
                <h4 className="text-[11px] uppercase font-mono tracking-wider text-slate-500 font-bold">
                  {t({ vi: "Nhu cầu", en: "Need" })}
                </h4>
                <p className="text-sm font-bold text-slate-900 mt-1">{row.need}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-100">
                <div>
                  <h4 className="text-[11px] uppercase font-mono tracking-wider text-slate-500 font-bold">
                    {t({ vi: "Model phù hợp", en: "Suitable Model" })}
                  </h4>
                  <span className="inline-block mt-1 text-xs font-bold text-blue-700">
                    {row.modelType}
                  </span>
                </div>
                <div>
                  <h4 className="text-[11px] uppercase font-mono tracking-wider text-slate-500 font-bold">
                    {t({ vi: "Cách triển khai", en: "Deployment" })}
                  </h4>
                  <p className="text-xs font-mono text-slate-600 mt-1">{row.deployment}</p>
                </div>
              </div>
              <div className="pt-2">
                <h4 className="text-[11px] uppercase font-mono tracking-wider text-slate-500 font-bold">
                  {t({ vi: "Ví dụ model", en: "Example Model" })}
                </h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">{row.example}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-700 font-medium bg-blue-50/60 py-4 rounded-2xl border border-blue-100 max-w-3xl mx-auto px-5 text-center shadow-sm leading-relaxed">
          <ShieldAlert className="w-4.5 h-4.5 text-blue-600 flex-shrink-0" />
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
