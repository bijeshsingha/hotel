"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";


const NavLink = ({ href, title, isOpen, setIsOpen }) => {
  const pathname = usePathname();
  const active = "text-[#c4a67e]";
  console.log(pathname);
  return (
    <Link
      href={href}
      className={
        "para-font block py-2 pl-3 pr-4 text-md rounded md:p-0 " +
        ((pathname.includes(href) && href !== "/") || (href === "/" && pathname === href)
          ? "text-[#c4a67e]"
          : "text-[#626364] hover:text-[#c4a67e]")
      }
      onClick={() => setIsOpen(!isOpen)}
    >
      {title}
    </Link>
  );
};

export default NavLink;
