"use client";

import React, { useEffect, useRef } from "react";
import { painPoints } from "@/data/landingData";
import { AlertCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProblemSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { language, t } = useLanguage();
  const currentPainPoints = painPoints[language];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || 600;
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
            ctx.fillStyle = "rgba(244, 63, 94, 0.6)"; // Pink accent
          } else if (Math.random() > 0.95) {
            ctx.fillStyle = "rgba(245, 158, 11, 0.6)"; // Amber accent
          } else {
            ctx.fillStyle = "rgba(59, 130, 246, 0.25)"; // Ocean blue
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
    <section className="py-24 relative overflow-hidden bg-slate-50 border-y border-slate-200/60">
      {/* Matrix data rain effect */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-blue-500/[0.02] rounded-full blur-[90px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
            <AlertCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>
              {t({ vi: "Thực trạng hiện nay", en: "Current Situation" })}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t({
              vi: "Rất nhiều người muốn dùng AI,",
              en: "Many want to use AI,",
            })}
            <br />
            {t({ vi: "nhưng ", en: "but " })}
            <span className="text-blue-600">
              {t({
                vi: "chưa biết bắt đầu từ đâu",
                en: "don't know where to start",
              })}
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed tracking-wide">
            {t({
              vi: "Việc áp dụng AI tự phát không có định hướng thường dẫn đến lãng phí ngân sách và không giải quyết triệt để bài toán cốt lõi.",
              en: "Spontaneous, unguided AI adoption often leads to wasted budget without fully solving the core business problems.",
            })}
          </p>
        </div>

        {/* Pain points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {currentPainPoints.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-slate-200/60 hover:border-blue-500/30 shadow-sm hover:shadow-md transition-all duration-300 relative group flex gap-5"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                0{index + 1}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed tracking-wide">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion block */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-50/60 to-sky-50/60 border border-slate-200/80 text-center space-y-4 shadow-sm">
          <div className="inline-flex items-center gap-1 text-[11px] font-mono text-blue-700 font-bold tracking-wider uppercase">
            <span>{t({ vi: "Giải pháp thông thái", en: "Smart Solution" })}</span>
          </div>
          <p className="text-lg sm:text-xl font-medium text-slate-800 italic leading-relaxed">
            {t({
              vi: "“Giải pháp không phải là dùng thật nhiều công cụ AI, mà là xây đúng hệ thống, đúng model và đúng lộ trình học.”",
              en: "“The solution is not to use as many AI tools as possible, but to build the right system, select the right model, and define the right roadmap.”",
            })}
          </p>
          <div className="pt-2">
            <a
              href="#giai-phap"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 group cursor-pointer"
            >
              <span>
                {t({ vi: "Xem giải pháp của chúng tôi", en: "View Our Solutions" })}
              </span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
