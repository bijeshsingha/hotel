"use client";
import React, { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="carousel-container relative overflow-hidden">
        <div
          className="carousel-images"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              className="carousel-image"
              src={image}
              alt="carousel"
            />
          ))}
        </div>
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white"
          onClick={handlePrev}
        >
          <ArrowBackIosIcon />
        </button>
        <button
          className="absolute top-1/2 right-1 transform -translate-y-1/2 text-white"
          onClick={handleNext}
        >
          <ArrowForwardIosIcon />
        </button>
        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
          {images.map((s, i) => {
            return (
              <div
                onClick={() => {
                  setCurrentImageIndex(i);
                }}
                key={"circle" + i}
                className={`rounded-full md:w-5 md:h-5 w-3 h-3 cursor-pointer  ${
                  i === currentImageIndex ? "bg-white" : "bg-gray-500"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
