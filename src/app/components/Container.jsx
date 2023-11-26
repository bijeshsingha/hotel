"use client";
//important as it will create hydration error if mismatch
//import this container in other client component
import React, { Children } from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 ">
      {children}
    </div>
  );
};

export default Container;
