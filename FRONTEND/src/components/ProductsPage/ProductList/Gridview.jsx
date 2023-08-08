import React from 'react'
import ProductCard from './ProductCardGrid'

const Gridview = ({products}) => {

  return (
   <div className="section">
    <div className=" grid md:grid-cols-3 grid-cols-2 p-4 md:p-2 gap-4 md:gap-3 place-items-center mt-2 max-w-4xl">
        {products.map((curElem)=>{
            return <ProductCard key={curElem._id} {...curElem}/>
        })}
    </div>
   </div>
    // <ProductCard/>
  )
}

export default Gridview