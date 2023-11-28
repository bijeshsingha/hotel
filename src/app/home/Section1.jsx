"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Button from "../components/PrimaryButton";

const Section1 = () => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(globalThis.window?.innerWidth);

    const handleResize = () => {
      setWindowWidth(globalThis.window?.innerWidth);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let styling =
    windowWidth < 1024
      ? {
          backgroundImage: `url('/images/building1.jpeg')`,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          overflow: "hidden",
          backgroundPosition: "center",
        }
      : {};
  return (
    <section
      className="flex lg:flex-row flex-col  lg:px-[14%] px-5 w-full"
      style={styling}
    >
      <div className="h-[100vh] w-full flex flex-col justify-center lg:pr-[5%] gap-11 ">
        <div className="flex flex-col justify-center gap-2">
          <h3 className="md:text-4xl text-2xl font-bold text-primary-color bodoni-font">
            ITS AMAZING
          </h3>
          <h1 className="md:text-6xl text-4xl noto-font font-bold text-white lg:text-black">
            Enjoy A Dream Vacation in Hotel Divine View
          </h1>
        </div>
        <Link href={"/"}>
          <Button text={"BOOK NOW"} />
        </Link>
      </div>
      <div className="w-[100%] h-auto flex items-center justify-center ">
        <Image
          alt="building"
          className="lg:block hidden mt-11 shadow-md"
          width="500"
          height="800"
          quality={100}
          src="/images/building1.jpeg"
        />
      </div>
    </section>
  );
};

export default Section1;
