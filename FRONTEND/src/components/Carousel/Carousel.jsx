import React, { useState, useEffect } from 'react'


const slides = [
  {
    desktopSrc: './assests/HomePage/carousel/1.jpg',
    mobileSrc: './assests/HomePage/carousel/mob1.jpg',
    alt: 'Slide 1',
  },
  {
    desktopSrc: './assests/HomePage/carousel/3.jpg',
    mobileSrc: './assests/HomePage/carousel/mob3.jpg',
    alt: 'Slide 3',
  },
  {
    desktopSrc: './assests/HomePage/carousel/4.png',
    mobileSrc: './assests/HomePage/carousel/mob4.jpg',
    alt: 'Slide 4',
  },
  {
    desktopSrc: './assests/HomePage/carousel/6.jpg',
    mobileSrc: './assests/HomePage/carousel/6.jpg',
    alt: 'Slide 6',
  },
  {
    desktopSrc: './assests/HomePage/carousel/7.jpg',
    mobileSrc: './assests/HomePage/carousel/7.jpg',
    alt: 'Slide 7',
  },
  {
    desktopSrc: './assests/HomePage/carousel/9.jpg',
    mobileSrc: './assests/HomePage/carousel/9.jpg',
    alt: 'Slide 9',
  },
  // Add more slides as needed
];


const MainCarousel = () => {
return (
    <div className="w-full md:h-[33rem] lg:h-[36rem] relative overflow-hidden ">
        <Carousel slides={slides} autoplayInterval={2800} />
      </div> 
)
}


const Carousel = ({ slides, autoplayInterval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, autoplayInterval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      //window.innerWidth give different no  evry time
      if(window.innerWidth <= 1272){
        setIsMobile(true); // Adjust the breakpoint as needed
      }else{
        setIsMobile(false); // Adjust the breakpoint as needed

      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);

  return (
    <div className="relative h-[20rem] ">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-[full]   transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
         <img
            src={isMobile ? slide.mobileSrc : slide.desktopSrc}
            alt={slide.alt}
            className="w-full h-[20rem] md:h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default MainCarousel