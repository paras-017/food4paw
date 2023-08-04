import React, { useEffect, useState } from 'react'
import Star from './Star'
import styles from './singleProduct.module.css'
import FormatPrice from '../../common/FormatPrice';
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { usePriceContext } from './PriceContext';

const Details = ({name,brand,price=[{}],description1,description2,ingredients,stock,stars,review}) => {
  const [selectedWeight, setSelectedWeight] = useState("");
  // const [priceInfo, setPriceInfo] = useState(true);
  const { priceInfo, setPriceInfo } = usePriceContext();

  useEffect(() => {
    const defaultWeight = Object.keys(price[0])[0];
    handleWeightSelection(defaultWeight);
  }, []); // Run this effect only once after the initial render
  
  const handleWeightSelection = (weight) => {
    const selectedPriceInfo = price.find(item => weight in item);
    if (selectedPriceInfo) {
      setSelectedWeight(weight);
      setPriceInfo(selectedPriceInfo[weight]);
    }
  };
  

  return (
    <div className='max-w-[31rem] '>
        {/* ------Name------ */}
        <div className="nameReview">
          <p>{brand}</p>
          <h1>{name}</h1>
          <Star  className='bg-green-300 ' stars={stars} reviews={review}/>
          
        </div>
   
        {/* ------Price and Discount------ */}
        <div className="price-section ">
          <div className="flex gap-4">
          {priceInfo && (
            <div className="flex space-x-4">
              <del className='font-light'><FormatPrice price={priceInfo.originalPrice}/></del>
              <p className='font-medium'><FormatPrice price={priceInfo.dealPrice}/></p>
              <p className='bg-red-300 w-16  rounded-2xl text-sm flex justify-center items-center'>{priceInfo.discontPercent}% OFF</p>
            </div>
          )}
          </div>
        </div>
 
        {/* ------Weight Buttons------ */}
        <div className='space-x-3'>
          {price.map((item,i) => {
                    const weight = Object.keys(item)[0];
                    return (
                      <button
                        key={i}
                        className={`px-3 py-1 rounded-2xl border border-[#2ab1c3] ${
                          selectedWeight === weight ? "bg-[#2ab1c3] text-white" : ""
                        }`}
                        onClick={() => handleWeightSelection(weight)}
                      >
                        {weight}
                      </button>
                    );
            })}
        </div>

        {/* ------Stock------ */}
        <div className="stock">
          <div>Available:{priceInfo.discontPercent<=0?<span className='text-red-700'> Out of Stock</span>:(<span className='text-green-600'> In Stock</span>)}</div>
        </div>

         {/* ------Quantity------ */}
        <div className="quantity-section">
          <h1>Quantity</h1>
          <div>- 0 +</div>
        </div>
  
        {/* ------Add to Cart Button------ */}
        {priceInfo.discontPercent<=0?<button disabled onClick={()=>console.log('BAD')}  className={styles.disabledbutton}>Notify Me</button>:<button onClick={()=>console.log('GOOD')}   className={styles.abledbutton}>Add To Cart</button>}
       

        {/* ------Warranty------ */} 
        <div className="warranty-section">
          <div className={styles.productDataWarranty}>
              <div className={styles.productWarrantyData}>
                <TbTruckDelivery className={styles.warrantyIcon} />
                <p>Free Delivery</p>
              </div>

              <div className={styles.productWarrantyData}>
                <TbReplace className={styles.warrantyIcon} />
                <p>30 Days Replacement</p>
              </div>

              <div className={styles.productWarrantyData}>
                <TbTruckDelivery className={styles.warrantyIcon} />
                <p>Thapa Delivered </p>
              </div>

              <div className={styles.productWarrantyData}>
                <MdSecurity className={styles.warrantyIcon} />
                <p>2 Year Warranty </p>
              </div>
            </div>
        </div>

        {/*------Description------ */}
        <div className='descriptions space-y-4'>
          <p>{description1}</p>
          <p>{description2}</p>
          {ingredients && <p><span className='font-medium'>Ingredients: </span>{ingredients}</p>}
        </div>
      



    </div>
  )
}

export default Details