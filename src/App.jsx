import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Components/Product/Product';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Product from './Components/Product/Product';
import Service from './Components/Service';
import Footer from './Components/Footer/Footer';
import ProductDetails from './Components/Product/ProductDetails';
import Categories from './Components/Categories/Categories';




function App() {

 const [selectedCategory, setSelectedCategory ]= useState("")


//  console.log(selectedCategory);

 const  handleCatSelect=(category)=>{
   setSelectedCategory(category);

  }

  return (

    <>
      
      <Router>
        <Navbar />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route
            path='/Product'
            element={
              <>
                <Categories onCategorySelect={handleCatSelect} />
                <Product selectedCategory={selectedCategory} />
              </>
            }
          />
          <Route path='/Service' element={<Service />} />

          <Route path='/ProductDetails/:id' element={<ProductDetails/>} />

        </Routes>

      </Router>
      
      <Footer />
    </>


  )
}

export default App
