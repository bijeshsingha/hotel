'use client'
import Image from "next/image";
import React from "react";
import StarIcon from '@mui/icons-material/Star';

const ReviewCard = ({review}) => {
  return (
    <div className="flex flex-col items-center justify-center p-2 gap-2 bg-white rounded-lg shadow-md w-[300px] h-[400px]">
      <div className="w-24 h-24 overflow-hidden rounded-full">
        <img
          className="w-full h-full object-cover"
          src={review.imageUrl}
          alt="Reviewer"
        />
      </div>
      <div > Name</div>
      <div className="mt-4">
        {Array.from({ length: review.stars }).map((_, index) => (
          <span key={index} className="text-yellow-500">
            <StarIcon />
          </span>
        ))}
      </div>
      <p className="mt-4 text-center para-font">{review.description}</p>
    </div>
  );
};

export default ReviewCard;

//
