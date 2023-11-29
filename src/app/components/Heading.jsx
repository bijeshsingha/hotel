import React from "react";

const Heading = ({topText, mainHeading, desc}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="flex py-4 text-[0.8rem] md:text-base text-slate-500">{topText}</h3>
      <div className="flex items-center w-10 border border-primary-color"></div>

      <p className="capitalize text-xl md:text-4xl noto-font md:py-6 py-4 text-center">
        {mainHeading}
      </p>
      <p className="text-[0.9rem] md:text-base noto-font py-2 w-full md:w-[60%] px-1 text-center text-slate-500">
        {desc}
      </p>
    </div>
  );
};

export default Heading;
