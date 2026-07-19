import GetStarted from "@/components/layout/navbar/actions/getStarted";
import { getTranslations } from "next-intl/server";
import Features from "./features";
import CTA from "./cta";

export default async function HeroContent() {
  const t = await getTranslations();
  return (
    <div className="flex flex-col items-start justify-center gap-y-6 py-4 md:px-8 lg:max-w-1/2">
      <div className="header">
        <p className="text-primary-700 text-4xl font-extrabold">Smart Booking</p>

        <p className="text-4xl font-extrabold text-slate-700">Happier Customers.</p>
        <p className="text-4xl font-extrabold text-slate-700">More Time For You.</p>
      </div>
      <p className="description text-xl font-medium text-slate-700">
        MyPanelApp is the all-in-one booking management platform that helps businesses automate
        appointments, send reminders, and grow effortlessly.
      </p>
      <Features />
      <CTA />
    </div>
  );
}
