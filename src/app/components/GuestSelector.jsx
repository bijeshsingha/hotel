import React, { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

const GuestSelector = ({ adults, setAdults, children, setChildren }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white flex flex-col gap-3 relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border border-slate-500 rounded-md p-2 text-start"
      >
        {adults} Adults, {children} Children
      </button>
      {isOpen && (
        <div className="flex flex-col border border-slate-500 rounded-md p-2 gap-6 w-full top-11 bg-white absolute">
          <div className="flex flex-col gap-3">
            <h2>Adults</h2>
            <div className="text-2xl items-center flex gap-3">
              <button
                className="flex items-center justify-center pb-2 w-11 h-11 border rounded-full border-slate-500 "
                onClick={() => setAdults(adults - 1)}
                disabled={adults === 0}
              >
                -
              </button>
              <span>{adults}</span>
              <button
                onClick={() => setAdults(adults + 1)}
                className="flex items-center justify-center pb-2 w-11 h-11 border rounded-full border-slate-500 "
              >
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2>Children</h2>
            <div className="text-2xl items-center flex gap-3">
              <button
                onClick={() => setChildren(children - 1)}
                disabled={children === 0}
                className="flex items-center justify-center pb-2 w-11 h-11 border rounded-full border-slate-500 "
              >
                -
              </button>
              <span>{children}</span>
              <button
                className="flex items-center justify-center pb-2 w-11 h-11 border rounded-full border-slate-500 "
                onClick={() => setChildren(children + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuestSelector;
