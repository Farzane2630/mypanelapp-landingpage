import Link from "next/link";
import brandLogo from "@/public/brand/mypanelapp-icon.svg";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <Image src={brandLogo} alt="Mypanelapp logo" priority />
    </Link>
  );
}
