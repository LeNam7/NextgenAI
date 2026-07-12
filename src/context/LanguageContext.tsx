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
        document.title = "NextgenAI | Triển khai AI Cá nhân, Tích hợp Model & Tự động hóa Doanh nghiệp";
        document.querySelector('meta[name="description"]')?.setAttribute(
          "content",
          "Tư vấn triển khai AI cá nhân, cung cấp & tích hợp AI Model và xây dựng hệ thống tự động hóa, tối ưu hóa quy trình cho cá nhân và doanh nghiệp tại Việt Nam."
        );
      } else {
        document.title = "NextgenAI | Personal AI Deployment, Model Integration & Business Automation";
        document.querySelector('meta[name="description"]')?.setAttribute(
          "content",
          "Consulting for personal AI, provisioning & integrating AI models, and building autonomous systems to optimize workflows for individuals and businesses in Vietnam."
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
