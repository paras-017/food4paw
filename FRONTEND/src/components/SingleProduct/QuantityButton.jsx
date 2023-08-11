import React, { useState } from 'react';

const QuantityButton = ({ quantity,setDecrease,setIncrease}) => {
  return (
    <div className="flex items-center border border-gray-500 rounded overflow-hidden w-fit">
      <button className="px-3 py-1  text-gray-700 rounded-l" onClick={()=>setDecrease()}>-</button>
      <div className="px-3 py-1 bg-white">{quantity}</div>
      <button className="px-3 py-1  text-gray-700 rounded-r" onClick={()=>setIncrease()}>+</button>
    </div>
  );
};

export default QuantityButton;