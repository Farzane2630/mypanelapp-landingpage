"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const nextLocale = locale === "en" ? "fa" : "en";
  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };
  return (
    <button type="button" onClick={() => switchLocale(nextLocale)}>
      {nextLocale}
    </button>
  );
}
