import React from 'react'
import { useFilterContext } from '../../../context/FilterContext'

const FilterSection = () => {
  const {filters:{text}, updateFilterValue} = useFilterContext()
  return (
    <div className=''>
      {/* SEARCH */}
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
      
    </div>
  )
}

export default FilterSection