import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
    
    const {currency} = useContext(ShopContext);

  return (
    <Link onClick={()=>scrollTo(0,0)} className='text-gray-700 cursor-pointer group block' to={`/product/${id}`}>
      <div className='overflow-hidden rounded-lg shadow-sm relative'>
        <img 
          className='group-hover:scale-110 transition-all duration-700 ease-in-out w-full object-cover' 
          src={image[0]} 
          alt={name} 
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent h-16 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      </div>
      <div className="pt-3 pb-1 group-hover:translate-x-1 transition-all duration-300">
        <p className='text-sm mb-1 text-gray-800 truncate'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
      </div>
    </Link>
  )
}

export default ProductItem
