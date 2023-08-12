import React, { useState } from 'react'
import './navbar.style.css'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from '../../context/cartContext';
import { useAuth0 } from '@auth0/auth0-react';



const Navbar = () => {
const [mobMenu, setMobMenu] = useState(true)
const {total_item}= useCartContext()
const { user,isAuthenticated,loginWithRedirect,logout } = useAuth0();

const [logOutBtn, setlogOutBtn] = useState(false)

  return (
   <div className='bg-gray-100  max-w-full '>
    <div className='justifyBetween  bg-gray-100 relative px-2 md:px-8 py-3 max-w-[95rem] m-auto'>
      <div className="nav-logo">
       <NavLink to='/'><img src="/assests/HomePage/navbarLogo/navLogo.gif" alt="my logo" className=' border-red-800 h-12 md:h-14'/></NavLink>
      </div>
      <div className="nav-links hidden md:flex">
        <ul className='flex gap-5 items-center relative'>
          <li><NavLink className='navbar-link' to='/'>Home</NavLink></li>
          <li><NavLink className='navbar-link' to='/about'>About Us</NavLink></li>
          <li><NavLink className='navbar-link' to='/products'>Products</NavLink></li>
          <li><NavLink className='navbar-link' to='/contact'>Contact</NavLink></li>
          <li><NavLink className='navbar-link' to='/vet'>Vet</NavLink></li>
          
          {!isAuthenticated &&         
          <li><button className='bg-cyan-500 p-1 px-2 rounded-md text-white' onClick={() => loginWithRedirect()}>Log In</button></li>}
          
          
          <li>
              <NavLink to="/cart" className="navbar-link--cart relative">
                <FiShoppingCart className=' text-3xl' /><span className="cartQuantity items-center"> {total_item} </span>
              </NavLink>
          </li>

          {isAuthenticated && 
            <div className='relative'>
              <img onClick={()=>setlogOutBtn(prev => !prev)} src={user.picture} alt={user.name} className='rounded-full h-[2.3rem]'/>
              {logOutBtn && 
              <div className='absolute bg-gray-200 p-2 rounded-lg h-fit w-[8rem] right-0 top-12 z-50 text-end'>
              <h1 className='uppercase text-sm mb-1'>{user.name}</h1>  
              <button className='font-bold'  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
               </div>}
            </div>}
         
        </ul>
      </div>


      {/* Mobile Navbar */}
     <div className="flex items-end md:hidden mob-nav z-50">
      {/* Showing profile image if user is loggedIn */}
      {!isAuthenticated &&         
       <button className='bg-cyan-500 p-1 text-sm mr-3 px-2 rounded-md text-white' onClick={() => loginWithRedirect()}>Log In</button>}

          {isAuthenticated && 
            <div className='relative'>
              <img onClick={()=>setlogOutBtn(prev => !prev)} src={user.picture} alt={user.name} className='relative right-3 top-[-5px] rounded-full h-[2rem]'/>
              {logOutBtn && 
              <div className='absolute bg-gray-200 p-2 rounded-lg h-fit w-[8rem] right-0 top-12 z-50 text-end'>
              <h1>{user.name}</h1>  
              <button  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
               </div>}
            </div>}


        <NavLink to="/cart" className="navbar-link--cart relative mr-6">
          <FiShoppingCart className=' text-2xl' /><span className="cartQuantity bottom-3 left-3 items-center  ">  {total_item} </span>
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