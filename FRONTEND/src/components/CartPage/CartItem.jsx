import React, { useState } from 'react'
import QuantityButton from '../SingleProduct/QuantityButton';
import FormatPrice from '../../common/FormatPrice';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useCartContext } from '../../context/cartContext';

const CartItem = ({id,image,name,priceInfo,selectedWeight}) => {
    const {removeItem}=useCartContext()
    const [quantity, setQuantity] = useState(1)
    const setDecrease = () => {
        quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
      };
    const setIncrease = () => {
        quantity < 50 ? setQuantity(quantity + 1) : setQuantity(50);
      };
  return (
    
    <div className='shadow-md rounded-md p-1 '>
        <div className="flex justify-between space-x-4">
        {/* IMAGE & INFO */}
        <div className='img&Info flex '>
        {/*----IMAGE---- */}
        <div className="IMAGE h-[6rem] w-[6rem]">
            <img src={image} alt="" />
        </div>
        {/*----INFO----*/}
        <div className="INFO space-y-2 ml-1">
            <h1 className='w-[8rem] sm:w-[28rem] text-sm'>{name}</h1>
            <div>
            <p className='text-gray-600 text-sm sm:text-base'><FormatPrice price={priceInfo}/></p>
            <p className='text-gray-600 text-sm sm:text-base'>Size: {selectedWeight}</p>
            </div>
        </div>
        </div>

        {/* -----QUANTITY------ */}
        <div className='quantiy&Price relative'>
        <div className='flex    space-x-3'>
            <QuantityButton quantity={quantity} setDecrease={setDecrease} setIncrease={setIncrease}/>
             <button onClick={()=>removeItem(id)}><RiDeleteBinLine className='font-bold text-xl '/></button>
            <button className='absolute right-0 bottom-0 bg-gray-800 text-white w-full rounded-md p-1'><FormatPrice price={priceInfo*quantity}/></button>
        </div>

        </div>
        </div>
    </div>
  )
}

export default CartItem