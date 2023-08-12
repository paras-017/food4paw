import React from 'react'
import styles from './about.module.css'
import Paws from '../../common/Paws'

const About = () => {
  return (
<>
{/* -------------main------------------- */}
<div className="max-w-[85rem] m-auto ">
   <img src="./assests/About/main.jpg" alt="" className='px-2 md:h-[40rem] md:w-[70rem] m-auto '/>
  <div className="text-center my-8 space-y-2">
    <h1 className='text-cyan-400 italic text-2xl md:text-3xl p-3'>“Pets are not our whole life, but they make our lives whole.”</h1>
    <p className={`${styles.subheading}px-3 font-light md:w-[70%] m-auto  md:text-2xl`}>Taking care of our pets brings out the best in us. But it’s not easy by any means. We, at Wagr, are committed to helping you be the best pet parent you can be. Because we believe that our pets deserve our very best!</p>
  </div>
</div>

{/* -----------Beginning-------------- */}
<div className="max-w-[85rem] m-auto md:h-[20rem] md:py-6">
<div className='flex flex-col md:flex-row px-3 '>
   <div className="img ">
     <img src="./assests/About/beginning.jpg" alt=""  className=' rounded-3xl px-2 md:h-[18rem] md:w-[60rem] m-auto '/>
   </div>
   <div className=" text-center md:text-left space-y-2 mt-4 md:mt-0 md:w-[80rem] md:ml-4">
      <h1 className='text-2xl md:text-3xl font-medium'>How it all began</h1>
      <p className={`${styles.subheading}`} >Food4Paws would probably not have existed if it were not for Meo, our beloved Indie doggo. He came into our lives, and inspired us to become the best version of ourselves. Our quest to keep him safe, fit, healthy, and happy led us to build tools and services which we wanted to share with the rest of the world.</p>
      <p className={`${styles.subheading}`}>Over time, and after many iterations, we’ve built out a platform to help fellow pet parents get expert veterinary care and advice, shop for the best pet products, and learn from a community of pet experts and other parents. We are constantly learning and evolving to fulfil our mission of making India a world leader in pet-care.</p>
   </div>
</div>
</div>


{/* ------------Who are We --------------------- */}
<div className="max-w-[85rem] m-auto ">
  <div className="whoRV flex flex-col items-center mt-8 px-3">
    <h1 className='text-3xl font-medium mt-1 md:mt-6'>Who We Are</h1>
    <p className={`${styles.subheading} md:w-[55rem] text-center my-4`}>We are a group of pet-parents, pet-lovers, storytellers, and creators, who have come together to make the world a better place for pets and their lovely parents.</p>
    <img src="./assests/About/WhoRV.jpg" alt=""  className='rounded-2xl md:w-[50rem] md:h-[30rem]'/>
  </div>
</div>






</>
  )
}

export default About