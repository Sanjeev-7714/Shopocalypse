import React, { useState, useRef, useEffect } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef();

  // EmailJS credentials from environment variables
  const SERVICE_ID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
  const USER_ID = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
  
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(USER_ID);
  }, [USER_ID]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      reply_to: formData.email
    };

    // Send email using EmailJS
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setLoading(false);
        setFormSubmitted(true);
        toast.success('Message sent successfully!');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        // Reset form submitted state after 5 seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setLoading(false);
        toast.error('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="fade-in">
      
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <div className="relative overflow-hidden rounded-lg shadow-md slide-in" style={{animationDelay: '0.1s'}}>
          <img 
            className='w-full md:max-w-[480px] hover:scale-105 transition-all duration-1000 ease-in-out' 
            src={assets.contact_img} 
            alt="Contact Shopocalypse" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-all duration-500"></div>
        </div>
        
        {/* Contact Information */}
        <div className='flex flex-col justify-start items-start gap-6 slide-in' style={{animationDelay: '0.3s'}}>
          <div className="relative inline-block">
            <h3 className='font-semibold text-xl text-gray-800'>Our Store</h3>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-100"></span>
          </div>
          <p className='text-gray-600 leading-relaxed'>
            <span className="inline-block hover-lift transition-all duration-300">54709 Willms Station</span> <br /> 
            <span className="inline-block hover-lift transition-all duration-300">Suite 350, Washington, USA</span>
          </p>
          <p className='text-gray-600 leading-relaxed'>
            <span className="inline-block hover-lift transition-all duration-300">Tel: (415) 555-0132</span> <br /> 
            <span className="inline-block hover-lift transition-all duration-300">Email: admin@shopocalypse.com</span>
          </p>
          
          {/* Contact Form */}
          <div className="w-full mt-8 scale-in" style={{animationDelay: '0.5s'}}>
            <div className="relative inline-block mb-4">
              <h3 className='font-semibold text-xl text-gray-800'>Send Us a Message</h3>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-100"></span>
            </div>
            
            {formSubmitted ? (
              <div className="text-center py-8 px-4 bg-gray-50 rounded-lg border border-gray-200 scale-in">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                <p className="text-gray-600">Your message has been sent successfully.</p>
                <p className="text-gray-600 mt-2">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message"
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message" 
                    rows="4" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className={`w-full py-3 px-6 rounded-md text-white font-medium ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-700'} transition-all duration-300 hover:shadow-lg hover-lift`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="scale-in" style={{animationDelay: '0.7s'}}>
        <NewsletterBox/>
      </div>
    </div>
  )
}

export default Contact
