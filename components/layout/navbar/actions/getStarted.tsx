import { useTranslations } from "next-intl";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type GetStartedProps = {
  className?: string;
  title?: string;
  href?: string;
};

export default function GetStarted({
  className,
  title,
  href,
}: GetStartedProps) {
  const t = useTranslations("navbar");
  return (
    <Link
      className={twMerge(
        "w-fit border-2 border-purple-800 text-purple-950 font-bold px-8 py-2 rounded-lg hover:bg-purple-800 hover:text-white",
        className,
      )}
      target="_blank"
      rel="noopener noreferrer"
      href={href ?? "https://panel.mypanelapp.ir"}
    >
      {title ?? t("demo")}
    </Link>
  );
}
