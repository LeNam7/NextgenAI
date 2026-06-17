"use client";

import React from "react";
import { Bot, BookOpen, Layers, CheckCircle, Sparkles, UserCheck, Shield, ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-slate-50">
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
              <span>Tiên phong ứng dụng AI Việt cho người Việt</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Xây dựng <span className="text-blue-600">AI riêng</span>,
              <br className="hidden sm:inline" /> cung cấp model AI &
              <br className="hidden sm:inline" />
              <span className="relative">
                <span className="text-blue-600"> Đào tạo AI</span>
                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-blue-500 rounded-full"></span>
              </span>{" "}
              thực chiến
            </h1>

            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-655 leading-relaxed">
              Chúng tôi đồng hành cùng cá nhân, doanh nghiệp và các trường học Việt Nam tối ưu hóa quy trình, thiết kế lộ trình đào tạo Trí tuệ Nhân tạo thông minh, bảo mật, đáp ứng chuẩn Giáo dục phổ thông Việt Nam.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#lien-he"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-white rounded-xl bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/10 active:scale-98 transition-all gap-2 cursor-pointer"
              >
                <span>Tư vấn xây AI riêng</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#giao-duc"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-slate-700 hover:text-slate-900 rounded-xl bg-white border border-slate-200 hover:border-slate-300 active:scale-98 transition-all hover:bg-slate-50"
              >
                Xem chương trình giáo dục AI
              </a>
            </div>

            {/* Micro value badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>Bảo mật dữ liệu 100%</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                <UserCheck className="w-4 h-4 text-blue-600" />
                <span>Thiết kế chuẩn hóa Việt Nam</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span>Hỗ trợ chuyển giao trọn gói</span>
              </div>
            </div>
          </div>

          {/* Right: Stunning Mockup Dashboard Visual (Dark card contrast for luxury feel) */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            {/* Outer rotating/glowing frame with warm AI colors interweaving */}
            <div className="absolute w-[95%] h-[95%] bg-gradient-to-tr from-blue-600/15 via-purple-500/10 to-rose-500/15 rounded-2xl blur-xl opacity-80 -z-10 animate-pulse-slow"></div>
            
            {/* Dashboard Container (Sleek dark card for premium tech contrast) */}
            <div className="w-full max-w-[480px] bg-slate-950 border border-blue-900/60 rounded-2xl p-5 shadow-2xl backdrop-blur-md relative overflow-hidden">
              
              {/* Scanning neon line for AI effect */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-rose-500 opacity-60 pointer-events-none animate-scan-line"></div>

              {/* Header of Dashboard */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-900/80">
                {/* 3 browser dots: red, yellow, green for high visibility */}
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 shadow-sm shadow-rose-500/20"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400 shadow-sm shadow-amber-400/20"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/20"></span>
                  <span className="ml-2 text-xs font-mono text-slate-300">nextgen-ai.local</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
                  <span className="text-[10px] font-mono text-blue-400">ACTIVE</span>
                </div>
              </div>

              {/* Dashboard Modules List */}
              <div className="mt-5 space-y-4">
                
                {/* Module 1: Private AI Assistant */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/30 border border-slate-850 hover:border-blue-500/40 transition-all group">
                  <div className="flex items-center gap-3">
                    {/* Pop-out bright icon container */}
                    <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/40 text-blue-400 group-hover:bg-blue-600 group-hover:text-slate-950 transition-all duration-300">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-white">Private AI Assistant</h3>
                      <p className="text-[10px] text-slate-400">Hỏi đáp tài liệu & RAG</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-emerald-400 border border-emerald-950/30">Online</span>
                </div>

                {/* Module 2: AI Model Hub */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/30 border border-slate-850 hover:border-blue-500/40 transition-all group">
                  <div className="flex items-center gap-3">
                    {/* Pop-out bright icon container */}
                    <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/40 text-blue-400 group-hover:bg-blue-600 group-hover:text-slate-950 transition-all duration-300">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-white">AI Model Hub</h3>
                      <p className="text-[10px] text-slate-400">LLM, Vision, Speech APIs</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/30 text-amber-400 border border-amber-900/30">12 Models</span>
                </div>

                {/* Module 3: AI Education Pathway */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/30 border border-slate-850 hover:border-blue-500/40 transition-all group">
                  <div className="flex items-center gap-3">
                    {/* Pop-out bright icon container */}
                    <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/40 text-blue-400 group-hover:bg-blue-600 group-hover:text-slate-950 transition-all duration-300">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-white">AI Education Pathway</h3>
                      <p className="text-[10px] text-slate-400">Khung đào tạo K-12 & GV</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950/30 text-rose-400 border border-rose-900/30">4 Khóa</span>
                </div>

                {/* Grid for two smaller sub-widgets */}
                <div className="grid grid-cols-2 gap-3">
                  
                  {/* Sub-Widget: Teacher Copilot */}
                  <div className="p-3 rounded-xl bg-slate-900/30 border border-slate-850 hover:border-blue-500/40 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-semibold text-slate-400">Teacher Copilot</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                    </div>
                    <div className="mt-2 text-base font-bold text-rose-400">95%</div>
                    {/* Make description much brighter for accessibility */}
                    <p className="text-[9px] text-slate-400">Giảm thời gian soạn bài</p>
                  </div>

                  {/* Sub-Widget: Student AI Lab */}
                  <div className="p-3 rounded-xl bg-slate-900/30 border border-slate-850 hover:border-blue-500/40 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-semibold text-slate-400">Student AI Lab</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    </div>
                    <div className="mt-2 text-base font-bold text-amber-400">350+</div>
                    {/* Make description much brighter for accessibility */}
                    <p className="text-[9px] text-slate-400">Dự án STEM hoàn thành</p>
                  </div>
                </div>

              </div>

              {/* Floating micro metrics */}
              <div className="mt-5 pt-4 border-t border-slate-900 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                <span>RAG LATENCY: 1.2s</span>
                <span>SECURITY: ENCRYPTED</span>
              </div>
            </div>

            {/* Absolute floating element for dynamic depth */}
            <div className="absolute -bottom-6 -left-6 md:-left-10 bg-slate-900/95 border border-slate-850 rounded-xl p-3 shadow-xl backdrop-blur-sm hidden sm:flex items-center gap-3 animate-bounce-slow">
              <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-medium">Bản quyền & Đạo đức</p>
                <p className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">Chuẩn Whitelist AI</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
