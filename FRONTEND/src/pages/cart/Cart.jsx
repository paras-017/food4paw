import React from 'react'
import { useCartContext } from '../../context/cartContext'
import FormatPrice from '../../common/FormatPrice'

import { NavLink } from 'react-router-dom';
import CartItem from '../../components/CartPage/CartItem';

const Cart = ({ item, removeItem }) => {
  const {cart} = useCartContext()

  if(!cart.length){
    return(
      <div className='flex items-center justify-center flex-col '>
        <img src="./assests/others/emptyCart.gif" alt="" className='w-[30rem]'/>
        <NavLink to='/products'>
          <h1 className='text-xl underline text-cyan-700 my-8'>back to Shopping</h1>
        </NavLink>
      </div>
      )
  }

  // const cart2 = [
  //   {id: '64ce528650c22fb2982fcc0bMedium', name: 'Jer-High Fuzzy Bird Cat Toy', selectedWeight: 'Medium', quantity: 3, image: 'https://tinyurl.com/7zn5v56e',priceInfo:182, stock:50},

  //   {id: '64ce528650c22fb2982fcc0e5 pack', name: 'Doggos Baby Monster Pack (pack of 5)', selectedWeight: '5 pack', quantity: 6, image: 'https://tinyurl.com/bddeumnx',priceInfo:1288, stock:50},

  //   {id: '64ce528650c22fb2982fcc155kg', name: 'Purepet Clumping Lavender Fragrance Cat Litter (For multiple cats),', selectedWeight: '5kg', quantity: 2, image: 'https://tinyurl.com/3uvwnm2n', priceInfo:301, stock:50}
  // ]
  return (

   <div className='max-w-[75rem] m-auto px-3'>
    {/*---------heading---------*/}
    <div className="flex justify-between my-6 ">
      <h1 className='text-xl sm:text-3xl'>Your Cart</h1>
      <NavLink to='/products'><h1 className='sm:text-xl text-[#2ab1c3] border-b hover:border-b-2 border-[#2ab1c3] cursor-pointer'>Continue Shopping</h1></NavLink>
    </div>
  
    <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-3'>
      {/*---------CardData---------*/}
        <div className="allProducs b w-full ">
          {/* ----Product Card---- */}
          <div className='space-y-8 '>
          {cart.map((item,i)=>{
              return <CartItem key={item.id} {...item}/>
          })}
          </div>

        </div>

      {/* ---------Summary--------- */}
        <div className="Summary bg-gray-50 h-fit border-2 border-gray-100 p-2 space-y-3 rounded-xl ">
          <h1 className='text-2xl font-semibold'>Summary</h1>
          {/*--------PromoCode------- */}
          <div className='py-2'>
            <h1>Promo Code</h1>
             <p className='text-xs text-gray-500'>Remove any spaces or dashes before applying</p>
            <div className='flex items-center'>
              <input
              id='promo'
              type="text"
              placeholder="Enter promo code"
              className="py-2 px-4 border border-gray-300 rounded-l-lg focus:outline-none"
              />
              <button className="bg-gray-800 text-white py-2 px-4 rounded-r-lg">
                Apply
              </button>
            </div>
          </div>

          {/* Total Detail */}
          <div className='total space-y-1 py-3'>
            <div className='subTotal flex justify-between'>
              <h1 className=''>Subtotal</h1>
              <p className='font-bold'><FormatPrice price={3244}/></p>
            </div>
            <div className='subTotal flex justify-between'>
              <h1 className=''>Delivery Charges</h1>
              <p className='font-bold'><FormatPrice price={150}/></p>
            </div>
            <div className='subTotal flex justify-between'>
              <h1 className=' '>Discount</h1>
              <p className='font-bold text-green-600'><FormatPrice price={150}/></p>
            </div>
            <div className='subTotal flex justify-between'>
              <h1 className=''>Order Total</h1>
              <p className='font-bold'><FormatPrice price={3394}/></p>
            </div>
          </div>

          {/* CheckOut Button */}
          <button className='bg-[#2ab1c3] text-white font-bold w-full p-4 rounded-md'>
            Proceed To CheckOut
          </button>

        </div>
    </div>
   
  
   </div>
  )
}

export default Cart