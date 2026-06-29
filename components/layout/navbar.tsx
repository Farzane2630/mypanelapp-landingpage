import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/brand/mypanelapp-icon.svg";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between p-8 w-full">
      <Link href="/">
        <Image src={Logo} alt="MyPanelApp logo" />
      </Link>
      <nav>
        <ul className="nav__list flex w-full justify-between">
          <li>
            <Link href="/features">Features</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
