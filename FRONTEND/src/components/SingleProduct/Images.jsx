import React, { useState } from 'react'
import { usePriceContext } from './PriceContext';

const Images = ({imgs=[{url:''}]}) => {
    const { priceInfo } = usePriceContext();
    const [mainImage, setMainImage] = useState(imgs[0])
    console.log(mainImage)
  return (
    <div>
        {/*------------Main-image------------ */}
        <div className=" p-2 ">
         <img src={priceInfo.ImgbySize} alt='main-img' className=' h-[24rem]'/> 
        </div>
        
        {/*------------Other-img------------ */}
        <div className='flex'>
            {
              imgs.map((curElem,i)=>{
                return (
                    <figure key={i}>
                        <img src={curElem.url} alt="" onClick={() => setMainImage(curElem)} className='h-[8rem]'/>
                    </figure>
                )
              })
            }
        </div>
    </div>
  )
}

export default Images