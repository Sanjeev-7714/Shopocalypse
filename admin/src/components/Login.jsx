import axios from 'axios'
import React, { useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { FaShoppingBag, FaLock, FaEnvelope } from 'react-icons/fa'

const Login = ({setToken}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin',{email,password})
            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }
             
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

  return (
    <div className='min-h-screen flex items-center justify-center w-full bg-gradient-to-br from-blue-50 to-purple-100'>
      <div className='w-full max-w-md px-6'>
        <div className='bg-white shadow-xl rounded-2xl overflow-hidden'>
          {/* Header with gradient */}
          <div className='bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-6 text-center'>
            <div className='flex justify-center mb-2'>
              <div className='bg-white p-3 rounded-full shadow-md'>
                <FaShoppingBag className='text-3xl text-purple-600' />
              </div>
            </div>
            <h1 className='text-2xl font-bold text-white mb-1'>Shopocalypse</h1>
            <p className='text-blue-100'>Admin Dashboard Access</p>
          </div>
          
          {/* Form section */}
          <div className='px-8 py-6'>
            <h2 className='text-xl font-semibold text-gray-800 mb-6 text-center'>Sign In</h2>
            <form onSubmit={onSubmitHandler} className='space-y-5'>
              <div>
                <label className='text-sm font-medium text-gray-700 mb-2 block'>Email Address</label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <FaEnvelope className='text-gray-400' />
                  </div>
                  <input 
                    onChange={(e)=>setEmail(e.target.value)} 
                    value={email} 
                    className='rounded-lg w-full pl-10 pr-3 py-2 border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition duration-150' 
                    type="email" 
                    placeholder='your@email.com' 
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label className='text-sm font-medium text-gray-700 mb-2 block'>Password</label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <FaLock className='text-gray-400' />
                  </div>
                  <input 
                    onChange={(e)=>setPassword(e.target.value)} 
                    value={password} 
                    className='rounded-lg w-full pl-10 pr-3 py-2 border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition duration-150' 
                    type="password" 
                    placeholder='Enter your password' 
                    required 
                  />
                </div>
              </div>
              
              <button 
                className='mt-6 w-full py-2.5 px-4 rounded-lg text-white font-medium bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform transition hover:scale-105 duration-200 shadow-md' 
                type="submit"
              >
                Login to Dashboard
              </button>
            </form>
            
            <div className='mt-6 text-center text-sm text-gray-500'>
              Secure admin access for Shopocalypse management
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login