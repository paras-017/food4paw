import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../../context/productContext'
import FormatPrice from '../../common/FormatPrice';
import Star from '../../components/SingleProduct/Star';
const API = `https://food4pawsapi-production.up.railway.app/api/products`
import styles from './singleProduct.module.css'
import Loading from '../../common/Loading';
import QuantityButton from '../../components/SingleProduct/QuantityButton';
import normalLoading from '/assests/others/normalLoading.gif';
import AddToCart from '../../components/SingleProduct/AddToCart';

const SingleProduct = () => {
  const {getSingleProduct,isSingleLoading,singleProduct}=useProductContext()
  const {_id}=useParams()
  const {_id:Pid,name,brand,price=[{}],description1,description2,ingredients,stock,stars,review,images=[{url:''}],mainImage} = singleProduct
  const [selectedWeight, SetSelectedWeight] = useState('')
  const [priceInfo, setpriceInfo] = useState({ImgbySize:""})
  const [mainImg, setMainImg] = useState(mainImage)
  const [quantity, setQuantity] = useState(1);
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
    return(<div className={`${styles.justifyCenter} h-[30rem]`}><Loading loadingImg={normalLoading}/></div>)
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
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };
  return (
   <div className={`container m-auto p-3`} >
  
     <div className="flex flex-col md:flex-row justify-center md:space-x-8">
        <div className={`IMAGES-SECTION  h-fit ${styles.justifyCenter} flex-col space-y-2 my-4 md:my-0`}>
            {/*------------Main-image------------ */}
            <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className= {` overflow-hidden h-[19rem] w-[21rem] sm:h-[26rem] sm:w-[29rem]  ${styles.justifyCenter} ${styles.grayBorder}`}>
              
              <img src={mainImg} alt='main-img' style={imgStyle}  className={`cursor-zoom-in transform-gpu transition-transform duration-300 ease-in-out object-contain  h-full w-full `}/>
            </div>
            
            {/*------------Other-img------------ */}
            <div className='flex gap-1'>
                {images?.map((curElem,i)=>{
                    return (
                        <figure key={i}>
                            <img src={curElem.url} alt="" onClick={() => setMainImg(curElem.url)} className={` h-[6rem] sm:h-[8rem] ${styles.grayBorder}  p-2`}/>
                        </figure>
                    )
                  })}
            </div>
        </div>


        <div className=' DETAILS-SECTION  max-w-[31rem] space-y-2'>
            {/* ------Name------ */}
            <div className="nameReview space-y-1">
              <p className='font-normal text-sm text-gray-600'>{brand}</p>
              <h1 className='text-xl md:text-2xl'>{name}</h1>
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

            {/*------ quantity and AddtoCart button------ */}
            <AddToCart selectedWeight={selectedWeight} priceInfo={priceInfo} stock={stock} product={singleProduct}/>
          

            {/* ------Warranty------ */} 
            <div className="warranty-section flex">
              <img src="/assests/SingleProduct/1.png" alt=""  className='w-20'/>
              <img src="/assests/SingleProduct/2.png" alt=""  className='w-20'/>
              <img src="/assests/SingleProduct/3.png" alt=""  className='w-20'/>
              <img src="/assests/SingleProduct/4.png" alt=""  className='w-20'/>
                
            </div>

            {/*------Description------ */}
            <div className='descriptions space-y-4'>
              <p className='text-sm text-black ' >{description1}</p>
              <p className='text-sm text-black ' >{description2}</p>
              {ingredients && <p className='text-sm' ><span className='font-medium'>Ingredients: </span>{ingredients}</p>}
            </div>
          



        </div>

     </div>
    </div>
  )
}

export default SingleProduct