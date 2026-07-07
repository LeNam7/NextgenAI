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
            <span>{t({ vi: "Học Tập Chủ Động (Active Learning)", en: "Active Learning" })}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t({ vi: "Làm Chủ AI – ", en: "Master AI – " })}
            <span className="text-blue-600">
              {t({ vi: "Kiến Tạo Tư Duy", en: "Foster Critical Thinking" })}
            </span>{" "}
            {t({ vi: "Tự Học Chủ Động", en: "for Active Self-Study" })}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed tracking-wide">
            {t({
              vi: "Không lạm dụng, không chép bài. Chúng tôi định hướng học sinh Việt Nam sử dụng AI như một cộng sự học tập thông minh qua phương pháp khoa học và đạo đức công nghệ chuẩn mực.",
              en: "No reliance, no direct copying. We orient Vietnamese K-12 students to use AI as a smart learning partner through structured scientific methods and high ethical technology standards.",
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
                en: "The Right Method to Study with AI:",
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

              {/* Dynamic Content Body based on Active Student Step */}
              {/* Added key={activeStep} to reset entrance animations on step changes */}
              <div key={activeStep} className="flex-grow py-5 flex flex-col justify-center">
                
                {/* STEP 1: Đặt câu hỏi gợi mở */}
                {activeStep === 0 && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between anim-slide-up">
                      <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wider">
                        {t({ vi: "KỸ THUẬT PROMPTING CHỦ ĐỘNG", en: "ACTIVE PROMPTING TECHNIQUE" })}
                      </span>
                      <span className="text-[9px] font-mono text-blue-400 bg-blue-950/40 px-2 py-0.5 rounded border border-blue-900/30">
                        {t({ vi: "HỌC SINH KHỞI TẠO", en: "STUDENT INITIALIZED" })}
                      </span>
                    </div>

                    {/* Student Prompt Input Card */}
                    <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-850 space-y-1.5 anim-slide-left">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-blue-400">
                        <span>{t({ vi: "Học sinh:", en: "Student:" })}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium italic tracking-wide">
                        "
                        {simPhase === "typing1" ? (
                          <TypewriterText
                            text={t({
                              vi: "Hãy giải thích cho em nguyên lý Archimedes bằng ví dụ đời sống thực tế, nhưng vui lòng không giải hộ bài tập về nhà của em nhé.",
                              en: "Please explain Archimedes' principle using a real-world example, but please do not solve my homework for me."
                            })}
                            onComplete={() => setSimPhase("thinking")}
                            speed={12}
                          />
                        ) : (
                          t({
                            vi: "Hãy giải thích cho em nguyên lý Archimedes bằng ví dụ đời sống thực tế, nhưng vui lòng không giải hộ bài tập về nhà của em nhé.",
                            en: "Please explain Archimedes' principle using a real-world example, but please do not solve my homework for me."
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
                                vi: "Chào em! Hãy tưởng tượng khi em bước chân vào một bồn tắm chứa đầy nước, em sẽ thấy một phần nước tràn ra ngoài và cơ thể em nhẹ bẫng đi...",
                                en: "Hi there! Imagine stepping into a bathtub filled with water; you notice some water overflows and your body feels lighter..."
                              })}
                              onComplete={() => setSimPhase("complete")}
                              speed={12}
                            />
                          ) : (
                            t({
                              vi: "Chào em! Hãy tưởng tượng khi em bước chân vào một bồn tắm chứa đầy nước, em sẽ thấy một phần nước tràn ra ngoài và cơ thể em nhẹ bẫng đi...",
                              en: "Hi there! Imagine stepping into a bathtub filled with water; you notice some water overflows and your body feels lighter..."
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
                            vi: "Thói quen tốt: Giới hạn AI không làm thay mà chỉ giải thích lý thuyết.",
                            en: "Good Habit: Limit AI from doing the work, use it to explain the theory instead.",
                          })}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* STEP 2: Tư duy phản biện */}
                {activeStep === 1 && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between anim-slide-up">
                      <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wider">
                        {t({ vi: "ĐỐI CHIẾU & KIỂM CHỨNG TRI THỨC", en: "CROSS-REFERENCE & VERIFY KNOWLEDGE" })}
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
                                vi: "Lực đẩy Archimedes phụ thuộc trực tiếp vào khối lượng riêng của vật thể chìm trong nước...",
                                en: "Archimedes' buoyant force directly depends on the density of the object submerged in water..."
                              })}
                              onComplete={() => setSimPhase("thinking")}
                              speed={12}
                            />
                          ) : (
                            t({
                              vi: "Lực đẩy Archimedes phụ thuộc trực tiếp vào khối lượng riêng của vật thể chìm trong nước...",
                              en: "Archimedes' buoyant force directly depends on the density of the object submerged in water..."
                            })
                          )}
                          "
                        </p>
                      </div>

                      {/* Fact Check loader */}
                      {simPhase === "thinking" && (
                        <div className="flex flex-col items-center justify-center p-3 anim-slide-up">
                          <span className="text-[9px] font-mono text-slate-500 mb-1">{t({ vi: "Đang tra cứu SGK...", en: "Checking textbook..." })}</span>
                          <ThinkingBubble />
                        </div>
                      )}

                      {/* Fact Check Text */}
                      {(simPhase === "typing2" || simPhase === "complete") && (
                        <div className="p-3 rounded-xl bg-slate-900/40 border border-emerald-950/50 space-y-1.5 anim-slide-right">
                          <span className="text-[9px] font-bold text-emerald-400 font-mono">
                            {t({ vi: "SÁCH GIÁO KHOA VẬT LÝ 8:", en: "PHYSICS 8 TEXTBOOK:" })}
                          </span>
                          <p className="text-[11px] text-emerald-100 leading-relaxed">
                            "
                            {simPhase === "typing2" ? (
                              <TypewriterText
                                text={t({
                                  vi: "Lực đẩy phụ thuộc vào trọng lượng riêng của chất lỏng và thể tích phần chất lỏng bị chiếm chỗ.",
                                  en: "The buoyant force depends on the specific weight of the liquid and the volume of the liquid displaced."
                                })}
                                onComplete={() => setSimPhase("complete")}
                                speed={12}
                              />
                            ) : (
                              t({
                                vi: "Lực đẩy phụ thuộc vào trọng lượng riêng của chất lỏng và thể tích phần chất lỏng bị chiếm chỗ.",
                                en: "The buoyant force depends on the specific weight of the liquid and the volume of the liquid displaced."
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
                            vi: "PHÁT HIỆN ẢO GIÁC AI: AI đã nhầm lẫn giữa khối lượng vật và thể tích chiếm chỗ!",
                            en: "AI HALLUCINATION DETECTED: AI confused the object's mass with the displaced volume!",
                          })}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* STEP 3: Hỏi đáp đào sâu */}
                {activeStep === 2 && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between anim-slide-up">
                      <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wider">
                        {t({ vi: "HỎI XOÁY ĐÁP XOAY ĐỂ HIỂU SÂU", en: "DEEP-DIVE Q&A FOR BETTER UNDERSTANDING" })}
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
                                vi: '❓ "Tại sao cùng thể tích mà sắt lại chìm còn gỗ lại nổi?"',
                                en: '❓ "Why does iron sink while wood floats if they have the same volume?"'
                              })}
                              onComplete={() => setSimPhase("thinking")}
                              speed={12}
                            />
                          ) : (
                            t({
                              vi: '❓ "Tại sao cùng thể tích mà sắt lại chìm còn gỗ lại nổi?"',
                              en: '❓ "Why does iron sink while wood floats if they have the same volume?"'
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
                                  vi: '❓ "Nếu em đổ thêm một lớp dầu nhẹ lên trên nước thì gỗ có nổi cao hơn?"',
                                  en: '❓ "If I pour a layer of light oil on top of the water, will the wood float higher?"'
                                })}
                                onComplete={() => setSimPhase("complete")}
                                speed={12}
                              />
                            ) : (
                              t({
                                vi: '❓ "Nếu em đổ thêm một lớp dầu nhẹ lên trên nước thì gỗ có nổi cao hơn?"',
                                en: '❓ "If I pour a layer of light oil on top of the water, will the wood float higher?"'
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
                          {t({ vi: "Nextgen AI gợi ý hướng tư duy: ", en: "Nextgen AI hint: " })}
                        </span>
                        {t({
                          vi: "Hãy so sánh trọng lượng riêng của gỗ với trọng lượng riêng trung bình của nước và dầu mà nó chiếm chỗ.",
                          en: "Compare the specific gravity of the wood with the average density of the water and oil it displaces.",
                        })}
                      </div>
                    )}
                  </div>
                )}

                {/* STEP 4: Ứng dụng sáng tạo */}
                {activeStep === 3 && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between anim-slide-up">
                      <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wider">
                        {t({ vi: "ĐỒNG HÀNH SÁNG TẠO DỰ ÁN STEM", en: "STEM PROJECT CREATIVE COMPANION" })}
                      </span>
                      <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-900/30 font-bold">PYTHON CODE ASSISTANT</span>
                    </div>

                    {/* Mini code block */}
                    <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 font-mono text-[11px] text-slate-200 space-y-1 anim-slide-left relative overflow-hidden min-h-[95px]">
                      {/* Scanning beam on code block */}
                      <div className="absolute left-0 right-0 h-[1.5px] bg-indigo-500/20 anim-scan-line"></div>
                      
                      <div className="text-slate-400 font-semibold mb-1">
                        {t({ vi: "# Viết code tính lực đẩy Archimedes", en: "# Python code for buoyant force" })}
                      </div>
                      {simPhase === "typing1" ? (
                        <div className="text-emerald-400 whitespace-pre">
                          <TypewriterText
                            text={t({
                              vi: "def luc_day_archimedes(d_long, v_chiem):\n    g = 9.81\n    return d_long * v_chiem * g",
                              en: "def buoyant_force(density, volume):\n    g = 9.81\n    return density * volume * g"
                            })}
                            onComplete={() => setSimPhase("thinking")}
                            speed={7} // fast typing for code
                          />
                        </div>
                      ) : (
                        <>
                          <div><span className="text-blue-400">def</span> <span className="text-indigo-400 font-semibold">{t({ vi: "luc_day_archimedes", en: "buoyant_force" })}</span>({t({ vi: "d_long, v_chiem", en: "density, volume" })}):</div>
                          <div>    g = <span className="text-amber-400">9.81</span></div>
                          <div>    <span className="text-blue-400">return</span> {t({ vi: "d_long * v_chiem * g", en: "density * volume * g" })}</div>
                        </>
                      )}
                    </div>

                    {simPhase === "thinking" && (
                      <div className="flex flex-col items-center justify-center p-2 anim-slide-up">
                        <span className="text-[9px] font-mono text-slate-500 mb-1">{t({ vi: "AI đang đề xuất dự án...", en: "AI proposing project ideas..." })}</span>
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
                                vi: 'AI đề xuất: "Em hãy dùng thư viện Pygame vẽ một chiếc thuyền chìm dần để trực quan hóa!"',
                                en: 'AI Suggestion: "Try using the Pygame library to draw a slowly sinking boat to visualize it!"'
                              })}
                              onComplete={() => setSimPhase("complete")}
                              speed={12}
                            />
                          ) : (
                            t({
                              vi: 'AI đề xuất: "Em hãy dùng thư viện Pygame vẽ một chiếc thuyền chìm dần để trực quan hóa!"',
                              en: 'AI Suggestion: "Try using the Pygame library to draw a slowly sinking boat to visualize it!"'
                            })
                          )}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* STEP 5: Liêm chính học thuật */}
                {activeStep === 4 && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between anim-slide-up">
                      <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wider">
                        {t({ vi: "CHỨNG NHẬN LIÊM CHÍNH HỌC THUẬT SỐ", en: "DIGITAL ACADEMIC INTEGRITY CERTIFICATION" })}
                      </span>
                      <span className="text-[9px] text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/30 font-bold animate-pulse">
                        {t({ vi: "AN TOÀN - ĐẠO ĐỨC", en: "SAFE & ETHICAL" })}
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 text-xs text-slate-200 leading-relaxed anim-slide-left">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 animate-pulse" />
                        <span>
                          {simPhase === "typing1" ? (
                            <TypewriterText
                              text={t({
                                vi: "Tự suy nghĩ làm bài (Không sao chép trực tiếp bài giải của AI)",
                                en: "Do homework independently (No direct copying of AI answers)"
                              })}
                              onComplete={() => setSimPhase("thinking")}
                              speed={12}
                            />
                          ) : (
                            t({
                              vi: "Tự suy nghĩ làm bài (Không sao chép trực tiếp bài giải của AI)",
                              en: "Do homework independently (No direct copying of AI answers)"
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
                                  vi: "Trích dẫn rõ ràng nguồn dữ liệu & trợ lý AI hỗ trợ dự án",
                                  en: "Clearly cite data sources & AI assistants supporting the project"
                                })}
                                onComplete={() => setSimPhase("complete")}
                                speed={12}
                              />
                            ) : (
                              t({
                                vi: "Trích dẫn rõ ràng nguồn dữ liệu & trợ lý AI hỗ trợ dự án",
                                en: "Clearly cite data sources & AI assistants supporting the project"
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
                              vi: "Sử dụng AI như người gợi ý tư duy, huấn luyện và kiểm thử",
                              en: "Use AI as a thinking guide, coach, and tester",
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
                              vi: "Chuẩn Whitelist AI Trường học phổ thông Việt Nam",
                              en: "Vietnam K-12 AI Whitelist Standards",
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
                <span>ACADEMIC INTEGRITY: SECURE</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
