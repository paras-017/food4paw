 {/* ------Quantity------ */}
 <div className="quantity-section">
 <h1>Quantity</h1>
 <QuantityButton quantity={quantity} onQuantityChange={handleQuantityChange} />
</div>

{/* ------Add to Cart Button------ */}
<div className='addProduct-Button'>
{priceInfo.discontPercent<=0
?<button disabled className={styles.disabledbutton}>Notify Me</button>:
<button className={styles.abledbutton}>Add To Cart</button>}
</div>





import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const QuantityButton = ({ quantity, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => setDecrease()}><FaMinus /></button>
        <div className="amount-style">{quantity}</div>
        <button onClick={() => setIncrease()}><FaPlus /></button>
      </div>
    </div>
  );
};

export default QuantityButton;
