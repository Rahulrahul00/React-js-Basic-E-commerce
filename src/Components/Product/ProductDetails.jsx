import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();

    const [productDetails, setProductDetails] = useState("");

    const fetchProductDetails = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.in/api/products/${id}`);

            console.log(response);
            setProductDetails(response.data.product);

        } catch (error) {
            console.error('Error fetching product details', error)
        }
    }

    useEffect(() => {
        fetchProductDetails();
    },[id]);

   

    return (
        <div  className='flex flex-col md:flex'>
            <h1>{productDetails.brand}</h1>
            <img className='w-[250px] h-[250px]' src={productDetails.image} alt="pimag" />
            <p>{productDetails.description}</p>
            <h2>Price : Rs.{productDetails.price}</h2>
            <h3>Category: {productDetails.category}</h3>
        </div>
    )
}




export default ProductDetails
