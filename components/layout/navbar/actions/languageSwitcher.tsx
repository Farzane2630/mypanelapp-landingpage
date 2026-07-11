"use client";

import { useLocaleSwitch } from "@/hooks/useLocaleSwitch";

export default function LanguageSwitcher() {
  const { locale, switchLocale } = useLocaleSwitch();
  const nextLocale = locale === "en" ? "fa" : "en";

  return (
    <button type="button" onClick={() => switchLocale(nextLocale)}>
      {nextLocale}
    </button>
  );
}
