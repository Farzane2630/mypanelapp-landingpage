import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Navigation() {
  const t = useTranslations("navbar");
  return (
    <nav className="w-full">
      <ul className="nav__list flex justify-between">
        <li>
          <Link href="/features">{t("features")}</Link>
        </li>
        <li>
          <Link href="/pricing">{t("pricing")}</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
