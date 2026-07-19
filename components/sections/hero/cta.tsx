import GetStarted from "@/components/layout/navbar/actions/getStarted";
import Play from "@/components/ui/icons/play.svg";
import { useTranslations } from "next-intl";
export default function CTA() {
  const t = useTranslations("hero.cta");
  return (
    <div className="flex w-full flex-col gap-2 sm:flex-row">
      <GetStarted
        title={t("startFreeTrial")}
        className="bg-primary-700 w-full text-center text-white sm:w-fit"
      />
      <GetStarted
        title={
          <div className="flex items-center justify-center gap-x-2 text-center">
            <Play className="text-primary-700 h-4 w-4" />
            {t("watchDemo")}
          </div>
        }
        className="text-primary-700 w-full flex-col gap-x-2 bg-white text-center sm:w-fit sm:flex-row"
      />
    </div>
  );
}
