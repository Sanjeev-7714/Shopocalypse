import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  // Prevent scrolling when the loading screen is active
  useEffect(() => {
    // Save the current overflow style
    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    // Prevent scrolling
    document.body.style.overflow = 'hidden';
    
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-white bg-opacity-95 z-[9999] flex flex-col items-center justify-center">
      <div className="text-center px-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
        <motion.div 
          className="w-24 h-24 mb-8 mx-auto"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 1.5, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity }
          }}
        >
          <svg className="w-full h-full text-indigo-600" viewBox="0 0 24 24">
            <motion.path
              fill="currentColor"
              d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"
              animate={{ 
                rotate: 360,
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </svg>
        </motion.div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Starting up...</h2>
        <p className="text-gray-600 mx-auto">
          Our backend server is warming up. This may take up to a minute.
          Please wait while we prepare everything for you.
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
