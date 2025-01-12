import React, { useContext, useEffect, useState } from 'react';
import './product.css';
// import dataProduct from '../../assets/data';
import axios from "axios";
import ProductCard from './ProductCard'; // Import the child component
import Loader from "react-js-loader";
import CategoryContext from '../../Context/CategoryContext';


const Product = () => {

  // const [products, setProduct] = useState([]);
  const {products, setProducts,filterProduct,setFilterProduct}=useContext(CategoryContext)
  // const [filterProduct, setFilterProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError]  = useState(null);
  // const [search, setSearch] = useState(''); 
  // console.log(search)
  // Fetch Product when the component mounts
  function data(){
    setLoading(true);
    axios.get('https://fakestoreapi.in/api/products?limit=50')
    
    .then(response=>{
     console.log(response.dataproducts)
     setProducts(response.data.products);
     setFilterProduct(response.data.products);
     setLoading(false);
     // console.log(setProduct)
    })
    .catch(error=>{
     setError(error.message);
     setLoading(false);
    });
  }
  useEffect(()=>{
    data();

  },[]);

// Handle filtering product based on price
          const handleFilter=({target})=>{
            let filterValue = target.value;
           
              if(filterValue === "greaterThan20"){
               setFilterProduct(products.filter((product)=> product.price > 2));
                // console.log(filterValue);
              }else if(filterValue === "lessThan20"){
                setFilterProduct(products.filter((product)=> product.price <= 20));
              }else{
                setFilterProduct(products);
              }

            
            };

           const handelSearch=({target})=>{
              const searchValue = target.value.toLowerCase();
                setFilterProduct(
                  products.filter((product)=>{
                   return product.title.toLowerCase().includes(searchValue);
                  })
                )
           }
            


            if (loading) return <Loader type="bubble-scale" bgColor={"#26966b"}  size={50}  />
            if (error) return <p>Error: {error}</p>

            
              return(

                <div className='productContainer'>
                  <h1 className='pHead text-3xl font-bold text-green-900'>Trending Products</h1>
                  <div className='headLine'></div>
                    
                  {/* Search Box */}
                  <div className="searchBox">
                    <input type="search" onChange={handelSearch} placeholder='Search products...' className="w-72 h-10 rounded-full border-none outline outline-1 outline-[#26966b] text-center text-base text-[#26966b] font-medium shadow-md cursor-pointer" />
                    <label className='searchName'>Search</label>
                  </div>
                  
                  {/* Fliter Dropdown */}
                  <div className='filterContainer'>
                    <label className='filterName'>Filter</label>
                    <select className='filterSelect' onChange={handleFilter}>
                      <option value="all">All</option>
                      <option value="greaterThan20">Greater than 20</option>
                      <option value="lessThan20">Less than 20</option>
                    </select>
            
                  </div>
                   
                   {
                    // console.log(products)
                   }
                  <div className="card-container">
                    {filterProduct.map((item)=>(
                       
                      <ProductCard key={item.id} props={item}/>
                       
                       ))}
                    
                    
            
                  </div>
            
                </div>
              )
            
              
        };
   
       
    // console.log(filterProduct);
     
   

  
 


export default Product;
