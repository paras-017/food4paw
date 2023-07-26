import React from 'react'
import './navbar.style.css'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
   <div className='bg-gray-100  max-w-full '>
    <div className='justifyBetween  bg-gray-100 relative px-8 py-3 max-w-[95rem] m-auto'>
      <div className="nav-logo">
        <img src="./assest/HomePage/navbarLogo/navLogo.gif" alt="my logo" className='logo border-red-800'/>
      </div>
      <div className="nav-links">
        <ul className='flex gap-5 items-center'>
        <li><NavLink className='navbar-link' to='/'>Home</NavLink></li>
        <li><NavLink className='navbar-link' to='/about'>About Us</NavLink></li>
        <li><NavLink className='navbar-link' to='/products'>Products</NavLink></li>
        <li><NavLink className='navbar-link' to='/contact'>Contact</NavLink></li>
        <li><NavLink className='navbar-link' to='/vet'>Vet</NavLink></li>
        <li>
            <NavLink to="/cart" className="navbar-link--cart relative">
              <FiShoppingCart className=' text-3xl' />
              <span className="cartQuantity items-center"> 7 </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
   </div>
  )
}

export default Navbar