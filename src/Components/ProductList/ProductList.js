import { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import './ProductList.css';

// const products = [
//     {
//         id: 1,
//         title: 'Apple iPhone 14',
//         price: 'Rs. 1,00,000'
//     },
//     {
//         id: 2,
//         title: 'Apple iPhone 13',
//         price: 'Rs. 70,000'
//     },
//     {
//         id: 3,
//         title: 'Google Pixel 7',
//         price: 'Rs. 50,000'
//     },
//     {
//         id: 4,
//         title: 'Nokia 1100',
//         price: 'Rs. 2,000'
//     },
//     {
//         id: 5,
//         title: 'Samsung Galaxy S10',
//         price: 'Rs. 1,00,000'
//     },
//     {
//         id: 6,
//         title: 'Sony Xperia S10',
//         price: 'Rs. 1,00,000'
//     }
// ];

// const getProductsApi = (callback) => {
//     setTimeout(function() {
//         callback(products);
//     }, 1000);
// };


const ProductList = (props) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1//products")
        .then((response) => {
            return response.json();
        }).then((res) => {
            console.log("Result");
            console.log(res);
            setProducts(res);
            setIsLoading(false);
        });

        // getProductsApi(function(res) {
        //     console.log('API started');
        //     setProducts(res);
        //     setIsLoading(false);
        //     console.log('API ended');
        // });
    },[products, isLoading]);


    const productList = products.map((product) => {
        return (
            <ProductCard key = {product.id} 
            product = {product}/>
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