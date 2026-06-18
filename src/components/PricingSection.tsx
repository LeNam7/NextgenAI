import React from "react";
import { pricingPackages } from "@/data/landingData";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="bao-gia" className="py-24 bg-transparent border-t border-slate-200/60 relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500/[0.01] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
            <span>Báo Giá & Hợp Tác</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Gói Giải Pháp Linh Hoạt Theo Quy Mô
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed tracking-wide">
            Không cần đầu tư chi phí khổng lồ ban đầu. Chúng tôi cung cấp các tùy chọn gói phù hợp với ngân sách của cá nhân, trung tâm và trường học.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl border p-10 flex flex-col justify-between transition-all duration-300 relative bg-white ${
                pkg.isPopular
                  ? "bg-gradient-to-b from-blue-50/50 via-sky-50/20 to-transparent border-blue-550/30 shadow-lg shadow-blue-200/20 lg:-translate-y-2 scale-100 lg:scale-[1.02]"
                  : "border-slate-200 hover:border-slate-350 shadow-sm"
              }`}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-blue-600 text-[10px] font-bold tracking-wider text-white uppercase shadow-sm">
                  Phổ biến nhất
                </span>
              )}

              <div className="space-y-6">
                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
                  <p className="text-sm text-slate-600 mt-2.5 leading-relaxed tracking-wide">{pkg.tagline}</p>
                </div>

                {/* Price Label (Hidden concrete numbers) */}
                <div className="py-4 border-y border-slate-100">
                  <span className="text-sm font-semibold text-slate-500">Chi phí triển khai:</span>
                  <div className="text-2xl font-extrabold text-blue-600 mt-1">
                    Liên hệ báo giá theo nhu cầu
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed tracking-wide">
                      <Check className="w-4.5 h-4.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Package CTA */}
              <div className="pt-8 mt-8 border-t border-slate-100">
                <a
                  href="#lien-he"
                  className={`w-full inline-flex items-center justify-center px-4 py-3.5 rounded-xl text-sm font-bold transition-all active:scale-98 cursor-pointer ${
                    pkg.isPopular
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/10"
                      : "bg-slate-50 border border-slate-200 hover:border-slate-350 text-slate-700 hover:text-slate-900"
                  }`}
                >
                  {pkg.ctaText}
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
