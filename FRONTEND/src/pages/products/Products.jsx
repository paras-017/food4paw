import React from 'react'
import FilterSection from '../../components/ProductsPage/FilterSection/FilterSection'
import Sort from '../../components/ProductsPage/Sort/Sort'
import ProductList from '../../components/ProductsPage/ProductList/ProductList'
import { useFilterContext } from '../../context/FilterContext'

const Products = () => {
  const {filters:{text}, updateFilterValue} = useFilterContext()
  return (
    <div className='container m-auto flex justify-center'>

      <div className="flex flex-col md:flex-row  xl:w-[70rem] ">
          {/* ------------Filter Section (visible on md)------------ */}
          <div className="md:w-[25%] lg:w-[22%] hidden md:flex border   border-gray-200 rounded-xl h-1/3 justify-center mt-8 sticky top-4 ">
            <FilterSection />
          </div>
          
          {/* ------------Sort & Product List------------ */}
          <div className="md:w-4/5 max-w-4xl  ">
            {/* SEARCH BAR */}
            <div className=" p-4 sm:px-5 ">
            <div className='block md:hidden'>
              <div className="SEARCH">
                <form onSubmit={(e)=>e.preventDefault()}>
                  <input type="text"
                        name='text'
                        value={text}
                        onChange={updateFilterValue} 
                        className='rounded-md border-gray-500 px-1 border-[2px]'
                        />
                </form>
              </div>
            </div>
              {/* Mobile view: Sort above Product List */}
              <Sort />
            </div>

            <div className="w-full  ">
              <ProductList />
            </div>

          </div>
      </div>

    </div>
  )
}

export default Products