import React from 'react'
import ProductCard from './ProductCard'

const Gridview = ({products}) => {

  return (
   <div className="section">
    <div className="grid grid-cols-3 gap-2 place-items-center mt-2">
        {products.map((curElem)=>{
            return <ProductCard key={curElem._id} {...curElem}/>
        })}
    </div>
   </div>
    // <ProductCard/>
  )
}

export default Gridview