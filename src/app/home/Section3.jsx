"use client";
import React from "react";
import FeaturesCard from "./FeaturesCard";
import MapIcon from "@mui/icons-material/Map";
import Image from "next/image";

const Section3 = () => {
  return (
    <section className="h-auto flex flex-col items-center py-[3rem] ">
      <div className="flex flex-col items-center justify-center">
        <h3 className="flex py-4 text-[0.7rem] md:text-base">HOTELLON IS BEST</h3>
        <div className="flex items-center w-10 border border-primary-color"></div>

        <p className="capitalize text-lg md:text-4xl noto-font py-6">
          Great features of hotel divine view
        </p>
      </div>
      <div className="flex flex-col w-full gap-[1rem]  py-10">
        <ul className="flex flex-col lg:flex-row items-center justify-center gap-[1rem]">
          <li className="flex flex-col justify-center">
            <FeaturesCard
              icon={
                <Image src="/images/location.png" width={"80"} height={100} />
              }
              title="Great Location"
              desc="Located at the heart of the City, Paltan Baazar, close to railway station"
            />
          </li>
          <li className="">
            <FeaturesCard
              icon={
                <Image src="/images/parking.png" width={"80"} height={100} />
              }
              title="Free Parking"
              desc="The Place has a free parking"
            />
          </li>
          <li className="">
            <FeaturesCard
              icon={
                <Image src="/images/wifi.png" width={"80"} height={100} />
              }
              title="Free Wifi"
              desc="We offer free parking"
            />
          </li>
        </ul>
        <ul className="flex flex-col lg:flex-row justify-center items-center gap-[1rem]">
          <li className="">
            <FeaturesCard
              icon={
                <Image src="/images/location.png" width={"80"} height={100} />
              }
              title="Great Location"
              desc=""
            />
          </li>
          <li className="">
            <FeaturesCard
              icon={
                <Image src="/images/location.png" width={"80"} height={100} />
              }
              title="Great Location"
              desc=""
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Section3;
