import HeroActions from "./hero-actions";
import { getTranslations } from "next-intl/server";

export default async function HeroContent() {
  const t = await getTranslations("hero");
  return (
    <div>
      <h1>My Panel App</h1>
      <p>{t("title")}</p>
      <HeroActions />
    </div>
  );
}
