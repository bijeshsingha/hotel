"use client";
import React from "react";

const Section3 = () => {
  return (
    <section className="h-[60vh] flex flex-col items-center">
      <div className="flex flex-col items-center justify-center p-10">
        <h3 className="flex p-4 text-sm md:text-base">HOTELLON IS BEST</h3>
        <div className="flex items-center w-10 border border-primary-color"></div>
        
        <p className="capitalize text-lg md:text-4xl noto-font py-6">
          Great features of hotel divine view 
        </p>
      </div>
      <div className="flex w-full">
        <ul className="grid-rows-2 grid-col-4">
          <li className="w-[500px] bg-red-200">
            element
          </li>
          <li className="w-[500px] bg-red-200">
            element
          </li>
          <li className="w-[500px] bg-red-200">
            element
          </li>
          <li className="w-[500px] bg-red-200">
            element
          </li>
          <li className="w-[500px] bg-red-200">
            element
          </li>
          <li className="w-[500px] bg-red-200">
            element
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Section3;
