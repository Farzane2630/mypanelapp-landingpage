import Calendar from "@/components/ui/icons/calendar.svg";
import SMS from "@/components/ui/icons/sms.svg";
import Location from "@/components/ui/icons/location.svg";
import BankCard from "@/components/ui/icons/bank-card.svg";
import Stats from "@/components/ui/icons/stats.svg";
import { useTranslations } from "next-intl";

export default function FeatureCards() {
  const t = useTranslations("features.items");
  const features = [
    {
      id: "1",
      title: t("onlineBooking.title"),
      icon: <Calendar style={{ width: "3rem", height: "3rem", fill: "#5b21b6" }} />,
      description: t("onlineBooking.description"),
    },
    {
      id: "2",
      title: t("reminders.title"),
      icon: <SMS style={{ width: "2.5rem", height: "3rem", fill: "#5b21b6" }} />,
      description: t("reminders.description"),
    },
    {
      id: "3",
      title: t("googleMaps.title"),
      icon: <Location style={{ width: "3rem", height: "3rem", fill: "#5b21b6" }} />,
      description: t("googleMaps.description"),
    },
    {
      id: "4",
      title: t("payments.title"),
      icon: <BankCard style={{ width: "3rem", height: "3rem", fill: "#5b21b6" }} />,
      description: t("payments.description"),
    },
    {
      id: "5",
      title: t("businessInsights.title"),
      icon: <Stats style={{ width: "3rem", height: "3rem", fill: "#5b21b6" }} />,
      description: t("businessInsights.description"),
    },
  ];
  return (
    <div className="features-container grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:px-8">
      {features.map((feat) => (
        <div
          key={feat.id}
          className="bg-background-soft border-border flex items-center gap-4 rounded-lg border px-4 py-6 text-start sm:flex-col sm:px-12 sm:py-8 sm:text-center"
        >
          <span className="flex h-18 w-18 items-center justify-center rounded-lg bg-purple-200 sm:rounded-xl">
            {feat.icon}
          </span>
          <h2 className="text-text-primarytext-xl font-bold">{feat.title}</h2>

          <p className="text-text-secondary text-sm font-medium">{feat.description}</p>
        </div>
      ))}
    </div>
  );
}
