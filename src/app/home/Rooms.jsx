"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Button from "../components/PrimaryButton";
import Carousel from "../components/Carousel";

/*
<div
            className={`flex transition ease-in-out duration-400`}
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {slides.map((s,index) => {
              return <img key={index} src={s.src} />;
            })}
          </div>
          <div className=" absolute top-0 h-full w-full justify-between items-center flex text-white px-1 text-3xl">
            <button onClick={previousSlide}>
              <BsChevronCompactLeft />
            </button>
            <button onClick={nextSlide}>
              <BsChevronCompactRight />
            </button>
          </div>
          */

const Rooms = ({ index, roomTitle, roomPrice, roomDesc, img, row }) => {
  const slides = img;
  let [current, setCurrent] = useState(0);
  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  return (
    <div
      className={
        "flex flex-col w-full h-full gap-10 " +
        (row === "reverse" ? "lg:flex-row-reverse" : "lg:flex-row")
      }
    >
      <div
        className={
          "w-full flex lg:justify-end justify-center " +
          (row === "reverse" ? "lg:flex-row-reverse" : "lg:flex-row")
        }
      >
        <div className="overflow-hidden relative rounded-xl w-[80%] md:w-[500px] lg:w-[600px]">
          <Carousel images={slides} />
        </div>
      </div>
      <div
        className={
          "w-full flex flex-col justify-center items-center lg:items-start gap-5 lg:gap-10 " +
          (row === "reverse" ? "lg:items-end" : "")
        }
      >
        <h1 className="text-4xl lg:text-5xl heading-font text-[#c4a67e]">
          <Link href={"/rooms/" + roomTitle.replace(/\s+/g, "")}>
            {roomTitle}
          </Link>
        </h1>
        <p
          className={
            "text-lg lg:text-xl text-center para-font text-[#686868] " +
            (row === "reverse"
              ? "lg:text-end px-3 md:px-5 lg:px-0 lg:pl-[30%]"
              : "lg:text-start px-3 md:px-5 lg:px-0 lg:pr-[30%]")
          }
        >
          {roomDesc}
        </p>
        <p className="text-lg lg:text-xl text-center lg:text-start para-font text-[#686868]">
          Price:
          <span className="text-black">
            <CurrencyRupeeIcon />
            {roomPrice}/-
          </span>{" "}
          per night*
        </p>
        <Link href={"/"}>
          <Button text={"BOOK NOW"} />
        </Link>
      </div>
    </div>
  );
};

export default Rooms;
