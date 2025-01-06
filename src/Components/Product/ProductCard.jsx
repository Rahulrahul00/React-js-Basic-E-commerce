import React from 'react';
import './product.css';
import { FaCirclePlus } from "react-icons/fa6";


const ProductCard = ({ props }) => {
  const { image, title, brand, description, price } = props;

  return (
    <div className="product-details">
      <div className="product-img">
   
        <img src={image} alt="" />
      </div>
      <div className="productName">
        <h1>{brand}</h1>
      </div>
      <div className="description">
        <p>{description.length > 50 ? `${description.substring(0, 50)}...` : description}</p>
      </div>
      <div className="price">
        <h3>Rs.{price}</h3>
      </div>
      <div className="buttonCart">
        <button className='buttonCartIcon'>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
