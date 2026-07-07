"use client";

import React, { useState } from "react";
import { caseStudies } from "@/data/landingData";
import { AlertCircle, Lightbulb, TrendingUp, Sparkles, Building, GraduationCap, UserCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [
  <GraduationCap key="school" className="w-5 h-5 text-blue-600" />,
  <Sparkles key="center" className="w-5 h-5 text-blue-600" />,
  <Building key="enterprise" className="w-5 h-5 text-blue-600" />,
  <UserCheck key="teacher" className="w-5 h-5 text-blue-600" />,
];

function SvgRobotCharacter({ stepIndex }: { stepIndex: number }) {
  // A gorgeous floating robot with glowing cyan screen face, blinking eyes, and dynamic accessories
  return (
    <div className="relative w-44 h-44 flex items-center justify-center animate-float">
      {/* Background glow tailored to active section */}
      <div className={`absolute inset-4 rounded-full blur-2xl opacity-20 transition-all duration-500 ${
        stepIndex === 0 ? "bg-blue-500" :
        stepIndex === 1 ? "bg-emerald-500" :
        stepIndex === 2 ? "bg-amber-500" : "bg-pink-500"
      }`}></div>

      <svg className="w-full h-full relative z-10" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradients */}
          <linearGradient id="botGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0b0f19" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <filter id="neonGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Floating platform shadow */}
        <ellipse cx="100" cy="180" rx="35" ry="6" fill="rgba(15, 23, 42, 0.15)" />

        {/* ==================== 1. ACCESSORIES BEHIND BOT ==================== */}
        {stepIndex === 0 && (
          /* School: Virtual Chalkboard in background */
          <g className="animate-pulse">
            <rect x="25" y="65" width="45" height="30" rx="3" fill="#065f46" stroke="#047857" strokeWidth="2" />
            <line x1="30" y1="75" x2="65" y2="75" stroke="#a7f3d0" strokeWidth="1.5" strokeDasharray="2 2" />
            <line x1="30" y1="83" x2="55" y2="83" stroke="#a7f3d0" strokeWidth="1.5" strokeDasharray="2 2" />
            <text x="36" y="73" fill="#a7f3d0" fontSize="7" fontFamily="monospace" fontWeight="bold">AI</text>
          </g>
        )}

        {stepIndex === 1 && (
          /* English Tutor: Floating Speech Bubble */
          <g>
            <path d="M25 45h35v22H40l-7 7v-7H25V45z" fill="#059669" stroke="#10b981" strokeWidth="1.5" />
            <text x="31" y="58" fill="#ecfdf5" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Hello!</text>
            <path d="M48 58c2 0 3-1.5 3-3s-1-3-3-3" stroke="#ecfdf5" strokeWidth="1" fill="none" />
          </g>
        )}

        {stepIndex === 2 && (
          /* Enterprise: Secure RAG Cloud Database file cabinet */
          <g className="animate-pulse">
            <rect x="25" y="115" width="30" height="35" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
            <rect x="29" y="120" width="22" height="6" rx="1" fill="#3b82f6" />
            <rect x="29" y="129" width="22" height="6" rx="1" fill="#475569" />
            <rect x="29" y="138" width="22" height="6" rx="1" fill="#3b82f6" />
            <circle cx="48" cy="123" r="1.5" fill="#60a5fa" />
            <circle cx="48" cy="141" r="1.5" fill="#60a5fa" />
          </g>
        )}

        {stepIndex === 3 && (
          /* Teacher: Floating Exam Sheet A+ */
          <g>
            <rect x="25" y="55" width="32" height="42" rx="3" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="30" y1="65" x2="52" y2="65" stroke="#94a3b8" strokeWidth="2" />
            <line x1="30" y1="73" x2="48" y2="73" stroke="#94a3b8" strokeWidth="2" />
            <line x1="30" y1="81" x2="50" y2="81" stroke="#94a3b8" strokeWidth="2" />
            {/* A+ stamp */}
            <circle cx="46" cy="85" r="7" fill="#fee2e2" stroke="#ef4444" strokeWidth="1" />
            <text x="42" y="88" fill="#ef4444" fontSize="9" fontWeight="bold" fontFamily="sans-serif">A+</text>
          </g>
        )}

        {/* ==================== 2. ROBOT BODY & HEAD ==================== */}
        {/* Robot Neck */}
        <rect x="94" y="90" width="12" height="12" rx="2" fill="#475569" />

        {/* Robot Head */}
        <rect x="60" y="45" width="80" height="50" rx="22" fill="url(#botGrad)" stroke="#1d4ed8" strokeWidth="2" />
        
        {/* Robot Face Screen */}
        <rect x="68" y="52" width="64" height="36" rx="14" fill="url(#screenGrad)" />

        {/* Eyes (Blinking based on index or mood) */}
        {stepIndex === 2 ? (
          /* Enterprise: analytical look / wearing glasses */
          <g>
            {/* Glasses frame */}
            <rect x="73" y="60" width="22" height="18" rx="2" stroke="#f59e0b" strokeWidth="2" fill="none" />
            <rect x="105" y="60" width="22" height="18" rx="2" stroke="#f59e0b" strokeWidth="2" fill="none" />
            <line x1="95" y1="69" x2="105" y2="69" stroke="#f59e0b" strokeWidth="2" />
            
            {/* Eyes */}
            <circle cx="84" cy="69" r="4.5" fill="#22d3ee" filter="url(#neonGlow)" />
            <circle cx="116" cy="69" r="4.5" fill="#22d3ee" filter="url(#neonGlow)" />
          </g>
        ) : (
          /* Normal eyes */
          <g>
            <circle cx="86" cy="70" r="5" fill={stepIndex === 1 ? "#34d399" : stepIndex === 3 ? "#f472b6" : "#22d3ee"} filter="url(#neonGlow)">
              <animate attributeName="ry" values="5;0.5;5" dur="4.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="114" cy="70" r="5" fill={stepIndex === 1 ? "#34d399" : stepIndex === 3 ? "#f472b6" : "#22d3ee"} filter="url(#neonGlow)">
              <animate attributeName="ry" values="5;0.5;5" dur="4.2s" repeatCount="indefinite" />
            </circle>
          </g>
        )}

        {/* Head Accessories */}
        {stepIndex === 0 && (
          /* School: Graduation cap on top of head */
          <g>
            <polygon points="100,22 135,32 100,42 65,32" fill="#1e293b" stroke="#475569" strokeWidth="1" />
            <rect x="94" y="38" width="12" height="8" fill="#1e293b" />
            {/* Hanging yellow tassel */}
            <path d="M100,32 L132,32 L135,46" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
            <circle cx="135" cy="48" r="2.5" fill="#f59e0b" />
          </g>
        )}

        {stepIndex === 1 && (
          /* English tutor: Headphones over head */
          <g>
            <path d="M56,70 C56,35 144,35 144,70" stroke="#10b981" strokeWidth="4" fill="none" strokeLinecap="round" />
            <rect x="52" y="60" width="8" height="20" rx="3" fill="#047857" />
            <rect x="140" y="60" width="8" height="20" rx="3" fill="#047857" />
          </g>
        )}

        {/* Antenna */}
        {stepIndex !== 0 && (
          <g>
            <line x1="100" y1="45" x2="100" y2="28" stroke="#475569" strokeWidth="3" />
            <circle cx="100" cy="24" r="6" fill={stepIndex === 1 ? "#10b981" : stepIndex === 2 ? "#f59e0b" : "#ec4899"} filter="url(#neonGlow)">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </g>
        )}

        {/* Robot Torso */}
        <rect x="75" y="100" width="50" height="45" rx="16" fill="url(#botGrad)" stroke="#1d4ed8" strokeWidth="2" />
        
        {/* Chest Display Panel */}
        <rect x="85" y="110" width="30" height="22" rx="4" fill="#0f172a" stroke="#3b82f6" strokeWidth="1" />
        
        {/* Chest Icon changes based on target */}
        {stepIndex === 0 && (
          /* Graduation Cap icon */
          <path d="M92 121l8-4 8 4-8 4-8-4zm0 2v1.5c0 0.8 2.5 1.5 8 1.5s8-0.7 8-1.5v-1.5" stroke="#60a5fa" strokeWidth="1.2" fill="none" />
        )}
        {stepIndex === 1 && (
          /* Chat bubble */
          <path d="M92 117h16v10h-4l-3 3v-3H92v-10z" fill="#059669" />
        )}
        {stepIndex === 2 && (
          /* Shield Icon representing secure tri-thức */
          <path d="M94 115l6-3 6 3v5c0 3.5-2.5 6.5-6 7.5-3.5-1-6-4-6-7.5v-5z" fill="#d97706" />
        )}
        {stepIndex === 3 && (
          /* Checkmark A+ / pen */
          <path d="M93 121l5 5 9-9" stroke="#db2777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        )}

        {/* ==================== 3. ARMS & INTERACTIONS ==================== */}
        {stepIndex === 0 && (
          /* School: Left arm holding pointing stick pointing left to the board */
          <g>
            {/* Left Arm pointing back/left */}
            <path d="M75 118 C55 118 45 95 38 95" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" fill="none" />
            {/* Pointer stick */}
            <line x1="38" y1="95" x2="25" y2="80" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
            
            {/* Right Arm waving */}
            <path d="M125 118 C140 118 150 100 155 90" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" fill="none" />
          </g>
        )}

        {stepIndex === 1 && (
          /* English Tutor: holding a microphone */
          <g>
            {/* Left Arm holding microphone */}
            <path d="M75 118 C55 125 60 145 68 140" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" fill="none" />
            <rect x="65" y="130" width="5" height="12" fill="#475569" rx="1" />
            <circle cx="67.5" cy="126" r="4.5" fill="#94a3b8" />
            
            {/* Right Arm waving */}
            <path d="M125 118 C145 118 155 100 160 90" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" fill="none" />
          </g>
        )}

        {stepIndex === 2 && (
          /* Enterprise: Holding tablet with charts */
          <g>
            {/* Left & Right arms holding a virtual tablet together */}
            <path d="M75 118 C65 130 80 150 90 145" stroke="#3b82f6" strokeWidth="5" fill="none" strokeLinecap="round" />
            <path d="M125 118 C135 130 120 150 110 145" stroke="#3b82f6" strokeWidth="5" fill="none" strokeLinecap="round" />
            
            {/* The tablet */}
            <rect x="85" y="134" width="30" height="20" rx="2" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
            {/* Chart lines on tablet */}
            <path d="M89 148l4-5 5 3 7-8" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </g>
        )}

        {stepIndex === 3 && (
          /* Teacher: Right arm holding a digital pencil, writing towards the floating page */
          <g>
            {/* Left Arm waving/resting */}
            <path d="M75 118 C55 118 45 125 40 135" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" fill="none" />
            
            {/* Right Arm holding pen pointing left */}
            <path d="M125 118 C140 120 145 110 135 98" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" fill="none" />
            {/* Pencil/stylus */}
            <polygon points="135,98 128,88 124,90 132,100" fill="#ec4899" />
            <polygon points="124,90 120,86 122,88" fill="#fbcfe8" />
          </g>
        )}

      </svg>
    </div>
  );
}

export default function CaseStudySection() {
  const { language, t } = useLanguage();
  const currentCaseStudies = caseStudies[language];
  const [activeIdx, setActiveIdx] = useState(0);

  const activeScenario = currentCaseStudies[activeIdx];

  return (
    <section id="case-study" className="py-24 bg-transparent border-t border-slate-200/60 relative overflow-hidden">
      
      {/* Floating Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1.5deg); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      {/* Background radial glow */}
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/[0.02] rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with split text and image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>{t({ vi: "Kịch Bản Ứng Dụng Thực Tế", en: "Real-world Applications" })}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t({
                vi: "Tình Huống Sử Dụng & Giải Pháp Triển Khai Thực Tế",
                en: "Use Cases & Real-world Implementations",
              })}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed tracking-wide max-w-2xl mx-auto lg:mx-0">
              {t({
                vi: "Khám phá cách các cá nhân, tổ chức giáo dục và doanh nghiệp Việt Nam giải quyết bài toán thực tế bằng các giải pháp AI chuyên biệt từ NextgenAI.",
                en: "Explore how individuals, educational institutions, and Vietnamese enterprises solve real-world problems with dedicated AI solutions from NextgenAI.",
              })}
            </p>
          </div>
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-sky-500/5 rounded-2xl blur-lg pointer-events-none"></div>
            <div className="relative w-full max-w-[450px] rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
              <img
                src="/NextgenAI/images/vietnamese_office.png"
                alt="Triển khai Private AI tại doanh nghiệp Việt Nam"
                className="w-full h-44 object-cover group-hover:scale-103 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-2.5 left-4">
                <span className="text-[9px] font-mono text-blue-400 bg-slate-950/80 px-2.5 py-0.5 rounded border border-blue-500/20">
                  {t({ vi: "VĂN PHÒNG DOANH NGHIỆP TRONG NƯỚC", en: "DOMESTIC ENTERPRISE OFFICE" })}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Split Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Buttons Selector List */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {currentCaseStudies.map((scenario, index) => {
              const isActive = activeIdx === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIdx(index)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 cursor-pointer group ${
                    isActive
                      ? "bg-white border-blue-500 shadow-md ring-1 ring-blue-500/10 scale-102"
                      : "bg-white/40 border-slate-200/80 hover:border-slate-350 hover:bg-white"
                  }`}
                >
                  <div className={`p-2.5 rounded-xl flex-shrink-0 transition-colors ${
                    isActive ? "bg-blue-600 text-white shadow-md shadow-blue-500/20" : "bg-slate-50 text-slate-500 group-hover:scale-105"
                  }`}>
                    {React.cloneElement(icons[index], {
                      className: `w-5 h-5 ${isActive ? "text-white" : "text-blue-600"}`
                    })}
                  </div>
                  <div>
                    <span className={`block text-[10px] font-mono font-bold uppercase tracking-wider ${
                      isActive ? "text-blue-600" : "text-slate-400"
                    }`}>
                      {scenario.targetAudience.split(" (")[0]}
                    </span>
                    <h4 className="text-sm font-bold text-slate-800 leading-snug tracking-tight mt-0.5 group-hover:text-blue-600 transition-colors">
                      {scenario.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Interactive Detail Display Card */}
          <div className="lg:col-span-8">
            <div 
              key={activeIdx}
              className="animate-fade-in-up p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md flex flex-col md:flex-row items-center gap-8 min-h-[380px]"
            >
              {/* Card Text Contents */}
              <div className="flex-1 space-y-6 text-left">
                <div>
                  <span className="inline-block text-xs font-mono font-bold tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-100 uppercase mb-2">
                    {activeScenario.targetAudience}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight tracking-tight">
                    {activeScenario.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* Vấn đề */}
                  <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                        {t({ vi: "Vấn đề", en: "Problem" })}
                      </span>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                        {activeScenario.problem}
                      </p>
                    </div>
                  </div>

                  {/* Giải pháp */}
                  <div className="flex gap-3">
                    <Lightbulb className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                        {t({ vi: "Giải pháp", en: "Solution" })}
                      </span>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                        {activeScenario.solution}
                      </p>
                    </div>
                  </div>

                  {/* Kết quả */}
                  <div className="flex gap-3 p-4 rounded-2xl bg-blue-50/50 border border-blue-100/60 shadow-inner">
                    <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-bold text-blue-500 uppercase tracking-wider mb-0.5">
                        {t({ vi: "Kết quả kỳ vọng", en: "Expected Outcome" })}
                      </span>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-semibold">
                        {activeScenario.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2D Character Display Box */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center p-5 border border-slate-100 rounded-3xl bg-slate-50/60 shadow-inner">
                <SvgRobotCharacter stepIndex={activeIdx} />
                <span className="text-[10px] font-mono text-slate-400 mt-2 tracking-widest uppercase animate-pulse">
                  AI ASSISTANT
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
