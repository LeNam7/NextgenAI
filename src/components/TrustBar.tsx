import React from "react";
import { trustItems } from "@/data/landingData";
import { ShieldCheck, HardDrive, GraduationCap, Compass } from "lucide-react";

const icons = [
  <ShieldCheck key="shield" className="w-6 h-6 text-blue-600" />,
  <HardDrive key="drive" className="w-6 h-6 text-blue-600" />,
  <GraduationCap key="graduation" className="w-6 h-6 text-blue-600" />,
  <Compass key="compass" className="w-6 h-6 text-blue-600" />,
];

export default function TrustBar() {
  return (
    <section className="bg-slate-50 py-10 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-white border border-transparent hover:border-slate-200/80 hover:shadow-sm transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 group-hover:bg-white transition-colors">
                {icons[index]}
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-650 leading-relaxed">
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
