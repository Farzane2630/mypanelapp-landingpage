import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="hidden md:flex font-semi text-xl md:flex-row space-y-8 md:space-y-0 flex-col md:w-full w-fit min-h-screen md:min-h-fit justify-start p-2 md:justify-between items-end  md:border md:bg-transparent md:border-purple-500 md:rounded-full rounded-lg bg-purple-800">
      {/* <button type="button" className="">Close</button> */}
      <ul className="font-semi text-shadow-purple-200 text-xl flex md:flex-row space-y-8 md:space-y-0 flex-col md:w-full w-fit min-h-screen md:min-h-fit justify-start md:justify-between items-center  md:px-8 md:py-6 pt-8 px-10">
        <li>
          <Link href="#">Products</Link>
        </li>
        <li>
          <Link href="#">Pricing</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
