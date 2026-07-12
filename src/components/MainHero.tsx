"use client";

import React, { useEffect, useRef } from "react";
import { ChevronRight, ArrowRight, Bot, Cpu, Database, Activity, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const logs = [
  "⚙️ Khởi động NextgenAI Core (Offline)...",
  "🧠 Đang nạp mô hình DeepSeek-R1 (Local)... Sẵn sàng.",
  "⏰ [Lịch trình 09:00] Bắt đầu đồng bộ cơ sở dữ liệu...",
  "📂 [Tác vụ 1/3] Truy xuất dữ liệu CRM nội bộ...",
  "📊 [Tác vụ 2/3] Phân tích xu hướng và lập báo cáo...",
  "📁 [Tác vụ 3/3] Xuất file PDF & lưu trữ bảo mật cục bộ...",
  "✅ [Hoàn thành] Quy trình tự động kết thúc. 0% can thiệp thủ công.",
  "💤 Hệ thống đang chờ sự kiện kích hoạt tiếp theo..."
];

const logsEn = [
  "⚙️ Initializing NextgenAI Core (Offline)...",
  "🧠 Loading local DeepSeek-R1 model... Ready.",
  "⏰ [Scheduler 09:00] Starting database synchronization...",
  "📂 [Task 1/3] Extracting local CRM database...",
  "📊 [Task 2/3] Analyzing trends and compiling PDF report...",
  "📁 [Task 3/3] Exporting report to secure offline folder...",
  "✅ [Success] Workflow completed. 0% human input required.",
  "💤 System sleeping. Awaiting next trigger event..."
];

const steps = [
  {
    step: 1,
    title: { vi: "Bước 1 – Hỏi đáp", en: "Step 1 – Q&A" },
    desc: { vi: "Hỏi AI từng câu một, mỗi việc đều phải prompt lại", en: "Ask AI one question at a time, re-prompting every task" },
    bullets: {
      vi: [
        "Hỏi AI từng câu một phục vụ nhu cầu tức thời.",
        "Dùng để viết bài, tóm tắt, dịch thuật, brainstorm nhanh.",
        "Mỗi công việc đều phải viết lại câu lệnh (prompt) từ đầu."
      ],
      en: [
        "Ask AI one question at a time for immediate needs.",
        "Used for quick writing, summarizing, translating, or brainstorming.",
        "Must rewrite prompt from scratch for every single task."
      ]
    },
    bg: "bg-blue-50/70 border-blue-200",
    activeBorder: "border-blue-500 shadow-blue-500/20",
    bulletBg: "bg-blue-600",
  },
  {
    step: 2,
    title: { vi: "Bước 2 – Có ngữ cảnh", en: "Step 2 – Contextualized" },
    desc: { vi: "Cung cấp tài liệu và hướng dẫn cụ thể cho AI", en: "Provide specific documents and guidelines to AI" },
    bullets: {
      vi: [
        "Biết cách sử dụng Projects, tài liệu & hướng dẫn cụ thể.",
        "Trợ lý AI hiểu sâu sắc công việc và cách bạn muốn nó phản hồi.",
        "Không cần phải giải thích hay copy-paste lại thông tin mỗi lần."
      ],
      en: [
        "Know how to use Projects, documents, and specific guides.",
        "AI assistant deeply understands the task and your preferred response style.",
        "No need to explain background context or copy-paste information each time."
      ]
    },
    bg: "bg-indigo-50/70 border-indigo-200",
    activeBorder: "border-indigo-500 shadow-indigo-500/20",
    bulletBg: "bg-indigo-600",
  },
  {
    step: 3,
    title: { vi: "Bước 3 – Có quy trình", en: "Step 3 – Process-Driven" },
    desc: { vi: "AI tự động xử lý các bước trong chuỗi công việc", en: "AI processes steps within structured workflows" },
    bullets: {
      vi: [
        "Trợ lý AI tự xử lý từng bước tuần tự trong quy trình công việc (workflow).",
        "Phân tích dữ liệu chuyên sâu, tổng hợp thông tin, lập kế hoạch, tạo nội dung.",
        "Không chỉ tạo câu trả lời đơn thuần mà trực tiếp giúp xử lý công việc."
      ],
      en: [
        "AI assistant handles each sequential step in a work process (workflow).",
        "Perform deep data analysis, information synthesis, planning, and content creation.",
        "Goes beyond text responses to directly assist in executing tasks."
      ]
    },
    bg: "bg-teal-50/70 border-teal-200",
    activeBorder: "border-teal-500 shadow-teal-500/20",
    bulletBg: "bg-teal-600",
  },
  {
    step: 4,
    title: { vi: "Bước 4 – Có hệ thống", en: "Step 4 – Systematized" },
    desc: { vi: "Đóng gói kinh nghiệm thành công cụ, template riêng", en: "Package expertise into custom prompts, tools or apps" },
    bullets: {
      vi: [
        "Biến kinh nghiệm thực tế của bạn thành bộ prompt, template, tool hoặc app riêng.",
        "Trợ lý AI làm việc tự động và chính xác theo đúng quy trình bạn thiết kế.",
        "Đầu tư xây dựng hệ thống một lần, sử dụng hiệu quả nhiều lần."
      ],
      en: [
        "Turn operational experience into standardized prompts, templates, tools, or apps.",
        "AI assistant operates automatically and precisely based on designed logic.",
        "Build the system once, benefit and use it repeatedly."
      ]
    },
    bg: "bg-purple-50/70 border-purple-200",
    activeBorder: "border-purple-500 shadow-purple-500/20",
    bulletBg: "bg-purple-600",
  },
  {
    step: 5,
    title: { vi: "Bước 5 – Tự động hóa", en: "Step 5 – Automated" },
    desc: { vi: "Hệ thống tự động vận hành 24/7 theo lịch/sự kiện", en: "System runs 24/7 on schedules or data event triggers" },
    bullets: {
      vi: [
        "Trợ lý AI tự chạy theo lịch hẹn hoặc ngay khi phát hiện có dữ liệu mới.",
        "Kết nối trực tiếp API, luồng công việc tự động (workflow) và các công cụ khác.",
        "AI không chỉ dừng ở vai trò hỗ trợ, mà trở thành một phần trong hệ thống vận hành."
      ],
      en: [
        "AI assistant operates automatically based on schedules or new data events.",
        "Directly integrates APIs, automation workflows, and other digital tools.",
        "AI goes beyond support, fully blending into the operational environment."
      ]
    },
    bg: "bg-amber-50/70 border-amber-300",
    activeBorder: "border-amber-500 shadow-amber-500/20",
    bulletBg: "bg-amber-600",
  }
];

export default function MainHero() {
  const { language, t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [activeStep, setActiveStep] = React.useState(1);
  const [currentLogIndex, setCurrentLogIndex] = React.useState(0);
  const [logsList, setLogsList] = React.useState<string[]>([]);
  const isStep5Active = activeStep === 5;
  const currentStepData = steps.find((s) => s.step === activeStep) || steps[0];

  // Cycle steps 1 -> 5
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % 5) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Cycle console logs and update list
  useEffect(() => {
    const activeLogs = language === "vi" ? logs : logsEn;
    // Reset list when language changes
    setLogsList([activeLogs[0]]);
    setCurrentLogIndex(0);

    const logInterval = setInterval(() => {
      setCurrentLogIndex((prev) => {
        const nextIndex = (prev + 1) % activeLogs.length;
        setLogsList((list) => {
          const updated = [...list, activeLogs[nextIndex]];
          if (updated.length > 3) updated.shift();
          return updated;
        });
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(logInterval);
  }, [language]);

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
                vi: "Khác với các chatbot chỉ biết trò chuyện và đưa ra lời khuyên trên trình duyệt, chúng tôi giúp bạn sở hữu một Trợ lý Máy tính thực sự hành động. AI Agent này chạy trực tiếp trên máy của bạn: tự chủ lập kế hoạch, vận hành các công cụ và trực tiếp thực thi các quy trình phức tạp thay bạn.",
                en: "Unlike standard chatbots that only chat and give advice in a browser, we help you own a computer assistant that actually takes action. Operating directly on your machine, this AI Agent autonomously plans, coordinates tools, and executes complex workflows for you."
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

          {/* Right Column: Dynamic 5-Step AI Assistant Build Roadmap */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mt-10 lg:mt-0 relative min-h-[420px]">
            
            {/* Big Card: AI Assistant Builder / Control Center */}
            <div className={`md:col-span-7 bg-[#0b0c10] border rounded-2xl p-5 shadow-2xl transition-all duration-700 flex flex-col justify-between min-h-[380px] ${
              isStep5Active 
                ? "border-amber-500/80 shadow-[0_0_35px_rgba(245,158,11,0.25)] scale-[1.02]" 
                : "border-slate-800/80 shadow-slate-950/20"
            }`}>
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Bot className={`w-5 h-5 transition-all duration-500 ${isStep5Active ? "text-amber-500 animate-bounce" : "text-blue-500"}`} />
                  <span className="text-[11px] font-bold text-slate-200 tracking-wider uppercase font-mono">
                    {isStep5Active 
                      ? t({ vi: "Cấp độ 5: Tự động hóa hoàn toàn", en: "Level 5: Full Automation" })
                      : t({ vi: "Lộ trình 5 Cấp độ Trợ lý AI", en: "5-Level AI Assistant Roadmap" })
                    }
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${isStep5Active ? "bg-amber-500 animate-ping" : "bg-blue-500 animate-pulse"}`}></span>
                  <span className="text-[10px] text-slate-400 font-mono font-bold">
                    {isStep5Active ? "ACTIVE" : "BUILDING"}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="mt-4 flex-1 flex flex-col justify-between gap-4">
                
                {/* DYNAMIC VIEW FOR STEPS 1-5 */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[9px] font-extrabold font-mono border ${
                        isStep5Active 
                          ? "bg-amber-500/10 border-amber-500/20 text-amber-500" 
                          : "bg-blue-500/10 border-blue-500/20 text-blue-400"
                      }`}>
                        {t({ vi: "BƯỚC", en: "STEP" })} {activeStep} / 5
                      </span>
                      {isStep5Active && (
                        <span className="px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20 text-[9px] font-extrabold text-teal-400 font-mono">
                          100% OFFLINE
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-extrabold text-white mt-1.5 leading-snug">
                      {t(currentStepData.title)}
                    </h3>
                  </div>

                  {/* Bullet points mapping the Image 2 visual hierarchy */}
                  <ul className="space-y-2.5">
                    {currentStepData.bullets[language].map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[11px] text-slate-300 leading-relaxed font-semibold">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                          isStep5Active ? "bg-amber-400" : "bg-blue-400"
                        }`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Progress bar showing upgrade path */}
                <div className="bg-slate-900/40 border border-slate-800/60 p-3 rounded-xl space-y-2">
                  <div className="flex items-center justify-between text-[9px] font-mono font-bold">
                    <span className="text-slate-400 uppercase">
                      {t({ vi: "Tiến độ lộ trình", en: "Roadmap Progress" })}
                    </span>
                    <span className={isStep5Active ? "text-amber-400" : "text-blue-400"}>
                      {Math.round((activeStep / 5) * 100)}%
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-500 ${
                          isStep5Active ? "bg-amber-500" : "bg-blue-500"
                        }`} 
                        style={{ width: `${(activeStep / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                  <p className="text-[9.5px] text-slate-500 leading-relaxed font-bold font-sans italic">
                    {t({
                      vi: "💡 Càng tiến lên bước cao, bạn càng ít phải 'chat hỏi đáp' thủ công và càng có nhiều 'tự động hóa tự vận hành'.",
                      en: "💡 The further you step up, the less manual chatting you do, and the more autonomy you achieve."
                    })}
                  </p>
                </div>

                {/* Console Log Area (Always present, but shines differently) */}
                <div className={`bg-black/95 border p-3.5 rounded-xl font-mono text-[9px] space-y-1.5 min-h-[120px] flex flex-col justify-end transition-colors duration-500 ${
                  isStep5Active ? "border-amber-500/30" : "border-slate-900"
                }`}>
                  <div className="flex items-center justify-between text-slate-500 pb-1 border-b border-slate-900/80 mb-1">
                    <div className="flex items-center gap-1.5">
                      <Activity className={`w-3 h-3 ${isStep5Active ? "animate-pulse text-amber-500" : "text-slate-500"}`} />
                      <span>{t({ vi: "Trình giả lập AI Agent Lvl 5", en: "Level 5 Agent Emulator" })}</span>
                    </div>
                    <span className="text-[8px] bg-slate-900 px-1 py-0.5 rounded text-slate-400 uppercase font-bold">
                      {t({ vi: "Thời gian thực", en: "Real-time" })}
                    </span>
                  </div>
                  {logsList.map((log, index) => (
                    <p key={index} className={`truncate transition-all duration-300 ${
                      log.includes("✅") ? "text-green-400 font-bold" :
                      log.includes("⚙️") || log.includes("🧠") ? "text-slate-300" :
                      log.includes("⏰") ? "text-amber-400 font-semibold animate-pulse" :
                      "text-slate-400"
                    }`}>
                      {log}
                    </p>
                  ))}
                </div>

              </div>
            </div>

            {/* Stepper with 5 Steps */}
            <div className="relative space-y-2 md:col-span-5 flex flex-col justify-between py-1">
              {/* Stepper connector line */}
              <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-slate-200 pointer-events-none -z-10" />

              {steps.map((lvl) => {
                const isActive = activeStep === lvl.step;
                return (
                  <button
                    key={lvl.step}
                    onClick={() => setActiveStep(lvl.step)}
                    className={`w-full text-left p-2.5 rounded-xl border transition-all duration-500 ease-in-out cursor-pointer relative overflow-hidden flex items-start gap-3 select-none ${
                      isActive
                        ? `${lvl.bg} ${lvl.activeBorder} scale-[1.03] shadow-md z-10`
                        : "bg-white/40 border-slate-200/60 hover:bg-white/70 opacity-75 hover:opacity-100"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 transition-colors duration-500 ${
                      isActive ? `${lvl.bulletBg} text-white animate-pulse` : "bg-slate-200 text-slate-600"
                    }`}>
                      {lvl.step}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className={`text-[11px] font-bold transition-colors duration-500 ${isActive ? "text-slate-900" : "text-slate-700"}`}>
                          {t(lvl.title)}
                        </h4>
                        {lvl.step === 5 && (
                          <span className={`text-[7px] font-extrabold px-1 py-0.5 rounded uppercase tracking-wider ${
                            isActive ? "bg-amber-200 text-amber-800" : "bg-slate-200 text-slate-500"
                          }`}>
                            {t({ vi: "Mục tiêu", en: "Goal" })}
                          </span>
                        )}
                      </div>
                      <p className="text-[9px] text-slate-500 font-semibold leading-tight mt-0.5 whitespace-normal break-words">
                        {t(lvl.desc)}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


