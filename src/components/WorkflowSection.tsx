import React from "react";
import { workflowSteps } from "@/data/landingData";
import { ClipboardList, LayoutTemplate, Network, Settings, ClipboardCheck, GraduationCap, TrendingUp } from "lucide-react";

const icons = [
  <ClipboardList key="survey" className="w-5 h-5 text-blue-600" />,
  <LayoutTemplate key="design" className="w-5 h-5 text-blue-600" />,
  <Network key="model" className="w-5 h-5 text-blue-600" />,
  <Settings key="proto" className="w-5 h-5 text-blue-600" />,
  <ClipboardCheck key="test" className="w-5 h-5 text-blue-600" />,
  <GraduationCap key="train" className="w-5 h-5 text-blue-600" />,
  <TrendingUp key="optimize" className="w-5 h-5 text-blue-600" />,
];

export default function WorkflowSection() {
  return (
    <section id="quy-trinh" className="py-24 bg-transparent border-t border-slate-200/60 relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-500/[0.01] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
            <span>Phương Pháp Làm Việc</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Quy Trình Triển Khai Từ Tư Vấn Đến Vận Hành
          </h2>
          <p className="text-slate-655 text-sm sm:text-base">
            Quy trình chuẩn hóa giúp đảm bảo chất lượng kỹ thuật, tính thực tiễn cao và chuyển giao công nghệ mượt mà.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden lg:block absolute top-14 left-[5%] right-[5%] h-[2px] bg-blue-200/40 -z-10"></div>

          {workflowSteps.map((stepItem, index) => (
            <div
              key={stepItem.step}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-500/30 shadow-sm hover:shadow-md transition-all duration-300 relative group flex flex-col items-center lg:items-start text-center lg:text-left space-y-4"
            >
              {/* Step indicator bubble */}
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center relative group-hover:scale-110 transition-transform">
                {icons[index]}
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-[8px] font-bold text-slate-500 font-mono">
                  {stepItem.step}
                </span>
              </div>

              {/* Text */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {stepItem.title}
                </h3>
                <p className="text-[11px] text-slate-655 leading-relaxed">
                  {stepItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
