"use client";
import React, { useEffect, useState, useRef } from "react";
import Container from "../Container";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuOverlay from "./MenuOverlay";
import Hambuerger from "./Hamburger";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { usePathname } from "next/navigation";
import { useStateContext } from "../../context/ContextProvider";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

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

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { isOpen, setIsOpen } = useStateContext();

  const menuOverlayRef = useRef();

  useGSAP(() => {
    // or refs...
    //gsap.to(".nav", { y: 100, opacity: 1, duration: 1 });
gsap.fromTo(".nav", { yPercent:-100 }, { yPercent:0, duration: 2 });
    //animate ".box" from an opacity of 0 to an opacity of 0.5
    if (isOpen) {
    
    } else {  
      gsap.to(".nav", { yPercent: -100, duration: 1 });
    }
  }, {});

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      // Set a threshold value based on your design
      const threshold = 150;

      setIsSticky(offset > threshold);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Detach the scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);
  const pathname = usePathname();
  return (
    <nav className={`w-full right-0 left-0 z-50 bg-white fixed`}>
      <div
        className={`sticky top-0 transition duration-1000 ${
          isSticky ? "fixed" : ""
        }`}
      >
        <div className="pb-4 border-b-[1px]">
          {isSticky ? (
            ""
          ) : (
            <div className="lg:flex lg:flex-row hidden bg-slate-100 justify-around py-2">
              <div className="text-sm para-font text-slate-700">
                <PhoneIcon /> Call us: +91-69017 41211/ +91-97062 77133
              </div>
              <div className="text-sm para-font text-slate-700">
                <LocationOnIcon />
                MD Shah Rd, Near Assam Finance Corporation, Paltan Bazaar,
                Guwahati, Assam 781008
              </div>
            </div>
          )}
          <Container>
            <div
              className={`flex flex-row justify-between items-center gap-3 md:gap-0 pt-4 lg:px-[12%] transition duration-1000`}
            >
              <Link href={"/"}>
                <Logo />
              </Link>
              <Menu navLinks={navLinks} />
              <Hambuerger isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </Container>
        </div>
      </div>
      <div className="">
        {isOpen && (
          <MenuOverlay
            ref={menuOverlayRef}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            navLinks={navLinks}
          />
        )}
      </div>
    </nav>
  );
};

export default Nav;
