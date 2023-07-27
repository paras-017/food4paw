import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import MainCarousel from '../../components/Carousel/Carousel'

const Home = () => {

  return (
    <div >
      <div className="carousel">
        <MainCarousel/>
      </div>
      <div className="offers flex flex-col md:flex-row gap-5 px-2 mt-2  items-center">
       <div className=""><img src="./assests/HomePage/offers/1.jpg" className='h-[10rem]'alt="" /></div>
       <div className=" "><img src="./assests/HomePage/offers/2.jpg" className='h-[10rem]' alt="" /></div>
       <div className=""><img src="./assests/HomePage/offers/3.jpg" className='h-[10rem]'alt="" /></div>
      </div>
      <div className="popular-categories"></div>
      <div className="sponsors"></div>
      <div className="brand"></div>
      <div className="pet-category"></div>
      <div className="veterinary"></div>
    </div>
  )
}

export default Home