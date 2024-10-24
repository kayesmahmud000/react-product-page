import { useEffect } from "react";
import { useState } from "react";
import SingleProduct from "../singleProduct/SingleProduct";
import PropTypes from 'prop-types';

const AllProducts = ({handleSelectedProduct}) => {
    const [Products, setProducts]=useState([])

    useEffect(()=>{
        fetch('./products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className=" w-2/4">
            <p>Product {Products.length}</p>
            <div>
                {
                    Products.map(product=><SingleProduct handleSelectedProduct={handleSelectedProduct} key={product.id} product={product}></SingleProduct>)
                }
            </div>
        </div>
    );
};
AllProducts.propTypes = {
    
    handleSelectedProduct:PropTypes.func
};


export default AllProducts;