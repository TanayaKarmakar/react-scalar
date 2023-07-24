import { useContext } from "react";
import CartContext  from "../../Context/CartContext";

const AddToCart = (props) => {
    const {cart, increaseQuantity, decreaseQuantity} = useContext(CartContext);

    const addQuantityHandler = () => {
        increaseQuantity(props.product);
    };

    const removeQuantityHandler = () => {
        decreaseQuantity(props.product);
    };

    console.log(props.cart);
    let quantity = cart[props.product.id] ? cart[props.product.id].quantity: 0;
    if(quantity > 0) {
        return (
            <div>
                <button onClick = {removeQuantityHandler}>-</button>
                <span>{quantity}</span>
                <button onClick= {addQuantityHandler}>+</button>
            </div>
        );
    } else {
        return (
            <button onClick = {addQuantityHandler}>AddToCart</button>
        );
    } 
};

export default AddToCart;
