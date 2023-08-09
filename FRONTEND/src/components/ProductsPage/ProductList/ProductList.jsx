import React from 'react'
import { useFilterContext } from '../../../context/FilterContext'
import Gridview from './Gridview'
import Listview from './Listview'
import { useProductContext } from '../../../context/productContext'
import Loading from '../../../common/Loading'
import normalLoading from '/assests/others/normalLoading.gif';

const ProductList = () => {
  const {isLoading}=useProductContext()
  const {filter_products, grid_view} = useFilterContext()

  if(isLoading){
    return (
      <div className="section flex items-center justify-center">
        <Loading loadingImg={normalLoading}/>
      </div>
    )
  }
  
  
  if(grid_view === true){
    return <Gridview products={filter_products}/>
  }
  if(grid_view === false){
    return <Listview products={filter_products}/>
  }
    
}

export default ProductList