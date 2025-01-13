import React, { createContext, useState } from "react";

const CategoryContext = createContext()
export const CategoryContextProvider=({children})=>{
    const[products,setProducts]=useState([])
    const[filterProduct,setFilterProduct]=useState([])
    return(
        <CategoryContext.Provider value={{products,setProducts,filterProduct,setFilterProduct}}>
            {children}
        </CategoryContext.Provider>
    )
}
export default CategoryContext;