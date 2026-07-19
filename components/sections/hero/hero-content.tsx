import { getTranslations } from "next-intl/server";
import Features from "./features";
import CTA from "./cta";

export default async function HeroContent() {
  const t = await getTranslations("hero");
  return (
    <div className="flex flex-col items-start justify-center gap-y-6 py-4 md:px-8 lg:max-w-1/2">
      <div className="header">
        <p className="text-primary-700 text-4xl font-extrabold">{t("title.highlight")}</p>

        <p className="text-4xl font-extrabold text-slate-700">{t("title.line1")}</p>
        <p className="text-4xl font-extrabold text-slate-700">{t("title.line2")}</p>
      </div>
      <p className="description text-xl font-medium text-slate-700">{t("description")}</p>
      <Features />
      <CTA />
    </div>
  );
}
