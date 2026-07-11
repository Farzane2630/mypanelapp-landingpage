"use client";
import { usePathname, useRouter } from "@/i18n/navigation";
import { LocaleType } from "@/types/Locales";
import { useLocale } from "next-intl";

export const useLocaleSwitch = () => {
  const locale = useLocale() as LocaleType;
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: LocaleType) => {
    router.replace(pathname, { locale: newLocale });
  };

  return {
    locale,
    switchLocale,
  };
};
