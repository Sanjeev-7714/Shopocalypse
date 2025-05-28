import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaUser, FaLock, FaEnvelope, FaShoppingBag } from 'react-icons/fa';

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext)

  const [name,setName] = useState('')
  const [password,setPasword] = useState('')
  const [email,setEmail] = useState('')

  const onSubmitHandler = async (event) => {
      event.preventDefault();
      try {
        if (currentState === 'Sign Up') {
          
          const response = await axios.post(backendUrl + '/api/user/register',{name,email,password})
          if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem('token',response.data.token)
          } else {
            toast.error(response.data.message)
          }

        } else {

          const response = await axios.post(backendUrl + '/api/user/login', {email,password})
          if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem('token',response.data.token)
          } else {
            toast.error(response.data.message)
          }

        }


      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
  }

  useEffect(()=>{
    if (token) {
      navigate('/')
    }
  },[token])

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Form content */}
        <div className="w-full p-8 scale-in">
          <div className="text-center mb-8">
            <h2 className="prata-regular text-3xl text-gray-800 mb-1">{currentState}</h2>
            <p className="text-gray-500 text-sm">Welcome to your shopping journey</p>
          </div>

          <form onSubmit={onSubmitHandler} className="space-y-5">
            {currentState === 'Sign Up' && (
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                  <FaUser />
                </div>
                <input 
                  onChange={(e)=>setName(e.target.value)} 
                  value={name} 
                  type="text" 
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all" 
                  placeholder="Full Name" 
                  required
                />
              </div>
            )}

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                <FaEnvelope />
              </div>
              <input 
                onChange={(e)=>setEmail(e.target.value)} 
                value={email} 
                type="email" 
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all" 
                placeholder="Email Address" 
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                <FaLock />
              </div>
              <input 
                onChange={(e)=>setPasword(e.target.value)} 
                value={password} 
                type="password" 
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all" 
                placeholder="Password" 
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <p className="text-gray-600 hover:text-gray-800 cursor-pointer transition-colors">Forgot your password?</p>
              {
                currentState === 'Login' 
                ? <p onClick={()=>setCurrentState('Sign Up')} className="text-gray-600 hover:text-gray-800 cursor-pointer transition-colors">Create account</p>
                : <p onClick={()=>setCurrentState('Login')} className="text-gray-600 hover:text-gray-800 cursor-pointer transition-colors">Login Here</p>
              }
            </div>

            <button 
              type="submit" 
              className="w-full bg-gray-800 hover:bg-black text-white font-medium py-3 px-4 rounded-lg transition-colors hover-lift"
            >
              {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
            </button>

            {/* Social proof or additional information */}
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Secure login • 100% Protected</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
