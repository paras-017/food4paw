import React from 'react'
import  styles from  './vet.module.css'
import {  MdVerifiedUser} from 'react-icons/md'
import {  FaHospitalUser } from 'react-icons/fa'
import {  GiMedicines } from 'react-icons/gi'
import Doctor from '../../components/Doctors/Doctor'
import Paws from '../../Common/Paws'


const Vet = () => {
  return (
    <>
    {/* -----------------main----------------- */}
      <div>
          <div className="image">
          <div className="md:hidden">
          {/* Mobile image */}
          <img src="./assests/Vet/main/mainMob.png" alt="Mobile Image" className='sm:h-[28em] sm:w-[47rem]'/>
        </div>
        <div className="hidden md:block">
          {/* Desktop image */}
          <img src="./assests/Vet/main/main.jpg" alt="Desktop Image" />
        </div>
          </div>
          <div className=" bg-cyan-100 flex justify-around">
            <div className='doctor flex items-center space-x-1 text-xs md:text-lg'>
              <MdVerifiedUser/>
              <p> Verified Doctors</p>
            </div>
            <div className='follow-up flex items-center space-x-1 text-xs md:text-lg'>
              <FaHospitalUser/>
              <p> Free follow-up</p>
            </div>
            <div className='med-delivery flex items-center space-x-1 text-xs md:text-lg '>
              <GiMedicines/>
              <p> Medicine delivery</p>
            </div>
          </div>
      </div>

      {/* ------------------Trusted Advice------------------ */}
      <div className=''>
        <h1 className={styles.heading}>Get trusted advice on your pet’s health</h1>
        <div className="flex  flex-no-wrap overflow-x-auto space-x-3 md:overflow-hidden justify-center pl-8">
          <img src="./assests/Vet/Issues/1.png" alt="" className='rounded-full w-[6rem]'/>
          <img src="./assests/Vet/Issues/2.png" alt="" className='rounded-full w-[6rem]'/>
          <img src="./assests/Vet/Issues/3.png" alt="" className='rounded-full w-[6rem]'/>
          <img src="./assests/Vet/Issues/4.png" alt="" className='rounded-full w-[6rem]'/>
          <img src="./assests/Vet/Issues/5.png" alt="" className='rounded-full w-[6rem]'/>
          <img src="./assests/Vet/Issues/6.png" alt="" className='rounded-full w-[6rem]'/>
          <img src="./assests/Vet/Issues/7.png" alt="" className='rounded-full w-[6rem]'/>
          <img src="./assests/Vet/Issues/8.png" alt="" className='rounded-full w-[6rem]'/>
          <img src="./assests/Vet/Issues/9.png" alt="" className='rounded-full w-[6rem]'/>
          <img src="./assests/Vet/Issues/10.png" alt="" className='rounded-full w-[6rem]'/>
        </div>
      </div>


      {/* anxios */}
      <div className='mt-4'>
        <h1 className={styles.heading}><span className=' italic font-bold'>37% of dogs and 58%</span> of cats get anxious during vet visits</h1>
        <div className=''>
          <img src="./assests/Vet/main/anxios_dog.png" alt="" className='w-screen cursor-default'/>
        </div>
      </div>

      {/* ----------------why-------------------- */}
      <div className='max-w-[85rem] m-auto mt-8'>
        <div className='grid grid-cols-2 md:grid-cols-4 md:gap-2  px-3 max-w-[23rem] md:max-w-6xl m-auto gap-3'>
          <img src="./assests/Vet/areIssues/1.jpg" alt="" className='w-[15rem]'/>
          <img src="./assests/Vet/areIssues/2.jpg" alt="" className='w-[15rem]'/>
          <img src="./assests/Vet/areIssues/3.jpg" alt="" className='w-[15rem]'/>
          <img src="./assests/Vet/areIssues/4.jpg" alt="" className='w-[15rem]'/>
        </div>                     
        <div className='text-center my-4 space-y-3 '>
          <p className='px-4 md:text-2xl'>Don’t wait for your pet’s health to turn worse. Get quick advice from our Expert Vet online on what to do next.</p>
          <button className='bg-cyan-400 rounded-xl px-4 py-2  text-white'>Book a consult</button>
        </div>
      </div>

      {/* -------------------doctors----------------- */}
      <div>
        <Doctor/>
      </div>

      {/* ----------------Paws---------------- */}
      <Paws/>
    </>
  )
}

export default Vet