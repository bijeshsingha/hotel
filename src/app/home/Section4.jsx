"use client";
import React from "react";
import Heading from "../components/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviews from './ReviewData'
import ReviewCarousel from './ReviewCarosel'

const Section4 = () => {
 

  return (
    <section
      style={{
        background: "linear-gradient(to bottom, #fbf8f3 70%, white 30%)",
      }}
      className="flex flex-col lg:h-screen h-auto py-[3rem] items-center"
    >
      <Heading
        topText={"TESTIMONIAL & REVIEW"}
        mainHeading={"what people say"}
        desc={
          "Dive into our review section to discover firsthand experiences and insights, guiding you through the authentic perspectives of our satisfied customers."
        }
      />
      <div className="h-full flex items-center">
        <ReviewCarousel reviews={reviews} />
      </div>
    </section>
  );
};

export default Section4;
