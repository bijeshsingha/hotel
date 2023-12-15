"use client";
import Heading from "../../components/Heading";
import React, { useState } from "react";
import Carousel from "../../components/Carousel";
import RoomCard from "./RoomCard";

const images = ["/images/Hotel1.png", "/images/Hotel2.png"];

const DoubleDeluxe = () => {
  return (
    <div className="">
      <RoomCard
        roomTitle={"Double Deluxe"}
        size={"35 m2 / 376 ft2"}
        service={"Breakfast included"}
        bed={"King-size or twin beds"}
        view={"City view"}
        max={"2 Person(s)"}
        wifi={"Free"}
        images={images}
      />
    </div>
  );
};

export default DoubleDeluxe;
