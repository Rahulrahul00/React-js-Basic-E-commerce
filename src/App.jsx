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
import { CategoryContextProvider } from './Context/CategoryContext';




function App() {

 
  return (

 <CategoryContextProvider>
   <Router>
        <Navbar />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Product'element={<Product/>}/>
          <Route path='/Service' element={<Service />} />

          <Route path='/ProductDetails/:id' element={<ProductDetails/>} />

        </Routes>

      </Router>
      
      <Footer />
 </CategoryContextProvider>


  )
}

export default App
