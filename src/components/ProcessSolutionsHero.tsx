"use client";

import React, { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProcessSolutionsHero() {
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
      canvas.height = canvas.parentElement?.offsetHeight || 300;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Dark matrix rain characters
    const alphabet = "0101010101010101NEXTGENAI";
    const fontSize = 14;
    const columns = Math.ceil(canvas.width / fontSize);

    const rainDrops = Array(columns).fill(1).map(() => Math.floor(Math.random() * -50));

    let lastTime = 0;
    const fps = 15;
    const interval = 1000 / fps;

    const draw = (timestamp: number = 0) => {
      animationFrameId = requestAnimationFrame(draw);

      const elapsed = timestamp - lastTime;
      if (elapsed < interval) return;
      lastTime = timestamp - (elapsed % interval);

      // Dark background trail clearing
      ctx.fillStyle = "rgba(15, 23, 42, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        
        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;

        if (y > 0) {
          if (Math.random() > 0.98) {
            ctx.fillStyle = "rgba(244, 63, 94, 0.5)"; // Pink
          } else if (Math.random() > 0.95) {
            ctx.fillStyle = "rgba(245, 158, 11, 0.5)"; // Amber
          } else {
            ctx.fillStyle = "rgba(99, 102, 241, 0.25)"; // Indigo
          }
          ctx.fillText(text, x, y);
        }

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
    <div className="relative pt-36 pb-20 overflow-hidden bg-slate-900 text-white text-center">
      {/* Matrix data rain effect */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90 pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-40 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-bold text-indigo-400 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
          <span>{t({ vi: "Hệ Sinh Thái Dịch Vụ AI Toàn Diện", en: "Comprehensive AI Service Ecosystem" })}</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          {t({ vi: "Quy Trình & Giải Pháp", en: "Process & Solutions" })}
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-medium">
          {t({
            vi: "Khám phá các trụ cột dịch vụ cốt lõi, mô hình tối ưu và quy trình triển khai chuẩn hóa của NextgenAI.",
            en: "Explore NextgenAI's core service pillars, optimized models, and standardized deployment process."
          })}
        </p>
      </div>
    </div>
  );
}
