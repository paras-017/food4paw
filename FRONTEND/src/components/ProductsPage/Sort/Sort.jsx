import React from 'react'
import { useFilterContext } from '../../../context/FilterContext'
import { BsFillGridFill, BsList } from "react-icons/bs";
import styles from './Sort.module.css'
const Sort = () => {
  const {filter_products,setGridView, setListView,grid_view} =useFilterContext();

  return (
    <div className='flex justify-between sm:px-5 mt-4'>
      <div className="girdList0 space-x-4">
        <button onClick={()=>setGridView()}>
         {grid_view?(<BsFillGridFill className={`${styles.active} text-2xl  p-[0.12rem]`}/>):(<BsFillGridFill className='text-2xl p-[0.12rem] '/>)} 
        </button>
        <button onClick={()=>setListView()}>
         {!grid_view?(<BsList className={`${styles.active} text-2xl`}/>):(<BsList className='text-2xl'/>)} 
        </button>
      </div>
      <div>{`${filter_products.length} products`}</div>
      <div className='md:block hidden'>Best Selling</div>
    </div>
  )
}

export default Sort