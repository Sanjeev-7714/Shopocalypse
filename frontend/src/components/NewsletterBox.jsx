import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='text-center py-6 mobile-lg:py-8 px-4 mobile-lg:px-6 rounded-lg bg-white/60 backdrop-blur-sm shadow-sm border border-gray-100'>
      <h2 className='text-xl mobile-lg:text-2xl font-medium text-gray-800 mb-2 hover-lift'>
        <span className="relative inline-block">
          Subscribe now & get 20% off
          <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-300 to-gray-100 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </span>
      </h2>
      <p className='text-sm mobile-lg:text-base text-gray-600 mt-2 mobile-lg:mt-3 max-w-2xl mx-auto'>
        Stay updated with our latest collections, exclusive offers, and fashion insights delivered directly to your inbox.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex flex-col mobile-lg:flex-row items-center gap-3 mx-auto my-4 mobile-lg:my-6 border border-gray-300 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white'>
        <input 
          className='w-full sm:flex-1 outline-none py-3 px-4 mobile-lg:pl-4 mobile-lg:pr-0 text-gray-700 bg-transparent text-base' 
          type="email" 
          placeholder='Enter your email' 
          required
        />
        <button 
          type='submit' 
          className='w-full mobile-lg:w-auto bg-gray-800 hover:bg-gray-900 text-white text-xs px-6 mobile-lg:px-8 py-3 mobile-lg:py-4 transition-all duration-300 hover:px-8 mobile-lg:hover:px-10'
        >
          SUBSCRIBE
        </button>
      </form>
      <p className="text-xs mobile-lg:text-sm text-gray-500">By subscribing, you agree to our Privacy Policy and Terms of Service.</p>
    </div>
  )
}

export default NewsletterBox
