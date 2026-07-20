"use client";

import { useLocaleSwitch } from "@/hooks/useLocaleSwitch";
import LanguageIcon from "@/components/ui/icons/language.svg";
import { useState } from "react";
import { LocaleType } from "@/types/Locales";
import { twMerge } from "tailwind-merge";

export default function LanguageSwitcher() {
  const { locale, switchLocale } = useLocaleSwitch();
  const [isOpen, setIsOpen] = useState(false);

  // is extnded in the future
  const languages = [
    { value: "en" as LocaleType, label: "English" },
    { value: "fa" as LocaleType, label: "فارسی" },
    { value: "de" as LocaleType, label: "Deutch" },
  ];

  const handleChangeLanguage = (lang: LocaleType) => {
    switchLocale(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Select language"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls="language-menu"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gray-100"
      >
        <LanguageIcon className="h-5 w-5" />
      </button>

      {isOpen && (
        <div
          className={twMerge(
            "absolute top-12 z-50 min-w-35 rounded-xl border border-gray-200 bg-white p-1 shadow-lg",
            locale === "fa" ? "left-0" : "right-0"
          )}
          id="language-menu"
          role="menu"
          aria-label="Language options"
        >
          {languages.map((lang) => (
            <button
              key={lang.value}
              type="button"
              onClick={() => handleChangeLanguage(lang.value)}
              className={`flex w-full items-center rounded-lg px-3 py-2 text-sm transition hover:bg-gray-100 ${locale === lang.value ? "bg-gray-100 font-medium" : ""} `}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
