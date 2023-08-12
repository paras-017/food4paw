import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './footer.style.css'
import Paws from '../../common/Paws';

const Footer = () => {
  return (
    <div className='relative top-[10rem]'>
        <Paws/>
        <div className='bg-gray-300'>
        <footer className='max-w-[85rem] m-auto space-y-2 '>
        <div className='flex md:flex-row flex-col justify-between px-4 space-y-4 md:space-y-0 pt-5 md:pt-10'>
                <div className="explores flex space-x-3 md:space-x-12">
                        <div className="explore ">
                            <h1 className='md:font-medium'>Explore</h1>
                            <ul >
                                <li>My Accounts</li>
                                <li>Track Your Order</li>
                                <li>Our Story</li>
                                <li>FAQs</li>
                                <li>Contact Us</li>
                                <li>Return policy</li>
                                <li>Refund policy</li>
                            </ul>
                        </div>
                        <div className="Popular ">
                            <h1 className='md:font-medium'>Popular Searches</h1>
                            <ul>
                                <li>Puppy Corner</li>
                                <li>Cat Corner</li>
                                <li>Dog Food & Treats</li>
                                <li>Cat Food & Treats</li>
                                <li>Our Story</li>
                                <li>Grooming</li>
                                <li>Accessories</li>
                            </ul>
                        </div>
                        <div className="online ">
                            <h1 className='md:font-medium'>Shop Online</h1>
                            <ul>
                                <li>Dogs</li>
                                <li>Cats</li>
                                <li>Consult a Vet</li>
                                <li>Dog Behaviour</li>
                                <li>Download app</li>
                            </ul>
                        </div>
                </div>
                <div className="contact  space-y-1">
                    <h1 className='md:font-medium'>Get in touch</h1>
                    <div>
                        <p className='text-sm' >9812312344</p>
                        <p className='text-sm'>support@Food4Paws.com</p>
                    </div>
                    <div>
                        <h1>Follow us</h1>
                        <div className='flex space-x-2 '>
                            <FaFacebook/>
                            <FaTwitter/>
                            <FaInstagram/>
                        </div>
                    </div>
                </div>
        </div>
        <hr className=''/>
        <div className='text-center '>© 2023 Food4Paws</div>
        </footer>
        </div>
    </div>
  )
}

export default Footer