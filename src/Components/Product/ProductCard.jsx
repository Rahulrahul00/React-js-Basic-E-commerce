import React, { useEffect, useState } from 'react';
import './product.css';
import { FaCirclePlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';



const ProductCard = ({ props }) => {
  const {id, image, title, brand, description, price } = props;
  
  const navigate = useNavigate();

  const handleProductClick=()=>{
    navigate(`/ProductDetails/${id}`)
    // console.log(navigate)
  }


  return (
    
    <div className="product-details" onClick={handleProductClick}>
      <div className="product-img flex items-center justify-center">
   
        <img src={image} alt="" className='text-center'/>
      </div>
      <div className="productName">
        <h1 className='text-[1.2rem] text-[#156269] font-semibold'>{brand}</h1>
      </div>
      <div className="description">
        <p className='cursor-pointer'>{description.length > 50 ? `${description.substring(0, 35)}  ...more` : description}</p>
      </div>
      <div className="price">
        <h3 className='text-[0.9rem] font-semibold text-[#00433d] mt-5'>Rs.{price}</h3>
      </div>
      <div className="buttonCart">
        <button className='buttonCartIcon'>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
