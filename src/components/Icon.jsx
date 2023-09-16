import React from "react";

const Icon = ({ icon }) => {
  const { name, image } = icon;

  return (
    <div className={`flex items-center bg-white p-2 rounded-lg space-x-2`}>
      <figure className={`w-6 h-6`}>
        <img src={image} alt={name} className={`w-full h-full`} />
      </figure>
      <span className={`text-xs text-gray-500`}>{name}</span>
    </div>
  );
};

export default Icon;
