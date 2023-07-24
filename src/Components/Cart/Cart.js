import { useContext } from "react";
import CartContext from "../../Context/CartContext";

const Cart = () => {
    const {cart} = useContext(CartContext);
    const cartList = Object.values(cart);

    console.log(cartList);
    if(cartList.length === 0) {
        return (
            <div>
                No Item, atleast buy something from me!!!!
            </div>
        );
    } else {
        return (
            <ol>
            {cartList.map((cartItem) => {
                return <li key = {cartItem.id}>{cartItem.title} {cartItem.quantity}</li>;
            })}
            </ol>
        );
    }
    
};

export default Cart;