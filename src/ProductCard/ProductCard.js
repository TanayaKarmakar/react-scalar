import './ProductCard.css';

const ProductCard = (props) => {
    return (
        <div className = "ProductCard">
            <h1>{props.title}</h1>
            <p>{props.price}</p>
        </div>
    );
};

export default ProductCard;