"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavLink from "./NavLink";

const MenuOverlay = ({ isOpen, setIsOpen, navLinks }) => {
  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  return (
    <div className="absolute top-0 right-0 z-50 h-screen bg-[rgba(0,0,0,0.5)] w-screen">
      <div className="flex">
        <div
          onClick={handleClick}
          className="absolute top-7 right-7 float-right z-50"
        >
          <AiOutlineClose className="text-2xl text-black " />
        </div>
        <div className="sm:w-[50%] w-[20%]"></div>
        <div className="h-screen sm:w-[50%] w-[80%] bg-white nav-menu">
          <div className="p-10">
            <ul className="flex flex-col gap-10 py-10">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink isOpen={isOpen} setIsOpen={setIsOpen} href={link.path} title={link.title}></NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
