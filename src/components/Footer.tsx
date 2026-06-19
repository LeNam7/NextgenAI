"use client";

import React from "react";
import { Cpu, Mail, Phone, MapPin } from "lucide-react";
import { menuItems } from "@/data/landingData";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language, t } = useLanguage();
  const currentMenuItems = menuItems[language];

  return (
    <footer className="bg-slate-100 border-t border-slate-200 pt-16 pb-8 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-200">
          
          {/* Col 1: Brand details */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm">
                <Cpu className="w-4.5 h-4.5" />
              </div>
              <span className="text-lg font-extrabold text-slate-900 tracking-tight">
                Nextgen<span className="text-blue-600 font-extrabold">AI</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              {t({
                vi: "Học viện nghiên cứu và ứng dụng Trí tuệ Nhân tạo thực tế cho cá nhân, doanh nghiệp và các tổ chức giáo dục phổ thông hàng đầu tại Việt Nam.",
                en: "Academy for researching and deploying practical Artificial Intelligence solutions for K-12 educational institutions, enterprises, and individuals in Vietnam.",
              })}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono uppercase text-slate-800 font-bold tracking-wider">
              {t({ vi: "Hệ sinh thái", en: "Ecosystem" })}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {currentMenuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono uppercase text-slate-800 font-bold tracking-wider">
              {t({ vi: "Liên hệ hợp tác", en: "Partnership & Contact" })}
            </h4>
            <div className="space-y-2.5 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>anhdt@anf-technology.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>(+84) 989 92 92 69</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>
                  {t({
                    vi: "Tầng 6, Tòa nhà AZ Lâm Viên, Số 107 Nguyễn Phong Sắc, Dịch Vọng, Cầu Giấy, Hà Nội",
                    en: "6th Floor, AZ Lam Vien Building, 107 Nguyen Phong Sac, Dich Vong, Cau Giay, Hanoi",
                  })}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom footer text */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© 2026 NextgenAI. All rights reserved. Designed for Vietnamese Educators.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-850">Privacy Policy</a>
            <a href="#" className="hover:text-slate-850">Terms of Service</a>
            <a href="#" className="hover:text-slate-850">Responsible AI Guidelines</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
