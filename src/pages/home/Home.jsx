import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import MainCarousel from '../../components/Carousel/Carousel'
import './home.style.css'

const Home = () => {

  return (
    <div className=''>

      {/* -------------------------CAROUSEL------------------ */}
      <div className="carousel">
        <MainCarousel/>
      </div>

     <div className=" max-w-[85rem]  m-auto">

      {/* -------------------------OFFERS------------------ */}
     <div className="offers flex flex-col md:flex-row gap-5 px-2 mt-2  items-center m-auto">
       <div className=""><img src="./assests/HomePage/offers/1.jpg" className='h-[10rem]'alt="" /></div>
       <div className=" "><img src="./assests/HomePage/offers/2.jpg" className='h-[10rem]' alt="" /></div>
       <div className=""><img src="./assests/HomePage/offers/3.jpg" className='h-[10rem]'alt="" /></div>
      </div>

      {/* -------------------------P.CATEGORIES------------------ */}
      <div className="popular-categories">
        <h1 className='main-heading '>✨Popular Categories✨</h1>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-6 px-2 items-center">
            <img src="./assests/HomePage/popularCategories/dogFood.jpg" alt="" />
            <img src="./assests/HomePage/popularCategories/catFood.jpg" alt="" />
            <img src="./assests/HomePage/popularCategories/toys.jpg" alt="" />
            <img src="./assests/HomePage/popularCategories/dogTreat.jpg" alt="" />
            <img src="./assests/HomePage/popularCategories/catTreat.jpg" alt="" />
            <img src="./assests/HomePage/popularCategories/litterSupplies.jpg" alt="" />
            <img src="./assests/HomePage/popularCategories/walkEssentials.jpg" alt="" />
            <img src="./assests/HomePage/popularCategories/grooming.jpg" alt="" />
            <img src="./assests/HomePage/popularCategories/bedding.jpg" alt="" />
            <img src="./assests/HomePage/popularCategories/bowlFeeders.jpg" alt="" />
            <img src="./assests/HomePage/popularCategories/clothing.jpg" alt="" />
            <img src="./assests/HomePage/popularCategories/supplements.jpg" alt="" />
        </div>
      </div>
      {/* -------------------------SPONSORS------------------ */}
      <div className="sponsors">
        <h1 className='main-heading'>✨In The Spotlight✨</h1>
      </div>

      {/* -------------------------BRAND------------------ */}
      <div className="brand"></div>

      {/* -------------------------P.CATEGORY------------------ */}
      <div className="pet-category"></div>


      {/* -------------------------P.CATEGORY------------------ */}
      <div className="veterinary"></div>
     </div>
    </div>
  )
}

export default Home