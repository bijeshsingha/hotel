"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Rooms from "./Rooms";
import Button from "../components/PrimaryButton";

//<img src="" width="500" height="600" />
// <img src="" width="500" height="600" />

const slides = [
  { src: "/images/DD.jpeg" },
  { src: "/images/DD1.jpeg" },
  { src: "/images/DD2.jpeg" },
  { src: "/images/DD3.jpeg" },
  { src: "/images/DD4.jpeg" },
];
const familyExe = [
  { src: "/images/DD.jpeg" },
  { src: "/images/DD1.jpeg" },
  { src: "/images/DD2.jpeg" },
  { src: "/images/DD3.jpeg" },
  { src: "/images/DD4.jpeg" },
];
const doubleExe = [
  { src: "/images/DD.jpeg" },
  { src: "/images/DD1.jpeg" },
  { src: "/images/DD2.jpeg" },
  { src: "/images/DD3.jpeg" },
  { src: "/images/DD4.jpeg" },
];

const rooms = [
  {
    title: "Double Deluxe",
    desc: "The rooms at Hotel Divine View in Guwahati are nicely decorated with calming colors and all the necessary amenities. Big windows and the light-colored walls make the rooms feel more spacious and airy.",
    price: "2000",
    img: slides,
  },
  {
    title: "Family Executive",
    desc: "The rooms at Hotel Divine View in Guwahati are nicely decorated with calming colors and all the necessary amenities. Big windows and the light-colored walls make the rooms feel more spacious and airy.",
    price: "3000",
    img: slides,
  },
  {
    title: "Double Executive",
    desc: "The rooms at Hotel Divine View in Guwahati are nicely decorated with calming colors and all the necessary amenities. Big windows and the light-colored walls make the rooms feel more spacious and airy.",
    price: "2500",
    img: slides,
  },
  {
    title: "Double Standard",
    desc: "The rooms at Hotel Divine View in Guwahati are nicely decorated with calming colors and all the necessary amenities. Big windows and the light-colored walls make the rooms feel more spacious and airy.",
    price: "1600",
    img: slides,
  },
];

const Section2 = () => {
  let [current, setCurrent] = useState(0);
  const homePageRooms = rooms.slice(0, 2);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  return (
    <section className="h-auto bg-slate-200 flex items-center w-full flex-col m-auto">
      <div className="text-center md:py-[6%] pt-[3rem] pb-7 text-4xl md:text-5xl font-bold noto-font">
        OUR ROOMS
      </div>
      <div className="flex flex-col gap-10">
        {homePageRooms.map((room, index) => (
          <Rooms
            key={index}
            roomTitle={room.title}
            roomDesc={room.desc}
            roomPrice={room.price}
            img={room.img}
            row={index % 2 !== 0 ? "reverse" : ""}
          />
        ))}
      </div>
      <div className="py-10">
        <Link href={"/"}>
          <Button text={"VIEW MORE"} />
        </Link>
      </div>
    </section>
  );
};

export default Section2;
