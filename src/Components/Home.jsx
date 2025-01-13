import React from 'react'
import Product from './Product/Product'
import Categories from './Categories/Categories'
import About from './About'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <>
    <div>
      <img className='homeImg' src="https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/hero-01.jpg" alt="homePage" />
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white">
      <motion.p
            className="text-6xl mt-6 font-sans font-bold leading-snug text-green-950"
            initial={{ x: '-100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'tween', duration: 2 }}
          >
            Beyond Trends <br />
            Beyond <span className="text-green-600">Time</span>
          </motion.p>
        </div>
      <About/>
      <Categories/>
      <Product/>
    </div>

    </>
    
    
    
  )
}

export default Home
