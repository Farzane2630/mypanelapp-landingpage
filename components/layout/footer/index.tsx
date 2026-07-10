import Logo from "@/components/shared/logo";
import Link from "next/link";
import Facebook from "@/components/ui/icons/facebook.svg";
import Twitter from "@/components/ui/icons/twitter.svg";
import Instagram from "@/components/ui/icons/instagram.svg";
import LinkedIn from "@/components/ui/icons/linkedin.svg";
import Language from "./language";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("footer");
  return (
    <footer className="w-full md:flex-row flex-col flex justify-between items-start px-12 py-8 lg:gap-x-12">
      <div className="flex gap-y-4 flex-col items-start justify-start md:max-w-1/4 w-full">
        <div className="flex justify-start items-center gap-x-2">
          <Logo />
          <p className="font-extrabold text-xl">{t("appname")}</p>
        </div>
        <p className="text-sm text-slate-900 font-medium">{t("description")}</p>
        <div className="social-links flex justify-between items-center w-full">
          <Link href="/">
            <Facebook className="w-8 h-8 hover:fill-purple-950 hover:stroke-purple-950" />
          </Link>
          <Link href="/">
            <Instagram className="w-8 h-8 hover:fill-purple-950 hover:stroke-purple-950" />
          </Link>
          <Link href="/">
            <Twitter className="w-8 h-8 hover:fill-purple-950 hover:stroke-purple-950" />
          </Link>
          <Link href="/">
            <LinkedIn className="w-8 h-8 hover:fill-purple-950 hover:stroke-purple-950" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-y-2 text-md text-slate-900 font-semibold">
        <Link href="/">Products</Link>
        <Link href="/">Features</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">Demo</Link>
      </div>
      <div className="flex flex-col items-start justify-start gap-y-2 text-md text-slate-900 font-semibold">
        <Link href="/">Products</Link>
        <Link href="/">Features</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">Demo</Link>
      </div>{" "}
      <div className="flex flex-col items-start justify-start gap-y-2 text-md text-slate-900 font-semibold">
        <Link href="/">Products</Link>
        <Link href="/">Features</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">Demo</Link>
      </div>
      <div className="w-full hidden max-w-1/5 md:flex flex-col items-center justify-start gap-y-2 text-md text-slate-900 font-semibold">
        <p className="text-lg text-slate-900 font-bold">{t("language")}</p>
        <Language />
      </div>
    </footer>
  );
}
