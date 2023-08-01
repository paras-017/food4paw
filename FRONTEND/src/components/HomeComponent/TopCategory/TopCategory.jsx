import React from 'react'
import TopCategoryArray from './TopCategoryArray.json'
import Card from "./Card";

const TopCategory = () => {
  return (
    <div className=" mt-8 ">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
        {TopCategoryArray.map((item) => (
            <Card key={item.name} imgUrl={item.imgUrl}  name={item.name} discount={item.discount}  />
        ))}
        </div>
    </div>
  )
}

export default TopCategory