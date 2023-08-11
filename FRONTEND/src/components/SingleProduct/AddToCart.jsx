import React, { useState } from 'react'
import QuantityButton from './QuantityButton';
import { NavLink } from 'react-router-dom';
import styles from './SPComponent.module.css'


const AddToCart = ({selectedWeight,priceInfo, stock,product}) => {
    
    const [quantity, setQuantity] = useState(1)
    const setDecrease = () => {
        quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
      };
    const setIncrease = () => {
        quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
      };
    
  return (
   <>
   <QuantityButton quantity={quantity} setDecrease={setDecrease} setIncrease={setIncrease}/>
   <div className='addProduct-Button'>
    {priceInfo.discontPercent<=0
    ?<button disabled className={styles.disabledbutton}>Notify Me</button>:
    <NavLink to='/cart' onClick={()=>addToCart(selectedWeight,quantity,priceInfo,product)}>
     <button className={styles.abledbutton}>Add To Cart</button>
    </NavLink>
    }
    </div>
   </>
  )
}

export default AddToCart