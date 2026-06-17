"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { X } from "lucide-react";
import AIEducationGreetingCharacter from "./AIEducationGreetingCharacter";

// ── Section-aware messages ────────────────────────────────────────────
const SECTION_MESSAGES: Record<string, string> = {
  default:      "Xin chào! Mình là AI Guide của NextgenAI 👋",
  hero:         "Chào mừng bạn đến NextgenAI! Khám phá hệ sinh thái AI cùng mình nhé 🚀",
  "trust-bar":  "Đã có hàng trăm trường học & doanh nghiệp tin dùng chúng mình! 🏫",
  "giai-phap":  "Ba mảng dịch vụ AI giúp bạn bắt đầu đúng hướng ngay hôm nay 💡",
  "hoc-tap":    "AI cá nhân hóa từng lộ trình học – không học đại trà nữa! 📚",
  "model-ai":   "Hơn 12 model AI sẵn sàng cho mọi nhu cầu của bạn 🧠",
  "giao-duc":   "Chương trình AI K-12 chuẩn giáo dục Việt Nam 🎓",
  "quy-trinh":  "Quy trình 4 bước, triển khai nhanh trong 7 ngày! ⚡",
  "case-study": "Xem kết quả thực tế từ các trường học & doanh nghiệp 📊",
  "bao-mat":    "An toàn dữ liệu luôn là ưu tiên hàng đầu của chúng mình 🔒",
  "gia-ca":     "Gói dịch vụ linh hoạt, phù hợp mọi ngân sách 💰",
  faq:          "Bạn có thắc mắc gì? Mình luôn sẵn sàng giải đáp! 🙋",
  "lien-he":    "Để lại thông tin, đội ngũ sẽ tư vấn ngay cho bạn! 📞",
};

// ── Main floating component ───────────────────────────────────────────
export default function FloatingGuideCharacter() {
  const [visible, setVisible]     = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [hopping, setHopping]     = useState(false);
  const [bubbleKey, setBubbleKey] = useState(0);
  const [message, setMessage]     = useState(SECTION_MESSAGES.hero);
  const currentSection = useRef<string>("hero");
  const hopTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const detectSection = useCallback(() => {
    const sectionIds = Object.keys(SECTION_MESSAGES);
    let found = "default";
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= 0) {
        found = id;
        break;
      }
    }
    if (found !== currentSection.current) {
      currentSection.current = found;
      setMessage(SECTION_MESSAGES[found] ?? SECTION_MESSAGES.default);
      setBubbleKey((k) => k + 1);
      setHopping(true);
      if (hopTimeout.current) clearTimeout(hopTimeout.current);
      hopTimeout.current = setTimeout(() => setHopping(false), 620);
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", detectSection, { passive: true });
    detectSection();
    return () => window.removeEventListener("scroll", detectSection);
  }, [detectSection]);

  useEffect(() => () => { if (hopTimeout.current) clearTimeout(hopTimeout.current); }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 select-none ${
        visible ? "guide-slide-in" : "opacity-0 pointer-events-none"
      }`}
      style={{ opacity: visible ? 1 : 0 }}
      role="complementary"
      aria-label="AI Guide"
    >
      {/* ── Speech bubble ── */}
      <div key={bubbleKey} className="guide-bubble-in max-w-[210px] relative">
        <div className="bg-white border border-blue-200 rounded-2xl rounded-br-none px-4 py-2.5 shadow-lg shadow-blue-100/50">
          <p className="text-[11.5px] leading-snug text-slate-700 font-medium">{message}</p>
          {hopping && (
            <div className="flex gap-1 mt-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:0ms]" />
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:120ms]" />
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:240ms]" />
            </div>
          )}
        </div>
        {/* Tail */}
        <div className="absolute -bottom-[9px] right-8 border-l-8 border-r-0 border-t-8 border-l-transparent border-t-white filter drop-shadow-sm" />
        <div className="absolute -bottom-[10px] right-[30px] border-l-[9px] border-r-0 border-t-[9px] border-l-transparent border-t-blue-200" />
      </div>

      {/* ── Character ── */}
      <div className="relative">
        <button
          onClick={() => setDismissed(true)}
          className="absolute -top-1 -left-1 z-20 w-5 h-5 rounded-full bg-white border border-slate-200 hover:bg-red-50 hover:border-red-200 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
          aria-label="Ẩn nhân vật"
        >
          <X className="w-2.5 h-2.5 text-slate-400 hover:text-red-400" />
        </button>

        {/* Soft shadow under feet */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-2 bg-black/[0.05] rounded-full blur-md" />

        {/* Using the redesigned 2D monoline character directly */}
        <AIEducationGreetingCharacter
          size={120}
          showSpeechBubble={false}
          className={hopping ? "guide-hop" : "guide-sway"}
        />
      </div>
    </div>
  );
}
