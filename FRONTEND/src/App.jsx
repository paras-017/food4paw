import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Products from './pages/products/Products'
import Contact from './pages/contact/Contact'
import Vet from './pages/vet/Vet'
import Cart from './pages/cart/Cart'
import ErrorPage from './pages/errorPage/ErrorPage'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
      <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/vet' element={<Vet/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<ErrorPage/>}/>
       </Routes>
       <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App