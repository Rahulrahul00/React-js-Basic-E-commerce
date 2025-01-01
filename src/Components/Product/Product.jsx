import React from 'react';
import './product.css';
import dataProduct from '../../assets/data';
import ProductCard from './ProductCard'; // Import the child component

const Product = () => {

  console.log(dataProduct);
  return (

    <div className='productContainer'>
      <h1 className='pHead'>Trending Products</h1>
      <div className='headLine'></div>

      {/* Search Box */}
      <div className="searchBox">
        <input type="search" />
        <label >Search</label>
      </div>
      {/* Fliter section */}

      <div>
        <label >Fliter</label>
        <select name="" id="">
         {dataProduct.map.fliter((priceSort)=>(
           console.log(priceSort)
         ))}
          <option value="">Price greater than 20</option>
          <option value="">Price less than 20</option>


        </select>
      </div>

      <div className="card-container">
        {dataProduct.map((item)=>(
          <ProductCard key={item.id} props={item}/>
           ))}
       
        

      </div>

    </div>
  )
}

export default Product
