"use client";

import React, { useState } from "react";
import { workflowSteps } from "@/data/landingData";
import { 
  ClipboardList, 
  LayoutTemplate, 
  Network, 
  Settings, 
  ClipboardCheck, 
  GraduationCap, 
  TrendingUp,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [
  <ClipboardList key="survey" className="w-5 h-5" />,
  <LayoutTemplate key="design" className="w-5 h-5" />,
  <Network key="model" className="w-5 h-5" />,
  <Settings key="proto" className="w-5 h-5" />,
  <ClipboardCheck key="test" className="w-5 h-5" />,
  <GraduationCap key="train" className="w-5 h-5" />,
  <TrendingUp key="optimize" className="w-5 h-5" />,
];

const stepDetails = {
  vi: [
    {
      bullets: [
        "Khảo sát hạ tầng & dữ liệu hiện có",
        "Đo lường mức độ sẵn sàng của nhân sự",
        "Xác định bài toán ưu tiên giải quyết"
      ],
      highlight: "Khảo sát thực tế 100%"
    },
    {
      bullets: [
        "Sơ đồ kiến trúc RAG & bảo mật dữ liệu",
        "Thiết kế giao diện chat & workflow mẫu",
        "Lập cấu hình tích hợp API/Local Server"
      ],
      highlight: "Thiết kế tối ưu"
    },
    {
      bullets: [
        "So sánh OpenAI, Claude, DeepSeek...",
        "Đánh giá chi phí token và tốc độ phản hồi",
        "Kiểm thử khả năng xử lý tiếng Việt"
      ],
      highlight: "Tư vấn Model độc lập"
    },
    {
      bullets: [
        "Triển khai phiên bản MVP trong 7 ngày",
        "Tải tài liệu mẫu để kiểm tra chất lượng RAG",
        "Nhận phản hồi nhanh từ ban quản lý"
      ],
      highlight: "Triển khai thần tốc"
    },
    {
      bullets: [
        "Đánh giá UAT với người dùng thực tế",
        "Tinh chỉnh câu lệnh System Prompt tối ưu",
        "Tối ưu hóa tham số AI (Temperature, Top-P)"
      ],
      highlight: "Độ chính xác cao"
    },
    {
      bullets: [
        "Tập huấn viết Prompt cho nhân sự/giáo viên",
        "Cẩm nang hướng dẫn sử dụng công cụ AI",
        "Chuyển giao tài liệu kỹ thuật chi tiết"
      ],
      highlight: "Chuyển giao trọn gói"
    },
    {
      bullets: [
        "Giám sát hiệu năng và chi phí API tự động",
        "Cập nhật các mô hình AI mới nhất hàng quý",
        "Tinh chỉnh bổ sung dữ liệu tri thức mới"
      ],
      highlight: "Đồng hành lâu dài"
    }
  ],
  en: [
    {
      bullets: [
        "Audit existing infrastructure & data",
        "Assess team readiness & AI literacy",
        "Define prioritized core problems to solve"
      ],
      highlight: "100% Practical Audit"
    },
    {
      bullets: [
        "Design RAG architecture & data security",
        "Design mock chat UI & workspace workflows",
        "Configure API/Local Server integration plans"
      ],
      highlight: "Optimal Design"
    },
    {
      bullets: [
        "Benchmark OpenAI, Claude, DeepSeek...",
        "Evaluate token costs & response latencies",
        "Test accuracy of Vietnamese language processing"
      ],
      highlight: "Independent Model Consulting"
    },
    {
      bullets: [
        "Deploy working MVP within 7 days",
        "Upload sample documents to verify RAG quality",
        "Gather rapid feedback from stakeholders"
      ],
      highlight: "Rapid Deployment"
    },
    {
      bullets: [
        "Conduct UAT with actual target users",
        "Fine-tune system prompts & instructions",
        "Optimize hyper-parameters (Temperature, Top-P)"
      ],
      highlight: "High Accuracy"
    },
    {
      bullets: [
        "Deliver prompt engineering training for staff/teachers",
        "Provide AI tool usage manuals",
        "Transfer detailed technical documents"
      ],
      highlight: "Full Handover"
    },
    {
      bullets: [
        "Monitor performance & automate API cost checks",
        "Update the latest AI models quarterly",
        "Continuously append fresh knowledge bases"
      ],
      highlight: "Long-term Partnership"
    }
  ]
};

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);
  const { language, t } = useLanguage();
  const currentWorkflowSteps = workflowSteps[language];

  const activeStepItem = currentWorkflowSteps[activeStep];
  const activeDetail = stepDetails[language][activeStep];

  return (
    <section id="quy-trinh" className="py-24 bg-transparent border-t border-slate-200/60 relative overflow-hidden">
      
      {/* Projector Animation CSS Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes projector-beam {
          0%, 100% { 
            opacity: 0.85; 
            transform: translateX(-50%) scaleX(1); 
            filter: blur(4px);
          }
          50% { 
            opacity: 0.7; 
            transform: translateX(-50%) scaleX(1.03); 
            filter: blur(6px);
          }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes screen-flicker {
          0%, 100% { opacity: 0.99; }
          23% { opacity: 0.99; }
          24% { opacity: 0.96; }
          26% { opacity: 0.98; }
          27% { opacity: 0.93; }
          35% { opacity: 0.93; }
          36% { opacity: 0.99; }
          70% { opacity: 0.99; }
          71% { opacity: 0.95; }
          72% { opacity: 0.98; }
          90% { opacity: 0.98; }
          91% { opacity: 0.92; }
          93% { opacity: 0.94; }
          94% { opacity: 0.99; }
        }
        .animate-projector-beam {
          animation: projector-beam 4s infinite ease-in-out;
        }
        .animate-screen-flicker {
          animation: screen-flicker 5s infinite;
        }
      `}} />

      {/* Background glow decoration */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-500/[0.015] rounded-full blur-[130px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
            <span>{t({ vi: "Phương Pháp Làm Việc", en: "Our Methodology" })}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t({ vi: "Quy Trình Triển Khai Từ Tư Vấn Đến Vận Hành", en: "Deployment Workflow from Consultation to Operation" })}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed tracking-wide">
            {t({
              vi: "Quy trình chuẩn hóa giúp đảm bảo chất lượng kỹ thuật, tính thực tiễn cao và chuyển giao công nghệ mượt mà.",
              en: "Standardized processes ensure high engineering quality, practical usefulness, and smooth technology transfer.",
            })}
          </p>
        </div>

        {/* 1. PROJECTOR DISPLAY SCREEN */}
        <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-xl p-8 sm:p-10 md:p-12 max-w-5xl mx-auto mb-12 ring-1 ring-blue-500/10">
          
          {/* Futuristic Screen Overlays */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0)_50%,rgba(59,130,246,0.02)_50%,rgba(59,130,246,0.02))] bg-[size:100%_4px] pointer-events-none opacity-20 z-10" />
          
          <div 
            className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/15 to-transparent blur-[1px] pointer-events-none z-10" 
            style={{ animation: 'scanline 6s linear infinite' }} 
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.02),transparent_80%)] pointer-events-none z-10" />

          {/* Inner Grid */}
          <div key={activeStep} className="animate-screen-flicker grid grid-cols-1 md:grid-cols-12 gap-10 items-center relative z-20">
            
            {/* Visual Screen Left (7 columns) */}
            <div className="md:col-span-7 relative group rounded-2xl overflow-hidden border border-slate-200/60 bg-slate-50 shadow-inner flex items-center justify-center aspect-[4/3]">
              
              <div className="absolute inset-0 bg-blue-500/[0.01] mix-blend-overlay pointer-events-none z-10" />
              
              <img
                src={`/NextgenAI/images/workflow_step${activeStep + 1}.png`}
                alt={activeStepItem.title}
                className="w-full h-full object-contain"
              />

              {/* Hologram metadata overlay */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-white/90 border border-slate-200 text-[10px] font-mono text-blue-600 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                <span>SYS_PROJ: STEP_0{activeStepItem.step}</span>
              </div>

              <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-white/90 border border-slate-200 text-[9px] font-mono text-slate-500 shadow-sm">
                RESOLUTION: 1080P
              </div>
            </div>

            {/* Content Display Right (5 columns) */}
            <div className="md:col-span-5 space-y-6 text-left text-slate-800">
              
              {/* High-tech index badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-50 border border-blue-200/60 text-xs font-mono font-bold text-blue-600 tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {t({ vi: "BƯỚC", en: "STEP" })} 0{activeStepItem.step} / 07
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {activeStepItem.title}
              </h3>

              {/* Main description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium tracking-wide">
                {activeStepItem.description}
              </p>

              {/* Dynamic bullet tasks list */}
              <ul className="space-y-3 pt-2 border-t border-slate-100">
                {activeDetail.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-500">
                    <CheckCircle2 className="w-4.5 h-4.5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom highlight pill */}
              <div className="pt-2">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded border border-emerald-200/60">
                  {activeDetail.highlight}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* 2. THE PROJECTOR BEAM EMITTER LENS */}
        <div className="relative flex justify-center -mt-16 mb-12">
          
          <div className="w-16 h-4 bg-slate-100 border border-slate-200 rounded-b-2xl shadow flex items-center justify-center relative z-20">
            <div className="w-3.5 h-3.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)] animate-pulse" />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[75%] h-[120px] bg-gradient-to-t from-blue-400/8 via-blue-400/[0.01] to-transparent [clip-path:polygon(47%_100%,53%_100%,100%_0%,0%_0%)] pointer-events-none animate-projector-beam z-10" />
        </div>

        {/* 3. LOGOS / ICONS BAR (ARRANGED AT THE BOTTOM) */}
        <div className="max-w-5xl mx-auto pt-6 border-t border-slate-200/60">

          <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 sm:gap-4">
            {currentWorkflowSteps.map((stepItem, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={stepItem.step}
                  onClick={() => setActiveStep(index)}
                  className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center gap-2.5 cursor-pointer relative group ${
                    isActive
                      ? "bg-white border-blue-500/70 shadow-lg shadow-blue-100/30 scale-102 z-10 ring-1 ring-blue-500/20"
                      : "bg-white/50 border-slate-200 hover:border-slate-350 hover:bg-white"
                  }`}
                >
                  {/* Step Icon circle */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105"
                      : "bg-slate-50 border border-slate-100 text-slate-600 group-hover:scale-105"
                  }`}>
                    {icons[index]}
                  </div>

                  {/* Step metadata */}
                  <div>
                    <span className={`block text-[10px] font-mono font-bold uppercase ${
                      isActive ? "text-blue-600" : "text-slate-400"
                    }`}>
                      {t({ vi: `Bước 0${stepItem.step}`, en: `Step 0${stepItem.step}` })}
                    </span>
                    <span className={`block text-[11px] font-bold mt-0.5 leading-tight tracking-tight ${
                      isActive ? "text-slate-900" : "text-slate-700"
                    }`}>
                      {stepItem.title.split(" ").slice(0, 2).join(" ")}
                    </span>
                  </div>

                  {/* Active bottom bar glow indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/4 right-1/4 h-[3px] bg-blue-500 rounded-t-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
