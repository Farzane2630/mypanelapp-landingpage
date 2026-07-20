import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations("features");
  return (
    <div>
      <p className="title text-center text-2xl font-medium">{t("title")}</p>
      <div className="bg-primary-900 h-1 w-20"></div>
    </div>
  );
}
