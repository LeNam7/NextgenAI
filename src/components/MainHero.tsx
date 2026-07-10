"use client";

import React, { useEffect, useRef } from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function MainHero() {
  const { language, t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || 800;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // AI binary data characters
    const alphabet = "0101010101010101NEXTGENAI";
    const fontSize = 14;
    const columns = Math.ceil(canvas.width / fontSize);

    const rainDrops = Array(columns).fill(1).map(() => Math.floor(Math.random() * -50));

    let lastTime = 0;
    const fps = 15; // Set target FPS to slow down the rain
    const interval = 1000 / fps;

    const draw = (timestamp: number = 0) => {
      animationFrameId = requestAnimationFrame(draw);

      const elapsed = timestamp - lastTime;
      if (elapsed < interval) return;
      lastTime = timestamp - (elapsed % interval);

      // Clear with trailing alpha to create fading rain effect on light background
      ctx.fillStyle = "rgba(251, 250, 248, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        
        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;

        // Draw character only when it's on screen
        if (y > 0) {
          // Occasional warm color rain drops (AI glowing anomalies)
          if (Math.random() > 0.98) {
            ctx.fillStyle = "rgba(244, 63, 94, 0.4)"; // Pink accent
          } else if (Math.random() > 0.95) {
            ctx.fillStyle = "rgba(245, 158, 11, 0.4)"; // Amber accent
          } else {
            ctx.fillStyle = "rgba(30, 96, 255, 0.15)"; // Soft brand blue (1e60ff)
          }
          ctx.fillText(text, x, y);
        }

        // Reset condition
        if (y > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }

        rainDrops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleCompareClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById("so-sanh-ai");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-[#fbfaf8] overflow-hidden rounded-b-[48px] md:rounded-b-[80px] lg:rounded-b-[120px]">
      {/* SVG Plaster Concrete Texture Noise Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E")`
        }}
      />

      {/* Matrix data rain effect */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-45" />

      {/* Grid Pattern overlay with masked opacity */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e1d8_1px,transparent_1px),linear-gradient(to_bottom,#e5e1d8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-40 pointer-events-none"></div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-200/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-200/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description & Terminal */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-bold text-blue-700 backdrop-blur-sm shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping"></span>
              <span>{t({ vi: "v2.0 (thực chiến) đã ra mắt →", en: "v2.0 (production-ready) is live →" })}</span>
            </div>

            {/* Title / Brand */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Nextgen<span className="text-blue-600">AI</span>
            </h1>

            {/* Subtitle in clean bold sans-serif font */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t({ 
                vi: "Hệ Sinh Thái AI Cá Nhân & Tự Động Hóa Doanh Nghiệp", 
                en: "The Personalized AI Ecosystem for Individuals & Enterprise" 
              })}
            </h2>

            {/* Highlight Line */}
            <p className="text-blue-600 font-bold text-base md:text-lg tracking-wide uppercase">
              {t({ vi: "Bảo mật tối đa, hiệu năng đột phá.", en: "Max security, breakout performance." })}
            </p>

            {/* Description */}
            <p className="text-slate-500 text-sm sm:text-base max-w-xl leading-relaxed font-semibold">
              {t({
                vi: "Khác với các Chatbot thông thường (như ChatGPT, Gemini) chỉ hoạt động thụ động dạng hỏi-đáp trên web, AI Agent của chúng tôi là hệ thống tự hành vượt trội: tự động lập kế hoạch, thực hiện quy trình đa bước phức tạp, kết nối trực tiếp với cơ sở dữ liệu nội bộ và bảo mật tuyệt đối 100% Offline.",
                en: "Unlike basic web chatbots (ChatGPT, Gemini) that only answer questions passively in isolation, our AI Agents are autonomous systems: they plan, execute complex multi-step workflows, connect directly with your internal database, and run 100% offline for absolute data privacy."
              })}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/quy-trinh-giai-phap"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white rounded-xl bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/10 active:scale-98 transition-all gap-2 cursor-pointer border border-transparent"
              >
                <span>{t({ vi: "Quy trình & Giải pháp", en: "Process & Solutions" })}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
              <button
                onClick={handleCompareClick}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-slate-700 hover:text-slate-900 rounded-xl bg-white border border-slate-200 hover:border-slate-300 active:scale-98 transition-all shadow-sm hover:bg-slate-50"
              >
                <span>{t({ vi: "Xem sự vượt trội của AI Agent", en: "See AI Agent's Superiority" })}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

          </div>

          {/* Right Column: Three Overlapping Showcase Cards */}
          <div className="lg:col-span-6 relative h-[450px] w-full flex items-center justify-center mt-10 lg:mt-0">
            
            {/* Card 1: Dashboard UI (Top Left/Center floating) */}
            <div className="absolute top-4 left-6 md:left-12 w-[340px] md:w-[380px] bg-white border border-slate-200/80 rounded-2xl p-4 shadow-2xl shadow-slate-900/10 transform -rotate-1 hover:rotate-0 hover:-translate-y-1 transition-all duration-300 z-20">
              {/* Window Controls */}
              <div className="flex items-center gap-1.5 mb-3.5 border-b border-slate-100 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                <span className="text-[10px] text-slate-400 font-semibold font-mono ml-2">nextgen-admin.ai</span>
              </div>
              {/* Dashboard Content Mockup */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">{t({ vi: "Hệ thống AI tự hành", en: "Autonomous AI System" })}</span>
                  <span className="px-2 py-0.5 rounded bg-green-50 border border-green-200 text-[10px] font-bold text-green-700">ONLINE</span>
                </div>
                <div className="h-[2px] bg-slate-100 w-full" />
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="bg-slate-50 border border-slate-100 p-2 rounded-lg">
                    <p className="text-[9px] text-slate-400 font-bold uppercase">{t({ vi: "Model cục bộ", en: "Local Model" })}</p>
                    <p className="text-xs font-extrabold text-slate-700 mt-0.5">DeepSeek-R1</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 p-2 rounded-lg">
                    <p className="text-[9px] text-slate-400 font-bold uppercase">{t({ vi: "Độ bảo mật", en: "Data Privacy" })}</p>
                    <p className="text-xs font-extrabold text-indigo-600 mt-0.5">100% Offline</p>
                  </div>
                </div>
                <div className="bg-slate-900 text-slate-300 p-3 rounded-lg font-mono text-[10px] space-y-1">
                  <p className="text-slate-500">{"// Running database analysis..."}</p>
                  <p className="text-orange-400">{"[Success] Connected to Local CRM"}</p>
                  <p className="text-green-400">{"[Agent] Task 'Daily Report' Completed"}</p>
                </div>
              </div>
            </div>

            {/* Card 2: Process Flow (Middle Right floating) */}
            <div className="absolute right-0 md:right-8 top-1/4 w-[280px] bg-white border border-slate-200/80 rounded-2xl p-4 shadow-2xl shadow-slate-900/10 transform rotate-2 hover:rotate-0 hover:-translate-y-1 transition-all duration-300 z-30">
              <p className="text-xs font-bold text-slate-800 mb-3">{t({ vi: "Định tuyến Thông minh", en: "Intelligent AI Routing" })}</p>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 p-1.5 rounded-lg bg-indigo-50/50 border border-indigo-100">
                  <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] text-white font-bold">1</div>
                  <div className="text-[10px] font-bold text-slate-700">{t({ vi: "Tiếp nhận Yêu cầu 💬", en: "Receive Task 💬" })}</div>
                </div>
                <div className="flex items-center gap-2 p-1.5 rounded-lg bg-orange-50/50 border border-orange-100">
                  <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-[10px] text-white font-bold">2</div>
                  <div className="text-[10px] font-bold text-slate-700">{t({ vi: "Phân tích & Lập Kế Hoạch", en: "Deconstruct & Plan" })}</div>
                </div>
                <div className="flex items-center gap-2 p-1.5 rounded-lg bg-green-50/50 border border-green-100">
                  <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-[10px] text-white font-bold">3</div>
                  <div className="text-[10px] font-bold text-slate-700">{t({ vi: "Chọn Model Tối Ưu Nhất 🚀", en: "Route to Best Model 🚀" })}</div>
                </div>
              </div>
            </div>

            {/* Card 3: Code Snippet mock (Bottom Right/Center floating) */}
            <div className="absolute bottom-4 left-10 md:left-24 w-[300px] md:w-[350px] bg-[#0c0d0f] border border-slate-800/80 rounded-2xl p-4 shadow-2xl shadow-slate-900/20 transform -rotate-2 hover:rotate-0 hover:-translate-y-1 transition-all duration-300 z-10 font-mono text-[10px]">
              {/* Window Controls */}
              <div className="flex items-center gap-1.5 mb-3.5 border-b border-slate-800 pb-2">
                <span className="w-2 h-2 rounded-full bg-red-400/80"></span>
                <span className="w-2 h-2 rounded-full bg-yellow-400/80"></span>
                <span className="w-2 h-2 rounded-full bg-green-400/80"></span>
                <span className="text-[9px] text-slate-500 font-semibold ml-2">nextgen-config.ts</span>
              </div>
              {/* Code */}
              <div className="space-y-1.5 text-slate-400">
                <p><span className="text-purple-400">import</span> {"{ NextgenAI }"} <span className="text-purple-400">from</span> <span className="text-green-400">"nextgenai"</span>;</p>
                <p className="text-slate-600">{"//"}</p>
                <p><span className="text-purple-400">const</span> agent = <span className="text-purple-400">new</span> <span className="text-blue-400">NextgenAI</span>({"{"}</p>
                <p>&nbsp;&nbsp;model: <span className="text-green-400">"deepseek-r1"</span>,</p>
                <p>&nbsp;&nbsp;privacy: <span className="text-green-400">"local-offline"</span>,</p>
                <p>&nbsp;&nbsp;autoExecute: <span className="text-orange-400">true</span></p>
                <p>{"});"}</p>
                <p className="text-slate-600">{"//"}</p>
                <p><span className="text-purple-400">await</span> agent.<span className="text-blue-400">run</span>(<span className="text-green-400">"process_workflow"</span>);</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


