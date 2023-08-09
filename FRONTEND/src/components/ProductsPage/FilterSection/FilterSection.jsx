import React, { useState } from 'react'
import { useFilterContext } from '../../../context/FilterContext'
import FormatPrice from '../../../common/FormatPrice'
import styles from './Filter.module.css'
import { RiArrowDownSFill } from 'react-icons/ri';
const FilterSection = () => {
  const {filters:{text,selectedCategories,price,maxPrice,minPrice}, updateFilterValue,all_products,getUniqueData, handleCategoryChange,ClearFilter} = useFilterContext()

  const superCategory = getUniqueData(all_products,'topCategory')
  const [isSuperCategoryOpen, setSuperCategoryIsOpen] = useState(false);
  const toggleSuperCategory =()=>setSuperCategoryIsOpen(!isSuperCategoryOpen);

  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const brand = getUniqueData(all_products,'brand')
  const toggleBrandCategory =()=>setIsBrandOpen(!isBrandOpen);

  const [isSpeciesOpen, setIsSpeciesOpen] = useState(false);
  const species = getUniqueData(all_products,'petCategory')
  const toggleSpeciesCategory =()=>setIsSpeciesOpen(!isSpeciesOpen);






  return (
    <div className='space-y-6  p-2'>
      
      {/*-----------Search-----------*/}
      <div className="py-1 SEARCH hidden sm:block ">
        <form onSubmit={(e)=>e.preventDefault()}>
          <input type="text"
                 name='text'
                 value={text}
                 onChange={updateFilterValue} 
                 className='rounded-md border-gray-500 px-1 border-2 w-full p-1'
                 placeholder='Search Product'
                 />
        </form>
      </div>

      {/*-----------SuperCategory-----------*/}
        <div className=''>
          <button onClick={toggleSuperCategory} className={`${styles.sortBtn}`}>
            <div>SuperCategories </div>
            <span><RiArrowDownSFill/></span>
          </button>
         {isSuperCategoryOpen && (
          <div className='menus'>
            {superCategory.map((curElem)=>(
              <label key={curElem} className='checkbox-label flex'>
                <input name='supercategory'
                       value={curElem}
                       type="checkbox"
                       onChange={() => handleCategoryChange(curElem)}
                       checked={selectedCategories.includes(curElem)}
                       />{curElem}
              </label>
            ))}
          </div>
         )}
        </div>


      {/*-----------Brand-----------*/}
        <div>
         <button onClick={toggleBrandCategory} className={`${styles.sortBtn}`}>
            <div>Brand</div>
            <span><RiArrowDownSFill/></span>
         </button>
         {isBrandOpen && (
          <div className='menus'>
            {brand.map((curElem)=>(
              <label key={curElem} className='checkbox-label flex'>
                <input name='brand'
                       value={curElem}
                       type="checkbox"
                       onChange={() => handleCategoryChange(curElem)}
                       checked={selectedCategories.includes(curElem)}
                       />{curElem}
              </label>
            ))}
          </div>
         )}
        </div>

      {/*-----------Species-----------*/}
        <div>
         <button onClick={toggleSpeciesCategory} className={`${styles.sortBtn}`}>
         <div>Species</div>
            <span><RiArrowDownSFill/></span>
         </button>
         {isSpeciesOpen && (
          <div className='menus'>
            {species.map((curElem)=>(
              <label key={curElem} className='checkbox-label flex'>
                <input name='brand'
                       value={curElem}
                       type="checkbox"
                       onChange={() => handleCategoryChange(curElem)}
                       checked={selectedCategories.includes(curElem)}
                       />{curElem}
              </label>
            ))}
          </div>
         )}
        </div>
     
      {/*-----------Price-----------*/}
        <div className={`${styles.price} p-1 space-y-1`}>
          <h1 className='text-lg font-bold text-gray-800'>Price :</h1>
          <p><FormatPrice price={price}/></p>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={updateFilterValue}
          />
        </div>

      {/*-----------Clear Filter-----------*/}
      <div className="ClearButton">
        <button onClick={ClearFilter} className={`${styles.filterBtn}`}>Clear Filters</button>
      </div>

    </div>
  )
}

export default FilterSection