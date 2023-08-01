// Card.jsx

import React from "react";

const Card = ({ name, imgUrl, discount }) => {
  return (
    <div className="p-4  m-auto ">
      <div className="shadow-xl rounded-lg overflow-hidden   md:flex flex-col items-center justify-center md:h-[12rem] md:w-[12rem] w-[10rem]">
        <div className="flex justify-center items-center h-20">
            <img src={imgUrl} alt={name} className="  bg-white w-full h-[8rem] object-contain" />
        </div>
        <div className="mt-2 bg-white">
            <p className="text-center font-normal ">{name}</p>
            <h3 className="text-red-600 sm:text-xl text-center font-bold ">{discount}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;