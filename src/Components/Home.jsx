import React from 'react'
import Product from './Product/Product'
import Categories from './Categories/Categories'
import About from './About'

const Home = () => {
  return (
    <>
    <div>
      <img className='homeImg' src="https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/hero-01.jpg" alt="homePage" />
      <About/>
      <Categories/>
      <Product/>
    </div>

    </>
    
    
    
  )
}

export default Home
