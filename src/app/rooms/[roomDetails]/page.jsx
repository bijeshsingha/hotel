'use client'
import React from "react";
import DoubleDeluxe from "./DoubleDeluxe";
import Heading from "../../components/Heading";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter
  return (
    <div className="pt-[200px] h-auto text-center flex flex-col items-center gap-3">
      <Heading
        topText={"ROOM DETAILS"}
        mainHeading={"Best Quality Rooms"}
        desc={
          "Experience elegance and comfort in our thoughtfully designed rooms at Hotel Divine View, offering a perfect blend of style, modern amenities, and personalized service"
        }
      />
      <DoubleDeluxe />
    </div>
  );
};

export default page;
