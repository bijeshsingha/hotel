"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Rooms from "./Rooms";
import Button from "../components/BookNowButton";
import Heading from "../components/Heading";
import rooms from '../RoomsData'



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
    <section className="h-auto flex flex-col items-center bg-[#fbf8f3] py-[3rem] w-full m-auto">
      <Heading
        topText={"LIVE A LUXURIOUS LIFE"}
        mainHeading={"best quality rooms"}
        desc={
          "Experience elegance and comfort in our thoughtfully designed rooms at Hotel Divine View, offering a perfect blend of style, modern amenities, and personalized service"
        }
      />
      <div className="flex flex-col gap-10 py-10">
        {homePageRooms.map((room, index) => (
          <div key={index}>
            <Rooms
              roomTitle={room.title}
              roomDesc={room.desc}
              roomPrice={room.price}
              img={room.img}
              row={index % 2 !== 0 ? "reverse" : ""}
            />
          </div>
        ))}
      </div>
      <div className="py-10">
        <Link href={"/rooms"}>
          <Button text={"VIEW MORE"} />
        </Link>
      </div>
    </section>
  );
};

export default Section2;
