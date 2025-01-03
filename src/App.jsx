import React from 'react';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Components/Product/Product';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Product from './Components/Product/Product';
import Service from './Components/Service';



function App() {
  

  return (

    
   <>
   
   <Router>
     <Navbar/>
    
     <Routes>
       
       <Route path='/' element={<Home/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/Product' element={<Product/>}/>
       <Route path='/Service' element={<Service/>}/>

     </Routes>

</Router>
   
   </>
    
   
  )
}

export default App
