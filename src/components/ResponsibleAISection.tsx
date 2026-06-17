import React from "react";
import { ShieldCheck, EyeOff, ClipboardCheck, Users, FileText, Compass, AlertCircle } from "lucide-react";

export default function ResponsibleAISection() {
  const safetyPrinciples = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      title: "Phân quyền truy cập đa tầng",
      description: "Đảm bảo mỗi nhóm người dùng (học sinh, giáo viên, nhân sự, admin) chỉ truy cập đúng phần dữ liệu được chỉ định.",
    },
    {
      icon: <EyeOff className="w-5 h-5 text-blue-600" />,
      title: "Bảo vệ thông tin nhạy cảm",
      description: "Không gửi dữ liệu định danh học sinh, bí mật doanh nghiệp lên các mô hình AI công cộng khi chưa ẩn danh hóa.",
    },
    {
      icon: <ClipboardCheck className="w-5 h-5 text-blue-600" />,
      title: "Kiểm soát Hallucination (Ảo tưởng)",
      description: "Áp dụng cơ chế RAG, hiển thị nguồn trích dẫn chính xác và khuyến nghị quy trình kiểm duyệt (Human Review).",
    },
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      title: "Quy tắc sử dụng cho học sinh",
      description: "Ban hành hướng dẫn sử dụng AI an toàn, cấm tự ý đăng nhập các mô hình AI chưa được kiểm định chất lượng.",
    },
    {
      icon: <FileText className="w-5 h-5 text-blue-600" />,
      title: "Hướng dẫn kiểm chứng nội dung",
      description: "Trang bị cho giáo viên bộ công cụ phản biện để đánh giá giáo án, đề bài do AI soạn trước khi đem ra giảng dạy.",
    },
    {
      icon: <Compass className="w-5 h-5 text-blue-600" />,
      title: "Thiết lập Guardrails theo độ tuổi",
      description: "Tạo hàng rào nội dung (Guardrails) phù hợp với sự phát triển tâm sinh lý của học sinh cấp 1, cấp 2 và cấp 3.",
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
            <span>Đạo Đức & Bảo Mật AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            AI Mạnh Phải Đi Cùng <span className="text-blue-600">An Toàn Dữ Liệu</span> & Trách Nhiệm
          </h2>
          <p className="text-slate-655 text-sm sm:text-base">
            Chúng tôi xây dựng các giải pháp dựa trên khung tiêu chuẩn bảo mật quốc tế và quy tắc đạo đức AI phổ thông nghiêm ngặt.
          </p>
        </div>

        {/* Safety Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safetyPrinciples.map((principle, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-500/30 transition-all duration-300 space-y-4 group shadow-sm hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                {principle.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {principle.title}
                </h3>
                <p className="text-xs text-slate-655 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Warning notification bar */}
        <div className="mt-12 p-4 rounded-xl bg-blue-50/60 border border-blue-100 max-w-4xl mx-auto flex items-start gap-3 shadow-sm">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-slate-700 leading-relaxed">
            <strong className="text-slate-900 font-bold">Khuyến nghị từ báo cáo nghiên cứu K-12:</strong> Các trường học cần có chính sách kiểm soát danh sách công cụ AI được duyệt sử dụng (Whitelist), cấm học sinh dưới cấp trung học tự ý truy cập các Chatbot AI sinh nội dung nếu chưa có sự giám sát của giáo viên và phụ huynh.
          </div>
        </div>

      </div>
    </section>
  );
}
