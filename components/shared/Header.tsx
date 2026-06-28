import React from "react";
import Navbar from "../Navbar";
import Link from "next/link";
import logo from "@/public/brand/mypanelapp-icon.svg";
import Image from "next/image";

function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6">
      <Link href="#" aria-label="My Panel App Logo">
        <Image src={logo} alt="My Panel App Logo" className="" />
      </Link>
      <Navbar />
      <button type="button">Getting Started</button>
    </header>
  );
}

export default Header;
