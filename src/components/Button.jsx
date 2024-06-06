import React from "react";

export const Button = ({ label, iconUrl }) => {
  return (
    <div>
      <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white hover:relative hover:bg-red-500 transition-all ease-in ">
        {label}
        <img src={iconUrl} alt="icon" className="" />
      </button>
    </div>
  );
};
     