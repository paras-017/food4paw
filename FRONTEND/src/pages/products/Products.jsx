import React from 'react'
import FilterSection from '../../components/ProductsPage/FilterSection/FilterSection'
import Sort from '../../components/ProductsPage/Sort/Sort'
import ProductList from '../../components/ProductsPage/ProductList/ProductList'
import { useFilterContext } from '../../context/FilterContext'

const Products = () => {

  return (
    <div className='container m-auto '>

      <div className="flex flex-col md:flex-row">
          {/* ------------Filter Section (visible on md)------------ */}
          <div className="md:w-1/5 hidden md:block">
            <FilterSection />
          </div>
          
          {/* ------------Sort & Product List------------ */}
          <div className="md:w-4/5 w-full">
            <div className="">
              {/* Mobile view: Sort above Product List */}
              <Sort />
            </div>
            <div className="w-full ">
              <ProductList />
            </div>
          </div>
      </div>

    </div>
  )
}

export default Products