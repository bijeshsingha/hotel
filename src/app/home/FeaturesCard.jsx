import React from "react";

const FeaturesCard = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col items-center justify-start w-[300px] h-[380px] ">
      <div className="flex justify-center items-center rounded-full bg-primary-color w-[200px] h-[200px] relative">
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-white">
          {icon}
        </div>
      </div>
      <div className="w-full flex flex-col justify-center text-center p-2">
        <h1 className="md:text-2xl text-xl noto-font py-5">{title}</h1>
        <p className="para-font text-slate-500">{desc}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
