import Beauty from "@/components/ui/icons/beauty-salon.svg";
import Barbershop from "@/components/ui/icons/barbershop.svg";
import Clinic from "@/components/ui/icons/clinic.svg";
import Car from "@/components/ui/icons/car.svg";
import { useTranslations } from "next-intl";

export default function Businesses() {
  const t = useTranslations("businesses");
  const businesses = [
    {
      id: "1",
      title: t("items.salon"),
      icon: <Beauty style={{ width: "2rem", height: "2rem", fill: "#5b21b6" }} />,
    },
    {
      id: "2",
      title: t("items.carwash"),
      icon: <Car style={{ width: "2rem", height: "2rem", fill: "#5b21b6" }} />,
    },
    {
      id: "3",
      title: t("items.barber"),
      icon: <Barbershop style={{ width: "2rem", height: "2rem", fill: "#5b21b6" }} />,
    },
    {
      id: "4",
      title: t("items.clinics"),
      icon: <Clinic style={{ width: "2rem", height: "2rem", fill: "#5b21b6" }} />,
    },
  ];
  return (
    <section aria-label="businesses-section" className="grid justify-items-center gap-y-4 py-8">
      <p className="title text-center text-2xl font-medium">{t("title")}</p>
      <div className="bg-primary-900 h-1 w-20"></div>

      <div className="businesses-container grid gap-4 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-8">
        {businesses.map((busi) => (
          <div key={busi.id} className="flex items-center justify-start gap-2">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-200 sm:rounded-xl">
              {busi.icon}
            </span>
            <p className="text-text-secondary font-bold">{busi.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
