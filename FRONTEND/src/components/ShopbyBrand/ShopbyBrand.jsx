import React from 'react'
import brand from './BrandLogoArray.json'
import Card from "./Card";

const ShopbyBrand = () => {
    console.log(brand)
  return (
    <div className="container mx-auto mt-8">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
        {brand.map((brand) => (
            <Card key={brand.name} imgUrl={brand.imgUrl} discount={brand.discount}  />
        ))}
        </div>
    </div>
  )
}

export default ShopbyBrand