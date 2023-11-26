"use client";
import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./Hamburger";
import Link from "next/link";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname()
  return (
    <nav className="fixed w-full top-0  right-0 left-0 z-10 bg-white">
      <div className="pb-4 border-b-[1px]">
        <div className="lg:flex lg:flex-row hidden bg-slate-100 justify-around py-2">
          <div className="text-sm para-font text-slate-700"><PhoneIcon /> Call us: +91-69017 41211/ +91-97062 77133</div>
          <div className="text-sm para-font text-slate-700">
            <LocationOnIcon />
            MD Shah Rd, Near Assam Finance Corporation, Paltan Bazaar, Guwahati,
            Assam 781008
          </div>
        </div>
        <Container>
          <div className="flex flex-row justify-between items-center gap-3 md:gap-0 pt-4 lg:px-[12%]">
            <Link href={'/'} >
              <Logo />
            </Link>
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Nav;
