import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='text-center py-8 px-4 rounded-lg bg-white/60 backdrop-blur-sm shadow-sm border border-gray-100'>
      <h2 className='text-2xl font-medium text-gray-800 mb-2 hover-lift'>
        <span className="relative inline-block">
          Subscribe now & get 20% off
          <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-300 to-gray-100 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </span>
      </h2>
      <p className='text-gray-600 mt-3 max-w-2xl mx-auto'>
        Stay updated with our latest collections, exclusive offers, and fashion insights delivered directly to your inbox.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 rounded-md pl-4 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white'>
        <input 
          className='w-full sm:flex-1 outline-none py-3 text-gray-700 bg-transparent' 
          type="email" 
          placeholder='Enter your email' 
          required
        />
        <button 
          type='submit' 
          className='bg-gray-800 hover:bg-gray-900 text-white text-xs px-8 py-4 transition-all duration-300 hover:px-10'
        >
          SUBSCRIBE
        </button>
      </form>
      <p className="text-xs text-gray-500">By subscribing, you agree to our Privacy Policy and Terms of Service.</p>
    </div>
  )
}

export default NewsletterBox
