
import React from 'react';
import { FiMapPin, FiPhone } from 'react-icons/fi';


const Contact = () => {
  return (
    <>
    <div className="   py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-3xl font-bold mb-4">Get in touch with us</h1>
            <p className="mb-4 font-normal">
              If you have any questions or inquiries, feel free to drop us a message using the form on the right. We'll get back to you as soon as possible.
            </p>
            <div className="flex items-center mb-2">
              <FiMapPin className="mr-2" size={20} />
              <p>123 Laugh Street, Smileville, Joyland</p>
            </div>
            <div className="flex items-center mb-2">
              <FiPhone className="mr-2" size={20} />
              <p>+1 123-456-7890</p>
            </div>
          </div>
          <div className="md:w-1/2 mt-16 md:mt-0">
            <h2 className="text-2xl font-bold mb-4">Drop in your details, and we’ll get back to you!</h2>
            <form className='bg-white p-3 rounded-2xl' action="https://formspree.io/f/mrgweewe" method="POST">
              <div className="mb-4">
                <input placeholder='Full Name' type="text"  name="name" className="w-full bg-orange-50 p-2 border border-gray-300 rounded" required />
              </div>
              <div className="mb-4">
                <input placeholder='Email' type="email" name="email" className="w-full bg-orange-50 p-2 border border-gray-300 rounded" required />
              </div>
              <div className="mb-4">
                <textarea placeholder='Type your message here' name="message" rows="4" className="w-full bg-orange-50 p-2 border border-gray-300 rounded" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  
    </>
  );
};



export default Contact
