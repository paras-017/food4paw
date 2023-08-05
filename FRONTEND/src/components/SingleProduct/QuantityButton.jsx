import React, { useState } from 'react';

const QuantityButton = ({ quantity, onQuantityChange }) => {
  const decrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const increment = () => {
    onQuantityChange(quantity + 1);
  };

  return (
    <div className="flex items-center border border-gray-500 rounded overflow-hidden w-fit">
      <button className="px-3 py-1  text-gray-700 rounded-l" onClick={decrement}>-</button>
      <div className="px-3 py-1 bg-white">{quantity}</div>
      <button className="px-3 py-1  text-gray-700 rounded-r" onClick={increment}>+</button>
    </div>
  );
};

export default QuantityButton;