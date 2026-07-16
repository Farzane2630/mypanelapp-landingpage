import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type GetStartedProps = {
  className?: string;
  title?: string;
  href?: string;
};

export default function GetStarted({ className, title, href }: GetStartedProps) {
  const t = useTranslations("navbar");
  const locale = useLocale();
  return (
    <Link
      className={twMerge(
        "w-fit rounded-lg border-2 border-purple-800 px-8 py-2 font-bold text-purple-950 hover:bg-purple-800 hover:text-white",
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
      href={
        href ??
        `${locale === "en" ? process.env.NEXT_PUBLIC_DEMO_URL_EN : process.env.NEXT_PUBLIC_DEMO_URL_FA}`
      }
    >
      {title ?? t("demo")}
    </Link>
  );
}
