"use client";
import React from "react";
import { BiSearch } from "react-icons/bi";
import NavLink from "./NavLink";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Rooms",
    path: "/rooms",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Gallery",
    path: "/gallery",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Search = () => {
  return (
    <div
      className="menu hidden lg:block md:w-auto whitespace-nowrap"
      id="navbar"
    >
      <ul className="flex justify-center items-center p-4 md:px-5 md:flex-row md:space-x-8 mt-0">
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title}></NavLink>
          </li>
        ))}
        <li className="whitespace-nowrap">
          <a href={"https://g.co/kgs/1g8nxf/"} target="_blank">
            <GoogleIcon className="pb-2" fontSize="medium" />
          </a>

          <a href={"https://www.facebook.com/HotelDivineView"} target="_blank">
            <FacebookIcon className="pb-2" fontSize="medium" />
          </a>

          <a href={"https://www.instagram.com/hoteldivineview/"} target="_blank">
            <InstagramIcon className="pb-2" fontSize="medium" />
          </a>
        </li>
        <li>
          <Link href={"/"}>
            <button className="border px-9 py-4 bg-[#c4a67e] text-white hover:bg-[#bd9b6e]">
              BOOK NOW
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Search;
