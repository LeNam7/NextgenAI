"use client";

import React, { useEffect, useRef } from "react";
import { Bot, BookOpen, CheckCircle, Sparkles, Shield, ChevronRight, GraduationCap, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import InteractiveBrain3D from "./InteractiveBrain3D";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { language, t } = useLanguage();

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

      // Clear with trailing alpha to create fading rain effect
      ctx.fillStyle = "rgba(248, 250, 252, 0.15)";
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
            ctx.fillStyle = "rgba(244, 63, 94, 0.5)"; // Pink accent
          } else if (Math.random() > 0.95) {
            ctx.fillStyle = "rgba(245, 158, 11, 0.5)"; // Amber accent
          } else {
            ctx.fillStyle = "rgba(59, 130, 246, 0.2)"; // Soft ocean blue
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

  return (
    <section className="relative py-20 overflow-hidden bg-slate-50/50">
      {/* Background glow effects - ocean blues */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-[120px] -translate-y-1/2 pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-sky-500/[0.03] rounded-full blur-[100px] pointer-events-none"></div>

      {/* Stylised Dong Son Sun Motif watermark in background */}
      <div className="absolute -left-20 top-16 w-[480px] h-[480px] text-blue-600/[0.03] pointer-events-none -z-10 select-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.35" className="w-full h-full">
          <circle cx="50" cy="50" r="48" strokeDasharray="1 1" />
          <circle cx="50" cy="50" r="42" />
          <circle cx="50" cy="50" r="32" strokeDasharray="2 1" />
          <circle cx="50" cy="50" r="24" />
          <circle cx="50" cy="50" r="16" />
          <polygon points="50,2 52,20 62,8 58,23 74,18 64,28 84,32 68,36 88,50 68,44 84,68 64,52 74,82 58,57 62,92 52,60 50,98 48,60 38,92 42,57 26,82 36,52 16,68 32,44 12,50 32,36 16,32 36,28 26,18 42,23 38,8 48,20" fill="currentColor" className="opacity-70" />
          <circle cx="50" cy="50" r="6" fill="#fbfaf8" />
        </svg>
      </div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Headline & Call to Action */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 backdrop-blur-sm text-xs font-bold text-blue-700">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
              <span>
                {t({
                  vi: "Tiên phong ứng dụng AI vào giáo dục cho người Việt",
                  en: "Pioneering AI applications in education for Vietnamese",
                })}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {t({ vi: "Giải pháp", en: "Educational" })}{" "}
              <span className="text-blue-600">
                {t({ vi: "AI Giáo dục", en: "AI Solutions" })}
              </span>
              <br className="hidden sm:inline" />{" "}
              {t({
                vi: "Hỗ trợ cho Giáo viên, Phụ huynh",
                en: "Supporting Teachers, Parents",
              })}
              <br className="hidden sm:inline" />
              <span className="relative">
                <span className="text-blue-600">
                  {" "}
                  {t({ vi: "& Học sinh các cấp", en: "& K-12 Students" })}
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-blue-500 rounded-full"></span>
              </span>
            </h1>

            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-600 leading-relaxed tracking-wide">
              {t({
                vi: "Đồng hành cùng nhà trường, giáo viên và phụ huynh tối ưu hóa thời gian soạn bài, chấm điểm, đồng hành học tập; đồng thời trang bị năng lực số, tư duy lập trình AI an toàn, chuẩn STEM cho học sinh.",
                en: "Empowering schools, teachers, and parents to optimize lesson preparation, grading, and collaborative learning; while equipping K-12 students with digital literacy, safe AI programming, and STEM skills.",
              })}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#lien-he"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-white rounded-xl bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/10 active:scale-98 transition-all gap-2 cursor-pointer"
              >
                <span>
                  {t({
                    vi: "Đăng ký tư vấn lộ trình",
                    en: "Request Roadmap Consultation",
                  })}
                </span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#giao-duc"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-slate-700 hover:text-slate-900 rounded-xl bg-white border border-slate-200 hover:border-slate-300 active:scale-98 transition-all hover:bg-slate-50"
              >
                {t({
                  vi: "Xem chương trình giảng dạy",
                  en: "Explore Curriculum",
                })}
              </a>
            </div>

            {/* Micro value badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span>
                  {t({
                    vi: "Trợ lý AI Giáo viên soạn bài & chấm điểm",
                    en: "AI Teacher Assistant for lesson prep & grading",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold">
                <Users className="w-4 h-4 text-blue-600" />
                <span>
                  {t({
                    vi: "Lộ trình K-12 (Cấp 1, 2, 3) chuẩn hóa",
                    en: "Standardized K-12 (Grades 1-12) Roadmap",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>
                  {t({
                    vi: "Đạo đức & An toàn dữ liệu học sinh",
                    en: "Ethics & Student Data Privacy",
                  })}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Interactive 3D Brain/Neural Sphere */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            {/* Outer rotating/glowing frame */}
            <div className="absolute w-[95%] h-[95%] bg-gradient-to-tr from-blue-600/15 via-purple-500/10 to-indigo-500/15 rounded-3xl blur-2xl opacity-80 -z-10 animate-pulse-slow"></div>
            
            <InteractiveBrain3D />

            {/* Absolute floating element */}
            <div className="absolute -bottom-6 -left-6 md:-left-10 bg-slate-900/95 border border-slate-800 rounded-xl p-3.5 shadow-xl backdrop-blur-sm hidden sm:flex items-center gap-3 animate-bounce-slow z-20">
              <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10.5px] text-slate-400 font-medium">
                  {t({ vi: "Bản quyền & Đạo đức", en: "Copyright & Ethics" })}
                </p>
                <p className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
                  {t({ vi: "Chuẩn Whitelist AI", en: "AI Whitelist Standards" })}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
