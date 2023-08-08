import React from 'react'
import { FaStar } from "react-icons/fa";
import FormatPrice from '../../../common/FormatPrice'
import { NavLink } from 'react-router-dom';
import styles from './ProductList.module.css'


const ProductCardList = (curElem) => {
  const { _id, name,brand,price,stars,review,mainImage, description1} = curElem;
    const weight = Object.keys(price[0])[0]
    const pricebySize = price[0][weight]
    const trimmedName = name.length > 51 ? name.slice(0, 51) + '...' : name;
    
    const description = description1.length > 100 ? description1.slice(0, 100) + '...' : description1;
  return (
    <NavLink to={`/singleProduct/${_id}`}>
     <div className={`${styles.main} flex sm:pt-4 space-x-3 h-fit   shadow-lg rounded-md p-2`}>
        <div className="Image   h-[13rem] sm:h-[13rem] md:w-[18rem]">
            <img src={mainImage} alt="" className='h-full w-full object-contain'/>
        </div>
        <div className="DETAIL md:space-y-3 space-y-2">
            <div className="NAME_BRAND">
               <h1 className={`  text-gray-900 font-semibold text-sm md:text-lg`}>{trimmedName}</h1>
               <h2 className='text-xs md:text-base text-gray-600 font-bold'>{brand}</h2>
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

   
              <p className='text-xs sm:text-sm max-w-md'>{description}</p>
     

            <div className="PRICE flex space-x-2 s m">
                <p className='font-semibold text-gray-800 text-sm md:text-base'><FormatPrice price={pricebySize.dealPrice}/></p>
                <del className='text-sm md:text-base'><FormatPrice price={pricebySize.originalPrice}/></del>
                <p className='bg-red-400 w-16 md:w-20  rounded-2xl text-xs md:text-sm font-medium px-1 flex justify-center items-center'>{pricebySize.discontPercent}% OFF</p>
            </div>

            
            <div className='addProduct-Button'>
             <button  className={`${styles.button} md:width: 43%;`}>Choose Option</button>
            </div>
        </div>
     </div>
    </NavLink>    
  )
}

export default ProductCardList