import React from 'react'
import { useFilterContext } from '../../../context/FilterContext'
import Gridview from './Gridview'
import Listview from './Listview'

const ProductList = () => {
  const {filter_products, grid_view} = useFilterContext()
  
  if(grid_view === true){
    return <Gridview products={filter_products}/>
  }
  if(grid_view === false){
    return <Listview products={filter_products}/>
  }
    
}

export default ProductList