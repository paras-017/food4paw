import React from 'react'
import ProductCardList from './ProductCardList'

const Listview = ({products}) => {

  return (
    <div className="section">
    <div className="grid  mt-2 gap-2 p-3">
        {products.map((curElem)=>{
            return <ProductCardList key={curElem._id} {...curElem}/>
        })}
    </div>
   </div>
  )
}

export default Listview