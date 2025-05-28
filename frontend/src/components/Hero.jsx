import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-8 mobile-lg:py-10 sm:py-0'>
            <div className='text-[#414141] px-4 mobile-lg:px-6 sm:px-0'>
                <div className='flex items-center gap-2 mobile-lg:gap-3'>
                    <p className='w-6 mobile-lg:w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm mobile-lg:text-base md:text-base'>OUR BESTSELLERS</p>
                </div>
                <h1 className='prata-regular text-2xl mobile-lg:text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                <div className='flex items-center gap-2 mobile-lg:gap-3 mt-2 mobile-lg:mt-3'>
                    <p className='font-semibold text-sm mobile-lg:text-base md:text-base'>SHOP NOW</p>
                    <p className='w-6 mobile-lg:w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                </div>
            </div>
      </div>
      {/* Hero Right Side */}
      <img className='w-full sm:w-1/2' src={assets.hero_img} alt="Latest fashion arrivals" />
    </div>
  )
}

export default Hero
