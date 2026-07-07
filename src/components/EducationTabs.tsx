"use client";

import React, { useState, useEffect, useRef } from "react";
import { educationPrograms } from "@/data/landingData";
import { GraduationCap, Target, Clock, User, Award, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function EducationTabs() {
  const { language, t } = useLanguage();
  const currentPrograms = educationPrograms[language];
  const [activeTab, setActiveTab] = useState("giao-vien");
  const activeTabRef = useRef<HTMLButtonElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const updateIndicator = () => {
      if (activeTabRef.current) {
        setIndicatorStyle({
          left: activeTabRef.current.offsetLeft,
          width: activeTabRef.current.offsetWidth,
        });
      }
    };

    // Run initially
    updateIndicator();

    // Use a small timeout to ensure DOM has fully painted
    const timer = setTimeout(updateIndicator, 50);

    window.addEventListener("resize", updateIndicator);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeTab, language]);

  const activeProgram = currentPrograms.find((p) => p.id === activeTab) || currentPrograms[0];


  const getProgramImage = (tabId: string) => {
    switch (tabId) {
      case "giao-vien":
        return "/NextgenAI/images/education_teachers.png";
      case "cap-1":
        return "/NextgenAI/images/education_elementary.png";
      case "cap-2":
        return "/NextgenAI/images/education_middle.png";
      case "cap-3":
        return "/NextgenAI/images/education_high.png";
      default:
        return "/NextgenAI/images/education_teachers.png";
    }
  };

  const getProgramLabel = (tabId: string) => {
    if (language === "en") {
      switch (tabId) {
        case "giao-vien":
          return "STANDARD TEACHER TRAINING";
        case "cap-1":
          return "STEM CLUB GRADES 1 - 5";
        case "cap-2":
          return "ML & PROMPTING GRADES 6 - 9";
        case "cap-3":
          return "PYTHON & RAG GRADES 10 - 12";
        default:
          return "STANDARD AI CLASS";
      }
    }
    switch (tabId) {
      case "giao-vien":
        return "ĐÀO TẠO GIÁO VIÊN TIÊU CHUẨN";
      case "cap-1":
        return "STEM CLB LỚP 1 - LỚP 5";
      case "cap-2":
        return "MÁY HỌC & PROMPT LỚP 6 - LỚP 9";
      case "cap-3":
        return "PYTHON & RAG LỚP 10 - LỚP 12";
      default:
        return "LỚP HỌC AI TIÊU CHUẨN";
    }
  };

  return (
    <section id="giao-duc" className="py-24 bg-transparent relative overflow-hidden border-t border-slate-200/60">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/[0.02] rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-sky-500/[0.02] rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
            <span>{t({ vi: "Giáo Dục AI Thực Chiến", en: "Hands-on AI Education" })}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t({ vi: "Chương Trình Đào Tạo AI Theo Từng Đối Tượng", en: "Targeted AI Training Programs" })}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed tracking-wide">
            {t({
              vi: "Được nghiên cứu và chắt lọc từ các mô hình đào tạo AI phổ thông tiên tiến, chú trọng phát triển năng lực ứng dụng thực hành và tư duy đạo đức công nghệ chuẩn Việt Nam.",
              en: "Researched and curated from advanced K-12 AI training models, focusing on practical implementation skills and technology ethics standards.",
            })}
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 max-w-full overflow-x-auto gap-1.5 relative scrollbar-none">
            {/* Sliding Active Tab Background Indicator */}
            {indicatorStyle.width > 0 && (
              <div
                className="absolute top-1.5 bottom-1.5 bg-blue-600 rounded-xl shadow-md shadow-blue-500/20 transition-all duration-300 ease-out pointer-events-none z-0"
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                }}
              />
            )}

            {currentPrograms.map((program) => (
              <button
                key={program.id}
                ref={activeTab === program.id ? activeTabRef : null}
                onClick={() => setActiveTab(program.id)}
                className={`px-5 sm:px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 whitespace-nowrap cursor-pointer relative z-10 ${
                  activeTab === program.id
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {program.tabLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Active Tab Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Info Card Summary (4 cols) */}
          <div
            key={`${activeTab}-col1`}
            className="lg:col-span-4 bg-white border border-slate-200/80 rounded-2xl p-8 space-y-6 shadow-sm flex flex-col justify-between animate-tab-col-0"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 leading-snug">
                {activeProgram.title}
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <User className="w-4.5 h-4.5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-800">{t({ vi: "Đối tượng phù hợp:", en: "Suitable target:" })}</h4>
                    <p className="text-slate-600 mt-1 leading-relaxed">{activeProgram.target}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4.5 h-4.5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-800">{t({ vi: "Thời lượng chương trình:", en: "Program duration:" })}</h4>
                    <p className="text-slate-600 mt-1 leading-relaxed">{activeProgram.duration}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Target className="w-4.5 h-4.5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-800">{t({ vi: "Mục tiêu đầu ra:", en: "Learning objectives:" })}</h4>
                    <p className="text-slate-600 mt-1 leading-relaxed">{activeProgram.objective}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-8">
              <a
                href="#lien-he"
                className="w-full inline-flex items-center justify-center px-4 py-3.5 rounded-xl bg-blue-600 text-sm font-bold text-white transition-all shadow-md shadow-blue-500/10 hover:bg-blue-700 active:scale-98 cursor-pointer"
              >
                {t({ vi: "Đăng ký tư vấn khóa học", en: "Register for Course Consultation" })}
              </a>
            </div>
          </div>

          {/* Column 2: Detailed Syllabus & Deliverables (5 cols) */}
          <div
            key={`${activeTab}-col2`}
            className="lg:col-span-5 space-y-8 animate-tab-col-1"
          >
            {/* Syllabus */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase text-slate-500 tracking-wider font-bold">
                {t({ vi: "Nội dung học chi tiết:", en: "Detailed Syllabus:" })}
              </h4>
              <div className="space-y-3.5">
                {activeProgram.contents.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200/60 flex items-start gap-3.5 shadow-sm hover:border-blue-500/25 transition-all duration-300 animate-list-item"
                    style={{ animationDelay: `${0.1 + idx * 0.06}s` }}
                  >
                    <span className="w-6 h-6 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-xs font-mono text-blue-600 flex-shrink-0 mt-0.5 font-bold">
                      {idx + 1}
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed tracking-wide">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hands-on & Deliverables side-by-side */}
            <div className="grid grid-cols-2 gap-6 pt-5 border-t border-slate-200/60">
              
              {/* Hands-on Activities */}
              <div className="space-y-3">
                <h4 className="text-[11px] font-mono uppercase text-slate-500 tracking-wider font-bold">
                  {t({ vi: "Thực hành tiêu biểu:", en: "Hands-on Activities:" })}
                </h4>
                <ul className="space-y-2">
                  {activeProgram.activities.map((act, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed tracking-wide animate-list-item"
                      style={{ animationDelay: `${0.35 + idx * 0.05}s` }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables / Final Projects */}
              <div className="space-y-3">
                <h4 className="text-[11px] font-mono uppercase text-slate-500 tracking-wider font-bold">
                  {t({ vi: "Sản phẩm đạt được:", en: "Final Deliverables:" })}
                </h4>
                <ul className="space-y-2">
                  {activeProgram.deliverables.map((del, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed tracking-wide animate-list-item"
                      style={{ animationDelay: `${0.35 + idx * 0.05}s` }}
                    >
                      <Award className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-800 font-bold">{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* Column 3: Large Dynamic Graphic Illustration (3 cols) */}
          <div
            key={`${activeTab}-col3`}
            className="lg:col-span-3 flex flex-col animate-tab-col-2"
          >
            <div className="relative w-full h-full min-h-[320px] lg:min-h-[440px] rounded-2xl overflow-hidden border border-slate-200 shadow-md group flex-grow flex">
              <img
                key={activeTab}
                src={getProgramImage(activeTab)}
                alt={activeProgram.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700 animate-img-fade"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="inline-block text-[10px] font-bold font-mono text-blue-400 bg-slate-950/90 px-3 py-1.5 rounded-lg border border-blue-500/30 shadow-lg backdrop-blur-sm tracking-wider">
                  {getProgramLabel(activeTab)}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
