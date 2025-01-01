import React from 'react';
import './product.css';

const ProductCard = ({ props }) => {
  const { image, title, brand, description, price } = props;

  return (
    <div className="product-details">
      <div className="product-img">
        <img src={image} alt={title} />
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
    </div>
  );
};

export default ProductCard;
