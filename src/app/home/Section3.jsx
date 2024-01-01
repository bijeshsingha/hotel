"use client";
import React from "react";
import FeaturesCard from "./FeaturesCard";
import MapIcon from "@mui/icons-material/Map";
import Image from "next/image";
import Heading from "../components/Heading";

const Section3 = () => {
  return (
    <section className="h-auto flex flex-col items-center py-[3rem] ">
      <Heading
        topText={"HOTELLON IS BEST"}
        mainHeading={"Great features of hotel divine view"}
        desc={
          "Explore the exceptional features of Hotel Divine View, where luxury meets comfort for an unforgettable stay"
        }
      />
      <div className="flex flex-col w-full gap-[1rem]  py-10">
        <ul className="flex flex-col lg:flex-row items-center justify-center gap-[1rem]">
          <li className="flex flex-col justify-center">
            <FeaturesCard
              icon={
                <Image src="/images/location.png" width={"80"} height={"80"} />
              }
              title="Great Location"
              desc="Located at the heart of the City, 500m to railway station"
            />
          </li>
          <li className="">
            <FeaturesCard
              icon={
                <Image src="/images/parking.png" width={"80"} height={"80"} />
              }
              title="Free Parking"
              desc="The Place has a free parking"
            />
          </li>
          <li className="">
            <FeaturesCard
              icon={<Image src="/images/wifi.png" width={"80"} height={"80"} />}
              title="Free Wifi"
              desc="We offer free wifi"
            />
          </li>
        </ul>
        <ul className="flex flex-col lg:flex-row justify-center items-center gap-[1rem]">
          <li className="">
            <FeaturesCard
              icon={
                <Image
                  src="/images/roomService.png"
                  width={"80"}
                  height={"80"}
                />
              }
              title="24hrs Room Service"
              desc="Room Service available 24hrs"
            />
          </li>
          <li className="">
            <FeaturesCard
              icon={
                <Image src="/images/carRental.png" width={"80"} height={"80"} />
              }
              title="Car Rental/Travel Assistance"
              desc="Our expert will help you plan your trip"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Section3;
