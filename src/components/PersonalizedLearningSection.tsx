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

// Professional active AI collaboration steps bilingual data
const studentAiSteps = {
  vi: [
    {
      step: 1,
      title: "Định nghĩa mục tiêu",
      description: "Xác định rõ vai trò và yêu cầu AI giải thích nguyên lý, đề xuất giải pháp thay vì nhờ làm hộ từ A-Z.",
    },
    {
      step: 2,
      title: "Kiểm chứng độc lập",
      description: "Chủ động đối chiếu, xác minh thông tin từ AI với cơ sở dữ liệu tin cậy để loại bỏ lỗi logic và thông tin ảo giác.",
    },
    {
      step: 3,
      title: "Tối ưu hóa liên tục",
      description: "Liên tục đặt câu hỏi bổ trợ và thử nghiệm các kịch bản khác nhau để tìm ra phương án tối ưu và hiểu sâu gốc rễ vấn đề.",
    },
    {
      step: 4,
      title: "Tự động hóa quy trình",
      description: "Sử dụng AI để tăng tốc viết mã, thiết kế tài liệu, xây dựng quy trình tự động và vận hành các hệ thống thông minh.",
    },
    {
      step: 5,
      title: "Trách nhiệm & Đạo đức",
      description: "Sử dụng AI minh bạch, kiểm soát kết quả đầu ra và cam kết tuân thủ các quy tắc bảo mật thông tin.",
    },
  ],
  en: [
    {
      step: 1,
      title: "Define Objectives",
      description: "Clearly define roles and ask AI to explain principles or propose solutions rather than doing all work from scratch.",
    },
    {
      step: 2,
      title: "Independent Verification",
      description: "Actively cross-check and verify AI output with trusted databases to eliminate logical errors and hallucinations.",
    },
    {
      step: 3,
      title: "Continuous Optimization",
      description: "Continuously ask follow-up questions and test scenarios to find optimal solutions and understand root causes.",
    },
    {
      step: 4,
      title: "Workflow Automation",
      description: "Leverage AI to accelerate coding, document design, build automated workflows, and run smart systems.",
    },
    {
      step: 5,
      title: "Responsibility & Ethics",
      description: "Use AI transparently, govern outputs, and commit to strict data security and compliance rules.",
    },
  ],
};

// Typewriter animation component for chat simulation
const TypewriterText = ({ 
  text, 
  delay = 0, 
  speed = 12,
  onComplete 
}: { 
  text: string; 
  delay?: number; 
  speed?: number; 
  onComplete?: () => void;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setStarted(false);
    
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay]);

  useEffect(() => {
    if (!started) return;
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed, onComplete]);

  return (
    <span>
      {displayedText}
      {started && displayedText.length < text.length && (
        <span className="inline-block w-1.5 h-3.5 bg-blue-500 ml-0.5 animate-pulse" />
      )}
    </span>
  );
};

// Bouncing chat bubble for AI thinking state
const ThinkingBubble = () => {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/50 border border-slate-850 w-fit">
      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></span>
    </div>
  );
};

export default function PersonalizedLearningSection() {
  const { language, t } = useLanguage();
  const currentSteps = studentAiSteps[language];
  const [activeStep, setActiveStep] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Simulator typing & thinking stages:
  // - "typing1": first component types out (e.g. Student queries or AI statement)
  // - "thinking": shows bouncing loader dot animation
  // - "typing2": second component types out (e.g. AI answer or second query)
  // - "complete": final elements (badging, hints, checkmarks) fade in
  const [simPhase, setSimPhase] = useState<"typing1" | "thinking" | "typing2" | "complete">("typing1");

  useEffect(() => {
    setSimPhase("typing1");
  }, [activeStep]);

  useEffect(() => {
    if (simPhase === "thinking") {
      const timer = setTimeout(() => {
        setSimPhase("typing2");
      }, 1000); // 1 second of AI thinking time
      return () => clearTimeout(timer);
    }
  }, [simPhase]);

  // Auto transition steps every 9 seconds to leave enough time for typing animation
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 9000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setAutoplay(false);
    
    // Clear any pending timeout and restart autoplay after 15s of inactivity
    if (autoplayRef.current) clearTimeout(autoplayRef.current);
    autoplayRef.current = setTimeout(() => {
      setAutoplay(true);
    }, 15000);
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
    <section id="quy-trinh" className="py-20 bg-transparent relative overflow-hidden">
      {/* Dynamic Keyframe Animations for Simulator */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideInLeftStep {
          from { transform: translateX(-16px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRightStep {
          from { transform: translateX(16px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInUpStep {
          from { transform: translateY(16px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes scanLineStep {
          0% { top: 0%; opacity: 0.2; }
          50% { top: 100%; opacity: 0.7; }
          100% { top: 0%; opacity: 0.2; }
        }
        @keyframes alertBorderGlow {
          0%, 100% { border-color: rgba(244, 63, 94, 0.2); box-shadow: 0 0 0px rgba(244, 63, 94, 0); }
          50% { border-color: rgba(244, 63, 94, 0.6); box-shadow: 0 0 6px rgba(244, 63, 94, 0.12); }
        }
        .anim-slide-left {
          animation: slideInLeftStep 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .anim-slide-right {
          animation: slideInRightStep 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .anim-slide-up {
          animation: slideInUpStep 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .anim-scan-line {
          animation: scanLineStep 3.5s linear infinite;
        }
        .anim-alert-glow {
          animation: alertBorderGlow 2s infinite;
        }
        .del-1 { animation-delay: 80ms; }
        .del-2 { animation-delay: 160ms; }
        .del-3 { animation-delay: 240ms; }
        .del-4 { animation-delay: 320ms; }
      `}} />

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-blue-500/[0.02] rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-sky-500/[0.02] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
            <BrainCircuit className="w-3.5 h-3.5 text-blue-600" />
            <span>{t({ vi: "Cộng Tác AI Chủ Động (Active Collaboration)", en: "Active AI Collaboration" })}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t({ vi: "Làm Chủ AI – ", en: "Master AI – " })}
            <span className="text-blue-600">
              {t({ vi: "Kiến Tạo Quy Trình", en: "Design Workflows" })}
            </span>{" "}
            {t({ vi: "Tối Ưu Hiệu Suất", en: "Optimize Performance" })}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed tracking-wide">
            {t({
              vi: "Không lạm dụng thụ động, không sao chép nguyên bản. Chúng tôi định hướng người dùng và doanh nghiệp làm việc cùng AI như một cộng sự đắc lực thông qua phương pháp khoa học và quy chuẩn đạo đức công nghệ vững vàng.",
              en: "No passive reliance, no plain copying. We guide professionals and enterprises to collaborate with AI as an efficient partner through structured methodologies and solid digital ethics.",
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left: Dynamic timeline with visual indicator */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Activity className="w-4.5 h-4.5 text-blue-600" />
              {t({
                vi: "Phương pháp đồng hành cùng AI đúng cách:",
                en: "The Right Method to Collaborate with AI:",
              })}
            </h3>

            {/* Stepper with progress timeline */}
            <div className="relative pl-9 space-y-3.5">
              {/* Progress Line container */}
              <div className="absolute left-[14px] top-3 bottom-3 w-[2px] bg-slate-100">
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
                    className={`w-full text-left flex items-start gap-4 p-3 rounded-2xl transition-all duration-300 relative group cursor-pointer ${
                      isActive
                        ? "bg-white border border-blue-500/10 shadow-md shadow-blue-500/5 translate-x-1"
                        : "border border-transparent hover:bg-slate-50/50"
                    }`}
                  >
                    {/* Step Icon Indicator */}
                    <div
                      className={`absolute -left-[34px] w-[30px] h-[30px] rounded-full flex items-center justify-center border transition-all duration-300 z-10 ${
                        isActive
                          ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/20 scale-105"
                          : "bg-white border-slate-200 text-slate-400 group-hover:border-slate-300"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>

                    <div className="space-y-1">
                      <h4
                        className={`text-sm sm:text-base font-bold transition-all flex items-center gap-2 tracking-tight ${
                          isActive ? "text-blue-700" : "text-slate-800"
                        }`}
                      >
                        <span>{item.step}. {item.title}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping"></span>
                        )}
                      </h4>
                      <p className={`text-xs sm:text-sm leading-normal tracking-wide transition-all ${
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
            <div className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-5.5 shadow-2xl relative z-10 backdrop-blur-md min-h-[400px] flex flex-col justify-between overflow-hidden">
              
              {/* Scanning neon line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-indigo-500 opacity-60 pointer-events-none anim-scan-line"></div>

              {/* Card Header: Device control dots */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-900">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="ml-2 text-[11px] font-mono text-slate-400 tracking-tight">Active Learning Simulator</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                  <span className="text-[9px] font-mono text-blue-400 uppercase font-semibold">
                    Step {activeStep + 1}
                  </span>
                </div>
              </div>

              <div key={activeStep} className="flex-grow py-5 flex flex-col justify-center">
                
                {/* STEP 1: Định nghĩa mục tiêu */}
                {activeStep === 0 && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between anim-slide-up">
                      <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wider">
                        {t({ vi: "KỸ THUẬT PROMPTING CHỦ ĐỘNG", en: "ACTIVE PROMPTING TECHNIQUE" })}
                      </span>
                      <span className="text-[9px] font-mono text-blue-400 bg-blue-950/40 px-2 py-0.5 rounded border border-blue-900/30">
                        {t({ vi: "KHỞI TẠO CÔNG VIỆC", en: "TASK INITIALIZED" })}
                      </span>
                    </div>
 
                    {/* User Prompt Input Card */}
                    <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-850 space-y-1.5 anim-slide-left">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-blue-400">
                        <span>{t({ vi: "Người dùng:", en: "User:" })}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium italic tracking-wide">
                        "
                        {simPhase === "typing1" ? (
                          <TypewriterText
                            text={t({
                              vi: "Hãy giải thích nguyên lý hoạt động của mô hình RAG trong doanh nghiệp và đề xuất cách tối ưu dữ liệu nội bộ.",
                              en: "Please explain the principle of RAG in enterprises and suggest ways to optimize internal data retrieval."
                            })}
                            onComplete={() => setSimPhase("thinking")}
                            speed={12}
                          />
                        ) : (
                          t({
                            vi: "Hãy giải thích nguyên lý hoạt động của mô hình RAG trong doanh nghiệp và đề xuất cách tối ưu dữ liệu nội bộ.",
                            en: "Please explain the principle of RAG in enterprises and suggest ways to optimize internal data retrieval."
                          })
                        )}
                        "
                      </p>
                    </div>
 
                    {/* AI Thinking indicator */}
                    {simPhase === "thinking" && (
                      <div className="anim-slide-up py-1 space-y-1">
                        <span className="text-[10px] font-mono text-slate-400 block">{t({ vi: "AI đang suy nghĩ...", en: "AI is thinking..." })}</span>
                        <ThinkingBubble />
                      </div>
                    )}
 
                    {/* AI Response Card */}
                    {(simPhase === "typing2" || simPhase === "complete") && (
                      <div className="p-3.5 rounded-xl bg-slate-900/20 border border-slate-900 space-y-1.5 anim-slide-right">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-300">
                          <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                          <span>{t({ vi: "Nextgen AI Trợ lý:", en: "Nextgen AI Assistant:" })}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-100 leading-relaxed tracking-wide">
                          "
                          {simPhase === "typing2" ? (
                            <TypewriterText
                              text={t({
                                vi: "Chào bạn! Hệ thống RAG (Retrieval-Augmented Generation) hoạt động bằng cách truy xuất dữ liệu từ kho tri thức nội bộ trước khi tạo câu trả lời...",
                                en: "Hello! RAG works by retrieving relevant documents from your internal knowledge base first, then using an LLM to generate the answer..."
                              })}
                              onComplete={() => setSimPhase("complete")}
                              speed={12}
                            />
                          ) : (
                            t({
                              vi: "Chào bạn! Hệ thống RAG (Retrieval-Augmented Generation) hoạt động bằng cách truy xuất dữ liệu từ kho tri thức nội bộ trước khi tạo câu trả lời...",
                              en: "Hello! RAG works by retrieving relevant documents from your internal knowledge base first, then using an LLM to generate the answer..."
                            })
                          )}
                          "
                        </p>
                      </div>
                    )}
 
                    {simPhase === "complete" && (
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono leading-relaxed anim-slide-up">
                        <HelpCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 animate-bounce" />
                        <span>
                          {t({
                            vi: "Thói quen tốt: Yêu cầu giải thích phương pháp thay vì copy-paste kết quả.",
                            en: "Good Habit: Ask for methodology instead of blindly copy-pasting answers."
                          })}
                        </span>
                      </div>
                    )}
                  </div>
                )}
 
                {/* STEP 2: Kiểm chứng độc lập */}
                {activeStep === 1 && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between anim-slide-up">
                      <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wider">
                        {t({ vi: "ĐỐI CHIẾU & KIỂM CHỨNG TRI THỨC", en: "KNOWLEDGE CROSS-REFERENCE" })}
                      </span>
                      <span className="text-[9px] font-mono text-rose-400 bg-rose-950/20 px-2 py-0.5 rounded border border-rose-900/30 font-bold animate-pulse">
                        {t({ vi: "XÁC MINH TIN CẬY", en: "TRUSTED VERIFICATION" })}
                      </span>
                    </div>
 
                    <div className="grid grid-cols-2 gap-3.5">
                      {/* AI Output */}
                      <div className="p-3 rounded-xl bg-slate-900/40 border border-rose-950/50 space-y-1.5 anim-slide-left">
                        <span className="text-[9px] font-bold text-rose-400 font-mono">
                          {t({ vi: "CÂU TRẢ LỜI CỦA AI:", en: "AI ANSWER:" })}
                        </span>
                        <p className="text-[11px] text-rose-100 leading-relaxed">
                          "
                          {simPhase === "typing1" ? (
                            <TypewriterText
                              text={t({
                                vi: "Mô hình này chạy 100% cloud công cộng mà không có rủi ro rò rỉ dữ liệu doanh nghiệp...",
                                en: "This model runs 100% on public cloud with zero risk of enterprise data leaks..."
                              })}
                              onComplete={() => setSimPhase("thinking")}
                              speed={12}
                            />
                          ) : (
                            t({
                              vi: "Mô hình này chạy 100% cloud công cộng mà không có rủi ro rò rỉ dữ liệu doanh nghiệp...",
                              en: "This model runs 100% on public cloud with zero risk of enterprise data leaks..."
                            })
                          )}
                          "
                        </p>
                      </div>
 
                      {/* Fact Check loader */}
                      {simPhase === "thinking" && (
                        <div className="flex flex-col items-center justify-center p-3 anim-slide-up">
                          <span className="text-[9px] font-mono text-slate-500 mb-1">{t({ vi: "Đang tra cứu chính sách...", en: "Checking policies..." })}</span>
                          <ThinkingBubble />
                        </div>
                      )}
 
                      {/* Fact Check Text */}
                      {(simPhase === "typing2" || simPhase === "complete") && (
                        <div className="p-3 rounded-xl bg-slate-900/40 border border-emerald-950/50 space-y-1.5 anim-slide-right">
                          <span className="text-[9px] font-bold text-emerald-400 font-mono">
                            {t({ vi: "CHÍNH SÁCH BẢO MẬT NỘI BỘ:", en: "INTERNAL PRIVACY POLICY:" })}
                          </span>
                          <p className="text-[11px] text-emerald-100 leading-relaxed">
                            "
                            {simPhase === "typing2" ? (
                              <TypewriterText
                                text={t({
                                  vi: "Mọi dữ liệu nhạy cảm của khách hàng bắt buộc phải xử lý offline hoặc qua mạng nội bộ được mã hóa.",
                                  en: "All sensitive customer data must be processed offline or via encrypted local networks."
                                })}
                                onComplete={() => setSimPhase("complete")}
                                speed={12}
                              />
                            ) : (
                              t({
                                vi: "Mọi dữ liệu nhạy cảm của khách hàng bắt buộc phải xử lý offline hoặc qua mạng nội bộ được mã hóa.",
                                en: "All sensitive customer data must be processed offline or via encrypted local networks."
                              })
                            )}
                            "
                          </p>
                        </div>
                      )}
                    </div>
 
                    {/* AI Hallucination Warning Banner */}
                    {simPhase === "complete" && (
                      <div className="p-2.5 rounded-lg bg-rose-950/20 border border-rose-900/30 flex items-center gap-2 text-[11px] text-rose-350 font-semibold anim-slide-up anim-alert-glow leading-relaxed">
                        <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 animate-bounce" />
                        <span className="text-rose-400">
                          {t({
                            vi: "CẢNH BÁO BẢO MẬT: AI đề xuất giải pháp cloud công cộng vi phạm quy định bảo mật nội bộ!",
                            en: "SECURITY ALERT: AI proposed public cloud solutions which violate internal privacy policies!"
                          })}
                        </span>
                      </div>
                    )}
                  </div>
                )}
 
                {/* STEP 3: Tối ưu hóa liên tục */}
                {activeStep === 2 && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between anim-slide-up">
                      <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wider">
                        {t({ vi: "TRUY VẤN SÂU ĐỂ TỐI ƯU HÓA", en: "DEEP-DIVE FOR OPTIMIZATION" })}
                      </span>
                      <span className="text-[9px] font-mono text-indigo-400 bg-indigo-950/20 px-2 py-0.5 rounded border border-indigo-900/30">
                        {t({ vi: "LIÊN TỤC TRUY VẤN", en: "CONTINUOUS QUERYING" })}
                      </span>
                    </div>
 
                    <div className="space-y-2.5">
                      {/* Sub-question 1 */}
                      <div className="p-2 rounded bg-slate-900/30 border border-slate-900 text-xs text-slate-200 flex justify-between items-center leading-relaxed anim-slide-left">
                        <span>
                          {simPhase === "typing1" ? (
                            <TypewriterText
                              text={t({
                                vi: '❓ "Làm thế nào để giảm thời gian phản hồi (latency) xuống dưới 100ms?"',
                                en: '❓ "How to reduce retrieval latency to under 100ms?"'
                              })}
                              onComplete={() => setSimPhase("thinking")}
                              speed={12}
                            />
                          ) : (
                            t({
                              vi: '❓ "Làm thế nào để giảm thời gian phản hồi (latency) xuống dưới 100ms?"',
                              en: '❓ "How to reduce retrieval latency to under 100ms?"'
                            })
                          )}
                        </span>
                        {simPhase !== "typing1" && (
                          <span className="text-[9px] font-mono text-slate-500">
                            {t({ vi: "Đã hỏi", en: "Asked" })}
                          </span>
                        )}
                      </div>
                      
                      {/* AI Thinking indicator */}
                      {simPhase === "thinking" && (
                        <div className="flex items-center justify-end py-1">
                          <ThinkingBubble />
                        </div>
                      )}
 
                      {/* Sub-question 2 */}
                      {(simPhase === "typing2" || simPhase === "complete") && (
                        <div className="p-2 rounded bg-slate-900/30 border border-slate-900 text-xs text-slate-200 flex justify-between items-center leading-relaxed anim-slide-right">
                          <span>
                            {simPhase === "typing2" ? (
                              <TypewriterText
                                text={t({
                                  vi: '❓ "Nếu dùng Vector Database lưu local thì hiệu năng tìm kiếm thay đổi ra sao?"',
                                  en: '❓ "If we use a local Vector Database, how will search performance be affected?"'
                                })}
                                onComplete={() => setSimPhase("complete")}
                                speed={12}
                              />
                            ) : (
                              t({
                                vi: '❓ "Nếu dùng Vector Database lưu local thì hiệu năng tìm kiếm thay đổi ra sao?"',
                                en: '❓ "If we use a local Vector Database, how will search performance be affected?"'
                              })
                            )}
                          </span>
                          <span className="text-[9px] font-mono text-indigo-400 animate-pulse font-bold">
                            {simPhase === "typing2" ? t({ vi: "Đang phân tích...", en: "Analyzing..." }) : t({ vi: "Đã gửi", en: "Sent" })}
                          </span>
                        </div>
                      )}
                    </div>
 
                    {simPhase === "complete" && (
                      <div className="p-3 rounded-lg bg-indigo-950/20 border border-indigo-900/30 text-xs text-indigo-100 leading-relaxed anim-slide-up">
                        <span className="font-bold text-indigo-300">
                          {t({ vi: "Nextgen AI gợi ý hướng tư duy: ", en: "Nextgen AI suggestion: " })}
                        </span>
                        {t({
                          vi: "Hãy thử tối ưu hóa kích thước chunk (chunk size) và sử dụng thuật toán Index thích hợp (HNSW).",
                          en: "Try optimizing chunk size and using an appropriate Index algorithm like HNSW."
                        })}
                      </div>
                    )}
                  </div>
                )}
 
                {/* STEP 4: Tự động hóa quy trình */}
                {activeStep === 3 && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between anim-slide-up">
                      <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wider">
                        {t({ vi: "TỰ ĐỘNG HÓA VÀ TRIỂN KHAI", en: "AUTOMATION & DEPLOYMENT" })}
                      </span>
                      <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-900/30 font-bold">PYTHON CODE ASSISTANT</span>
                    </div>
 
                    {/* Mini code block */}
                    <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 font-mono text-[11px] text-slate-200 space-y-1 anim-slide-left relative overflow-hidden min-h-[95px]">
                      {/* Scanning beam on code block */}
                      <div className="absolute left-0 right-0 h-[1.5px] bg-indigo-500/20 anim-scan-line"></div>
                      
                      <div className="text-slate-400 font-semibold mb-1">
                        {t({ vi: "# Viết code tính độ tương đồng cosine", en: "# Python code for cosine similarity" })}
                      </div>
                      {simPhase === "typing1" ? (
                        <div className="text-emerald-400 whitespace-pre">
                          <TypewriterText
                            text={t({
                              vi: "import numpy as np\ndef cosine_similarity(a, b):\n    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))",
                              en: "import numpy as np\ndef cosine_similarity(a, b):\n    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))"
                            })}
                            onComplete={() => setSimPhase("thinking")}
                            speed={7} // fast typing for code
                          />
                        </div>
                      ) : (
                        <>
                          <div><span className="text-blue-400">import</span> numpy <span className="text-blue-400">as</span> np</div>
                          <div><span className="text-blue-400">def</span> <span className="text-indigo-400 font-semibold">cosine_similarity</span>(a, b):</div>
                          <div>    <span className="text-blue-400">return</span> np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))</div>
                        </>
                      )}
                    </div>
 
                    {simPhase === "thinking" && (
                      <div className="flex flex-col items-center justify-center p-2 anim-slide-up">
                        <span className="text-[9px] font-mono text-slate-500 mb-1">{t({ vi: "AI đang phân tích mã nguồn...", en: "AI analyzing code..." })}</span>
                        <ThinkingBubble />
                      </div>
                    )}
 
                    {(simPhase === "typing2" || simPhase === "complete") && (
                      <div className="p-3 rounded bg-slate-900/50 border border-slate-800 text-xs text-slate-200 flex items-center gap-2 anim-slide-right leading-relaxed">
                        <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0 animate-bounce" />
                        <span className="text-slate-200">
                          {simPhase === "typing2" ? (
                            <TypewriterText
                              text={t({
                                vi: 'AI đề xuất: "Bạn nên viết thêm API Endpoint bằng FastAPI để tích hợp hàm này vào luồng xử lý chính!"',
                                en: 'AI Suggestion: "You should create a FastAPI endpoint to integrate this function into your main workflow!"'
                              })}
                              onComplete={() => setSimPhase("complete")}
                              speed={12}
                            />
                          ) : (
                            t({
                              vi: 'AI đề xuất: "Bạn nên viết thêm API Endpoint bằng FastAPI để tích hợp hàm này vào luồng xử lý chính!"',
                              en: 'AI Suggestion: "You should create a FastAPI endpoint to integrate this function into your main workflow!"'
                            })
                          )}
                        </span>
                      </div>
                    )}
                  </div>
                )}
 
                {/* STEP 5: Trách nhiệm & Đạo đức */}
                {activeStep === 4 && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between anim-slide-up">
                      <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wider">
                        {t({ vi: "CHỨNG NHẬN ĐẠO ĐỨC & TRÁCH NHIỆM SỐ", en: "DIGITAL ETHICS & COMPLIANCE CERTIFICATION" })}
                      </span>
                      <span className="text-[9px] text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/30 font-bold animate-pulse">
                        {t({ vi: "AN TOÀN - ĐẠO ĐỨC", en: "SAFE & COMPLIANT" })}
                      </span>
                    </div>
 
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 text-xs text-slate-200 leading-relaxed anim-slide-left">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 animate-pulse" />
                        <span>
                          {simPhase === "typing1" ? (
                            <TypewriterText
                              text={t({
                                vi: "Sử dụng AI minh bạch (Không che giấu việc dùng AI hỗ trợ công việc)",
                                en: "Transparent AI usage (No hiding of AI assistance in workflows)"
                              })}
                              onComplete={() => setSimPhase("thinking")}
                              speed={12}
                            />
                          ) : (
                            t({
                              vi: "Sử dụng AI minh bạch (Không che giấu việc dùng AI hỗ trợ công việc)",
                              en: "Transparent AI usage (No hiding of AI assistance in workflows)"
                            })
                          )}
                        </span>
                      </div>
 
                      {simPhase === "thinking" && (
                        <div className="py-1">
                          <ThinkingBubble />
                        </div>
                      )}
 
                      {(simPhase === "typing2" || simPhase === "complete") && (
                        <div className="flex items-center gap-2 text-xs text-slate-200 leading-relaxed anim-slide-left">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 animate-pulse" />
                          <span>
                            {simPhase === "typing2" ? (
                              <TypewriterText
                                text={t({
                                  vi: "Kiểm soát dữ liệu đầu vào (Tuyệt đối không đưa dữ liệu mật lên AI công cộng)",
                                  en: "Input data governance (Never upload confidential data to public LLMs)"
                                })}
                                onComplete={() => setSimPhase("complete")}
                                speed={12}
                              />
                            ) : (
                              t({
                                vi: "Kiểm soát dữ liệu đầu vào (Tuyệt đối không đưa dữ liệu mật lên AI công cộng)",
                                en: "Input data governance (Never upload confidential data to public LLMs)"
                              })
                            )}
                          </span>
                        </div>
                      )}
 
                      {simPhase === "complete" && (
                        <div className="flex items-center gap-2 text-xs text-slate-200 leading-relaxed anim-slide-left">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 animate-bounce" />
                          <span>
                            {t({
                              vi: "Đóng gói & tự chủ công nghệ (Ứng dụng AI để tự đào tạo và nâng cao nghiệp vụ)",
                              en: "Own & master the tech (Leverage AI to upskill and self-train)"
                            })}
                          </span>
                        </div>
                      )}
                    </div>
 
                    {simPhase === "complete" && (
                      <div className="pt-2.5 border-t border-slate-900 flex justify-center anim-slide-up">
                        <div className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-200 font-mono flex items-center gap-1.5 animate-pulse">
                          <ShieldCheck className="w-4 h-4 text-emerald-400" />
                          <span>
                            {t({
                              vi: "Chuẩn Bảo mật dữ liệu & Đạo đức AI Doanh nghiệp",
                              en: "Enterprise Data Security & AI Ethics Standards"
                            })}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
 
              </div>
 
              {/* Card Footer: Metadata */}
              <div className="pt-3 border-t border-slate-900 flex justify-between items-center text-[9px] text-slate-400 font-mono">
                <span>ETHICS COMPLIANCE: 100%</span>
                <span>DATA SECURITY: SECURE</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
