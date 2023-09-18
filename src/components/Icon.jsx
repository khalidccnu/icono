import React from "react";

const Icon = ({ icon }) => {
  const { name, license, image } = icon;

  return (
    <div className={`relative flex items-center bg-white p-2 rounded-lg`}>
      {license === "pro" ? (
        <div className="absolute top-0 left-2/3 -translate-y-1/2 badge badge-warning text-[0.5rem] font-bold uppercase rounded-lg">
          pro
        </div>
      ) : null}
      <figure className={`w-6 h-6`}>
        <img src={image} alt={name} className={`w-full h-full`} />
      </figure>
      <span className={`text-xs text-gray-500 ml-2`}>{name}</span>
    </div>
  );
};

export default Icon;
