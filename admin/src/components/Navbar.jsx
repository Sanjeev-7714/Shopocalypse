import React from 'react'
import {assets} from '../assets/assets'
import { FaShoppingBag } from 'react-icons/fa'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
        <div className='flex items-center gap-2'>
          <FaShoppingBag className='text-2xl text-gray-800' />
          <span className='font-bold text-xl'>Shopocalypse</span>
          <span className='text-sm text-gray-600 ml-1'>Admin Panel</span>
        </div>
        <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar