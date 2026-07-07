import { useTranslations } from "next-intl";
import Link from "next/link";

export default function GetStarted() {
  const t = useTranslations("navbar");
  return (
    <Link target="_blank" href="https://panel.mypanelapp.ir">
      {t("demo")}
    </Link>
  );
}
