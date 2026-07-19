import Link from "next/link";
import BrandLogo from "@/public/brand/mypanelapp-icon.svg";

export default function Logo() {
  return (
    <Link href="#" aria-label="Logo of mypanelapp">
      <BrandLogo className="h-14 w-14" />
    </Link>
  );
}
