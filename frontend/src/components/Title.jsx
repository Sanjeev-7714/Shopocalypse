import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-3 items-center mb-3 hover-lift'>
      <p className='text-gray-600'>
        {text1}{' '}
        <span className='text-gray-800 font-medium relative'>
          {text2}
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-gray-800 to-gray-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </span>
      </p>
      <div className='w-8 sm:w-16 h-[1px] sm:h-[2px] bg-gradient-to-r from-gray-800 to-gray-300'></div>
    </div>
  )
}

export default Title
