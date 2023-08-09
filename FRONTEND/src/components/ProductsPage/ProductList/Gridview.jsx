import React from 'react'
import ProductCard from './ProductCardGrid'

const Gridview = ({products}) => {

  if(products.length === 0){
    return(
      <div className="section flex items-center justify-center">
        <img src="./assests/others/notFound.png" alt="" />
      </div>
    )
  }

  return (
   <div className="section flex items-center justify-center">
    <div className=" grid md:grid-cols-3 grid-cols-2 p-4 md:p-2 gap-4 md:gap-3 place-items-center mt-2 ">
        {products.map((curElem)=>{
            return <ProductCard key={curElem._id} {...curElem}/>
        })}
    </div>
   </div>
    // <ProductCard/>
  )
}

export default Gridview