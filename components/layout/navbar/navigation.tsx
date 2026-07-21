import { LocaleType } from "@/types/Locales";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Navigation() {
  const t = useTranslations("navbar");
  const locale = useLocale() as LocaleType;
  const navItems = [
    { href: `/${locale}#features`, title: t("features") },
    { href: `/${locale}#businesses`, title: t("businesses") },
    // { href: "/pricing", title: t("pricing") },
    {
      href:
        `${
          locale === "en" || "de"
            ? process.env.NEXT_PUBLIC_DEMO_URL_EN
            : process.env.NEXT_PUBLIC_DEMO_URL_FA
        }` || "",
      title: t("demo"),
      target: true,
    },
    // { href: "/faq", title: t("faq") },
  ];
  return (
    <nav className="w-full lg:max-w-3/5">
      <ul className="nav__list flex w-full justify-between bg-slate-100 px-4 py-3 font-bold text-slate-600 sm:bg-transparent sm:px-0 sm:py-0">
        {navItems.map((item) => (
          <li key={item.href} className="border-0 border-b-purple-800 pb-1 sm:border-b-2">
            {item.target ? (
              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                {item.title}
              </Link>
            ) : (
              <Link href={item.href}>{item.title}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
