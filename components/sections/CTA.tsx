import { getTranslations } from "next-intl/server";
import GetStarted from "../layout/navbar/actions/getStarted";

export default async function CTA() {
  const t = await getTranslations("cta");
  return (
    <section
      aria-label="cta-headeing"
      className="grid py-4 bg-purple-700 justify-items-center gap-y-3"
    >
      <h2 id="cta-heading" className="font-bold text-xl text-white text-center">
        {t("title")}
      </h2>
      <p className="font-base text-md text-white text-center">
        {t("description")}
      </p>
      <GetStarted className="bg-white text-purple-700 " title={t("primary")} />
    </section>
  );
}
