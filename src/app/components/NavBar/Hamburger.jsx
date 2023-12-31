"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Hamburger = ({ isOpen, setIsOpen }) => {
  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);
  return (
    <div className="relative lg:hidden block">
      <div className="">
        <div
          onClick={handleClick}
          className="p-4 border border-slate-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
