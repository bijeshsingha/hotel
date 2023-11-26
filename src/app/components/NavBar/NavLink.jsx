"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";


const NavLink = ({ href, title }) => {
  const pathname = usePathname();
  const active = "text-[#c4a67e]";
  return (
    <Link
      href={href}
      className={
        "para-font block py-2 pl-3 pr-4 text-md rounded md:p-0 " +
        (pathname === href
          ? "text-[#c4a67e]"
          : "text-[#626364] hover:text-[#c4a67e]")
      }
    >
      {title}
    </Link>
  );
};

export default NavLink;
