import React, { useState } from 'react'
import QuantityButton from './QuantityButton';
import { NavLink } from 'react-router-dom';
import styles from './SPComponent.module.css'
import { useCartContext } from '../../context/cartContext';


const AddToCart = ({selectedWeight,priceInfo, stock,product, Pid}) => {
     const {addToCart} = useCartContext()    
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
    <NavLink to='/cart' >
     <button className={styles.abledbutton} onClick={()=>addToCart(selectedWeight,quantity,priceInfo,product,Pid)}>Add To Cart</button>
    </NavLink>
    }
    </div>
   </>
  )
}

export default AddToCart