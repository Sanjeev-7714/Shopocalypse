import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products , search , showSearch } = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relavent')

  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) {
        setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }

  }

  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {

    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0 ) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)

  }

  const sortProduct = () => {

    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }

  }

  useEffect(()=>{
      applyFilter();
  },[category,subCategory,search,showSearch,products])

  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t fade-in'>
      
      {/* Filter Options */}
      <div className='min-w-60 slide-in'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 hover-lift transition-all duration-300 hover:text-gray-900'>
          <span className="relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gray-900 after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300">FILTERS</span>
          <img className={`h-3 sm:hidden transition-transform duration-300 ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 rounded-lg shadow-sm pl-5 py-3 mt-6 transition-all duration-300 ${showFilter ? 'opacity-100 scale-100' :'opacity-0 scale-95 hidden'} sm:opacity-100 sm:scale-100 sm:block bg-white/50 backdrop-blur-sm`}>
          <p className='mb-3 text-sm font-medium text-gray-800'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2 items-center hover:text-gray-900 transition-all duration-200 cursor-pointer'>
              <input className='w-3 accent-gray-800 cursor-pointer' type="checkbox" value={'Men'} onChange={toggleCategory}/> Men
            </p>
            <p className='flex gap-2 items-center hover:text-gray-900 transition-all duration-200 cursor-pointer'>
              <input className='w-3 accent-gray-800 cursor-pointer' type="checkbox" value={'Women'} onChange={toggleCategory}/> Women
            </p>
            <p className='flex gap-2 items-center hover:text-gray-900 transition-all duration-200 cursor-pointer'>
              <input className='w-3 accent-gray-800 cursor-pointer' type="checkbox" value={'Kids'} onChange={toggleCategory}/> Kids
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div className={`border border-gray-300 rounded-lg shadow-sm pl-5 py-3 my-5 transition-all duration-300 ${showFilter ? 'opacity-100 scale-100' :'opacity-0 scale-95 hidden'} sm:opacity-100 sm:scale-100 sm:block bg-white/50 backdrop-blur-sm`}>
          <p className='mb-3 text-sm font-medium text-gray-800'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2 items-center hover:text-gray-900 transition-all duration-200 cursor-pointer'>
              <input className='w-3 accent-gray-800 cursor-pointer' type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/> Topwear
            </p>
            <p className='flex gap-2 items-center hover:text-gray-900 transition-all duration-200 cursor-pointer'>
              <input className='w-3 accent-gray-800 cursor-pointer' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/> Bottomwear
            </p>
            <p className='flex gap-2 items-center hover:text-gray-900 transition-all duration-200 cursor-pointer'>
              <input className='w-3 accent-gray-800 cursor-pointer' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/> Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1 slide-in'>

        <div className='flex justify-between items-center text-base sm:text-2xl mb-6'>
            <Title text1={'ALL'} text2={'COLLECTIONS'} />
            {/* Product Sort */}
            <select 
              onChange={(e)=>setSortType(e.target.value)} 
              className='border-2 border-gray-300 text-sm px-3 py-2 rounded-md shadow-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-800 transition-all duration-300'
            >
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-8'>
          {
            filterProducts.length > 0 ? (
              filterProducts.map((item, index) => (
                <div 
                  key={index} 
                  className="scale-in" 
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ProductItem name={item.name} id={item._id} price={item.price} image={item.image} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-gray-500">
                <p className="text-xl mb-2">No products found</p>
                <p>Try adjusting your filters</p>
              </div>
            )
          }
        </div>
      </div>

    </div>
  )
}

export default Collection
