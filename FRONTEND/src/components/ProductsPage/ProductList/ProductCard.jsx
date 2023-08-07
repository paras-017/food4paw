import React from 'react'
import { FaStar } from "react-icons/fa";
import FormatPrice from '../../../common/FormatPrice'
const ProductCard = (curElem) => {
    const { _id, name,brand,price,stars,review,mainImage} = curElem;
    const weight = Object.keys(price[0])[0]
    const pricebySize = price[0][weight]
    const trimmedName = name.length > 51 ? name.slice(0, 51) + '...' : name;
  return (
    <>
     <div className="card_body h-[19rem] w-[14rem] bg-white shadow-lg rounded-md p-2 space-y-3">
        <div className="Image h-[10rem] w-full">
            <img src={mainImage} alt="" className='h-full w-full object-contain '/>
        </div>
        <div className="DETAIL space-y-2">
            <div className="NAME_BRAND">
               <h1 className='text-gray-900 font-semibold text-sm tracking-tigh'>{trimmedName}</h1>
               <h2 className='text-xs text-gray-600 font-bold'>{brand}</h2>
            </div>

            <div className="RATING flex space-x-2 items-center">
                <div className="flex items-baseline text-white bg-green-700 w-fit  space-x-1 rounded-sm p-[0.14rem]">
                    <p className='font-bold text-xs'>{stars}</p>
                    <FaStar className='font-bold text-xs'/>
                </div>
                <div className="text-gray-600n text-sm font-semibold">
                    ({review})
                </div>
            </div>

            <div className="PRICE flex space-x-2 s m">
                <p className='font-semibold text-gray-800 text-sm'><FormatPrice price={pricebySize.dealPrice}/></p>
                <del className='text-sm'><FormatPrice price={pricebySize.originalPrice}/></del>
                <p className='bg-red-400 w-16  rounded-2xl text-xs font-medium px-1 flex justify-center items-center'>{pricebySize.discontPercent}% OFF</p>
            </div>
        </div>
     </div>
    </>    
  )
}

export default ProductCard