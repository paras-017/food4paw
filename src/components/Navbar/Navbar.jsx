import React, { useState } from 'react'
import './navbar.style.css'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";



const Navbar = () => {
const [mobMenu, setMobMenu] = useState(true)

  return (
   <div className='bg-gray-100  max-w-full '>
    <div className='justifyBetween  bg-gray-100 relative px-2 md:px-8 py-3 max-w-[95rem] m-auto'>
      <div className="nav-logo">
        <img src="./assests/HomePage/navbarLogo/navLogo.gif" alt="my logo" className=' border-red-800 h-12 md:h-14'/>
      </div>
      <div className="nav-links hidden md:flex">
        <ul className='flex gap-5 items-center'>
          <li><NavLink className='navbar-link' to='/'>Home</NavLink></li>
          <li><NavLink className='navbar-link' to='/about'>About Us</NavLink></li>
          <li><NavLink className='navbar-link' to='/products'>Products</NavLink></li>
          <li><NavLink className='navbar-link' to='/contact'>Contact</NavLink></li>
          <li><NavLink className='navbar-link' to='/vet'>Vet</NavLink></li>
          <li>
              <NavLink to="/cart" className="navbar-link--cart relative">
                <FiShoppingCart className=' text-3xl' /><span className="cartQuantity items-center"> 7 </span>
              </NavLink>
          </li>
        </ul>
      </div>


      {/* Mobile Navbar */}
     <div className="flex md:hidden mob-nav ">
        <NavLink to="/cart" className="navbar-link--cart relative mr-6">
          <FiShoppingCart className=' text-2xl' /><span className="cartQuantity bottom-3 left-3 items-center  "> 7 </span>
        </NavLink>

        {mobMenu?<CgMenu className='text-2xl' onClick={()=>setMobMenu(false)}/>:<CgClose className='text-2xl' onClick={()=>setMobMenu(true)}/>}

        <div className={mobMenu ? 'main-mob-nav  translate-x-[100%] transition-all' : 'main-mob-nav w-screen transition-all'}>
          <ul className=' space-y-8 text-center '>
            <li><NavLink onClick={()=>setMobMenu(true)} className='navbar-link text-3xl' to='/'>Home</NavLink></li>
            <li><NavLink onClick={()=>setMobMenu(true)} className='navbar-link text-3xl' to='/about'>About Us</NavLink></li>
            <li><NavLink onClick={()=>setMobMenu(true)} className='navbar-link text-3xl' to='/products'>Products</NavLink></li>
            <li><NavLink onClick={()=>setMobMenu(true)} className='navbar-link text-3xl' to='/contact'>Contact</NavLink></li>
            <li><NavLink onClick={()=>setMobMenu(true)} className='navbar-link text-3xl' to='/vet'>Vet</NavLink></li>
          </ul>
        </div>
     </div>
    </div>
   </div>
  )
}

export default Navbar