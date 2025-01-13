import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HiShoppingCart } from "react-icons/hi";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";



const ProductDetails = () => {
    const { id } = useParams();

    const [productDetails, setProductDetails] = useState("");
    const [lengths, setLengths] = useState(300)
    // description more funtion
    const handleClickMore = () => {
        setLengths((prev) => {
            return prev === 300 ? 1000 : 300
        })
    }

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
    }, [id]);



    return (
        <div className="flex flex-col md:flex-row justify-between w-full p-4">
            {/* Image Section */}
            <div className="w-full md:w-[550px]  flex flex-col items-start ">
                <img
                    className="w-[350px] h-[350px] m-10 "
                    src={productDetails.image || "/placeholder.jpg"}
                    alt="Product Image"/>
                
              {/* Buttons Section */}
              <div className='flex items-center gap-5 translate-x-10 '>
                <button className='flex items-center bg-green-500 text-white font-bold px-7 py-2 hover:scale-105 transition-transform ease-in-out duration-150'>
                    <span className='mx-3 text-2xl '><HiShoppingCart /></span> 
                     Add to Cart
                </button>

                <button className='flex items-center font-bold  bg-orange-500 text-white px-7 py-2 transition duration-150 ease-in-out hover:scale-105'>
                    <span className='mx-3 text-2xl'><RiMoneyRupeeCircleFill /></span>
                    Buy Now
                </button>
              </div>
              


            </div>

            {/* Specifications Section */}
            <div className="w-full md:w-1/2 mt-4 md:mt-0 text-left px-4">
                <h1 className="text-2xl font-semibold text-gray-800">{productDetails.brand}</h1>
                <p className="mt-2 text-gray-600">{productDetails.title}</p>
                <h1 className="text-green-600 mt-2">Special Price</h1>
                <h2 className="mt-4 text-xl font-bold text-gray-800">
                    ₹{productDetails.price}{" "}
                    <span className="text-green-600 text-base">{productDetails.discount}% off</span>
                </h2>

                {/* Specifications Section */}
                <div className="mt-6">
                    <h1 className="text-2xl font-semibold text-gray-700 mb-4">Specifications</h1>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <p className="text-gray-600">Model ID:</p>
                        <p>{productDetails.model || "N/A"}</p>
                        <p className="text-gray-600">Color:</p>
                        <p>{productDetails.color || "N/A"}</p>
                        <p className="text-gray-600">Brand:</p>
                        <p>{productDetails.brand || "N/A"}</p>
                        <p className="text-gray-600">Category:</p>
                        <p>{productDetails.category || "N/A"}</p>
                        <p className="text-gray-600">Description:</p>
                        <p className='cursor-pointer'>{productDetails.description && productDetails.description.substring(0, lengths)}<span onClick={handleClickMore}>{lengths === 300 ? ' ...More' : ' ...Less'}</span> </p>
                    </div>
                </div>
                
            </div>
        </div>



    )


}




export default ProductDetails
