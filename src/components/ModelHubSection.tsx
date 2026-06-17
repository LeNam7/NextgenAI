import React from "react";
import { modelHubRows } from "@/data/landingData";
import { Cpu, ShieldAlert } from "lucide-react";

export default function ModelHubSection() {
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
            Chọn Đúng Model AI Trước Khi Triển Khai
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Chúng tôi tư vấn tích hợp model tối ưu theo 5 tiêu chí kỹ thuật: độ chính xác, chi phí, tốc độ, bảo mật và khả năng mở rộng.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full divide-y divide-slate-200 text-left">
            <thead className="bg-slate-50 font-bold text-slate-700 text-xs uppercase tracking-wider font-mono">
              <tr>
                <th className="px-6 py-4">Nhu cầu thực tế</th>
                <th className="px-6 py-4">Loại model phù hợp</th>
                <th className="px-6 py-4">Ví dụ ứng dụng</th>
                <th className="px-6 py-4 text-right">Cách triển khai</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-750 text-xs">
              {modelHubRows.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td className="px-6 py-5 font-bold text-slate-900 max-w-[200px]">
                    {row.need}
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded bg-blue-50 border border-blue-150 text-blue-800 font-bold">
                      {row.modelType}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-slate-650">
                    {row.example}
                  </td>
                  <td className="px-6 py-5 text-right font-mono text-slate-650">
                    {row.deployment}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Grid/Card View */}
        <div className="md:hidden space-y-4">
          {modelHubRows.map((row, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm"
            >
              <div>
                <h4 className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-semibold">Nhu cầu</h4>
                <p className="text-sm font-bold text-slate-900 mt-1">{row.need}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-100">
                <div>
                  <h4 className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-semibold">Model phù hợp</h4>
                  <span className="inline-block mt-1 text-[11px] font-bold text-blue-700">
                    {row.modelType}
                  </span>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-semibold">Cách triển khai</h4>
                  <p className="text-[11px] font-mono text-slate-650 mt-1">{row.deployment}</p>
                </div>
              </div>
              <div className="pt-2">
                <h4 className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-semibold">Ví dụ model</h4>
                <p className="text-xs text-slate-600 mt-1">{row.example}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-700 font-medium bg-blue-50/60 py-3 rounded-xl border border-blue-100 max-w-3xl mx-auto px-4 text-center shadow-sm">
          <ShieldAlert className="w-4 h-4 text-blue-600 flex-shrink-0" />
          <span>Chúng tôi cam kết <b className="text-slate-900 font-bold">không bán model thương mại chung chung</b> mà tư vấn cấu hình RAG/Fine-tuning tối ưu.</span>
        </div>

      </div>
    </section>
  );
}
