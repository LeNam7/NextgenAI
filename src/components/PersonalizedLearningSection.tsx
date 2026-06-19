"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  BrainCircuit,
  Activity,
  ClipboardCheck,
  ScanFace,
  HelpCircle,
  Sparkles,
  Code,
  ShieldCheck,
  XCircle,
  CheckCircle2
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Student-centric active AI learning steps bilingual data
const studentAiSteps = {
  vi: [
    {
      step: 1,
      title: "Đặt câu hỏi gợi mở",
      description: "Học sinh ra lệnh cho AI giải thích nguyên lý và đưa ra ví dụ trực quan, thay vì yêu cầu giải hộ bài tập.",
    },
    {
      step: 2,
      title: "Tư duy phản biện",
      description: "Chủ động đối chiếu câu trả lời của AI với sách giáo khoa để phát hiện lỗi logic hoặc thông tin ảo giác.",
    },
    {
      step: 3,
      title: "Hỏi đáp đào sâu",
      description: "Liên tục đặt câu hỏi bổ trợ ('Tại sao...', 'Nếu như...') để nắm vững gốc rễ vấn đề thay vì học vẹt.",
    },
    {
      step: 4,
      title: "Ứng dụng sáng tạo",
      description: "Sử dụng AI làm trợ lý viết mã lập trình, phác thảo cốt truyện, vẽ tranh minh họa hoặc chế tạo robot STEM.",
    },
    {
      step: 5,
      title: "Liêm chính học thuật",
      description: "Cam kết tự làm bài tập về nhà, ghi công nguồn tham khảo từ AI và tuân thủ đạo đức học thuật số.",
    },
  ],
  en: [
    {
      step: 1,
      title: "Ask Open-ended Questions",
      description: "Students prompt the AI to explain principles and provide visual examples, rather than asking it to solve the homework directly.",
    },
    {
      step: 2,
      title: "Critical Thinking",
      description: "Actively cross-check the AI's answers with textbooks to detect logical errors or hallucinations.",
    },
    {
      step: 3,
      title: "Deep-dive Q&A",
      description: "Continuously ask auxiliary questions ('Why...', 'What if...') to understand the root cause rather than rote learning.",
    },
    {
      step: 4,
      title: "Creative Application",
      description: "Use AI as an assistant to write code, draft storylines, draw illustrations, or build STEM robots.",
    },
    {
      step: 5,
      title: "Academic Integrity",
      description: "Pledge to do homework independently, cite AI references, and adhere to digital academic ethics.",
    },
  ],
};

export default function PersonalizedLearningSection() {
  const { language, t } = useLanguage();
  const currentSteps = studentAiSteps[language];
  const [activeStep, setActiveStep] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto transition steps every 5 seconds
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setAutoplay(false);
    
    // Clear any pending timeout and restart autoplay after 12s of inactivity
    if (autoplayRef.current) clearTimeout(autoplayRef.current);
    autoplayRef.current = setTimeout(() => {
      setAutoplay(true);
    }, 12000);
  };

  useEffect(() => {
    return () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current);
    };
  }, []);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return ClipboardCheck;
      case 1:
        return ScanFace;
      case 2:
        return HelpCircle;
      case 3:
        return Code;
      case 4:
        return ShieldCheck;
      default:
        return ClipboardCheck;
    }
  };

  return (
    <section id="quy-trinh" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-blue-500/[0.02] rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-sky-500/[0.02] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
            <BrainCircuit className="w-3.5 h-3.5 text-blue-600" />
            <span>{t({ vi: "Học Tập Chủ Động (Active Learning)", en: "Active Learning" })}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t({ vi: "Làm Chủ AI – ", en: "Master AI – " })}
            <span className="text-blue-600">
              {t({ vi: "Kiến Tạo Tư Duy", en: "Foster Critical Thinking" })}
            </span>{" "}
            {t({ vi: "Tự Học Chủ Động", en: "for Active Self-Study" })}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed tracking-wide">
            {t({
              vi: "Không lạm dụng, không chép bài. Chúng tôi định hướng học sinh Việt Nam sử dụng AI như một cộng sự học tập thông minh qua phương pháp khoa học và đạo đức công nghệ chuẩn mực.",
              en: "No reliance, no direct copying. We orient Vietnamese K-12 students to use AI as a smart learning partner through structured scientific methods and high ethical technology standards.",
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Dynamic timeline with visual indicator */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-600" />
              {t({
                vi: "Phương pháp đồng hành cùng AI đúng cách:",
                en: "The Right Method to Study with AI:",
              })}
            </h3>

            {/* Stepper with progress timeline */}
            <div className="relative pl-10 space-y-5">
              {/* Progress Line container */}
              <div className="absolute left-[15px] top-3 bottom-3 w-[2px] bg-slate-100">
                <div
                  className="w-full bg-gradient-to-b from-blue-600 to-indigo-500 transition-all duration-500 rounded-full"
                  style={{ height: `${(activeStep / 4) * 100}%` }}
                />
              </div>

              {currentSteps.map((item, index) => {
                const isActive = activeStep === index;
                const Icon = getStepIcon(index);
                return (
                  <button
                    key={item.step}
                    onClick={() => handleStepClick(index)}
                    className={`w-full text-left flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 relative group cursor-pointer ${
                      isActive
                        ? "bg-white border border-blue-500/10 shadow-lg shadow-blue-500/5 translate-x-1"
                        : "border border-transparent hover:bg-slate-50/50"
                    }`}
                  >
                    {/* Step Icon Indicator */}
                    <div
                      className={`absolute -left-[35px] w-[32px] h-[32px] rounded-full flex items-center justify-center border transition-all duration-300 z-10 ${
                        isActive
                          ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/20 scale-105"
                          : "bg-white border-slate-200 text-slate-400 group-hover:border-slate-350"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>

                    <div className="space-y-1.5">
                      <h4
                        className={`text-base sm:text-lg font-bold transition-all flex items-center gap-2 tracking-tight ${
                          isActive ? "text-blue-700" : "text-slate-800"
                        }`}
                      >
                        <span>{item.step}. {item.title}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping"></span>
                        )}
                      </h4>
                      <p className={`text-sm leading-relaxed tracking-wide transition-all ${
                        isActive ? "text-slate-600 font-medium" : "text-slate-500"
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Dynamic Interactive Mockup Screen */}
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-rose-500/10 rounded-3xl blur-xl pointer-events-none"></div>

            {/* Browser-styled container */}
            <div className="w-full bg-slate-950 border border-slate-850 rounded-2xl p-6 shadow-2xl relative z-10 backdrop-blur-md min-h-[420px] flex flex-col justify-between overflow-hidden">
              
              {/* Scanning neon line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-indigo-500 opacity-60 pointer-events-none animate-scan-line"></div>

              {/* Card Header: Device control dots */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-900">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="ml-2 text-xs font-mono text-slate-400 tracking-tight">Active Learning Simulator</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                  <span className="text-[10px] font-mono text-blue-400 uppercase font-semibold">
                    Step {activeStep + 1}
                  </span>
                </div>
              </div>

              {/* Dynamic Content Body based on Active Student Step */}
              <div className="flex-grow py-6 flex flex-col justify-center">
                
                {/* STEP 1: Đặt câu hỏi gợi mở */}
                {activeStep === 0 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-400 font-mono tracking-wider">
                        {t({ vi: "KỸ THUẬT PROMPTING CHỦ ĐỘNG", en: "ACTIVE PROMPTING TECHNIQUE" })}
                      </span>
                      <span className="text-[10px] font-mono text-blue-400 bg-blue-950/40 px-2.5 py-1 rounded border border-blue-900/30">
                        {t({ vi: "HỌC SINH KHỞI TẠO", en: "STUDENT INITIALIZED" })}
                      </span>
                    </div>

                    {/* Student Prompt Input Card */}
                    <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-850 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-blue-400">
                        <span>{t({ vi: "Học sinh:", en: "Student:" })}</span>
                      </div>
                      <p className="text-sm text-slate-200 leading-relaxed font-medium italic tracking-wide">
                        {t({
                          vi: '"Hãy giải thích cho em nguyên lý Archimedes bằng ví dụ đời sống thực tế, nhưng vui lòng không giải hộ bài tập về nhà của em nhé."',
                          en: '"Please explain Archimedes\' principle using a real-world example, but please do not solve my homework for me."',
                        })}
                      </p>
                    </div>

                    {/* AI Response Card */}
                    <div className="p-4 rounded-xl bg-slate-900/20 border border-slate-900 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-350">
                        <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                        <span>{t({ vi: "Nextgen AI Trợ lý:", en: "Nextgen AI Assistant:" })}</span>
                      </div>
                      <p className="text-sm text-slate-100 leading-relaxed tracking-wide">
                        {t({
                          vi: '"Chào em! Hãy tưởng tượng khi em bước chân vào một bồn tắm chứa đầy nước, em sẽ thấy một phần nước tràn ra ngoài và cơ thể em nhẹ bẫng đi..."',
                          en: '"Hi there! Imagine stepping into a bathtub filled with water; you notice some water overflows and your body feels lighter..."',
                        })}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400 font-mono leading-relaxed">
                      <HelpCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span>
                        {t({
                          vi: "Thói quen tốt: Giới hạn AI không làm thay mà chỉ giải thích lý thuyết.",
                          en: "Good Habit: Limit AI from doing the work, use it to explain the theory instead.",
                        })}
                      </span>
                    </div>
                  </div>
                )}

                {/* STEP 2: Tư duy phản biện */}
                {activeStep === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-400 font-mono tracking-wider">
                        {t({ vi: "ĐỐI CHIẾU & KIỂM CHỨNG TRI THỨC", en: "CROSS-REFERENCE & VERIFY KNOWLEDGE" })}
                      </span>
                      <span className="text-[10px] font-mono text-rose-400 bg-rose-950/20 px-2.5 py-1 rounded border border-rose-900/30 font-bold">
                        {t({ vi: "XÁC MINH TIN CẬY", en: "TRUSTED VERIFICATION" })}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* AI Output */}
                      <div className="p-3.5 rounded-xl bg-slate-900/40 border border-rose-950/50 space-y-1.5">
                        <span className="text-[9.5px] font-bold text-rose-400 font-mono">
                          {t({ vi: "CÂU TRẢ LỜI CỦA AI:", en: "AI ANSWER:" })}
                        </span>
                        <p className="text-xs text-rose-100 leading-relaxed">
                          {t({
                            vi: '"Lực đẩy Archimedes phụ thuộc trực tiếp vào khối lượng riêng của vật thể chìm trong nước..."',
                            en: '"Archimedes\' buoyant force directly depends on the density of the object submerged in water..."',
                          })}
                        </p>
                      </div>

                      {/* Fact Check Text */}
                      <div className="p-3.5 rounded-xl bg-slate-900/40 border border-emerald-950/50 space-y-1.5">
                        <span className="text-[9.5px] font-bold text-emerald-400 font-mono">
                          {t({ vi: "SÁCH GIÁO KHOA VẬT LÝ 8:", en: "PHYSICS 8 TEXTBOOK:" })}
                        </span>
                        <p className="text-xs text-emerald-100 leading-relaxed">
                          {t({
                            vi: '"Lực đẩy phụ thuộc vào trọng lượng riêng của chất lỏng và thể tích phần chất lỏng bị chiếm chỗ."',
                            en: '"The buoyant force depends on the specific weight of the liquid and the volume of the liquid displaced."',
                          })}
                        </p>
                      </div>
                    </div>

                    {/* AI Hallucination Warning Banner */}
                    <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-900/30 flex items-center gap-2.5 text-xs text-rose-350 font-semibold animate-pulse leading-relaxed">
                      <XCircle className="w-4.5 h-4.5 text-rose-500 flex-shrink-0" />
                      <span>
                        {t({
                          vi: "PHÁT HIỆN ẢO GIÁC AI: AI đã nhầm lẫn giữa khối lượng vật và thể tích chiếm chỗ!",
                          en: "AI HALLUCINATION DETECTED: AI confused the object's mass with the displaced volume!",
                        })}
                      </span>
                    </div>
                  </div>
                )}

                {/* STEP 3: Hỏi đáp đào sâu */}
                {activeStep === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-400 font-mono tracking-wider">
                        {t({ vi: "HỎI XOÁY ĐÁP XOAY ĐỂ HIỂU SÂU", en: "DEEP-DIVE Q&A FOR BETTER UNDERSTANDING" })}
                      </span>
                      <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950/20 px-2.5 py-1 rounded border border-indigo-900/30">
                        {t({ vi: "LIÊN TỤC TRUY VẤN", en: "CONTINUOUS QUERYING" })}
                      </span>
                    </div>

                    <div className="space-y-3">
                      {/* Sub-question 1 */}
                      <div className="p-2.5 rounded bg-slate-900/30 border border-slate-900 text-xs sm:text-sm text-slate-200 flex justify-between items-center leading-relaxed">
                        <span>
                          {t({
                            vi: '❓ "Tại sao cùng thể tích mà sắt lại chìm còn gỗ lại nổi?"',
                            en: '❓ "Why does iron sink while wood floats if they have the same volume?"',
                          })}
                        </span>
                        <span className="text-[9.5px] font-mono text-slate-500">
                          {t({ vi: "Đã hỏi", en: "Asked" })}
                        </span>
                      </div>
                      
                      {/* Sub-question 2 */}
                      <div className="p-2.5 rounded bg-slate-900/30 border border-slate-900 text-xs sm:text-sm text-slate-200 flex justify-between items-center leading-relaxed">
                        <span>
                          {t({
                            vi: '❓ "Nếu em đổ thêm một lớp dầu nhẹ lên trên nước thì gỗ có nổi cao hơn?"',
                            en: '❓ "If I pour a layer of light oil on top of the water, will the wood float higher?"',
                          })}
                        </span>
                        <span className="text-[9.5px] font-mono text-slate-500 font-bold text-indigo-400 animate-pulse">
                          {t({ vi: "Đang phân tích", en: "Analyzing" })}
                        </span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-indigo-950/20 border border-indigo-900/30 text-xs text-indigo-100 leading-relaxed">
                      <span className="font-bold text-indigo-300">
                        {t({ vi: "Nextgen AI gợi ý hướng tư duy: ", en: "Nextgen AI hint: " })}
                      </span>
                      {t({
                        vi: "Hãy so sánh trọng lượng riêng của gỗ với trọng lượng riêng trung bình của nước và dầu mà nó chiếm chỗ.",
                        en: "Compare the specific gravity of the wood with the average density of the water and oil it displaces.",
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 4: Ứng dụng sáng tạo */}
                {activeStep === 3 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-400 font-mono tracking-wider">
                        {t({ vi: "ĐỒNG HÀNH SÁNG TẠO DỰ ÁN STEM", en: "STEM PROJECT CREATIVE COMPANION" })}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/20 px-2.5 py-1 rounded border border-emerald-900/30 font-bold">PYTHON CODE ASSISTANT</span>
                    </div>

                    {/* Mini code block */}
                    <div className="bg-slate-900 border border-slate-800 rounded-lg p-3.5 font-mono text-xs text-slate-200 space-y-1.5 leading-relaxed">
                      <div className="text-slate-400 font-semibold">
                        {t({ vi: "# Tính toán lực đẩy Archimedes thực tế", en: "# Calculate actual Archimedes buoyant force" })}
                      </div>
                      <div><span className="text-blue-400">def</span> <span className="text-indigo-400 font-semibold">luc_day_archimedes</span>(d_chat_long, v_chiem_cho):</div>
                      <div>    gravity = <span className="text-amber-400">9.81</span></div>
                      <div>    <span className="text-blue-400">return</span> d_chat_long * v_chiem_cho * gravity</div>
                    </div>

                    <div className="p-3 rounded bg-slate-900/50 border border-slate-855 text-xs text-slate-200 flex items-center gap-2.5 leading-relaxed">
                      <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span className="text-slate-200">
                        {t({
                          vi: 'AI đề xuất: "Em hãy dùng thư viện Pygame vẽ một chiếc thuyền chìm dần để trực quan hóa!"',
                          en: 'AI Suggestion: "Try using the Pygame library to draw a slowly sinking boat to visualize it!"',
                        })}
                      </span>
                    </div>
                  </div>
                )}

                {/* STEP 5: Liêm chính học thuật */}
                {activeStep === 4 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-400 font-mono tracking-wider">
                        {t({ vi: "CHỨNG NHẬN LIÊM CHÍNH HỌC THUẬT SỐ", en: "DIGITAL ACADEMIC INTEGRITY CERTIFICATION" })}
                      </span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-950/30 px-2.5 py-1 rounded border border-emerald-900/30 font-bold">
                        {t({ vi: "AN TOÀN - ĐẠO ĐỨC", en: "SAFE & ETHICAL" })}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2.5 text-sm text-slate-200 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>
                          {t({
                            vi: "Tự suy nghĩ làm bài (Không sao chép trực tiếp bài giải của AI)",
                            en: "Do homework independently (No direct copying of AI answers)",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5 text-sm text-slate-200 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>
                          {t({
                            vi: "Trích dẫn rõ ràng nguồn dữ liệu & trợ lý AI hỗ trợ dự án",
                            en: "Clearly cite data sources & AI assistants supporting the project",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5 text-sm text-slate-200 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>
                          {t({
                            vi: "Sử dụng AI như người gợi ý tư duy, huấn luyện và kiểm thử",
                            en: "Use AI as a thinking guide, coach, and tester",
                          })}
                        </span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-900 flex justify-center">
                      <div className="px-3.5 py-1.5 rounded bg-slate-900 border border-slate-800 text-xs text-slate-200 font-mono flex items-center gap-1.5">
                        <ShieldCheck className="w-4.5 h-4.5 text-emerald-400" />
                        <span>
                          {t({
                            vi: "Chuẩn Whitelist AI Trường học phổ thông Việt Nam",
                            en: "Vietnam K-12 AI Whitelist Standards",
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Card Footer: Metadata */}
              <div className="pt-4 border-t border-slate-900 flex justify-between items-center text-[10px] text-slate-400 font-mono">
                <span>ETHICS COMPLIANCE: 100%</span>
                <span>ACADEMIC INTEGRITY: SECURE</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
