"use client";

import React, { useState } from "react";
import { Sparkles, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { language, t } = useLanguage();
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
    if (!formData.fullName.trim()) {
      tempErrors.fullName = t({ vi: "Vui lòng nhập họ và tên", en: "Please enter your full name" });
    }
    
    if (!formData.phone.trim()) {
      tempErrors.phone = t({ vi: "Vui lòng nhập số điện thoại", en: "Please enter your phone number" });
    } else if (!/^(0[3|5|7|8|9])([0-9]{8})$/.test(formData.phone.trim())) {
      tempErrors.phone = t({
        vi: "Số điện thoại không hợp lệ (ví dụ: 0912345678)",
        en: "Invalid phone number (e.g., 0912345678)",
      });
    }

    if (!formData.email.trim()) {
      tempErrors.email = t({ vi: "Vui lòng nhập email", en: "Please enter your email" });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      tempErrors.email = t({ vi: "Email không hợp lệ", en: "Invalid email address" });
    }

    if (!formData.organization.trim()) {
      tempErrors.organization = t({ vi: "Vui lòng nhập tên đơn vị", en: "Please enter organization name" });
    }

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/anhdt@anf-technology.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "Họ và tên": formData.fullName,
          "Số điện thoại": formData.phone,
          "Email liên hệ": formData.email,
          "Đơn vị / Doanh nghiệp": formData.organization,
          "Giải pháp quan tâm": formData.interest === "ai-rieng" ? "Cài đặt & Tư vấn AI cá nhân cho tổ chức" :
                                formData.interest === "ai-model" ? "Cung cấp, tích hợp AI Model (API, Private Cloud)" :
                                formData.interest === "ai-edu" ? "Giáo dục, đào tạo AI cho Giáo viên / Học sinh" : "Khác",
          "Nhu cầu chi tiết": formData.description || "Không có mô tả thêm",
          "_subject": `[NextgenAI] Yêu cầu tư vấn mới từ ${formData.fullName}`,
          "_captcha": "false"
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          organization: "",
          interest: "ai-rieng",
          description: "",
        });
      } else {
        alert(t({
          vi: "Có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại sau.",
          en: "An error occurred while submitting your request. Please try again later.",
        }));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(t({
        vi: "Có lỗi kết nối. Vui lòng kiểm tra lại đường truyền internet.",
        en: "Connection error. Please check your internet connection.",
      }));
    } finally {
      setIsSubmitting(false);
    }
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
            <span>{t({ vi: "Liên hệ tư vấn miễn phí", en: "Free Consultation" })}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t({
              vi: "Sẵn Sàng Xây AI Cá Nhân & Chương Trình Giáo Dục AI Cho Tổ Chức Của Bạn?",
              en: "Ready to Build Personal AI & AI Training Programs for Your Organization?",
            })}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t({
              vi: "Hãy điền thông tin bên dưới để nhận cuộc gọi tư vấn chuyên sâu, khảo sát nhu cầu thực tế và thiết kế demo thử nghiệm hoàn toàn miễn phí.",
              en: "Fill in the form below to receive a deep-dive consultation call, practical needs assessment, and a custom demo design entirely for free.",
            })}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#lien-he"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white rounded-xl bg-blue-600 hover:bg-blue-700 shadow shadow-blue-500/10 cursor-pointer"
            >
              {t({ vi: "Đặt lịch tư vấn miễn phí", en: "Schedule Free Consultation" })}
            </a>
            <a
              href="#giao-duc"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-slate-700 hover:text-slate-900 rounded-xl bg-white border border-slate-200"
            >
              {t({ vi: "Nhận đề xuất lộ trình AI", en: "Get AI Roadmap Proposal" })}
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
              <h3 className="text-lg font-bold text-slate-950">
                {t({ vi: "Gửi Yêu Cầu Thành Công!", en: "Request Submitted Successfully!" })}
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                {t({
                  vi: "Cảm ơn bạn đã quan tâm đến giải pháp của NextgenAI. Đội ngũ kỹ sư và thiết kế của chúng tôi sẽ liên hệ lại qua số điện thoại/email trong vòng 24 giờ làm việc.",
                  en: "Thank you for your interest in NextgenAI. Our engineering and design team will contact you via phone or email within 24 business hours.",
                })}
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold rounded-xl transition-colors cursor-pointer"
              >
                {t({ vi: "Gửi yêu cầu mới", en: "Submit new request" })}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-bold text-slate-700">
                    {t({ vi: "Họ và tên", en: "Full name" })} <span className="text-red-500">*</span>
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
                    {t({ vi: "Số điện thoại", en: "Phone number" })} <span className="text-red-500">*</span>
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
                    {t({ vi: "Email liên hệ", en: "Contact email" })} <span className="text-red-500">*</span>
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
                    {t({ vi: "Đơn vị / Trường học / Doanh nghiệp", en: "Organization / School / Enterprise" })} <span className="text-red-500">*</span>
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
                    placeholder={t({ vi: "Trường THPT X hoặc Doanh nghiệp Y", en: "School X or Enterprise Y" })}
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
                  {t({ vi: "Giải pháp bạn quan tâm nhất", en: "Solution you are interested in" })} <span className="text-red-500">*</span>
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-700 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all"
                >
                  <option value="ai-rieng">
                    {t({ vi: "Cài đặt & Tư vấn AI cá nhân cho tổ chức", en: "Deploy & Consult Personal AI for Organizations" })}
                  </option>
                  <option value="ai-model">
                    {t({ vi: "Cung cấp, tích hợp AI Model (API, Private Cloud)", en: "Provide & Integrate AI Models (API, Private Cloud)" })}
                  </option>
                  <option value="ai-edu">
                    {t({ vi: "Giáo dục, đào tạo AI cho Giáo viên / Học sinh", en: "AI Education & Training for Teachers / Students" })}
                  </option>
                  <option value="khac">
                    {t({ vi: "Khác (Yêu cầu tư vấn tổng hợp)", en: "Other (General Consultation Inquiry)" })}
                  </option>
                </select>
              </div>

              {/* Description textarea */}
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-bold text-slate-700">
                  {t({ vi: "Mô tả cụ thể nhu cầu của bạn", en: "Specific details of your requirements" })}
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-950 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                  placeholder={t({
                    vi: "Vui lòng chia sẻ thêm về số lượng nhân sự/học sinh, hạ tầng hiện tại hoặc bài toán cụ thể bạn cần giải quyết...",
                    en: "Please share details about the number of staff/students, current infrastructure, or the specific problem you need to solve...",
                  })}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-bold text-white transition-all hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-blue-500/10 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>{t({ vi: "Đang gửi thông tin...", en: "Submitting details..." })}</span>
                ) : (
                  <>
                    <span>{t({ vi: "Gửi yêu cầu tư vấn", en: "Submit Consultation Request" })}</span>
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
