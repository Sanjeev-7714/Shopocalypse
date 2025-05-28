import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="px-4 mobile-lg:px-6 sm:px-0">
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-8 mobile-lg:gap-10 sm:gap-14 my-8 mobile-lg:my-10 mt-20 mobile-lg:mt-30 sm:mt-40 text-sm mobile-lg:text-base'>

        <div>
            <div className="flex items-center gap-2 mobile-lg:gap-3 mb-4 mobile-lg:mb-5">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mobile-lg:h-7 mobile-lg:w-7 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-1 -right-1 h-2 w-2 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full"></span>
              </div>
              <h2 className="text-xl mobile-lg:text-2xl font-bold prata-regular">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">Shopocalypse</span>
              </h2>
            </div>
            <p className='w-full md:w-2/3 text-gray-600 text-sm mobile-lg:text-base'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>

        <div className="mt-6 mobile-lg:mt-4 sm:mt-0">
            <p className='text-lg mobile-lg:text-xl font-medium mb-3 mobile-lg:mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 mobile-lg:gap-3 text-gray-600'>
                <li className="py-1">Home</li>
                <li className="py-1">About us</li>
                <li className="py-1">Delivery</li>
                <li className="py-1">Privacy policy</li>
            </ul>
        </div>

        <div className="mt-6 mobile-lg:mt-4 sm:mt-0">
            <p className='text-lg mobile-lg:text-xl font-medium mb-3 mobile-lg:mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 mobile-lg:gap-3 text-gray-600'>
                <li className="py-1">+1-212-456-7890</li>
                <li className="py-1">contact@shopocalypse.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-4 mobile-lg:py-5 text-sm mobile-lg:text-base text-center'>Copyright 2024@ Shopocalypse.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
