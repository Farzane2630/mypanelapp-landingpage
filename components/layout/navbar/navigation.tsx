import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="w-full">
      <ul className="nav__list flex justify-between">
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
  );
}
