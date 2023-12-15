"use client";
import React from "react";
import Carousel from "../../components/Carousel";
import BedIcon from '@mui/icons-material/Bed';

const RoomCard = ({
  roomTitle,
  images,
  maxPerson,
  size,
  view,
  bed,
  service,
  wifi,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl lg:text-5xl text-primary-color noto-font ">
        <span>{roomTitle}</span>
      </h1>
      <div className="">
        <Carousel images={images} />
      </div>
      <div className="grid grid-cols-4 gap-0  px-2 py-9 border ">
        <div className="h-[70px] border-0 border-r">
          <div className="flex flex-col justify-center items-center h-full ">
            <img src='/images/icons/bedIcon.png' alt="bed" className="h-full -top-2 " />
            <div className=" bottom-0">King-sized Bed</div>
          </div>
        </div>
        <div className=" h-[70px] border-0 border-r">
          <div className="">

          </div>
        </div>
        <div className="h-[70px] border-0 border-r">
          <div>

          </div>
        </div>
        <div className="h-[70px]">
          <div>

          </div>
        </div>
      </div>
      <div className="text-2xl noto-font font-semibold">Room Details</div>
      <div className="flex lg:flex-row lg:justify-between flex-col gap-5">
        <ul className="text-sm font-semibold text-slate-500 flex flex-col gap-3">
          <li>
            Max: <span className="text-black para-font">{maxPerson}</span>
          </li>
          <li>
            Size: <span className="text-black para-font">{size}</span>
          </li>
          <li>
            View: <span className="text-black para-font">{view}</span>
          </li>
        </ul>
        <ul className="text-sm font-bold text-slate-500 flex flex-col gap-3">
          <li>
            Bed: <span className="text-black para-font">{bed}</span>
          </li>
          <li>
            Service: <span className="text-black para-font">{service}</span>
          </li>
          <li>
            Wifi: <span className="text-black para-font">{wifi}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RoomCard;
