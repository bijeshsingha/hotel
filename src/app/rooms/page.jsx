"use client";
import React, { useCallback, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";
import CloseIcon from "@mui/icons-material/Close";
import Heading from "../components/Heading";
import Rooms from "../home/Rooms";
import rooms from "../RoomsData";

const RoomsPage = () => {
  const [openDate, setOpenDate] = useState(false);
  const [isCheckin, setIsCheckin] = useState(false);

  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: "selection",
  });

  const handleChange = (ranges) => {
    setDate(ranges.selection);
    setIsCheckin(!isCheckin);
  };

  const handleClick = () => {
    setOpenDate(!openDate);
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #fbf8f3 70%, white 20%)",
      }}
      className="pt-[200px] h-auto text-center flex flex-col items-center gap-3"
    >
      <Heading
        topText={"Hotel Divine View"}
        mainHeading={"Enjoy your stay at the Hotel Divine View"}
        desc={
          "Experience elegance and comfort in our thoughtfully designed rooms at Hotel Divine View, offering a perfect blend of style, modern amenities, and personalized service"
        }
      />
      <div className="flex shadow-lg bg-white mt-[5rem]">
        <button
          className="border-0 px-3 w-[200px] flex flex-col h-[100px] justify-center"
          onClick={handleClick}
        >
          <span className="text-sm text-slate-500">Check in</span>
          <span className="para-font font-semibold">
            {date.startDate.toDateString()}
          </span>
        </button>
        <button
          className="border-0 border-l px-3 w-[200px] flex flex-col justify-center"
          onClick={handleClick}
        >
          <span className="text-sm text-slate-500">Check out</span>
          <span className="para-font font-semibold">
            {date.endDate.toDateString()}
          </span>
        </button>
        <button
          className="border-0 border-l px-3 w-[200px] flex flex-col justify-center"
          onClick={() => {}}
        >
          <span className="text-sm text-slate-500">Guest and rooms</span>
          <span className="para-font font-semibold">{`4 Guest, 2 Rooms`}</span>
        </button>
        <button
          className=" px-10 w-[200px] bg-primary-color text-white"
          onClick={() => {}}
        >
          Check Availability
        </button>
      </div>
      <div>
        {openDate && (
          <div className="p-2 flex flex-col gap-2 border-2 shadow-md relative bg-white">
            <div className="text-left flex flex-col para-font px-3">
              <span className="font-semibold">
                Select your Check in and Check out dates
              </span>
              <span className="text-slate-500">
                See prices and availability for your dates
              </span>
            </div>
            <div className="absolute right-2">
              <button onClick={handleClick}>
                <CloseIcon />
              </button>
            </div>
            <DateRangePicker
              className="border-0 border-t-2 px-3 py-2"
              showSelectionPreview={true}
              minDate={new Date()}
              moveRangeOnFirstSelection={false}
              ranges={[date]}
              onChange={handleChange}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-10 py-10">
        {rooms.map((room, index) => (
          <div key={index}>
            <Rooms
              roomTitle={room.title}
              roomDesc={room.desc}
              roomPrice={room.price}
              img={room.img}
              row={index % 2 !== 0 ? "reverse" : ""}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsPage;
