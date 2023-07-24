const AddToCart = (props) => {
    const addQuantityHandler = () => {
        props.increaseQuantity(props.product);
    };

    const removeQuantityHandler = () => {
        props.decreaseQuantity(props.product);
    };

    console.log(props.cart);
    let quantity = props.cart[props.product.id] ? props.cart[props.product.id].quantity: 0;
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
