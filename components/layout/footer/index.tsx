import Logo from "@/components/shared/logo";
import Link from "next/link";
import Facebook from "@/components/ui/icons/facebook.svg";
import Threads from "@/components/ui/icons/threads-app.svg";
import Instagram from "@/components/ui/icons/instagram.svg";
import Email from "@/components/ui/icons/email.svg";
import Language from "./language";
import { getTranslations } from "next-intl/server";

const socials = [
  {
    icon: <Facebook className="h-8 w-8" />,
    href: process.env.NEXT_PUBLIC_FACEBOOK_URL,
    label: "Facebook",
  },
  {
    icon: <Instagram className="h-8 w-8" />,
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    label: "Instagram",
  },
  {
    icon: <Threads className="h-8 w-8 fill-black" />,
    href: process.env.NEXT_PUBLIC_THREADS_URL,
    label: "Threads",
  },
  {
    icon: <Email className="h-8 w-8" />,
    href: process.env.NEXT_PUBLIC_EMAIL_URL,
    label: "Email",
  },
];

export default async function Footer() {
  const t = await getTranslations("footer");
  return (
    <footer className="flex w-full flex-col items-start justify-between px-12 py-8 md:flex-row lg:gap-x-12">
      <div className="flex w-full flex-col items-start justify-start gap-y-4 md:max-w-1/4">
        <div className="flex items-center justify-start gap-x-2">
          <Logo />
          <p className="text-xl font-extrabold">{t("appname")}</p>
        </div>
        <p className="text-sm font-medium text-slate-900">{t("description")}</p>
        <div className="social-links flex w-full items-center justify-between">
          {socials.map((item) => (
            <Link key={item.label} href={item.href || "#"} aria-label={item.label}>
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
      {/* placeholder */}
      <div className="text-md hidden flex-col items-start justify-start gap-y-2 font-semibold text-slate-900 md:flex">
        <Link href="/">{t("product")}</Link>
        <Link href="/">{t("links.pricing")}</Link>
        <Link href="/">{t("links.features")}</Link>
        <Link href="/">{t("links.faq")}</Link>
      </div>
      <div className="text-md hidden flex-col items-start justify-start gap-y-2 font-semibold text-slate-900 md:flex">
        <Link href="/">{t("product")}</Link>
        <Link href="/">{t("links.pricing")}</Link>
        <Link href="/">{t("links.features")}</Link>
        <Link href="/">{t("links.faq")}</Link>
      </div>
      <div className="text-md hidden flex-col items-start justify-start gap-y-2 font-semibold text-slate-900 md:flex">
        <Link href="/">{t("product")}</Link>
        <Link href="/">{t("links.pricing")}</Link>
        <Link href="/">{t("links.features")}</Link>
        <Link href="/">{t("links.faq")}</Link>
      </div>
      <div className="text-md hidden w-full max-w-1/5 flex-col items-center justify-start gap-y-2 font-semibold text-slate-900 md:flex">
        <p className="text-lg font-bold text-slate-900">{t("language")}</p>
        <Language />
      </div>
    </footer>
  );
}
