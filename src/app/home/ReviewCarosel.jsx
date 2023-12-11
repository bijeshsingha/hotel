"use client";
import React from "react";
import ReviewCard from "./ReviewCard";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewCarosel = ({ reviews }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  return (
    <div className="flex gap-10 flex-col lg:flex-row">
      
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      
    </div>
  );
};

export default ReviewCarosel;
