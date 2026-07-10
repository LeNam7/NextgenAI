"use client";

import React, { useState, useEffect } from "react";
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
        "Tập huấn viết Prompt cho nhân sự vận hành",
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
        "Deliver prompt engineering training for operational staff",
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
  const [isPaused, setIsPaused] = useState(false);
  const { language, t } = useLanguage();
  const currentWorkflowSteps = workflowSteps[language];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % currentWorkflowSteps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeStep, isPaused, currentWorkflowSteps.length]);

  const activeStepItem = currentWorkflowSteps[activeStep];
  const activeDetail = stepDetails[language][activeStep];

  return (
    <section id="quy-trinh" className="py-24 bg-transparent border-t border-slate-200/60 relative overflow-hidden">
      
      {/* Projector Animation CSS Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes projector-beam {
          0%, 100% { 
            opacity: 0.45; 
            transform: translateX(-50%) scaleX(1); 
            filter: blur(8px);
          }
          50% { 
            opacity: 0.65; 
            transform: translateX(-50%) scaleX(1.08); 
            filter: blur(12px);
          }
        }
        @keyframes lens-flare {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 16px rgba(59, 130, 246, 0.6), 0 0 32px rgba(59, 130, 246, 0.4);
          }
          50% {
            transform: scale(1.15);
            box-shadow: 0 0 24px rgba(59, 130, 246, 0.8), 0 0 48px rgba(59, 130, 246, 0.6);
          }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes screenProjection {
          0% {
            opacity: 0;
            transform: scale(0.97) translateY(-6px);
            filter: brightness(2) blur(8px) contrast(1.3);
          }
          15% {
            opacity: 0.85;
            transform: scale(0.99) translateY(-2px);
            filter: brightness(1.6) blur(4px) contrast(1.1);
          }
          30% {
            opacity: 0.8;
            filter: brightness(1.3) blur(3px) contrast(1.2);
          }
          40% {
            opacity: 0.95;
            filter: brightness(0.9) blur(1px) contrast(1);
          }
          55% {
            opacity: 0.9;
            filter: brightness(1.1) blur(2px) contrast(1.05);
          }
          70% {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: brightness(1) blur(0px) contrast(1);
          }
        }
        @keyframes textFocus {
          0% { opacity: 0; filter: blur(4px); }
          100% { opacity: 1; filter: blur(0); }
        }
        @keyframes progressFill {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-projector-beam {
          animation: projector-beam 4s infinite ease-in-out;
        }
        .animate-lens-flare {
          animation: lens-flare 3s infinite ease-in-out;
        }
        .animate-projector-screen {
          animation: screenProjection 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-text-focus {
          animation: textFocus 0.4s ease-out forwards;
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
        <div className="max-w-5xl mx-auto mb-16 relative">
          
          {/* Casing for the drop-down projector screen */}
          <div className="h-4 bg-slate-900 rounded-full mx-auto w-[94%] flex items-center justify-between px-6 shadow-md relative z-30 border-b border-slate-800">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700 shadow-inner"></div>
            <div className="w-20 h-1 bg-slate-800 rounded-full"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700 shadow-inner"></div>
          </div>

          <div 
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative overflow-hidden rounded-b-3xl rounded-t-lg bg-slate-950 border-[8px] border-slate-900 shadow-2xl p-8 sm:p-10 md:p-12 -mt-1.5 z-20"
          >
            {/* Futuristic Screen Overlays */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0)_50%,rgba(59,130,246,0.015)_50%,rgba(59,130,246,0.015))] bg-[size:100%_4px] pointer-events-none opacity-20 z-10" />
            
            <div 
              className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent blur-[1px] pointer-events-none z-10" 
              style={{ animation: 'scanline 8s linear infinite' }} 
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_70%)] pointer-events-none z-10" />

            {/* Inner Grid */}
            <div key={activeStep} className="animate-projector-screen grid grid-cols-1 md:grid-cols-12 gap-10 items-center relative z-20">
              
              {/* Visual Screen Left (7 columns) */}
              <div className="md:col-span-7 relative group rounded-2xl overflow-hidden border border-slate-850 bg-slate-900 shadow-inner flex items-center justify-center aspect-[4/3] z-10">
                
                <div className="absolute inset-0 bg-blue-500/[0.02] mix-blend-overlay pointer-events-none z-10" />
                
                <img
                  src={`/NextgenAI/images/workflow_step${activeStep + 1}.png`}
                  alt={activeStepItem.title}
                  className="w-full h-full object-contain filter brightness-[0.88] contrast-[1.05]"
                />

                {/* Hologram metadata overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-cyan-400 shadow-sm z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span>SYS_PROJ: STEP_0{activeStepItem.step}</span>
                </div>

                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-[9px] font-mono text-slate-500 shadow-sm z-10">
                  FPS: 60 // BEAM: ACTIVE
                </div>

                {/* Corner Crop Marks */}
                <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-blue-500/40 pointer-events-none z-10"></div>
                <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t border-r border-blue-500/40 pointer-events-none z-10"></div>
                <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b border-l border-blue-500/40 pointer-events-none z-10"></div>
                <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b border-r border-blue-500/40 pointer-events-none z-10"></div>
              </div>

              {/* Content Display Right (5 columns) */}
              <div className="md:col-span-5 space-y-6 text-left text-slate-300">
                
                {/* High-tech index badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-500/10 border border-blue-500/30 text-xs font-mono font-bold text-blue-400 tracking-widest uppercase shadow-[0_0_12px_rgba(59,130,246,0.15)]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>
                    {t({ vi: "BƯỚC", en: "STEP" })} 0{activeStepItem.step} / 07
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  {activeStepItem.title}
                </h3>

                {/* Main description */}
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-medium tracking-wide">
                  {activeStepItem.description}
                </p>

                {/* Dynamic bullet tasks list */}
                <ul className="space-y-3.5 pt-4 border-t border-slate-800/80">
                  {activeDetail.bullets.map((bullet, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 animate-text-focus"
                      style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                    >
                      <CheckCircle2 className="w-4.5 h-4.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom highlight pill */}
                <div className="pt-2">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.1)]">
                    {activeDetail.highlight}
                  </span>
                </div>
              </div>

            </div>

            {/* Auto-advance progress bar at the bottom edge */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-900/50 z-20">
              <div 
                key={activeStep}
                className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 transition-all"
                style={{
                  animation: 'progressFill 5s linear forwards',
                  animationPlayState: isPaused ? 'paused' : 'running'
                }}
              />
            </div>

          </div>
        </div>

        {/* 2. THE PROJECTOR BEAM EMITTER LENS */}
        <div className="relative flex flex-col items-center -mt-16 mb-16">
          {/* Conical light beam pointing UPWARD to the screen */}
          <div 
            key={activeStep}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-[150px] bg-gradient-to-t from-blue-500/10 via-blue-500/[0.005] to-transparent [clip-path:polygon(48%_100%,52%_100%,100%_0%,0%_0%)] pointer-events-none z-10 animate-projector-beam" 
          />

          {/* Lens housing */}
          <div className="w-20 h-5 bg-slate-900 border border-slate-800 rounded-b-2xl shadow-xl flex items-center justify-center relative z-25">
            {/* Glowing projector lens */}
            <div className="w-4 h-4 rounded-full bg-blue-500 animate-lens-flare" />
          </div>
        </div>

        {/* 3. LOGOS / ICONS BAR (ARRANGED AT THE BOTTOM) */}
        <div className="max-w-5xl mx-auto pt-8 border-t border-slate-200/60">

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
