import Link from "next/link";
import BrandLogo from "@/public/brand/mypanelapp-icon.svg";

export default function Logo() {
  return (
    <Link href="/">
      <BrandLogo className="w-10 h-10" />
    </Link>
  );
}
