import React, { useState } from 'react';
import './product.css';
import dataProduct from '../../assets/data';
import ProductCard from './ProductCard'; // Import the child component

const Product = () => {

  const [filterProduct, setFilterProduct] = useState(dataProduct);

      const handleFilter=({target})=>{
          const filterValue = target.value;
            if(filterValue === "greaterThan20"){
              setFilterProduct(dataProduct.filter((product)=> product.price > 20));
            }else if(filterValue === "lessThan20"){
              setFilterProduct(dataProduct.filter((product)=> product.price <= 20));
            }else{
              setFilterProduct(dataProduct);
            }

            //  console.log(filterValue);
      }
 
  

  
  return(

    <div className='productContainer'>
      <h1 className='pHead'>Trending Products</h1>
      <div className='headLine'></div>

      {/* Search Box */}
      <div className="searchBox">
        <input type="search" />
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
       

      <div className="card-container">
        {filterProduct.map((item)=>(
        
          <ProductCard key={item.id} props={item}/>
           
           ))}
        
        

      </div>

    </div>
  )
};

export default Product
