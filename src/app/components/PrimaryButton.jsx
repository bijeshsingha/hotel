import React from "react";

const PrimaryButton = ({text}) => {
  return (
    <button className="border px-9 py-4 bg-primary-color text-white hover:bg-secondary-color">
      {text}
    </button>
  );
};

export default PrimaryButton;
