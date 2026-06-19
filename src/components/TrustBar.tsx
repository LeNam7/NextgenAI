"use client";

import React from "react";
import { trustItems } from "@/data/landingData";
import { ShieldCheck, HardDrive, GraduationCap, Compass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [
  <ShieldCheck key="shield" className="w-6 h-6 text-blue-600" />,
  <HardDrive key="drive" className="w-6 h-6 text-blue-600" />,
  <GraduationCap key="graduation" className="w-6 h-6 text-blue-600" />,
  <Compass key="compass" className="w-6 h-6 text-blue-600" />,
];

export default function TrustBar() {
  const { language } = useLanguage();
  const currentTrustItems = trustItems[language];

  return (
    <section className="bg-slate-50 py-10 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentTrustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-white border border-transparent hover:border-slate-200/80 hover:shadow-sm transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 group-hover:bg-white transition-colors">
                {icons[index]}
              </div>
              <div className="space-y-2">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed tracking-wide">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
