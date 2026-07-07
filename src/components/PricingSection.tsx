"use client";

import React from "react";
import { pricingPackages } from "@/data/landingData";
import { Check, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

function StarterMascot() {
  return (
    <div className="relative w-22 h-22 mx-auto flex items-center justify-center animate-float">
      {/* Glow background */}
      <div className="absolute inset-2 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      
      <svg className="w-full h-full relative z-10" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="starterGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <filter id="starterGlow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Floating shadow */}
        <ellipse cx="60" cy="110" rx="20" ry="3" fill="rgba(15, 23, 42, 0.1)" />

        {/* Star Sparkle */}
        <path d="M92 35l1.5 3.5 3.5 1.5-3.5 1.5-1.5 3.5-1.5-3.5-3.5-1.5 3.5-1.5 1.5-3.5z" fill="#f59e0b" className="animate-pulse" />

        {/* Neck */}
        <rect x="56" y="81" width="8" height="6" fill="#475569" />

        {/* Bot Head */}
        <rect x="35" y="45" width="50" height="36" rx="14" fill="url(#starterGrad)" stroke="#1d4ed8" strokeWidth="2" />
        
        {/* Face Screen */}
        <rect x="41" y="50" width="38" height="26" rx="9" fill="#0b0f19" />
        <circle cx="50" cy="63" r="3" fill="#22d3ee" filter="url(#starterGlow)">
          <animate attributeName="ry" values="3;0.3;3" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="70" cy="63" r="3" fill="#22d3ee" filter="url(#starterGlow)">
          <animate attributeName="ry" values="3;0.3;3" dur="3.5s" repeatCount="indefinite" />
        </circle>

        {/* Antenna */}
        <line x1="60" y1="45" x2="60" y2="33" stroke="#475569" strokeWidth="2" />
        <circle cx="60" cy="30" r="3.5" fill="#ef4444" filter="url(#starterGlow)" />

        {/* Torso */}
        <rect x="44" y="87" width="32" height="20" rx="8" fill="url(#starterGrad)" stroke="#1d4ed8" strokeWidth="2" />
        {/* Energy Core */}
        <circle cx="60" cy="97" r="3" fill="#ec4899" />

        {/* Arms */}
        <path d="M44 92c-6 0-8 8-4 12" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M76 92c6 0 8-8 4-12" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

function GrowthMascot() {
  return (
    <div className="relative w-22 h-22 mx-auto flex items-center justify-center animate-float" style={{ animationDelay: '0.2s' }}>
      {/* Glow background */}
      <div className="absolute inset-2 bg-emerald-500/10 rounded-full blur-xl animate-pulse"></div>

      <svg className="w-full h-full relative z-10" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="growthGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
          <filter id="growthGlow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Floating shadow */}
        <ellipse cx="60" cy="110" rx="22" ry="3.5" fill="rgba(15, 23, 42, 0.12)" />

        {/* Growth Line chart hologram behind bot */}
        <path d="M25 80l20-15 15 10 30-25" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
        <circle cx="90" cy="50" r="2.5" fill="#10b981" />

        {/* Neck */}
        <rect x="55" y="82" width="10" height="6" fill="#475569" />

        {/* Bot Head */}
        <rect x="33" y="42" width="54" height="40" rx="12" fill="url(#growthGrad)" stroke="#047857" strokeWidth="2" />
        
        {/* Face Screen */}
        <rect x="39" y="48" width="42" height="28" rx="7" fill="#0f172a" />
        {/* Glowing Visor */}
        <rect x="45" y="55" width="30" height="6" rx="3" fill="#10b981" filter="url(#growthGlow)">
          <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
        </rect>

        {/* Head Side Bolts */}
        <rect x="29" y="55" width="4" height="14" rx="1.5" fill="#475569" />
        <rect x="87" y="55" width="4" height="14" rx="1.5" fill="#475569" />

        {/* Torso */}
        <rect x="42" y="88" width="36" height="22" rx="9" fill="url(#growthGrad)" stroke="#047857" strokeWidth="2" />
        {/* Gear icon on chest */}
        <circle cx="60" cy="99" r="4" stroke="#ffffff" strokeWidth="1.5" fill="none" />

        {/* Arms holding a glowing green node block */}
        <path d="M42 95c-5 5 2 12 10 8" stroke="#10b981" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M78 95c5 5-2 12-10 8" stroke="#10b981" strokeWidth="3" strokeLinecap="round" fill="none" />
        <rect x="56" y="99" width="8" height="8" rx="1.5" fill="#10b981" filter="url(#growthGlow)" />
      </svg>
    </div>
  );
}

function EnterpriseMascot() {
  return (
    <div className="relative w-22 h-22 mx-auto flex items-center justify-center animate-float" style={{ animationDelay: '0.4s' }}>
      {/* Glow background */}
      <div className="absolute inset-2 bg-blue-600/10 rounded-full blur-xl animate-pulse"></div>

      <svg className="w-full h-full relative z-10" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="entGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e3b8a" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <filter id="entGlow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Floating shadow */}
        <ellipse cx="60" cy="112" rx="25" ry="4" fill="rgba(15, 23, 42, 0.15)" />

        {/* Security Shield Crown behind head */}
        <path d="M40 38l20-8 20 8v12c0 10-20 16-20 16s-20-6-20-16V38z" fill="rgba(59, 130, 246, 0.15)" stroke="#60a5fa" strokeWidth="1" />

        {/* Neck */}
        <rect x="54" y="86" width="12" height="6" fill="#475569" />

        {/* Bot Head */}
        <rect x="31" y="44" width="58" height="42" rx="15" fill="url(#entGrad)" stroke="#1e3a8a" strokeWidth="2.5" />
        
        {/* Face Screen */}
        <rect x="37" y="50" width="46" height="30" rx="10" fill="#0b0f19" />
        {/* Dual circular targeting eyes */}
        <circle cx="48" cy="65" r="4.5" fill="#f59e0b" filter="url(#entGlow)">
          <animate attributeName="ry" values="4.5;0.5;4.5" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="72" cy="65" r="4.5" fill="#f59e0b" filter="url(#entGlow)">
          <animate attributeName="ry" values="4.5;0.5;4.5" dur="4s" repeatCount="indefinite" />
        </circle>

        {/* Torso */}
        <rect x="38" y="92" width="44" height="20" rx="8" fill="url(#entGrad)" stroke="#1e3a8a" strokeWidth="2.5" />
        {/* Shield outline on chest */}
        <path d="M54 98h12v4c0 3-6 5-6 5s-6-2-6-5v-4z" fill="#60a5fa" />

        {/* Arms holding security rods */}
        <path d="M38 98c-8-4-8 12-2 8" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M82 98c8-4 8 12 2 8" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

export default function PricingSection() {
  const { language, t } = useLanguage();
  const currentPackages = pricingPackages[language];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    const rotateX = -(y / (box.height / 2)) * 4;
    const rotateY = (x / (box.width / 2)) * 4;
    
    let glowColor = "rgba(59, 130, 246, 0.05)";
    if (index === 1) glowColor = "rgba(16, 185, 129, 0.05)";
    if (index === 2) glowColor = "rgba(99, 102, 241, 0.05)";
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
    
    const glowX = ((e.clientX - box.left) / box.width) * 100;
    const glowY = ((e.clientY - box.top) / box.height) * 100;
    card.style.backgroundImage = `radial-gradient(circle 260px at ${glowX}% ${glowY}%, ${glowColor}, transparent)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.backgroundImage = "";
  };

  // Helper to pick correct mascot based on index
  const renderMascot = (index: number) => {
    switch (index) {
      case 0: return <StarterMascot />;
      case 1: return <GrowthMascot />;
      case 2: return <EnterpriseMascot />;
      default: return null;
    }
  };

  const getTierIcon = (index: number) => {
    switch (index) {
      case 0: return <Sparkles className="w-5 h-5 text-blue-500" />;
      case 1: return <Building2 className="w-5 h-5 text-emerald-500" />;
      case 2: return <ShieldCheck className="w-5 h-5 text-indigo-500" />;
      default: return null;
    }
  };

  const getTierTheme = (index: number) => {
    switch (index) {
      case 0: return {
        border: "border-slate-200/80 hover:border-blue-500/40",
        shadow: "shadow-[0_8px_30px_rgba(59,130,246,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.14)]",
        textAccent: "text-blue-600",
        pillBg: "bg-blue-50 text-blue-700 border-blue-200"
      };
      case 1: return {
        border: "border-emerald-500 hover:border-emerald-600 lg:-translate-y-3",
        shadow: "shadow-[0_12px_40px_rgba(16,185,129,0.09)] hover:shadow-[0_24px_50px_rgba(16,185,129,0.2)]",
        textAccent: "text-emerald-600",
        pillBg: "bg-emerald-50 text-emerald-700 border-emerald-200"
      };
      case 2: return {
        border: "border-slate-200/80 hover:border-indigo-500/40",
        shadow: "shadow-[0_8px_30px_rgba(99,102,241,0.04)] hover:shadow-[0_20px_40px_rgba(99,102,241,0.14)]",
        textAccent: "text-indigo-650",
        pillBg: "bg-indigo-50 text-indigo-700 border-indigo-200"
      };
      default: return {
        border: "border-slate-200 hover:border-slate-350",
        shadow: "hover:shadow-md",
        textAccent: "text-blue-600",
        pillBg: "bg-slate-50 text-slate-700 border-slate-200"
      };
    }
  };

  return (
    <section id="bao-gia" className="py-24 bg-transparent border-t border-slate-200/60 relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500/[0.01] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
            <span>{t({ vi: "Báo Giá & Hợp Tác", en: "Pricing & Partnership" })}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t({ vi: "Gói Giải Pháp Linh Hoạt Theo Quy Mô", en: "Flexible Solution Packages by Scale" })}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed tracking-wide">
            {t({
              vi: "Không cần đầu tư chi phí khổng lồ ban đầu. Chúng tôi cung cấp các tùy chọn gói phù hợp với ngân sách của cá nhân, trung tâm và trường học.",
              en: "No huge upfront investment required. We offer budget-friendly package options for individuals, learning centers, and schools.",
            })}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {currentPackages.map((pkg, index) => {
            const theme = getTierTheme(index);
            const isPopular = index === 1; // Middle tier (Growth) is popular
            
            return (
              <div
                key={pkg.name}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
                className={`rounded-3xl border p-5 px-6 flex flex-col justify-between transition-all duration-250 ease-out relative bg-white group ${theme.border} ${theme.shadow}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                
                {/* Popular Badge */}
                {isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-600 text-[10px] font-bold tracking-widest text-white uppercase shadow-md shadow-emerald-500/20 z-10">
                    {t({ vi: "Phổ biến nhất", en: "Most popular" })}
                  </span>
                )}

                <div className="space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Dynamic 2D Mascot & Telemetry HUD */}
                    <div className="relative py-2 border border-slate-900 bg-slate-950 rounded-xl px-3 flex items-center justify-between gap-3 overflow-hidden shadow-inner">
                      {/* Futuristic circuit grid lines in background */}
                      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:8px_8px] pointer-events-none"></div>

                      {/* Left HUD Panel */}
                      <div className="text-left font-mono space-y-0.5 z-10 hidden sm:block">
                        <span className="block text-[8px] font-bold text-slate-500 uppercase tracking-widest">SYSTEM</span>
                        <span className={`block text-[9px] font-bold ${index === 0 ? "text-blue-400" : index === 1 ? "text-emerald-400" : "text-indigo-400"}`}>
                          {index === 0 ? "SINGLE_BOT" : index === 1 ? "MULTI_AGNT" : "HYBRID_SYS"}
                        </span>
                        <span className="block text-[8px] text-slate-400">
                          {index === 0 ? "CPU: 1x Core" : index === 1 ? "Load: Active" : "SEC: AES-256"}
                        </span>
                      </div>

                      {/* Center Mascot */}
                      <div className="flex-shrink-0 mx-auto">
                        {renderMascot(index)}
                      </div>

                      {/* Right HUD Panel */}
                      <div className="text-right font-mono space-y-0.5 z-10 hidden sm:block">
                        <span className="block text-[8px] font-bold text-slate-500 uppercase tracking-widest">SPECS</span>
                        <span className="block text-[9px] font-bold text-slate-200">
                          {index === 0 ? "RAG < 100p" : index === 1 ? "RAG Unlimited" : "Local/Cloud"}
                        </span>
                        <span className="block text-[8px] text-slate-400">
                          {index === 0 ? "Port: Telegram" : index === 1 ? "API: Secured" : "SLA: 99.9%"}
                        </span>
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        {getTierIcon(index)}
                        <h3 className="text-xl font-black text-slate-950 tracking-tight">{pkg.name}</h3>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                        {pkg.tagline}
                      </p>
                    </div>

                    {/* Deployment Cost */}
                    <div className="py-2.5 px-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-2">
                      <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider flex-shrink-0">
                        {t({ vi: "Chi phí:", en: "Cost:" })}
                      </span>
                      <span className={`text-sm font-black tracking-tight ${theme.textAccent}`}>
                        {t({ vi: "Liên hệ báo giá", en: "Contact for quote" })}
                      </span>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-2.5 pt-1.5">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed font-bold">
                          <div className={`p-0.5 rounded-full flex-shrink-0 mt-0.5 ${
                            index === 0 ? "bg-blue-100 text-blue-600" :
                            index === 1 ? "bg-emerald-100 text-emerald-600" :
                            "bg-indigo-100 text-indigo-600"
                          }`}>
                            <Check className="w-3 h-3 stroke-[3px]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Target Audience Panel (Fills the bottom whitespace productively) */}
                  <div className="pt-3 border-t border-slate-100 mt-4 flex items-center gap-2 text-left">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider flex-shrink-0">
                      {t({ vi: "Phù hợp:", en: "For:" })}
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {index === 0 && (
                        <>
                          <span className="px-2 py-0.5 rounded-lg bg-blue-50/60 border border-blue-100 text-blue-700 text-[10px] font-bold">
                            {t({ vi: "Giáo viên", en: "Teachers" })}
                          </span>
                          <span className="px-2 py-0.5 rounded-lg bg-blue-50/60 border border-blue-100 text-blue-700 text-[10px] font-bold">
                            {t({ vi: "Cá nhân", en: "Individuals" })}
                          </span>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <span className="px-2 py-0.5 rounded-lg bg-emerald-50/60 border border-emerald-100 text-emerald-700 text-[10px] font-bold">
                            {t({ vi: "Trung tâm GD", en: "Ed Centers" })}
                          </span>
                          <span className="px-2 py-0.5 rounded-lg bg-emerald-50/60 border border-emerald-100 text-emerald-700 text-[10px] font-bold">
                            {t({ vi: "Doanh nghiệp", en: "SMEs" })}
                          </span>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <span className="px-2 py-0.5 rounded-lg bg-indigo-50/60 border border-indigo-100 text-indigo-700 text-[10px] font-bold">
                            {t({ vi: "Trường học", en: "Schools" })}
                          </span>
                          <span className="px-2 py-0.5 rounded-lg bg-indigo-50/60 border border-indigo-100 text-indigo-700 text-[10px] font-bold">
                            {t({ vi: "Tập đoàn", en: "Corporations" })}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                </div>

                {/* Package CTA */}
                <div className="pt-4 mt-4 border-t border-slate-100/80">
                  <a
                    href="#lien-he"
                    className={`w-full inline-flex items-center justify-center px-4 py-3.5 rounded-2xl text-sm font-bold transition-all active:scale-98 cursor-pointer shadow-sm ${
                      isPopular
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-500/10"
                        : "bg-slate-50 border border-slate-200 hover:border-slate-350 text-slate-700 hover:text-slate-900"
                    }`}
                  >
                    {pkg.ctaText}
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
