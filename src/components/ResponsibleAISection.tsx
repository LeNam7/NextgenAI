"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, EyeOff, ClipboardCheck, Users, FileText, Compass, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [
  <ShieldCheck key="access" className="w-5 h-5 text-blue-600" />,
  <EyeOff key="privacy" className="w-5 h-5 text-blue-600" />,
  <ClipboardCheck key="hallucinate" className="w-5 h-5 text-blue-600" />,
  <Users key="student" className="w-5 h-5 text-blue-600" />,
  <FileText key="verify" className="w-5 h-5 text-blue-600" />,
  <Compass key="guardrails" className="w-5 h-5 text-blue-600" />,
];

function SvgGuardianBot({ stepIndex }: { stepIndex: number }) {
  return (
    <div className="relative w-40 h-40 flex items-center justify-center animate-float">
      {/* Laser scanner ring beneath bot */}
      <div className="absolute bottom-2 w-32 h-6 bg-blue-500/10 rounded-full border border-blue-500/30 blur-[2px] animate-pulse"></div>

      <svg className="w-full h-full relative z-10" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="guardGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="visorGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
          <linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <filter id="visorGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Floating platform shadow */}
        <ellipse cx="100" cy="180" rx="35" ry="5" fill="rgba(30, 41, 59, 0.2)" />

        {/* ==================== BACKGROUND THEME ELEMENTS ==================== */}
        {stepIndex === 0 && (
          /* Multi-level lock gates behind bot */
          <g className="opacity-30 animate-pulse">
            <circle cx="100" cy="100" r="75" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="60" stroke="#3b82f6" strokeWidth="1.5" />
          </g>
        )}
        
        {stepIndex === 1 && (
          /* Privacy eye shield behind bot */
          <g className="opacity-20">
            <path d="M50 100c20-30 80-30 100 0-20 30-80 30-100 0z" stroke="#3b82f6" strokeWidth="2" />
            <line x1="60" y1="60" x2="140" y2="140" stroke="#ef4444" strokeWidth="4" />
          </g>
        )}

        {stepIndex === 2 && (
          /* Hallucination control: floating text grids */
          <g className="opacity-30">
            <rect x="25" y="40" width="30" height="20" rx="2" fill="#1e293b" stroke="#3b82f6" />
            <line x1="30" y1="47" x2="50" y2="47" stroke="#60a5fa" strokeWidth="2" />
            <line x1="30" y1="53" x2="45" y2="53" stroke="#60a5fa" strokeWidth="2" />
            
            {/* Hologram projection beam */}
            <polygon points="100,100 25,40 55,40" fill="rgba(59,130,246,0.1)" />
          </g>
        )}

        {stepIndex === 3 && (
          /* Student rules: graduation cap / book */
          <g className="opacity-30">
            <path d="M40 70l20-10 20 10-20 10z" fill="#475569" />
            <line x1="60" y1="70" x2="60" y2="85" stroke="#475569" strokeWidth="2" />
          </g>
        )}

        {stepIndex === 4 && (
          /* Content Verification: giant check list */
          <g className="opacity-30">
            <rect x="30" y="45" width="25" height="30" rx="2" fill="#1e293b" stroke="#10b981" />
            <path d="M35 55l3 3 5-5" stroke="#10b981" strokeWidth="2" fill="none" />
            <path d="M35 68l3 3 5-5" stroke="#10b981" strokeWidth="2" fill="none" />
          </g>
        )}

        {stepIndex === 5 && (
          /* Age-appropriate Guardrails: digital laser fence behind bot */
          <g className="opacity-45">
            <line x1="20" y1="80" x2="180" y2="80" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="20" y1="120" x2="180" y2="120" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
          </g>
        )}

        {/* ==================== GUARDIAN BOT BODY ==================== */}
        {/* Neck */}
        <rect x="93" y="92" width="14" height="10" fill="#475569" rx="1" />

        {/* Torso */}
        <rect x="72" y="100" width="56" height="48" rx="14" fill="url(#guardGrad)" stroke="#1e3a8a" strokeWidth="2.5" />
        {/* Chest Plate */}
        <rect x="80" y="108" width="40" height="24" rx="4" fill="#0f172a" stroke="#3b82f6" strokeWidth="1" />

        {/* Chest detail */}
        {stepIndex === 0 && (
          /* Access granted check mark */
          <path d="M90 120l7 7 13-13" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        )}
        {stepIndex === 1 && (
          /* Shield logo */
          <path d="M93 113h14v5c0 3-3 5-7 6-4-1-7-3-7-6v-5z" fill="#3b82f6" />
        )}
        {stepIndex === 2 && (
          /* Lens / Target circle */
          <circle cx="100" cy="120" r="6" stroke="#f59e0b" strokeWidth="2" fill="none" />
        )}
        {stepIndex === 3 && (
          /* Book pages lines */
          <path d="M90 116h20v2H90v-2zm0 6h15v2H90v-2z" fill="#94a3b8" />
        )}
        {stepIndex === 4 && (
          /* Double checks */
          <g stroke="#10b981" strokeWidth="2" fill="none" strokeLinecap="round">
            <path d="M92 120l3 3 5-5" />
          </g>
        )}
        {stepIndex === 5 && (
          /* Warning caution sign */
          <path d="M100 112l10 15H90l10-15z" fill="#f59e0b" />
        )}

        {/* Head */}
        <rect x="62" y="48" width="76" height="48" rx="20" fill="url(#guardGrad)" stroke="#1e3a8a" strokeWidth="2.5" />
        
        {/* Visor faceplate */}
        <rect x="70" y="56" width="60" height="24" rx="8" fill="#0b0f19" />

        {/* Glowing Visor Light */}
        <rect x="78" y="64" width="44" height="8" rx="4" fill={stepIndex === 5 ? "#f59e0b" : stepIndex === 1 ? "#3b82f6" : "#10b981"} filter="url(#visorGlow)">
          <animate attributeName="opacity" values="1;0.4;1" dur="2.5s" repeatCount="indefinite" />
        </rect>

        {/* Ears with lights */}
        <circle cx="56" cy="72" r="5" fill="#475569" />
        <circle cx="56" cy="72" r="2" fill="#ef4444" />
        <circle cx="144" cy="72" r="5" fill="#475569" />
        <circle cx="144" cy="72" r="2" fill="#ef4444" />

        {/* Shoulder plates */}
        <rect x="66" y="98" width="12" height="10" rx="3" fill="#475569" />
        <rect x="122" y="98" width="12" height="10" rx="3" fill="#475569" />

        {/* ==================== DYNAMIC ARMS & INTERACTIONS ==================== */}
        {stepIndex === 0 && (
          /* Phân quyền: Holding keycard */
          <g>
            <path d="M72 115c-12 0-15 15-8 22" stroke="#3b82f6" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            <path d="M128 115c10 5 15 15 5 22" stroke="#3b82f6" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            <rect x="124" y="130" width="14" height="18" rx="2" fill="#10b981" stroke="#a7f3d0" strokeWidth="1" transform="rotate(15 124 130)" />
            <circle cx="131" cy="138" r="2" fill="#ffffff" />
          </g>
        )}

        {stepIndex === 1 && (
          /* Bảo vệ thông tin: Holding shield */
          <g>
            <path d="M72 115c-10 10-5 25 5 20" stroke="#3b82f6" strokeWidth="4.5" fill="none" />
            <path d="M128 115c10 10 5 25-5 20" stroke="#3b82f6" strokeWidth="4.5" fill="none" />
            <path d="M85 122h30v15c0 10-15 18-15 18s-15-8-15-18v-15z" fill="url(#shieldGrad)" stroke="#93c5fd" strokeWidth="1.5" />
            <circle cx="100" cy="134" r="4" fill="#ffffff" />
          </g>
        )}

        {stepIndex === 2 && (
          /* Hallucination control: Magnifier checking cloud */
          <g>
            <path d="M72 115c-10 10-15 20-5 24" stroke="#3b82f6" strokeWidth="4.5" fill="none" />
            <path d="M128 115c8 10 15 5 10-8" stroke="#3b82f6" strokeWidth="4.5" fill="none" strokeLinecap="round" />
            <line x1="135" y1="108" x2="148" y2="95" stroke="#475569" strokeWidth="3" />
            <circle cx="148" cy="95" r="10" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" strokeWidth="2" />
          </g>
        )}

        {stepIndex === 3 && (
          /* Student rules: Waving hello */
          <g>
            <path d="M72 115c-15 0-20-15-25-25" stroke="#3b82f6" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            <path d="M128 115c10 10 15 20 5 24" stroke="#3b82f6" strokeWidth="4.5" fill="none" />
          </g>
        )}

        {stepIndex === 4 && (
          /* Content verification: clipboard checklist */
          <g>
            <path d="M72 115c8 12 18 20 23 15" stroke="#3b82f6" strokeWidth="4.5" fill="none" strokeLinecap="round" />
            <path d="M128 115c-8 12-18 20-23 15" stroke="#3b82f6" strokeWidth="4.5" fill="none" strokeLinecap="round" />
            <rect x="86" y="122" width="28" height="34" rx="2" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <rect x="94" y="118" width="12" height="5" fill="#475569" rx="1" />
            <line x1="91" y1="130" x2="109" y2="130" stroke="#10b981" strokeWidth="2" />
            <line x1="91" y1="138" x2="105" y2="138" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="91" y1="146" x2="109" y2="146" stroke="#cbd5e1" strokeWidth="2" />
          </g>
        )}

        {stepIndex === 5 && (
          /* Guardrails: holding caution barrier tape */
          <g>
            <path d="M72 120H45" stroke="#3b82f6" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M128 120H155" stroke="#3b82f6" strokeWidth="4.5" strokeLinecap="round" />
            <rect x="35" y="118" width="130" height="6" fill="#f59e0b" rx="1" />
            <line x1="45" y1="118" x2="55" y2="124" stroke="#000000" strokeWidth="1.5" />
            <line x1="75" y1="118" x2="85" y2="124" stroke="#000000" strokeWidth="1.5" />
            <line x1="105" y1="118" x2="115" y2="124" stroke="#000000" strokeWidth="1.5" />
            <line x1="135" y1="118" x2="145" y2="124" stroke="#000000" strokeWidth="1.5" />
          </g>
        )}

      </svg>
    </div>
  );
}

export default function ResponsibleAISection() {
  const { language, t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % 6);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIdx, isPaused]);

  const safetyPrinciples = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      title: t({
        vi: "Phân quyền truy cập đa tầng",
        en: "Multi-tier Access Control",
      }),
      description: t({
        vi: "Đảm bảo mỗi nhóm người dùng (học sinh, giáo viên, nhân sự, admin) chỉ truy cập đúng phần dữ liệu được chỉ định.",
        en: "Ensure each user group (students, teachers, staff, admins) only accesses authorized datasets.",
      }),
    },
    {
      icon: <EyeOff className="w-5 h-5 text-blue-600" />,
      title: t({
        vi: "Bảo vệ thông tin nhạy cảm",
        en: "Sensitive Data Protection",
      }),
      description: t({
        vi: "Không gửi dữ liệu định danh học sinh, bí mật doanh nghiệp lên các mô hình AI công cộng khi chưa ẩn danh hóa.",
        en: "Never submit student identity data or corporate secrets to public AI models without anonymization.",
      }),
    },
    {
      icon: <ClipboardCheck className="w-5 h-5 text-blue-600" />,
      title: t({
        vi: "Kiểm soát Hallucination (Ảo tưởng)",
        en: "Hallucination Control",
      }),
      description: t({
        vi: "Áp dụng cơ chế RAG, hiển thị nguồn trích dẫn chính xác và khuyến nghị quy trình kiểm duyệt (Human Review).",
        en: "Implement RAG mechanisms, show exact source citations, and recommend human-in-the-loop review.",
      }),
    },
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      title: t({
        vi: "Quy tắc sử dụng cho học sinh",
        en: "Student Code of Conduct",
      }),
      description: t({
        vi: "Ban hành hướng dẫn sử dụng AI an toàn, cấm tự ý đăng nhập các mô hình AI chưa được kiểm định chất lượng.",
        en: "Issue safe AI usage guidelines; prohibit unauthorized logins to unverified public AI models.",
      }),
    },
    {
      icon: <FileText className="w-5 h-5 text-blue-600" />,
      title: t({
        vi: "Hướng dẫn kiểm chứng nội dung",
        en: "Content Verification Guides",
      }),
      description: t({
        vi: "Trang bị cho giáo viên bộ công cụ phản biện để đánh giá giáo án, đề bài do AI soạn trước khi đem ra giảng dạy.",
        en: "Equip teachers with critical thinking toolkits to evaluate AI-generated lesson plans and exam sheets.",
      }),
    },
    {
      icon: <Compass className="w-5 h-5 text-blue-600" />,
      title: t({
        vi: "Thiết lập Guardrails theo độ tuổi",
        en: "Age-appropriate Guardrails",
      }),
      description: t({
        vi: "Tạo hàng rào nội dung (Guardrails) phù hợp với sự phát triển tâm sinh lý của học sinh cấp 1, cấp 2 và cấp 3.",
        en: "Establish content guardrails aligned with the psychological development of elementary, middle, and high school students.",
      }),
    },
  ];

  const activePrinciple = safetyPrinciples[activeIdx];

  return (
    <section className="py-24 bg-transparent border-t border-slate-200/60 relative overflow-hidden">
      
      {/* Keyframe style injection */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scanLineY {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scan-y {
          animation: scanLineY 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes progressFill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}} />

      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-blue-500/[0.01] rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>{t({ vi: "Đạo Đức & Bảo Mật AI", en: "AI Ethics & Security" })}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t({ vi: "AI Mạnh Phải Đi Cùng ", en: "Powerful AI Must Go " })}
            <span className="text-blue-600">
              {t({ vi: "An Toàn Dữ Liệu", en: "Hand-in-Hand with Data Security" })}
            </span>{" "}
            {t({ vi: "& Trách Nhiệm", en: "& Responsibility" })}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed tracking-wide">
            {t({
              vi: "Chúng tôi xây dựng các giải pháp dựa trên khung tiêu chuẩn bảo mật quốc tế và quy tắc đạo đức AI phổ thông nghiêm ngặt.",
              en: "We build solutions based on international security frameworks and strict K-12 AI ethical guidelines.",
            })}
          </p>
        </div>

        {/* 2-Column Split Console Layout */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Left Console Inspector Panel */}
          <div 
            className="lg:col-span-5 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Absolute laser glow beam for the chamber */}
            <div className="absolute inset-0 bg-blue-500/[0.01] rounded-3xl pointer-events-none"></div>
            
            <div className="relative overflow-hidden bg-slate-950 border border-slate-900 shadow-2xl rounded-3xl p-8 flex flex-col items-center text-center">
              
              {/* Dynamic Laser Scanning Chamber */}
              <div className="relative w-full h-44 rounded-2xl bg-slate-900/60 border border-slate-800/80 overflow-hidden flex items-center justify-center">
                
                {/* Laser scan line overlay */}
                <div className="absolute inset-x-0 h-[2px] bg-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.8)] z-10 animate-scan-y"></div>
                
                {/* Character */}
                <SvgGuardianBot stepIndex={activeIdx} />
              </div>

              {/* Dynamic text description */}
              <div key={activeIdx} className="mt-8 space-y-4 animate-fade-in-up">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-bold font-mono tracking-widest uppercase transition-all duration-300 ${
                  isPaused 
                    ? "bg-amber-950/60 border-amber-800/50 text-amber-400" 
                    : "bg-blue-950/60 border-blue-800/50 text-blue-400"
                }`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${isPaused ? "bg-amber-400" : "bg-blue-400 animate-pulse"}`}></span>
                  {isPaused ? "PAUSED" : "SYSTEM GUARDIAN ACTIVE"}
                </span>
                
                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  {activePrinciple.title}
                </h3>
                
                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                  {activePrinciple.description}
                </p>
              </div>

              {/* Autoplay progress bar at the bottom edge */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-900">
                <div 
                  key={activeIdx}
                  className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 transition-all"
                  style={{
                    animation: 'progressFill 5s linear forwards',
                    animationPlayState: isPaused ? 'paused' : 'running'
                  }}
                />
              </div>

            </div>
          </div>

          {/* Right Console Grid (6 compact selector cards) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {safetyPrinciples.map((principle, index) => {
              const isActive = activeIdx === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIdx(index)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 cursor-pointer relative group ${
                    isActive
                      ? "bg-white border-blue-500 shadow-md ring-1 ring-blue-500/10 scale-102"
                      : "bg-white/40 border-slate-200/80 hover:border-slate-350 hover:bg-white"
                  }`}
                >
                  {/* Glowing active node marker */}
                  {isActive && (
                    <span className="absolute top-3.5 right-3.5 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                  )}

                  <div className={`p-3 rounded-xl flex-shrink-0 transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                      : "bg-slate-50 text-slate-500 group-hover:scale-105"
                  }`}>
                    {React.cloneElement(principle.icon, {
                      className: `w-5 h-5 ${isActive ? "text-white" : "text-blue-600"}`
                    })}
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 leading-snug tracking-tight group-hover:text-blue-600 transition-colors">
                      {principle.title}
                    </h4>
                    <span className="block text-[9px] font-mono font-semibold uppercase tracking-wider text-slate-400 mt-1">
                      {isActive ? "MONITORING" : "STANDBY"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* Warning notification bar */}
        <div className="mt-12 p-5 rounded-2xl bg-blue-50/60 border border-blue-100 max-w-4xl mx-auto flex items-start gap-3.5 shadow-sm">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-slate-700 leading-relaxed tracking-wide">
            <strong className="text-slate-900 font-bold">
              {t({ vi: "Khuyến nghị từ báo cáo nghiên cứu K-12: ", en: "K-12 Research Recommendation: " })}
            </strong>
            {t({
              vi: "Các trường học cần có chính sách kiểm soát danh sách công cụ AI được duyệt sử dụng (Whitelist), cấm học sinh dưới cấp trung học tự ý truy cập các Chatbot AI sinh nội dung nếu chưa có sự giám sát của giáo viên và phụ huynh.",
              en: "Schools should establish a Whitelist policy for approved AI tools, prohibiting young students from accessing generative AI chatbots without parental or teacher supervision.",
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
