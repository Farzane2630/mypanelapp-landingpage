import GetStarted from "@/components/layout/navbar/actions/getStarted";
import { getTranslations } from "next-intl/server";

export default async function HeroContent() {
  const t = await getTranslations();
  return (
    <div className="flex flex-col gap-y-4">
      <h1>{t("appname")}</h1>
      <p>{t("hero.title")}</p>
      <GetStarted />
    </div>
  );
}
