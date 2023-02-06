import React from "react";
import CartModal from "../CartModal/CartModal";
import ProductCard from "./ProductCard";

function ProductsList ({data}){ 
    return (
        <>
        <CartModal />
        {
            data.map(item=>(
                <ProductCard item={item}/>

            ))
        }
        
        </>
    );
};

export default ProductsList;
