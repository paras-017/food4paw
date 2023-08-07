import React, { useEffect } from 'react'
import axios from 'axios'
import FilterSection from '../../components/ProductsPage/FilterSection/FilterSection'
import Sort from '../../components/ProductsPage/Sort/Sort'
import ProductList from '../../components/ProductsPage/ProductList/ProductList'
const Products = () => {
  

  return (
    <div className='container m-auto bg-gray-500'>

      <div className="flex flex-col md:flex-row">
          {/* ------------Filter Section (visible on md)------------ */}
          <div className="md:w-1/5 hidden md:block bg-green-300">
            <FilterSection />
          </div>
          
          {/* ------------Sort & Product List------------ */}
          <div className="md:w-4/5 w-full">
            <div className=" bg-blue-300">
              {/* Mobile view: Sort above Product List */}
              <Sort />
            </div>
            <div className="w-full bg-blue-600">
              <ProductList />
            </div>
          </div>
      </div>

    </div>
  )
}

export default Products