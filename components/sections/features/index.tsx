import { useTranslations } from "next-intl";
import FeatureCards from "./featureCards";

export default function Features() {
  const t = useTranslations("features");
  return (
    <section
      id="features"
      aria-label="features-section"
      className="grid justify-items-center gap-y-4 py-8"
    >
      <p className="title text-center text-2xl font-medium">{t("title")}</p>
      <div className="bg-primary-900 h-1 w-20"></div>

      <FeatureCards />
    </section>
  );
}
