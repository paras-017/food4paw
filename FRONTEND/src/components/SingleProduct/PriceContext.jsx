import React, { createContext, useContext, useState } from 'react';

const PriceContext = createContext();

export const usePriceContext = () => {
  return useContext(PriceContext);
};

export const PriceProvider = ({ children }) => {
  const [priceInfo, setPriceInfo] = useState([{}]);

  return (
    <PriceContext.Provider value={{ priceInfo, setPriceInfo }}>
      {children}
    </PriceContext.Provider>
  );
};