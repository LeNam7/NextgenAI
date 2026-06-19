"use client";

import React from "react";
import { ShieldCheck, EyeOff, ClipboardCheck, Users, FileText, Compass, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ResponsibleAISection() {
  const { language, t } = useLanguage();

  const safetyPrinciples = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      title: t({
        vi: "Phân quyền truy cập đa tầng",
        en: "Multi-tier Access Control",
      }),
      description: t({
        vi: "Đảm bảo mỗi nhóm người dùng (học sinh, giáo viên, nhân sự, admin) chỉ truy cập đúng phần dữ liệu được chỉ định.",
        en: "Ensure each user group (students, teachers, staff, admins) only accesses authorized datasets.",
      }),
    },
    {
      icon: <EyeOff className="w-5 h-5 text-blue-600" />,
      title: t({
        vi: "Bảo vệ thông tin nhạy cảm",
        en: "Sensitive Data Protection",
      }),
      description: t({
        vi: "Không gửi dữ liệu định danh học sinh, bí mật doanh nghiệp lên các mô hình AI công cộng khi chưa ẩn danh hóa.",
        en: "Never submit student identity data or corporate secrets to public AI models without anonymization.",
      }),
    },
    {
      icon: <ClipboardCheck className="w-5 h-5 text-blue-600" />,
      title: t({
        vi: "Kiểm soát Hallucination (Ảo tưởng)",
        en: "Hallucination Control",
      }),
      description: t({
        vi: "Áp dụng cơ chế RAG, hiển thị nguồn trích dẫn chính xác và khuyến nghị quy trình kiểm duyệt (Human Review).",
        en: "Implement RAG mechanisms, show exact source citations, and recommend human-in-the-loop review.",
      }),
    },
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      title: t({
        vi: "Quy tắc sử dụng cho học sinh",
        en: "Student Code of Conduct",
      }),
      description: t({
        vi: "Ban hành hướng dẫn sử dụng AI an toàn, cấm tự ý đăng nhập các mô hình AI chưa được kiểm định chất lượng.",
        en: "Issue safe AI usage guidelines; prohibit unauthorized logins to unverified public AI models.",
      }),
    },
    {
      icon: <FileText className="w-5 h-5 text-blue-600" />,
      title: t({
        vi: "Hướng dẫn kiểm chứng nội dung",
        en: "Content Verification Guides",
      }),
      description: t({
        vi: "Trang bị cho giáo viên bộ công cụ phản biện để đánh giá giáo án, đề bài do AI soạn trước khi đem ra giảng dạy.",
        en: "Equip teachers with critical thinking toolkits to evaluate AI-generated lesson plans and exam sheets.",
      }),
    },
    {
      icon: <Compass className="w-5 h-5 text-blue-600" />,
      title: t({
        vi: "Thiết lập Guardrails theo độ tuổi",
        en: "Age-appropriate Guardrails",
      }),
      description: t({
        vi: "Tạo hàng rào nội dung (Guardrails) phù hợp với sự phát triển tâm sinh lý của học sinh cấp 1, cấp 2 và cấp 3.",
        en: "Establish content guardrails aligned with the psychological development of elementary, middle, and high school students.",
      }),
    },
  ];

  return (
    <section className="py-24 bg-transparent border-t border-slate-200/60 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-blue-500/[0.01] rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>{t({ vi: "Đạo Đức & Bảo Mật AI", en: "AI Ethics & Security" })}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t({ vi: "AI Mạnh Phải Đi Cùng ", en: "Powerful AI Must Go " })}
            <span className="text-blue-600">
              {t({ vi: "An Toàn Dữ Liệu", en: "Hand-in-Hand with Data Security" })}
            </span>{" "}
            {t({ vi: "& Trách Nhiệm", en: "& Responsibility" })}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed tracking-wide">
            {t({
              vi: "Chúng tôi xây dựng các giải pháp dựa trên khung tiêu chuẩn bảo mật quốc tế và quy tắc đạo đức AI phổ thông nghiêm ngặt.",
              en: "We build solutions based on international security frameworks and strict K-12 AI ethical guidelines.",
            })}
          </p>
        </div>

        {/* Safety Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safetyPrinciples.map((principle, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-500/30 transition-all duration-300 space-y-4 group shadow-sm hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                {principle.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed tracking-wide">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Warning notification bar */}
        <div className="mt-12 p-5 rounded-2xl bg-blue-50/60 border border-blue-100 max-w-4xl mx-auto flex items-start gap-3.5 shadow-sm">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-slate-700 leading-relaxed tracking-wide">
            <strong className="text-slate-900 font-bold">
              {t({ vi: "Khuyến nghị từ báo cáo nghiên cứu K-12: ", en: "K-12 Research Recommendation: " })}
            </strong>
            {t({
              vi: "Các trường học cần có chính sách kiểm soát danh sách công cụ AI được duyệt sử dụng (Whitelist), cấm học sinh dưới cấp trung học tự ý truy cập các Chatbot AI sinh nội dung nếu chưa có sự giám sát của giáo viên và phụ huynh.",
              en: "Schools should establish a Whitelist policy for approved AI tools, prohibiting young students from accessing generative AI chatbots without parental or teacher supervision.",
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
