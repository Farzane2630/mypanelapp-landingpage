import { getTranslations } from "next-intl/server";
import GetStarted from "../layout/navbar/actions/getStarted";

export default async function CTA() {
  const t = await getTranslations("cta");
  return (
    <section
      aria-label="cta-headeing"
      className="grid justify-items-center gap-y-3 bg-purple-700 py-4"
    >
      <h2 id="cta-heading" className="text-center text-xl font-bold text-white">
        {t("title")}
      </h2>
      <p className="font-base text-md text-center text-white">{t("description")}</p>
      <GetStarted
        className="bg-white text-purple-700"
        title={t("primary")}
        href={`${process.env.NEXT_PUBLIC_ADMIN_URL}`}
      />
    </section>
  );
}
