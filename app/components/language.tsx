"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "en" | "zh";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("fediory-language");
    if (stored === "en" || stored === "zh") setLanguage(stored);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("fediory-language", language);
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const nextLanguage: Language = language === "en" ? "zh" : "en";
  return (
    <button
      className="language-toggle"
      type="button"
      onClick={() => setLanguage(nextLanguage)}
      aria-label={language === "en" ? "切换到中文" : "Switch to English"}
      title={language === "en" ? "切换到中文" : "Switch to English"}
    >
      {language === "en" ? "中文" : "EN"}
    </button>
  );
}
