"use client";
import React from "react";
import Heading from "../../components/Heading";
import DoubleDeluxe from "./DoubleDeluxe";
import Carousel from "../../components/Carousel";
import RoomCard from "./RoomCard";

const images = ["/images/Hotel1.png", "/images/Hotel2.png"];

const RoomDetails = () => {
  return (
    <div className="flex flex-col ">
      <div className="pt-[200px] pb-[100px] bg-[#fbf8f3]">
        <Heading
          topText={"ROOM DETAILS"}
          mainHeading={"Best Quality Rooms"}
          desc={
            "Experience elegance and comfort in our thoughtfully designed rooms at Hotel Divine View, offering a perfect blend of style, modern amenities, and personalized service"
          }
        />
      </div>

      <div className="py-10">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
          <div className="w-full md:w-[80%] lg:w-[40%] py-9">
            <RoomCard
              roomTitle={"Double Deluxe"}
              size={"35 m2 / 376 ft2"}
              service={"Breakfast included"}
              bed={"King-size or twin beds"}
              view={"City view"}
              maxPerson={"2 Person(s)"}
              wifi={"Free"}
              images={images}
            />
          </div>
          <div className="w-full md:w-[80%] lg:w-[20%] bg-white p-3 lg:p-8"></div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
