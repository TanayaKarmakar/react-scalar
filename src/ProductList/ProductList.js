import { useState } from "react";
import ProductCard from "../ProductCard";
import './ProductList.css';

const products = [
    {
        title: 'Apple iPhone 14',
        price: 'Rs. 1,00,000'
    },
    {
        title: 'Apple iPhone 13',
        price: 'Rs. 70,000'
    },
    {
        title: 'Google Pixel 7',
        price: 'Rs. 50,000'
    },
    {
        title: 'Nokia 1100',
        price: 'Rs. 2,000'
    },
    {
        title: 'Samsung Galaxy S10',
        price: 'Rs. 1,00,000'
    },
    {
        title: 'Sony Xperia S10',
        price: 'Rs. 1,00,000'
    }
];

const getProductsApi = (callback) => {
    setTimeout(function() {
        callback(products);
    }, 1000);
};

let isLoading = true;

const ProductList = () => {
    let retrievedProducts = [];
    const [products, setProducts] = useState([]);
    var allProducts = getProductsApi(function(res) {
        setProducts(res);
        isLoading = false;
    });

    

    const productList = products.map((product) => {
        return (
            <ProductCard key = {product.title} title = {product.title} price = {product.price}/>
        );
    });

    if(isLoading)
        return <p>Loading...</p>;
    else {
        return (
            <div className = "Products">
                {productList}
            </div>
        );
    }
};

export default ProductList;