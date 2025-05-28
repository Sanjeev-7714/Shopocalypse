import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div className="fade-in">

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <div className="relative overflow-hidden rounded-lg shadow-md slide-in" style={{animationDelay: '0.1s'}}>
            <img 
              className='w-full md:max-w-[450px] hover:scale-105 transition-all duration-1000 ease-in-out' 
              src={assets.about_img} 
              alt="About Shopocalypse" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-all duration-500"></div>
          </div>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 slide-in' style={{animationDelay: '0.3s'}}>
              <p className="leading-relaxed">Shopocalypse was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
              <p className="leading-relaxed">Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
              <h3 className='text-gray-900 text-xl font-medium relative inline-block'>
                <span className="relative z-10">Our Mission</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-300 to-gray-100"></span>
              </h3>
              <p className="leading-relaxed">Our mission at Shopocalypse is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
          </div>
      </div>

      <div className='text-xl py-4 slide-in' style={{animationDelay: '0.5s'}}>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 gap-4'>
          <div className='border border-gray-200 rounded-lg px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 hover:shadow-lg transition-all duration-300 bg-white/50 backdrop-blur-sm scale-in hover-lift' style={{animationDelay: '0.6s'}}>
            <h3 className='text-gray-900 text-lg font-medium'>Quality Assurance</h3>
            <p className='text-gray-600 leading-relaxed'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='border border-gray-200 rounded-lg px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 hover:shadow-lg transition-all duration-300 bg-white/50 backdrop-blur-sm scale-in hover-lift' style={{animationDelay: '0.7s'}}>
            <h3 className='text-gray-900 text-lg font-medium'>Convenience</h3>
            <p className='text-gray-600 leading-relaxed'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='border border-gray-200 rounded-lg px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 hover:shadow-lg transition-all duration-300 bg-white/50 backdrop-blur-sm scale-in hover-lift' style={{animationDelay: '0.8s'}}>
            <h3 className='text-gray-900 text-lg font-medium'>Exceptional Customer Service</h3>
            <p className='text-gray-600 leading-relaxed'>Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.</p>
          </div>
      </div>

      <div className="scale-in" style={{animationDelay: '0.9s'}}>
        <NewsletterBox/>
      </div>
      
    </div>
  )
}

export default About
