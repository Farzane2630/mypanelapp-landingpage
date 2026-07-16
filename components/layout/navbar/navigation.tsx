import { LocaleType } from "@/types/Locales";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Navigation() {
  const t = useTranslations("navbar");
  const locale = useLocale() as LocaleType;
  return (
    <nav className="w-full">
      <ul className="nav__list flex w-full justify-between bg-slate-100 px-2 py-3 font-bold text-slate-600 sm:bg-transparent sm:px-0 sm:py-0">
        <li className="border-0 border-b-purple-800 pb-1 sm:border-b-2">
          <Link href="/features">{t("features")}</Link>
        </li>
        <li className="border-0 border-b-purple-800 pb-1 sm:border-b-2">
          <Link href="/businesses">{t("businesses")}</Link>
        </li>
        <li className="border-0 border-b-purple-800 pb-1 sm:border-b-2">
          <Link href="/pricing">{t("pricing")}</Link>
        </li>
        <li className="border-0 border-b-purple-800 pb-1 sm:border-b-2">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={
              `${
                locale === "en"
                  ? process.env.NEXT_PUBLIC_DEMO_URL_EN
                  : process.env.NEXT_PUBLIC_DEMO_URL_FA
              }` || ""
            }
          >
            {t("demo")}
          </Link>
        </li>
        <li className="border-0 border-b-purple-800 pb-1 sm:border-b-2">
          <Link href="/faq">{t("faq")}</Link>
        </li>
      </ul>
    </nav>
  );
}
