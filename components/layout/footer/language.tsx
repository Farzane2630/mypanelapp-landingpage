"use client";

import { useLocaleSwitch } from "@/hooks/useLocaleSwitch";

export default function Language() {
  const { locale, switchLocale } = useLocaleSwitch();
  return (
    <div className="flex gap-x-2 w-full">
      <button
        type="button"
        className={`${locale === "fa" ? "bg-slate-300" : ""} hover:font-bold cursor-pointer rounded-md w-full border border-slate-700 text-slate-800 font-medium py-1`}
        onClick={() => switchLocale("fa")}
      >
        فارسی{" "}
      </button>
      <button
        type="button"
        className={`${locale === "en" ? "bg-slate-300" : ""} hover:font-bold cursor-pointer rounded-md w-full border border-slate-700 text-slate-800 font-medium py-1`}
        onClick={() => switchLocale("en")}
      >
        English{" "}
      </button>
    </div>
  );
}
