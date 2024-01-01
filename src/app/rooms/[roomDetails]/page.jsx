"use client";
import React, { useState } from "react";
import Heading from "../../components/Heading";
import RoomCard from "./RoomCard";
import { usePathname, useRouter } from "next/navigation";
import { addDays } from "date-fns";
import GuestSelector from "../../components/GuestSelector";

const images = ["/images/Hotel1.png", "/images/Hotel2.png"];
const doubleDel = [
  "/images/Double Deluxe/DD.jpeg",
  "/images/Double Deluxe/DD1.jpeg",
  "/images/Double Deluxe/DD2.jpeg",
];
const familyExe = [
  "/images/Family Executive/FE.jpg",
  "/images/Family Executive/FE1.jpg",
  "/images/Family Executive/FE2.jpg",
  "/images/Family Executive/FE3.jpg",
];
const doubleExe = [
  "/images/Double Executive/DE.jpg",
  "/images/Double Executive/DE1.jpeg",
  "/images/Double Executive/DE2.jpeg",
  "/images/Double Executive/DE3.jpg",
];

const RoomDetails = () => {
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: "selection",
  });
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const changeDateForamt = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getDate()).padStart(2, "0");

    const formattedDateString = `${year}-${month}-${day}`;
    return formattedDateString;
  };

  const checkInDate = changeDateForamt(date.startDate);
  const checkOutDate = changeDateForamt(date.endDate);

  const handleStartDateChange = (event) => {
    setDate({
      ...date,
      startDate: new Date(event.target.value),
    });
  };

  const handleEndDateChange = (event) => {
    setDate({
      ...date,
      endDate: new Date(event.target.value),
    });
  };
  const router = useRouter();
  const pathname = usePathname();
  console.log(" pathname: " + pathname);
  return (
    <div className="flex flex-col ">
      <div className="pt-[200px] pb-[100px] bg-[#fbf8f3]">
        <Heading
          topText={"ROOM DETAILS"}
          mainHeading={"Best Quality Rooms"}
          desc={
            "Experience elegance and comfort in our thoughtfully designed rooms at Hotel Divine View, offering a perfect blend of style, modern amenities, and personalized service"
          }
        />
      </div>

      <div className="py-10">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:items-start">
          <div className="w-full md:w-[80%] lg:w-[40%] py-9">
            {pathname === "/rooms/DoubleDeluxe" && (
              <RoomCard
                roomTitle={"Double Deluxe"}
                size={"35 m2 / 376 ft2"}
                service={"Breakfast included"}
                bed={"King-sized bed"}
                view={"City view"}
                maxPerson={"2 Person(s)"}
                wifi={"Free"}
                images={images}
                desc={
                  "Introducing our Double Deluxe Room – a sanctuary of comfort and " +
                  "sophistication. This spacious 35 sqm (376 sqft) haven offers a " +
                  "mesmerizing city view and features a luxurious king-sized bed, perfect " +
                  "for accommodating up to 2 guests. As our guest, you'll enjoy the added " +
                  "convenience of a complimentary breakfast, ensuring a delightful start " +
                  "to your day. Stay effortlessly connected with our complimentary Wi-Fi, " +
                  "available throughout the room and the property. Elevate your stay with " +
                  "us and experience a blend of luxury and convenience in our Double " +
                  "Deluxe Room."
                }
              />
            )}
            {pathname === "/rooms/FamilyExecutive" && (
              <RoomCard
                roomTitle={"Family Executive"}
                size={"35 m2 / 376 ft2"}
                service={"Breakfast included"}
                bed={"King-sized bed"}
                view={"City view"}
                maxPerson={"3 Person(s)"}
                wifi={"Free"}
                images={familyExe}
                desc={
                  "Welcome to our Family Executive Room, where spacious elegance meets family-friendly comfort. This room boasts 35 sqm (376 sqft) of stylish living space, featuring a combination of 1 king-sized bed and 1 single bed, accommodating a maximum of 3 guests. Enjoy the same stunning city view, complimentary breakfast, and free Wi-Fi that make your stay truly special. With a perfect blend of convenience and luxury, our Family Executive Room ensures an unforgettable experience for you and your loved ones."
                }
              />
            )}
            {pathname === "/rooms/DoubleExecutive" && (
              <RoomCard
                roomTitle={"Double Executive"}
                size={"35 m2 / 376 ft2"}
                service={"Breakfast included"}
                bed={"King-sized bed"}
                view={"City view"}
                maxPerson={"2 Person(s)"}
                wifi={"Free"}
                images={doubleExe}
                desc={
                  "Indulge in the luxurious comfort of our Double Executive Room. With 35 sqm (376 sqft) of elegantly designed space, this room offers a mesmerizing city view and features a plush king-sized bed, perfect for accommodating up to 2 guests. Enjoy a complimentary breakfast and stay connected with our free Wi-Fi throughout the room and the property. Experience the perfect blend of luxury and convenience in our Double Executive Room."
                }
              />
            )}
          </div>
          <div className="w-full md:w-[80%] lg:w-[25%] p-3 lg:p-8 flex flex-col">
            <div className="h-full bg-[#fbf8f3] w-full flex flex-col items-center justify-center py-10 gap-9">
              <div className="flex flex-col items-center justify-center gap-3">
                <p className="text-slate-500 para-font">Sub Total</p>
                <h1 className="text-4xl font-bold noto-font">$299</h1>
              </div>

              <div className="w-full flex flex-col px-5 gap-3">
                <h1 className="text-xl font-semibold noto-font">CHECK IN</h1>
                <input
                  type="date"
                  onChange={handleStartDateChange}
                  value={checkInDate}
                  className="w-full border border-slate-500 rounded-md p-2"
                />
              </div>
              <div className="w-full flex flex-col px-5 gap-3">
                <h1 className="text-xl font-semibold noto-font">CHECK OUT</h1>
                <input
                  type="date"
                  className="w-full border border-slate-500 rounded-md p-2"
                  onChange={handleEndDateChange}
                  value={checkOutDate}
                />
              </div>
              
              <div className="w-full flex flex-col px-5 gap-3">
                <h1 className="text-xl font-semibold noto-font">GUEST</h1>
                <GuestSelector adults={adults} children={children} setAdults={setAdults} setChildren={setChildren}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
