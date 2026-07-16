import { useTranslations } from "next-intl";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type GetStartedProps = {
  className?: string;
  title?: string;
  href?: string;
};

export default function GetStarted({ className, title, href }: GetStartedProps) {
  const t = useTranslations("navbar");
  return (
    <Link
      className={twMerge(
        "w-fit rounded-lg border-2 border-purple-800 px-8 py-2 font-bold text-purple-950 hover:bg-purple-800 hover:text-white",
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
      href={`${href ?? process.env.NEXT_PUBLIC_ADMIN_URL}` || ""}
    >
      {title ?? t("demo")}
    </Link>
  );
}
