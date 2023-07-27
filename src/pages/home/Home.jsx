import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import MainCarousel from '../../components/Carousel/Carousel'

const Home = () => {

  return (
    <div>
      <div className="carousel">
        <MainCarousel/>
      </div>
      <div className="offers"></div>
      <div className="popular-categories"></div>
      <div className="sponsors"></div>
      <div className="brand"></div>
      <div className="pet-category"></div>
      <div className="veterinary"></div>
    </div>
  )
}

export default Home