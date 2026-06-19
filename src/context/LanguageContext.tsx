"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "vi" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (dict: Record<Language, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("vi");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang === "vi" || savedLang === "en") {
      setLanguageState(savedLang);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      if (language === "vi") {
        document.title = "NextgenAI | Cài đặt AI cá nhân, Model AI và Giáo dục AI cho trường học";
        document.querySelector('meta[name="description"]')?.setAttribute(
          "content",
          "Tư vấn triển khai AI cá nhân, cung cấp model AI và đào tạo AI thực chiến cho giáo viên, học sinh cấp 1, cấp 2, cấp 3 và doanh nghiệp vừa và nhỏ tại Việt Nam."
        );
      } else {
        document.title = "NextgenAI | Custom AI, AI Models & K-12 AI Education";
        document.querySelector('meta[name="description"]')?.setAttribute(
          "content",
          "Consulting for custom AI, providing AI models and hands-on AI training for teachers, K-12 students, and small-to-medium enterprises in Vietnam."
        );
      }
    }
  }, [language, mounted]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (dict: Record<Language, string>) => {
    return dict[language] || dict["vi"] || "";
  };

  // Prevent server-client mismatch during hydration
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language: "vi", setLanguage, t }}>
        <div style={{ visibility: "hidden" }}>{children}</div>
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
