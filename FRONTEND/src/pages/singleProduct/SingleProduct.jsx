import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../../context/productContext'
import FormatPrice from '../../common/FormatPrice';
import Star from '../../components/SingleProduct/Star';
const API = `https://food4pawsapi-production.up.railway.app/api/products`
import styles from './singleProduct.module.css'
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Loading from '../../common/Loading';

const SingleProduct = () => {
  const {getSingleProduct,isSingleLoading,singleProduct}=useProductContext()
  const {_id}=useParams()
  const {_id:Pid,name,brand,price=[{}],description1,description2,ingredients,stock,stars,review,images=[{url:''}],mainImage} = singleProduct
  const [selectedWeight, SetSelectedWeight] = useState('')
  const [priceInfo, setpriceInfo] = useState({ImgbySize:""})
  const [mainImg, setMainImg] = useState(mainImage)

  const [transformParams, setTransformParams] = useState({x: 0,y: 0,scale: 1});

  useEffect(() => {
    const defaultWeight = Object.keys(price[0])[0];
    handleWeightSelection(defaultWeight);
    getSingleProduct(`${API}?_id=${_id}`)
    if (mainImage)setMainImg(mainImage)
  }, [mainImage])
  
  const handleWeightSelection=(weight)=>{
    const selectedPriceInfo = price.find(item=>weight in item)
    if(selectedPriceInfo){
      SetSelectedWeight(weight)
      setpriceInfo(selectedPriceInfo[weight])
      
    }

  }

  if(isSingleLoading){
    return(<div className={`${styles.justifyCenter} h-[30rem]`}><Loading/></div>)
  }
      
  const handleMouseMove = (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
   
    setTransformParams({ x, y, scale: 1.6 });
  };

  const handleMouseLeave = () => {
    setTransformParams({ x: 0, y: 0, scale: 1 });
  };
  const { x, y, scale } = transformParams;
  const imgStyle = {
    transformOrigin: `${x}px ${y}px`,
    transform: `scale(${scale})`
  };
  return (
   <div className="container m-auto">
  
     <div className="flex">
      <div>
          {/*------------Main-image------------ */}
          <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className= {` overflow-hidden h-[26rem] w-[26rem] border ${styles.justifyCenter}`}>
            
           <img src={mainImg} alt='main-img' style={imgStyle}  className={`cursor-zoom-in transform-gpu transition-transform duration-300 ease-in-out object-cover  h-full w-full`}/>
          </div>
          
          {/*------------Other-img------------ */}
          <div className='flex'>
              {images?.map((curElem,i)=>{
                  return (
                      <figure key={i}>
                          <img src={curElem.url} alt="" onClick={() => setMainImg(curElem.url)} className='h-[8rem]'/>
                      </figure>
                  )
                })}
          </div>
      </div>


        <div className=' DETAILS  max-w-[31rem] '>
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
                            onClick={() => {
                              handleWeightSelection(weight)
                              setMainImg(item[weight].ImgbySize)
                            }}
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

     </div>
    </div>
  )
}

export default SingleProduct