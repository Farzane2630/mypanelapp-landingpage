import Checkbox from "@/components/ui/icons/checkbox.svg";
import { useTranslations } from "next-intl";
export default function Features() {
  const t = useTranslations("hero.features");
  const featureItems = [
    { id: "1", title: t("onlineBooking") },
    { id: "2", title: t("reminders") },
    { id: "3", title: t("googleMaps") },
    { id: "4", title: t("payments") },
  ];
  return (
    <ul className="grid gap-y-2">
      {featureItems.map((item) => (
        <li className="flex items-center gap-x-2 text-lg font-medium" key={item.id}>
          <Checkbox className="text-primary-700 h-4 w-4" />
          {item.title}
        </li>
      ))}
    </ul>
  );
}
