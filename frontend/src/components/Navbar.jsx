import React, { useContext, useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) { // sm breakpoint in Tailwind
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  return (
    <>
      {/* Main Navbar */}
      <header className='fixed top-2 mobile-lg:top-3 sm:top-4 left-0 right-0 z-50 mx-2 mobile-lg:mx-3 sm:mx-[5vw] md:mx-[7vw] lg:mx-[9vw] flex items-center justify-between py-3 mobile-lg:py-3.5 sm:py-4 font-medium backdrop-blur-md bg-white/90 rounded-lg shadow-lg px-3 mobile-lg:px-4 text-gray-800 transition-all duration-300'>
        {/* Logo */}
        <Link to='/' className="hover-lift group flex items-center gap-1 mobile-lg:gap-1.5 sm:gap-2">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mobile-lg:h-7 mobile-lg:w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-gray-800 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 mobile-lg:h-3 mobile-lg:w-3 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full animate-pulse"></span>
          </div>
          <h1 className="text-2xl mobile-lg:text-2xl sm:text-3xl md:text-4xl font-extrabold prata-regular scale-in relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 hover:from-gray-800 hover:via-gray-600 hover:to-gray-800 transition-all duration-500">Shopocalypse</span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-gray-800 to-gray-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden sm:flex gap-5 text-sm text-gray-700'>
          <NavLink to='/' className={({isActive}) => `flex flex-col items-center gap-1 hover-lift ${isActive ? 'text-gray-900' : ''}`}>
            <p className="transition-all duration-300 hover:gradient-text">HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gradient-to-r from-gray-800 to-gray-600 hidden' />
          </NavLink>
          <NavLink to='/collection' className={({isActive}) => `flex flex-col items-center gap-1 hover-lift ${isActive ? 'text-gray-900' : ''}`}>
            <p className="transition-all duration-300 hover:gradient-text">COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gradient-to-r from-gray-800 to-gray-600 hidden' />
          </NavLink>
          <NavLink to='/about' className={({isActive}) => `flex flex-col items-center gap-1 hover-lift ${isActive ? 'text-gray-900' : ''}`}>
            <p className="transition-all duration-300 hover:gradient-text">ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gradient-to-r from-gray-800 to-gray-600 hidden' />
          </NavLink>
          <NavLink to='/contact' className={({isActive}) => `flex flex-col items-center gap-1 hover-lift ${isActive ? 'text-gray-900' : ''}`}>
            <p className="transition-all duration-300 hover:gradient-text">CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gradient-to-r from-gray-800 to-gray-600 hidden' />
          </NavLink>
        </nav>

        {/* Right Icons */}
        <div className='flex items-center gap-4 mobile-lg:gap-5 sm:gap-6'>
          {/* Search Icon */}
          <button
            onClick={() => { setShowSearch(true); navigate('/collection') }}
            className='w-5 mobile-lg:w-6 sm:w-5 h-10 flex items-center justify-center cursor-pointer hover-lift transition-transform hover:scale-110 focus:outline-none'
            aria-label="Search"
          >
            <img src={assets.search_icon} alt="Search" className="w-full max-w-[20px] mobile-lg:max-w-[22px] sm:max-w-[20px]" />
          </button>
          
          {/* Profile Icon */}
          <div className='group relative'>
            <button
              onClick={() => token ? null : navigate('/login')}
              className='w-5 mobile-lg:w-6 sm:w-5 h-10 flex items-center justify-center cursor-pointer hover-lift transition-transform hover:scale-110 focus:outline-none'
              aria-label="Profile"
            >
              <img src={assets.profile_icon} alt="Profile" className="w-full max-w-[20px] mobile-lg:max-w-[22px] sm:max-w-[20px]" />
            </button>
            
            {/* Profile Dropdown Menu */}
            {token && (
              <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-white shadow-lg text-gray-600 rounded-lg scale-in'>
                  <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-gray-900 transition-all duration-300 py-2'>Orders</p>
                  <p onClick={logout} className='cursor-pointer hover:text-gray-900 transition-all duration-300 py-2'>Logout</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Cart Icon */}
          <Link to='/cart' className='relative hover-lift h-10 flex items-center justify-center'>
            <img src={assets.cart_icon} className='w-5 mobile-lg:w-6 sm:w-5 min-w-5 transition-transform hover:scale-110' alt="Cart" />
            {getCartCount() > 0 && (
              <p className='absolute right-[-5px] bottom-[-5px] w-4 mobile-lg:w-5 sm:w-4 text-center leading-4 mobile-lg:leading-5 sm:leading-4 gradient-bg-alt text-white aspect-square rounded-full text-[8px] mobile-lg:text-[10px] sm:text-[8px] bounce'>
                {getCartCount()}
              </p>
            )}
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(true)} 
            className='w-6 mobile-lg:w-7 sm:w-6 h-10 flex items-center justify-center cursor-pointer sm:hidden hover-lift transition-transform hover:scale-110 focus:outline-none'
            aria-label="Open menu"
          >
            <img src={assets.menu_icon} alt="Menu" className="w-full max-w-[24px] mobile-lg:max-w-[26px] sm:max-w-[24px]" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        {/* Mobile Menu Panel */}
        <div 
          className={`fixed top-0 right-0 h-full w-[85%] mobile-lg:w-[80%] max-w-sm bg-white shadow-xl overflow-y-auto transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Menu Header */}
          <div className='sticky top-0 bg-white z-10 border-b border-gray-200 flex items-center justify-between p-4 mobile-lg:p-5'>
            <div className='flex items-center gap-2 mobile-lg:gap-3'>
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mobile-lg:h-7 mobile-lg:w-7 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h2 className="text-xl mobile-lg:text-2xl font-bold">Shopocalypse</h2>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              className='p-2 mobile-lg:p-3 rounded-full hover:bg-gray-100 transition-colors focus:outline-none'
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mobile-lg:h-7 mobile-lg:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col gap-1 mobile-lg:gap-1.5 p-4 mobile-lg:p-5 pt-6 fade-in">
            <NavLink 
              onClick={() => setMobileMenuOpen(false)} 
              className={({isActive}) => `py-3 mobile-lg:py-4 pl-6 mobile-lg:pl-7 border-b border-gray-300 hover:bg-white/50 transition-all duration-300 hover:pl-8 mobile-lg:hover:pl-9 slide-in ${isActive ? 'text-gray-900 font-medium bg-white/30' : ''}`} 
              to='/'
            >
              HOME
            </NavLink>
            <NavLink 
              onClick={() => setMobileMenuOpen(false)} 
              className={({isActive}) => `py-3 mobile-lg:py-4 pl-6 mobile-lg:pl-7 border-b border-gray-300 hover:bg-white/50 transition-all duration-300 hover:pl-8 mobile-lg:hover:pl-9 slide-in ${isActive ? 'text-gray-900 font-medium bg-white/30' : ''}`} 
              to='/collection'
            >
              COLLECTION
            </NavLink>
            <NavLink 
              onClick={() => setMobileMenuOpen(false)} 
              className={({isActive}) => `py-3 mobile-lg:py-4 pl-6 mobile-lg:pl-7 border-b border-gray-300 hover:bg-white/50 transition-all duration-300 hover:pl-8 mobile-lg:hover:pl-9 slide-in ${isActive ? 'text-gray-900 font-medium bg-white/30' : ''}`} 
              to='/about'
            >
              ABOUT
            </NavLink>
            <NavLink 
              onClick={() => setMobileMenuOpen(false)} 
              className={({isActive}) => `py-3 mobile-lg:py-4 pl-6 mobile-lg:pl-7 border-b border-gray-300 hover:bg-white/50 transition-all duration-300 hover:pl-8 mobile-lg:hover:pl-9 slide-in ${isActive ? 'text-gray-900 font-medium bg-white/30' : ''}`} 
              to='/contact'
            >
              CONTACT
            </NavLink>
            
            {/* User-specific links */}
            <NavLink 
              onClick={() => setMobileMenuOpen(false)} 
              className={({isActive}) => `py-3 mobile-lg:py-4 pl-6 mobile-lg:pl-7 border-b border-gray-300 hover:bg-white/50 transition-all duration-300 hover:pl-8 mobile-lg:hover:pl-9 slide-in ${isActive ? 'text-gray-900 font-medium bg-white/30' : ''}`} 
              to='/cart'
            >
              CART {getCartCount() > 0 && `(${getCartCount()})`}
            </NavLink>
            
            {token ? (
              <>
                <NavLink 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={({isActive}) => `py-3 mobile-lg:py-4 pl-6 mobile-lg:pl-7 border-b border-gray-300 hover:bg-white/50 transition-all duration-300 hover:pl-8 mobile-lg:hover:pl-9 slide-in ${isActive ? 'text-gray-900 font-medium bg-white/30' : ''}`} 
                  to='/orders'
                >
                  ORDERS
                </NavLink>
                <button 
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }} 
                  className='py-3 mobile-lg:py-4 pl-6 mobile-lg:pl-7 border-b border-gray-300 hover:bg-white/50 transition-all duration-300 hover:pl-8 mobile-lg:hover:pl-9 slide-in cursor-pointer text-left'
                >
                  LOGOUT
                </button>
              </>
            ) : (
              <NavLink 
                onClick={() => setMobileMenuOpen(false)} 
                className={({isActive}) => `py-3 mobile-lg:py-4 pl-6 mobile-lg:pl-7 border-b border-gray-300 hover:bg-white/50 transition-all duration-300 hover:pl-8 mobile-lg:hover:pl-9 slide-in ${isActive ? 'text-gray-900 font-medium bg-white/30' : ''}`} 
                to='/login'
              >
                LOGIN
              </NavLink>
            )}
          </nav>
          
          {/* Mobile Menu Footer */}
          <div className="mt-auto p-4 mobile-lg:p-5 text-center">
            <p className="text-gray-900 font-semibold text-lg mobile-lg:text-xl">Shopocalypse</p>
            <p className="text-sm mobile-lg:text-base text-gray-600">Shop with style</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
