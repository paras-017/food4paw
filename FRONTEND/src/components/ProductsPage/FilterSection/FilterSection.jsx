import React, { useState } from 'react'
import { useFilterContext } from '../../../context/FilterContext'

const FilterSection = () => {
  const {filters:{text,selectedCategories}, updateFilterValue,all_products,getUniqueData, handleCategoryChange} = useFilterContext()
  const superCategory = getUniqueData(all_products,'topCategory')
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };





  return (
    <div className=''>
      {/*-----------Search-----------*/}
      <div className="SEARCH hidden sm:block">
        <form onSubmit={(e)=>e.preventDefault()}>
          <input type="text"
                 name='text'
                 value={text}
                 onChange={updateFilterValue} 
                 className='rounded-md border-gray-700 border-2'
                 placeholder='Search Product'
                 />
        </form>
      </div>

      {/*-----------SuperCategory-----------*/}
        <div>
         <button onClick={toggleDropdown} className='bg-red-400 mt-2 rounded-sm p-2'>SuperCategories</button>
         {isOpen && (
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
     


    </div>
  )
}

export default FilterSection