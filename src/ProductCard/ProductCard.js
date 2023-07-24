import './ProductCard.css';
import AddToCart from '../AddToCart';
import Rating from '../Rating';

const ProductCard = (props) => {
    let price = `${props.product.price.value} ${props.product.price.currency}`;
    return (
        <div className = "ProductCard">
            <h1>{props.product.title}</h1>
            <p>{price}</p>
            <Rating rating = {props.product.rating.value} maxRating = {5} size = {1}/>
            <AddToCart cart = {props.cart} 
            increaseQuantity = {props.increaseQuantity} 
            product = {props.product}
            decreaseQuantity = {props.decreaseQuantity}/>
        </div>
    );
};

export default ProductCard;