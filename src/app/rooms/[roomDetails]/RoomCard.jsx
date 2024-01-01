"use client";
import React from "react";
import Carousel from "../../components/Carousel";
import BedIcon from "@mui/icons-material/Bed";

const RoomCard = ({
  roomTitle,
  images,
  maxPerson,
  size,
  view,
  bed,
  service,
  wifi,
  desc
}) => {
  return (
    <div className="flex px-2 flex-col gap-[3rem]">
      <h1 className="text-4xl lg:text-5xl text-primary-color noto-font">
        <span>{roomTitle}</span>
      </h1>
      <div className="flex flex-col gap-6">
        <div>
          <Carousel images={images} />
        </div>
        <div className="grid grid-cols-4 gap-0  px-2 py-9 border ">
          <div className="h-[70px] border-0 border-r flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center h-[80%] w-[80%]">
              <img
                src="/images/icons/bedIcon.png"
                alt="bed"
                className="h-full "
              />
              <div className="text-sm lg:text-base bottom-0 ">{bed}</div>
            </div>
          </div>
          <div className=" h-[70px] border-0 border-r flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center h-[80%] ">
              <img
                src="/images/icons/userIcon.png"
                alt="bed"
                className="h-full"
              />
              <div className="text-sm lg:text-base bottom-0">{maxPerson}</div>
            </div>
          </div>
          <div className="h-[70px] border-0 border-r flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center h-[80%] ">
              <img
                src="/images/icons/viewIcon.png"
                alt="bed"
                className="h-full "
              />
              <div className=" bottom-0">{view}</div>
            </div>
          </div>
          <div className="h-[70px] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center h-[80%]">
              <img
                src="/images/icons/wifiIcon.png"
                alt="bed"
                className="h-full "
              />
              <div className="bottom-0">Free Wifi</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-2xl noto-font font-semibold">Room Details</div>
        <div className="flex lg:flex-row lg:justify-between flex-col gap-5">
          <ul className="text-md font-semibold text-slate-500 flex flex-col gap-3">
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
          <ul className="text-md font-semibold text-slate-500 flex flex-col gap-3">
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
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl noto-font font-semibold">Room Description</h1>
        <p className="text-md text-slate-500">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default RoomCard;
