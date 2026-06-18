import React from "react";
import { solutionPillars } from "@/data/landingData";
import { Bot, Layers, BookOpen, Check, ArrowUpRight } from "lucide-react";

const icons = [
  <Bot key="bot" className="w-6 h-6" />,
  <Layers key="layers" className="w-6 h-6" />,
  <BookOpen key="book" className="w-6 h-6" />,
];

const colorThemes = [
  {
    gradient: "from-blue-500/[0.04] to-transparent",
    border: "hover:border-blue-500/30",
    textG: "text-blue-700",
    iconBg: "bg-blue-50 border-blue-150 text-blue-600",
    shadow: "shadow-blue-100/50",
    bulletColor: "text-blue-600",
  },
  {
    gradient: "from-sky-500/[0.04] to-transparent",
    border: "hover:border-sky-500/30",
    textG: "text-sky-700",
    iconBg: "bg-sky-50 border-sky-150 text-sky-600",
    shadow: "shadow-sky-100/50",
    bulletColor: "text-sky-600",
  },
  {
    gradient: "from-indigo-500/[0.04] to-transparent",
    border: "hover:border-indigo-500/30",
    textG: "text-indigo-700",
    iconBg: "bg-indigo-50 border-indigo-150 text-indigo-650",
    shadow: "shadow-indigo-100/50",
    bulletColor: "text-indigo-600",
  },
];

export default function SolutionCards() {
  return (
    <section id="giai-phap" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-blue-500/[0.02] rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-sky-500/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
            <span>Dịch Vụ Cốt Lỗi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ba Trụ Cột <span className="text-blue-600">Hệ Sinh Thái AI</span> của Chúng Tôi
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed tracking-wide">
            Cung cấp giải pháp trọn gói từ tư vấn chiến lược, triển khai kỹ thuật hạ tầng đến chuyển giao giáo trình đào tạo AI chuẩn hóa cho Việt Nam.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {solutionPillars.map((pillar, index) => {
            const theme = colorThemes[index];
            return (
              <div
                key={pillar.id}
                className={`rounded-2xl border border-slate-200 bg-gradient-to-b ${theme.gradient} bg-white/95 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${theme.border} shadow-sm hover:shadow-md`}
              >
                <div className="space-y-6">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4">
                    <div className={`p-3.5 rounded-xl border ${theme.iconBg}`}>
                      {icons[index]}
                    </div>
                    <h3 className={`text-xl font-extrabold ${theme.textG} tracking-tight`}>
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-base leading-relaxed tracking-wide">
                    {pillar.description}
                  </p>

                  {/* Tasks List */}
                  <div className="space-y-4 pt-5 border-t border-slate-100">
                    <h4 className="text-xs font-mono uppercase text-slate-500 tracking-wider font-bold">Hạng mục triển khai:</h4>
                    <ul className="space-y-3">
                      {pillar.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed tracking-wide">
                          <Check className={`w-4 h-4 ${theme.bulletColor} mt-0.5 flex-shrink-0`} />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div className="space-y-4 pt-5 border-t border-slate-100">
                    <h4 className="text-xs font-mono uppercase text-slate-500 tracking-wider font-bold">Ứng dụng thực tế:</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {pillar.useCases.map((useCase, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-600 tracking-wide"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-8 mt-8 border-t border-slate-100">
                  <a
                    href="#lien-he"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-350 text-sm font-bold text-slate-700 hover:text-blue-600 transition-all group cursor-pointer"
                  >
                    <span>Liên hệ giải pháp này</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-blue-600" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
