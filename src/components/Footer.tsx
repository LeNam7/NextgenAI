import React from "react";
import { Cpu, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { menuItems } from "@/data/landingData";

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 pt-16 pb-8 text-slate-655">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-200">
          
          {/* Col 1: Brand details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm">
                <Cpu className="w-4.5 h-4.5" />
              </div>
              <span className="text-lg font-extrabold text-slate-900 tracking-tight">
                Nextgen<span className="text-blue-600 font-extrabold">AI</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Học viện nghiên cứu và ứng dụng Trí tuệ Nhân tạo thực tế cho cá nhân, doanh nghiệp và các tổ chức giáo dục phổ thông hàng đầu tại Việt Nam.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase text-slate-800 font-bold tracking-wider">Hệ sinh thái</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {menuItems.map((item) => (
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
            <h4 className="text-xs font-mono uppercase text-slate-800 font-bold tracking-wider">Liên hệ hợp tác</h4>
            <div className="space-y-2.5 text-xs text-slate-655">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>contact@nextgenai.vn</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>+84 90 123 4567</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Tòa nhà Innovation, Khu Công nghệ cao Q9, TP. Hồ Chí Minh, Việt Nam</span>
              </div>
            </div>
          </div>

          {/* Col 4: Resources / Badges */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase text-slate-800 font-bold tracking-wider">Tài liệu tham khảo</h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <a
                  href="https://docs.google.com/document/d/1VBsyqRpr2bAyERGVXmm5tktcF-hM0CYlBodIwbl4pJc/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-slate-800 transition-colors"
                >
                  <span>Báo cáo Giáo dục AI K-12</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 hover:text-slate-800 transition-colors"
                >
                  <span>Khung năng lực AI Literacy</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom footer text */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500 font-mono">
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
