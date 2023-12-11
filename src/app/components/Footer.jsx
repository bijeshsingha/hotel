'use client'
import React, {useEffect} from "react";
import Logo from "./LogoWhite";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  
  return (
    <footer className="footer flex flex-col justify-center items-center bg-gray-900   text-white">
      <div className="container flex justify-between p-5 ">
        <div className=" w-full flex flex-col items-start text-start md:flex-row md:justify-between">
          <div className="py-6 ">
            <h1 className="text-lg font-bold noto-font py-4">About</h1>
            <ul className="flex flex-col gap-1">
              <li>
                <Link href={"/"}>About us</Link>
              </li>
              <li>
                <Link href={"/"}>Company</Link>
              </li>
              <li>
                <Link href={"/"}>About Owner</Link>
              </li>
              <li>
                <Link href={"/"}>Help Guide</Link>
              </li>
            </ul>
          </div>
          <div className="py-6">
            <h1 className="text-lg font-bold noto-font py-4">Our Address</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <div className="text-sm para-font text-white">
                  <LocationOnIcon fontSize="medium"/>
                  MD Shah Rd, Near Assam Finance Corporation, Paltan Bazaar,
                  Guwahati, Assam 781008
                </div>
              </li>
              <li>
                <div className="text-sm para-font text-white">
                  <PhoneIcon /> Call us: +91-69017 41211/ +91-97062 77133
                </div>
              </li>
              <li>
                <div className="text-sm para-font text-white">
                  <EmailIcon /> divineview02@gmail.com
                </div>
              </li>
            </ul>
          </div>
          <div className="py-6">
            <h1 className="text-lg font-bold noto-font py-4">About</h1>
            <ul className="flex flex-col gap-1">
              <li>
                <Link href={"/"}>About us</Link>
              </li>
              <li>
                <Link href={"/"}>Company</Link>
              </li>
              <li>
                <Link href={"/"}>About Owner</Link>
              </li>
              <li>
                <Link href={"/"}>Help Guid</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent container">
        <div className="container flex flex-col md:flex-row gap-10 justify-center md:justify-between items-center py-5">
          <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#087EE1] to to-[#05E8BA]">
            <span className="text-white">
              <Logo />
            </span>
          </div>
          <ul className="flex flex-wrap gap-7 justify-center text-sm whitespace-nowrap para-font">
            <li>
              <Link href={"/"}>Cancelation Policy</Link>
            </li>
            <li>
              <Link href={"/"}>Disclaimer</Link>
            </li>
            <li>
              <Link href={"/"}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={"/"}>Terms and Conditions</Link>
            </li>
          </ul>
          <p className="flex gap-2 text-lg noto-font">
            Follow us{" "}
            <a href={"https://g.co/kgs/1g8nxf/"} target="_blank">
              <GoogleIcon className="" fontSize="medium" />
            </a>
            <a
              href={"https://www.facebook.com/HotelDivineView"}
              target="_blank"
            >
              <FacebookIcon className="" fontSize="medium" />
            </a>
            <a
              href={"https://www.instagram.com/hoteldivineview/"}
              target="_blank"
            >
              <InstagramIcon className="" fontSize="medium" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
