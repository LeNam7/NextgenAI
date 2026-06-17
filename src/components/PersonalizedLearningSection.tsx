"use client";

import React, { useState } from "react";
import { adaptiveSteps } from "@/data/landingData";
import { BrainCircuit, Activity, ArrowRight } from "lucide-react";

export default function PersonalizedLearningSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-blue-500/[0.02] rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-sky-500/[0.02] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
            <BrainCircuit className="w-3.5 h-3.5 text-blue-600" />
            <span>Học Tập Cá Nhân Hóa (Adaptive Learning)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            AI Không Dạy Đại Trà – <span className="text-blue-600">Cá Nhân Hóa</span> Lộ Trình Học
          </h2>
          <p className="text-slate-655 text-sm sm:text-base">
            Lấy cảm hứng từ các mô hình giáo dục thông minh hàng đầu thế giới, hệ thống AI xác định lỗ hổng tri thức và tự động may đo lộ trình riêng biệt cho từng học sinh Việt Nam.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: 5-Step Stepper/Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-600" />
              Quy trình chẩn đoán & cá nhân hóa:
            </h3>

            {/* Stepper for Mobile (Vertical) and Desktop (Vertical List with detail) */}
            <div className="space-y-4">
              {adaptiveSteps.map((item, index) => {
                const isActive = activeStep === index;
                return (
                  <button
                    key={item.step}
                    onClick={() => setActiveStep(index)}
                    className={`w-full text-left p-4.5 rounded-xl border transition-all duration-300 flex items-start gap-4 cursor-pointer ${
                      isActive
                        ? "bg-white border-blue-500/30 shadow-md shadow-blue-500/5"
                        : "bg-white/40 border-slate-200/80 hover:border-slate-300 hover:bg-white/90"
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 ${
                        isActive
                          ? "bg-blue-600 text-white shadow-md shadow-blue-550/25"
                          : "bg-slate-100 border border-slate-200 text-slate-500"
                      }`}
                    >
                      {item.step}
                    </div>
                    <div className="space-y-1">
                      <h4
                        className={`text-sm font-bold transition-all ${
                          isActive ? "text-blue-700" : "text-slate-800"
                        }`}
                      >
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-655 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Stunning Mockup Dashboard & Realistic Image */}
          <div className="lg:col-span-5 relative space-y-6">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-rose-500/10 rounded-2xl blur-lg pointer-events-none"></div>

            {/* Student Image Banner */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
              <img
                src="/images/vietnamese_student.png"
                alt="Học sinh Việt Nam học tập cá nhân hóa với NextgenAI"
                className="w-full h-48 object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <div className="absolute bottom-3 left-4">
                <span className="text-[10px] font-mono text-blue-400 bg-slate-950/80 px-2.5 py-1 rounded border border-blue-550/30">HỌC TẬP THỰC TẾ TRÊN MÁY TÍNH BẢNG</span>
              </div>
            </div>

            {/* Learning Progress Mockup Card (Kept dark for premium high contrast dashboard view) */}
            <div className="w-full bg-slate-950 border border-slate-850 rounded-2xl p-6 shadow-2xl relative z-10 backdrop-blur-md space-y-6 overflow-hidden">
              
              {/* Scanning neon line for AI diagnostic feel */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-amber-500 opacity-60 pointer-events-none animate-scan-line"></div>

              {/* Card Header: Student Profile */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-900">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/25">
                    MĐ
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Nguyễn Minh Đức</h4>
                    <p className="text-[10px] text-slate-500">Học sinh lớp 8 • ID: AI-28492</p>
                  </div>
                </div>
                {/* Math-AI Pathway Badge - increased contrast dramatically for readability */}
                <div className="px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-500/50 text-[10px] font-bold font-mono text-blue-300 shadow-sm shadow-blue-500/10">
                  Lộ trình: Math-AI
                </div>
              </div>

              {/* Progress Bar & Weak Points */}
              <div className="space-y-4">
                {/* Score */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-medium">Độ hiểu bài tích lũy</span>
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-rose-400">87%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 via-purple-500 to-rose-500 rounded-full" style={{ width: "87%" }}></div>
                  </div>
                </div>

                {/* Weak Points list */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Lỗ hổng kiến thức phát hiện:</span>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between p-2 rounded bg-slate-900/60 border border-slate-900 text-xs">
                      <span className="text-slate-300 font-medium">1. Phương trình bậc nhất</span>
                      <span className="px-1.5 py-0.5 text-[8px] font-mono rounded bg-rose-950/40 border border-rose-900/40 text-rose-400">Yếu (45%)</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-slate-900/60 border border-slate-900 text-xs">
                      <span className="text-slate-300 font-medium">2. Hàm số và đồ thị</span>
                      <span className="px-1.5 py-0.5 text-[8px] font-mono rounded bg-amber-950/40 border border-amber-900/40 text-amber-400">Cần luyện (65%)</span>
                    </div>
                  </div>
                </div>

                {/* Proposed exercises */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Bài tập đề xuất tự động:</span>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-850 flex items-center justify-between">
                    <div>
                      <h5 className="text-xs font-bold text-slate-200">Luyện tập Logic 15 câu</h5>
                      <p className="text-[9px] text-slate-500">Tập trung sửa lỗi Phương trình bậc nhất</p>
                    </div>
                    <button className="flex items-center gap-1 px-3 py-1.5 rounded bg-gradient-to-r from-blue-600 via-purple-500 to-rose-500 hover:from-blue-700 hover:to-rose-600 text-[10px] font-bold text-white transition-all shadow-md shadow-rose-500/10 active:scale-95 cursor-pointer group">
                      <span>Làm ngay</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Project progress */}
                <div className="space-y-1.5 pt-2 border-t border-slate-900">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Tiến độ dự án STEM: Chatbot địa lý</span>
                    <span className="font-semibold text-slate-300">80%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-amber-400 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
