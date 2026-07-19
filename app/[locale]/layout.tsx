import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Geist } from "next/font/google";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Navigation from "@/components/layout/navbar/navigation";
import CTA from "@/components/sections/CTA";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL("https://mypanelapp.ir"),
  title: {
    default: "MyPanelApp",
    template: "%s | MyPanelApp",
  },
  description: "Create and manage your online booking platform in minutes with MyPanelApp.",
};
const geist = Geist({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={geist.className}
      dir={locale === "fa" ? "rtl" : "ltr"}
    >
      <body className="relative min-h-screen bg-slate-200 text-slate-800 antialiased">
        <NextIntlClientProvider>
          <Navbar />
          <main>{children}</main>
          <CTA />
          <Footer />
          <div className="sticky bottom-0 flex min-h-18 items-end sm:hidden">
            <Navigation />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
