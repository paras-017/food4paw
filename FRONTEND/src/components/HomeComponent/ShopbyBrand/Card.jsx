// Card.jsx

import React from "react";

const Card = ({ name, imgUrl, discount }) => {
  return (
    <div className="p-4  w-fit m-auto ">
      <div className="shadow-xl rounded-lg overflow-hidden">
      <div className="flex justify-center items-center h-20">
          <img src={imgUrl} alt={name} className="w-full  max-w-[9rem] object-contain" />
        </div>
        <div className="mt-2 bg-white">
          <h3 className=" md:text-base text-sm text-white text-center font-bold bg-red-400">{discount}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;