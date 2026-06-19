"use client";

import React, { useState } from "react";
import { Sparkles, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    organization: "",
    interest: "ai-rieng",
    description: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) tempErrors.fullName = "Vui lòng nhập họ và tên";
    
    if (!formData.phone.trim()) {
      tempErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^(0[3|5|7|8|9])([0-9]{8})$/.test(formData.phone.trim())) {
      tempErrors.phone = "Số điện thoại không hợp lệ (ví dụ: 0912345678)";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Vui lòng nhập email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      tempErrors.email = "Email không hợp lệ";
    }

    if (!formData.organization.trim()) tempErrors.organization = "Vui lòng nhập tên đơn vị";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        organization: "",
        interest: "ai-rieng",
        description: "",
      });
    }, 1200);
  };

  return (
    <section id="lien-he" className="py-24 bg-transparent border-t border-slate-200/60 relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 left-1/2 w-[550px] h-[550px] bg-blue-500/[0.01] rounded-full blur-[130px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Final CTA Banner Part */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-55 border border-blue-200 text-xs font-bold text-blue-700">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Liên hệ tư vấn miễn phí</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Sẵn Sàng Xây AI Cá Nhân & <br />
            Chương Trình Giáo Dục AI Cho Tổ Chức Của Bạn?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Hãy điền thông tin bên dưới để nhận cuộc gọi tư vấn chuyên sâu, khảo sát nhu cầu thực tế và thiết kế demo thử nghiệm hoàn toàn miễn phí.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#lien-he"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white rounded-xl bg-blue-600 hover:bg-blue-700 shadow shadow-blue-500/10 cursor-pointer"
            >
              Đặt lịch tư vấn miễn phí
            </a>
            <a
              href="#giao-duc"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-slate-700 hover:text-slate-900 rounded-xl bg-white border border-slate-200"
            >
              Nhận đề xuất lộ trình AI
            </a>
          </div>
        </div>

        {/* Contact Form Part */}
        <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-lg">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="w-6 h-6 animate-bounce" />
              </div>
              <h3 className="text-lg font-bold text-slate-950">Gửi Yêu Cầu Thành Công!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Cảm ơn bạn đã quan tâm đến giải pháp của NextgenAI. Đội ngũ kỹ sư và thiết kế của chúng tôi sẽ liên hệ lại qua số điện thoại/email trong vòng 24 giờ làm việc.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold rounded-xl transition-colors cursor-pointer"
              >
                Gửi yêu cầu mới
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-bold text-slate-700">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 text-sm rounded-xl bg-slate-50 border text-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                      errors.fullName ? "border-red-500" : "border-slate-200"
                    }`}
                    placeholder="Nguyễn Văn A"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-500 flex items-center gap-1.5 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-slate-700">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 text-sm rounded-xl bg-slate-50 border text-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                      errors.phone ? "border-red-500" : "border-slate-200"
                    }`}
                    placeholder="0912345678"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 flex items-center gap-1.5 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700">
                    Email liên hệ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 text-sm rounded-xl bg-slate-50 border text-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                      errors.email ? "border-red-500" : "border-slate-200"
                    }`}
                    placeholder="name@company.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 flex items-center gap-1.5 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Organization name */}
                <div className="space-y-2">
                  <label htmlFor="organization" className="text-sm font-bold text-slate-700">
                    Đơn vị / Trường học / Doanh nghiệp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 text-sm rounded-xl bg-slate-50 border text-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                      errors.organization ? "border-red-500" : "border-slate-200"
                    }`}
                    placeholder="Trường THPT X hoặc Doanh nghiệp Y"
                  />
                  {errors.organization && (
                    <p className="text-xs text-red-500 flex items-center gap-1.5 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.organization}
                    </p>
                  )}
                </div>
              </div>

              {/* Service Interest Option Dropdown */}
              <div className="space-y-2">
                <label htmlFor="interest" className="text-sm font-bold text-slate-700">
                  Giải pháp bạn quan tâm nhất <span className="text-red-500">*</span>
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-700 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all"
                >
                  <option value="ai-rieng">Cài đặt & Tư vấn AI cá nhân cho tổ chức</option>
                  <option value="ai-model">Cung cấp, tích hợp AI Model (API, Private Cloud)</option>
                  <option value="ai-edu">Giáo dục, đào tạo AI cho Giáo viên / Học sinh</option>
                  <option value="khac">Khác (Yêu cầu tư vấn tổng hợp)</option>
                </select>
              </div>

              {/* Description textarea */}
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-bold text-slate-700">
                  Mô tả cụ thể nhu cầu của bạn
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-950 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                  placeholder="Vui lòng chia sẻ thêm về số lượng nhân sự/học sinh, hạ tầng hiện tại hoặc bài toán cụ thể bạn cần giải quyết..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-bold text-white transition-all hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-blue-500/10 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Đang gửi thông tin...</span>
                ) : (
                  <>
                    <span>Gửi yêu cầu tư vấn</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
