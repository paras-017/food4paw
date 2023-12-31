import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import MainCarousel from '../../components/Carousel/Carousel'
import './home.style.css'
import ShopbyBrand from '../../components/HomeComponent/ShopbyBrand/ShopbyBrand'
import TopCategory from '../../components/HomeComponent/TopCategory/TopCategory'
import { NavLink } from 'react-router-dom'

const Home = () => {

  return (
    <div className=''>

      {/* -------------------------CAROUSEL------------------ */}
      <div className="carousel">
        <MainCarousel/>
      </div>
{/* ------------------------Offers --- P.CATEGORIES------------------- */}
     <div className=" max-w-[85rem]  m-auto">

      {/* -------------------------OFFERS------------------ */}
     <div className="offers flex flex-col md:flex-row gap-5 px-2 mt-2  items-center m-auto">
       <div className=""><img src="./assests/HomePage/offers/1.jpg" className='h-[10rem]'alt="" /></div>
       <div className=" "><img src="./assests/HomePage/offers/2.jpg" className='h-[10rem]' alt="" /></div>
       <div className=""><img src="./assests/HomePage/offers/3.jpg" className='h-[10rem]'alt="" /></div>
      </div>

      {/* -------------------------P.CATEGORIES------------------ */}
      <div className="popular-categories">
        <h1 className='main-heading '>✨Top Category Deals✨</h1>
        <TopCategory/>
      </div>
      </div>

      {/* -------------------------SPONSORS------------------ */}
      <div className="sponsors">
        <h1 className='main-heading'>✨In The Spotlight✨</h1>
        <div className="sponsor-img bg-yellow-300 flex justify-center flex-col md:flex-row p-3 gap-3">
          <img src="./assests/HomePage/sponsor/s1.jpg" alt="" className='rounded-2xl'/>
          <div className="flex flex-col gap-3">
              <img src="./assests/HomePage/sponsor/s2.jpg" alt="" className='rounded-2xl'/>
              <img src="./assests/HomePage/sponsor/s3.jpg" alt="" className='rounded-2xl'/>
          </div>
        </div>
      </div>

{/*  ------------------------Brand ---P.category------------------*/}
    <div className="max-w-[85rem] m-auto">
          {/* -------------------------BRAND------------------ */}
          <div className="brand">
            <h1 className='main-heading'>✨Shop By Brands ✨</h1>
            <ShopbyBrand/>
          </div>
          
          {/* -------------------------P.CATEGORY------------------ */}
          <div className="pet-category ">
          <h1 className='main-heading'>Explore By Pet Category ✨</h1>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 p-2 ">
          
          <NavLink to='/products'>
             <img src="./assests/HomePage/petCategories/dog.jpg" className=' rounded-2xl' alt="" />
          </NavLink>
          <NavLink to='/products'>
             <img src="./assests/HomePage/petCategories/cat.jpg" className=' rounded-2xl' alt="" />
          </NavLink>
          <NavLink to='/products'>
              <img src="./assests/HomePage/petCategories/fish.jpg" className=' rounded-2xl' alt="" />
          </NavLink>
          <NavLink to='/products'>
             <img src="./assests/HomePage/petCategories/birds.jpg" className=' rounded-2xl' alt="" />
          </NavLink>
          <NavLink to='/products'>
             <img src="./assests/HomePage/petCategories/rabbit.jpg" className=' rounded-2xl' alt="" />
          </NavLink>
          <NavLink to='/products'>
             <img src="./assests/HomePage/petCategories/guineaPig.jpg" className=' rounded-2xl' alt="" />
          </NavLink>
            
            
            
            
            
          </div>
          </div>
    </div>

      {/* -------------------------Consult a doctor------------------ */}
      
      <div className="doctor">
        <h1 className='main-heading'>✨Consult a doctor✨</h1>
        <div className="bg-[#FAEDD8] flex flex-col-reverse md:flex-row m">
          <div className="text space-y-2 px-3 pb-8 md:pl-8  self-center">
            <h1 className='text-3xl md:text-5xl mt-3'>Online Vet Consultation. <span className='text-cyan-400'>Anytime</span>. Anywhere.</h1>
            <p className='md:text-2xl font-light'>Flat 42% off + Free follow-up</p>
            <button className="bg-cyan-400 py-2 px-3 rounded-md">Book a Consult</button>
          </div>
          <div className="img">
            <img src="./assests/Vet/main/vetHome.jpg" alt="" />
          </div>
        </div>
      </div>
      
 
    </div>
  )
}

export default Home