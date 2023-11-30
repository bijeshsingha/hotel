"use client";
import React from "react";
import Heading from "../components/Heading";

const Section4 = () => {
  return (
    <section
      style={{
        background: "linear-gradient(to bottom, #fbf8f3 70%, white 30%)",
      }}
      className="flex justify-center items-start h-screen py-[3rem]"
    >
      <Heading
        topText={"TESTIMONIAL & REVIEW"}
        mainHeading={"what people say"}
        desc={
          "Dive into our review section to discover firsthand experiences and insights, guiding you through the authentic perspectives of our satisfied customers."
        }
      />
    </section>
  );
};

export default Section4;
