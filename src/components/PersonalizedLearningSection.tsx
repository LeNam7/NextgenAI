"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  BrainCircuit,
  Activity,
  ArrowRight,
  ClipboardCheck,
  ScanFace,
  Milestone,
  GraduationCap,
  BarChart3,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  Code,
  ShieldCheck
} from "lucide-react";

// Student-centric active AI learning steps
const studentAiSteps = [
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
];

export default function PersonalizedLearningSection() {
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
            <span>Học Tập Chủ Động (Active Learning)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Làm Chủ AI – <span className="text-blue-600">Kiến Tạo Tư Duy</span> Tự Học Chủ Động
          </h2>
          <p className="text-slate-655 text-sm sm:text-base">
            Không lạm dụng, không chép bài. Chúng tôi định hướng học sinh Việt Nam sử dụng AI như một cộng sự học tập thông minh qua phương pháp khoa học và đạo đức công nghệ chuẩn mực.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Dynamic timeline with visual indicator */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-600" />
              Phương pháp đồng hành cùng AI đúng cách:
            </h3>

            {/* Stepper with progress timeline */}
            <div className="relative pl-10 space-y-3">
              {/* Progress Line container */}
              <div className="absolute left-[15px] top-3 bottom-3 w-[2px] bg-slate-100">
                <div
                  className="w-full bg-gradient-to-b from-blue-600 to-indigo-500 transition-all duration-500 rounded-full"
                  style={{ height: `${(activeStep / 4) * 100}%` }}
                />
              </div>

              {studentAiSteps.map((item, index) => {
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

                    <div className="space-y-1">
                      <h4
                        className={`text-sm font-bold transition-all flex items-center gap-2 ${
                          isActive ? "text-blue-700" : "text-slate-800"
                        }`}
                      >
                        <span>{item.step}. {item.title}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping"></span>
                        )}
                      </h4>
                      <p className={`text-xs transition-all ${
                        isActive ? "text-slate-655" : "text-slate-500"
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Dynamic Interactive Mockup Screen (Visualizing the active student step) */}
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-rose-500/10 rounded-3xl blur-xl pointer-events-none"></div>

            {/* Browser-styled container */}
            <div className="w-full bg-slate-950 border border-slate-850 rounded-2xl p-5 shadow-2xl relative z-10 backdrop-blur-md min-h-[380px] flex flex-col justify-between overflow-hidden">
              
              {/* Scanning neon line for AI feel */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-indigo-500 opacity-60 pointer-events-none animate-scan-line"></div>

              {/* Card Header: Device control dots */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-900">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="ml-2 text-[10px] font-mono text-slate-500 tracking-tight">Active Learning Simulator</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                  <span className="text-[9px] font-mono text-blue-400 uppercase font-semibold">
                    Step {activeStep + 1}
                  </span>
                </div>
              </div>

              {/* Dynamic Content Body based on Active Student Step */}
              <div className="flex-grow py-5 flex flex-col justify-center">
                
                {/* STEP 1: Đặt câu hỏi gợi mở */}
                {activeStep === 0 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wider">KỸ THUẬT PROMPTING CHỦ ĐỘNG</span>
                      <span className="text-[9px] font-mono text-blue-400 bg-blue-950/40 px-2 py-0.5 rounded border border-blue-900/30">HỌC SINH KHỞI TẠO</span>
                    </div>

                    {/* Student Prompt Input Card */}
                    <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-850 space-y-2">
                      <div className="flex items-center gap-1.5 text-[9.5px] font-bold text-blue-400">
                        <span>Học sinh:</span>
                      </div>
                      <p className="text-[11.5px] text-slate-200 leading-relaxed font-medium italic">
                        "Hãy giải thích cho em nguyên lý Archimedes bằng ví dụ đời sống thực tế, nhưng vui lòng không giải hộ bài tập về nhà của em nhé."
                      </p>
                    </div>

                    {/* AI Response Card */}
                    <div className="p-3.5 rounded-xl bg-slate-900/20 border border-slate-900 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-[9.5px] font-bold text-slate-300">
                        <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                        <span>Nextgen AI Trợ lý:</span>
                      </div>
                      <p className="text-[11px] text-slate-100 leading-relaxed">
                        "Chào em! Hãy tưởng tượng khi em bước chân vào một bồn tắm chứa đầy nước, em sẽ thấy một phần nước tràn ra ngoài và cơ thể em nhẹ bẫng đi..."
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-[9px] text-slate-500 font-mono">
                      <HelpCircle className="w-3 h-3 text-blue-500" />
                      <span>Thói quen tốt: Giới hạn AI không làm thay mà chỉ giải thích lý thuyết.</span>
                    </div>
                  </div>
                )}

                {/* STEP 2: Tư duy phản biện */}
                {activeStep === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wider">ĐỐI CHIẾU & KIỂM CHỨNG TRI THỨC</span>
                      <span className="text-[9px] font-mono text-rose-400 bg-rose-950/20 px-2 py-0.5 rounded border border-rose-900/30 font-bold">XÁC MINH TIN CẬY</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {/* AI Output */}
                      <div className="p-3 rounded-xl bg-slate-900/40 border border-rose-950/50 space-y-1">
                        <span className="text-[8.5px] font-bold text-rose-400 font-mono">CÂU TRẢ LỜI CỦA AI:</span>
                        <p className="text-[10px] text-rose-100 leading-relaxed">
                          "Lực đẩy Archimedes phụ thuộc trực tiếp vào khối lượng riêng của vật thể chìm trong nước..."
                        </p>
                      </div>

                      {/* Fact Check Text */}
                      <div className="p-3 rounded-xl bg-slate-900/40 border border-emerald-950/50 space-y-1">
                        <span className="text-[8.5px] font-bold text-emerald-400 font-mono">SÁCH GIÁO KHOA VẬT LÝ 8:</span>
                        <p className="text-[10px] text-emerald-100 leading-relaxed">
                          "Lực đẩy phụ thuộc vào trọng lượng riêng của chất lỏng và thể tích phần chất lỏng bị chiếm chỗ."
                        </p>
                      </div>
                    </div>

                    {/* AI Hallucination Warning Banner */}
                    <div className="p-2.5 rounded-lg bg-rose-950/20 border border-rose-900/30 flex items-center gap-2 text-[10px] text-rose-300 font-semibold animate-pulse">
                      <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                      <span>PHÁT HIỆN ẢO GIÁC AI: AI đã nhầm lẫn giữa khối lượng vật và thể tích chiếm chỗ!</span>
                    </div>
                  </div>
                )}

                {/* STEP 3: Hỏi đáp đào sâu */}
                {activeStep === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wider">HỎI XOÁY ĐÁP XOAY ĐỂ HIỂU SÂU</span>
                      <span className="text-[9px] font-mono text-indigo-400 bg-indigo-950/20 px-2 py-0.5 rounded border border-indigo-900/30">LIÊN TỤC TRUY VẤN</span>
                    </div>

                    <div className="space-y-2">
                      {/* Sub-question 1 */}
                      <div className="p-2 rounded bg-slate-900/30 border border-slate-900 text-[10.5px] text-slate-300 flex justify-between items-center">
                        <span>❓ "Tại sao cùng thể tích mà sắt lại chìm còn gỗ lại nổi?"</span>
                        <span className="text-[8.5px] font-mono text-slate-500">Đã hỏi</span>
                      </div>
                      
                      {/* Sub-question 2 */}
                      <div className="p-2 rounded bg-slate-900/30 border border-slate-900 text-[10.5px] text-slate-300 flex justify-between items-center">
                        <span>❓ "Nếu em đổ thêm một lớp dầu nhẹ lên trên nước thì gỗ có nổi cao hơn?"</span>
                        <span className="text-[8.5px] font-mono text-slate-500 font-bold text-indigo-400 animate-pulse">Đang phân tích</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-indigo-950/20 border border-indigo-900/30 text-[10px] text-indigo-100">
                      <span className="font-bold text-indigo-300">Nextgen AI gợi ý hướng tư duy:</span> Hãy so sánh trọng lượng riêng của gỗ với trọng lượng riêng trung bình của nước và dầu mà nó chiếm chỗ.
                    </div>
                  </div>
                )}

                {/* STEP 4: Ứng dụng sáng tạo */}
                {activeStep === 3 && (
                  <div className="space-y-3 animate-fade-in">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wider">ĐỒNG HÀNH SÁNG TẠO DỰ ÁN STEM</span>
                      <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-900/30 font-bold">PYTHON CODE ASSISTANT</span>
                    </div>

                    {/* Mini code block */}
                    <div className="bg-slate-900 border border-slate-800 rounded-lg p-2.5 font-mono text-[10px] text-slate-200 space-y-1">
                      <div className="text-slate-400 font-semibold"># Tính toán lực đẩy Archimedes thực tế</div>
                      <div><span className="text-blue-400">def</span> <span className="text-indigo-400 font-semibold">luc_day_archimedes</span>(d_chat_long, v_chiem_cho):</div>
                      <div>    gravity = <span className="text-amber-400">9.81</span></div>
                      <div>    <span className="text-blue-400">return</span> d_chat_long * v_chiem_cho * gravity</div>
                    </div>

                    <div className="p-2 rounded bg-slate-900/50 border border-slate-850 text-[10px] text-slate-200 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-slate-200">AI đề xuất: "Em hãy dùng thư viện Pygame vẽ một chiếc thuyền chìm dần để trực quan hóa!"</span>
                    </div>
                  </div>
                )}

                {/* STEP 5: Liêm chính học thuật */}
                {activeStep === 4 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wider">CHỨNG NHẬN LIÊM CHÍNH HỌC THUẬT SỐ</span>
                      <span className="text-[9.5px] text-emerald-400 bg-emerald-950/30 px-2.5 py-0.5 rounded border border-emerald-900/30 font-bold">AN TOÀN - ĐẠO ĐỨC</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Tự suy nghĩ làm bài (Không sao chép trực tiếp bài giải của AI)</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Trích dẫn rõ ràng nguồn dữ liệu & trợ lý AI hỗ trợ dự án</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Sử dụng AI như người gợi ý tư duy, huấn luyện và kiểm thử</span>
                      </div>
                    </div>

                    <div className="pt-2.5 border-t border-slate-900 flex justify-center">
                      <div className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-200 font-mono flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Chuẩn Whitelist AI Trường học phổ thông Việt Nam</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Card Footer: Metadata */}
              <div className="pt-3 border-t border-slate-900 flex justify-between items-center text-[9px] text-slate-500 font-mono">
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
