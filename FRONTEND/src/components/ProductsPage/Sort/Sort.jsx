import React from 'react'
import { useFilterContext } from '../../../context/FilterContext'
import { BsFillGridFill, BsList } from "react-icons/bs";
import styles from './Sort.module.css'
const Sort = () => {
  const {filter_products,setGridView, setListView,grid_view,sorting} =useFilterContext();

  return (
    <div className='flex justify-between sm:px-5 mt-8 '>
      <div className="girdList0 space-x-4">
        <button onClick={()=>setGridView()}>
         {grid_view?(<BsFillGridFill className={`${styles.active} ${styles.gridListBtn}`}/>):(<BsFillGridFill className={`${styles.gridListBtn}`}/>)} 
        </button>
        <button onClick={()=>setListView()}>
         {!grid_view?(<BsList className={`${styles.active} ${styles.gridListBtn}`}/>):(<BsList className={`${styles.gridListBtn}`}/>)} 
        </button>
      </div>
      <div className='text-sm  to-gray-400'>{`${filter_products.length} products`}</div>

      <div className='md:block hidden'>
        <form action="#">
          <label htmlFor="sort">
            <select name="sort" id="sort" onClick={sorting}>
              <option value="bestSelling">Best Selling</option>
              <option value="lowestPrice">Price, low to high</option>
              <option value="highestPrice">Price, high to low</option>
              <option value="AtoZ">Alphabetically, A-Z</option>
              <option value="ZtoA">Alphabetically, Z-A</option>
            </select>
          </label>
        </form>
      </div>

    </div>
  )
}

export default Sort