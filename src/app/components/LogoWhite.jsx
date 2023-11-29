import Image from "next/image";
import React from "react";

const LogoWhite = () => {
  return (
    <Image
      alt="logo"
      className="min-w-full cursor-pointer"
      height="100"
      width="150"
      src="/logo/Logo2.png"
    />
  );
};

export default LogoWhite;
