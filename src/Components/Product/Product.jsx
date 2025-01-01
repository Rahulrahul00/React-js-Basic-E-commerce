import React from 'react'
import './product.css'
import dataProduct from '../../assets/data'

const Product = () => {

  console.log(dataProduct);
  return (

    <div className='productContainer'>
      <h1 className='pHead'>Trending Products</h1> <div className='headLine'></div>
      <div className="card-container">
        {dataProduct.map((item)=>{
          return(

          <div key={item.id} className="product-details">
          <div className="product-img">
            <img src={item.image} alt="item.title" />

          </div>
          <div className="productName">
            <h1>{item.brand}</h1>
          </div>
          <div className="description">
            <p>{item.description.length >50 ? item.description.substring(0,50)+"..." :item.description }</p>
          </div>
          <div className="price">
            <h3>Rs.{item.price}</h3>
          </div>

        </div>
          )
        })}
        

      </div>

    </div>
  )
}

export default Product
