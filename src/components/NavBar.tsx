import React from 'react'
import { redirect } from 'react-router-dom'
import { motion } from 'framer-motion';


const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
<div className="container mx-auto px-4 py-4 flex justify-between items-center">
  <div 
    className="text-2xl font-bold text-blue-600 cursor-pointer" 
  >
    PillCatcher
  </div>

    <div className="hidden md:flex space-x-6">
      <a href="/#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
      <a href="/#benefits" className="text-gray-600 hover:text-blue-600 transition-colors">Benefits</a>
      <a href="/#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
      <a href="/#demo" className="text-gray-600 hover:text-blue-600 transition-colors">Demo</a>
    </div>

<a href="/buynow">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => redirect("/buynow")}
      
      className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
    >
      Buy Now
    </motion.button>
</a>
</div>
</nav>
  )
}

export default NavBar
