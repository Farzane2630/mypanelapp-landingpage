"use client";

import { useLocaleSwitch } from "@/hooks/useLocaleSwitch";

export default function Language() {
  const { locale, switchLocale } = useLocaleSwitch();
  return (
    <div className="flex w-full gap-x-2">
      <button
        type="button"
        className={`${locale === "fa" ? "bg-slate-300" : ""} w-full cursor-pointer rounded-md border border-slate-700 py-1 font-medium text-slate-800 hover:font-bold`}
        onClick={() => switchLocale("fa")}
      >
        فا
      </button>
      <button
        type="button"
        className={`${locale === "en" ? "bg-slate-300" : ""} w-full cursor-pointer rounded-md border border-slate-700 py-1 font-medium text-slate-800 hover:font-bold`}
        onClick={() => switchLocale("en")}
      >
        En
      </button>
      <button
        type="button"
        className={`${locale === "de" ? "bg-slate-300" : ""} w-full cursor-pointer rounded-md border border-slate-700 py-1 font-medium text-slate-800 hover:font-bold`}
        onClick={() => switchLocale("de")}
      >
        De
      </button>
    </div>
  );
}
