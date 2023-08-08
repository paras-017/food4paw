import React from 'react'
import { useFilterContext } from '../../../context/FilterContext'
import { BsFillGridFill, BsList } from "react-icons/bs";
import styles from './Sort.module.css'
const Sort = () => {
  const {filter_products,setGridView, setListView,grid_view,sorting} =useFilterContext();

  return (
    <div className='flex justify-between items-end sm:px-5 mt-8 '>
      <div className="md:space-x-4 space-x-1">
        <button onClick={()=>setGridView()}>
         {grid_view?(<BsFillGridFill className={`${styles.active} ${styles.gridListBtn}`}/>):(<BsFillGridFill className={`${styles.gridListBtn}`}/>)} 
        </button>
        <button onClick={()=>setListView()}>
         {!grid_view?(<BsList className={`${styles.active} ${styles.gridListBtn}`}/>):(<BsList className={`${styles.gridListBtn}`}/>)} 
        </button>
      </div>

      <div className='text-sm  to-gray-400 '>{`${filter_products.length} products`}</div>

      <div className='md:block '>
        <form action="#">
          <label htmlFor="sort" className='flex flex-col md:flex-row'>
            <h1 className='text-sm mr-2 font-semibold text-gray-600'>Sort By:</h1>
            <select name="sort" id="sort" onClick={sorting} className='text-sm bg-[#eeeeee] rounded p-[0.14rem]'>
              <option className='mt-2' value="bestSelling">Best Selling</option>
              <option className='mt-2' value="lowestPrice">Price, low to high</option>
              <option className='mt-2' value="highestPrice">Price, high to low</option>
              <option className='mt-2' value="AtoZ">Alphabetically, A-Z</option>
              <option className='mt-2' value="ZtoA">Alphabetically, Z-A</option>
            </select>
          </label>
        </form>
      </div>

    </div>
  )
}

export default Sort