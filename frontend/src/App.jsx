import React, { useEffect, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import LoadingScreen from './components/LoadingScreen'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'
import { ShopContext } from './context/ShopContext'

const App = () => {
  const { isBackendReady, isCheckingBackend } = useContext(ShopContext);
  
  // Add AOS-like scroll reveal effect for route transitions
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Show loading screen when backend is not ready */}
      {(!isBackendReady && isCheckingBackend) && <LoadingScreen />}
      
      {/* Only render the main app when backend is ready or we're done checking */}
      <div className='gradient-bg min-h-screen px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] text-gray-800'>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />
      <div className="pt-28 md:pt-32"> {/* Added padding to account for fixed navbar */}
        <SearchBar />
        <div className="fade-in">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/verify' element={<Verify />} />
        </Routes>
        </div>
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App
