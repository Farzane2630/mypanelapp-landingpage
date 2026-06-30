"use client";

import { useState } from "react";

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState<"en" | "fa">("en");
  const handleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fa" : "en"));
  };
  return (
    <button type="button" onClick={handleLanguage}>
      {language === "en" ? "fa" : "en"}
    </button>
  );
}
