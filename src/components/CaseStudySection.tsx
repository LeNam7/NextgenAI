import React from "react";
import { caseStudies } from "@/data/landingData";
import { AlertCircle, Lightbulb, TrendingUp, Sparkles, Building, GraduationCap, UserCheck } from "lucide-react";

const icons = [
  <GraduationCap key="school" className="w-5 h-5 text-blue-600" />,
  <Sparkles key="center" className="w-5 h-5 text-blue-600" />,
  <Building key="enterprise" className="w-5 h-5 text-blue-600" />,
  <UserCheck key="teacher" className="w-5 h-5 text-blue-600" />,
];

export default function CaseStudySection() {
  return (
    <section id="case-study" className="py-24 bg-transparent border-t border-slate-200/60 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/[0.02] rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with split text and image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Kịch Bản Ứng Dụng Thực Tế</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Tình Huống Sử Dụng & <br className="hidden md:inline" />Giải Giải Pháp Triển Khai Thực Tế
            </h2>
            <p className="text-slate-655 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0">
              Khám phá cách các cá nhân, tổ chức giáo dục và doanh nghiệp Việt Nam giải quyết bài toán thực tế bằng các giải pháp AI chuyên biệt từ NextgenAI.
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
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <div className="absolute bottom-2.5 left-4">
                <span className="text-[9px] font-mono text-blue-400 bg-slate-950/80 px-2.5 py-0.5 rounded border border-blue-500/20">VĂN PHÒNG DOANH NGHIỆP TRONG NƯỚC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((scenario, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-500/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              {/* Header: Title and Target Audience */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-blue-700 font-bold tracking-wider uppercase">
                    {scenario.targetAudience}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {scenario.title}
                  </h3>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex-shrink-0">
                  {icons[index]}
                </div>
              </div>

              {/* Body: Problem, Solution, Outcome */}
              <div className="space-y-4 text-xs">
                {/* 1. Problem */}
                <div className="flex gap-2.5">
                  <AlertCircle className="w-4 h-4 text-slate-455 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-655 leading-relaxed">
                    <strong className="text-slate-800">Vấn đề:</strong> {scenario.problem}
                  </p>
                </div>

                {/* 2. Solution */}
                <div className="flex gap-2.5">
                  <Lightbulb className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-655 leading-relaxed">
                    <strong className="text-slate-800">Giải pháp:</strong> {scenario.solution}
                  </p>
                </div>

                {/* 3. Outcome */}
                <div className="flex gap-2.5 p-3 rounded-lg bg-blue-50 border border-blue-100">
                  <TrendingUp className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700 leading-relaxed font-medium">
                    <strong className="text-blue-700 font-bold">Kết quả kỳ vọng:</strong> {scenario.outcome}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
