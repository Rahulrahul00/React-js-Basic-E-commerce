import React from 'react'
import Product from './Product/Product'
import Categories from './Categories/Categories'
import About from './About'

const Home = () => {
  return (
    <>
    <div>
      <img className='homeImg' src="https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/hero-01.jpg" alt="homePage" />
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white">
          <p className="text-6xl  mt-6 font-sans font-bold leading-snug text-green-950">
            Beyond Trends <br />
            Beyond <span className="text-green-600">Time</span>
          </p>
        </div>
      <About/>
      <Categories/>
      <Product/>
    </div>

    </>
    
    
    
  )
}

export default Home
