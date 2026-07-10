import { useTranslations } from "next-intl";
import Link from "next/link";

export default function GetStarted() {
  const t = useTranslations("navbar");
  return (
    <Link
      className=" w-fit border-2 border-purple-800 text-purple-950 font-bold px-8 py-2 rounded-lg hover:bg-purple-800 hover:text-white"
      target="_blank"
      href="https://panel.mypanelapp.ir"
    >
      {t("demo")}
    </Link>
  );
}
