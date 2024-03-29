import { useState } from 'react';
import './App.css';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import CartContext from './Context/CartContext';

function App() {
  const [cart, setCart] = useState({});

  const increaseQuantity = (product) => {
    const newCart = {...cart};
    if(!newCart[product.id]) {
      newCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price.value,
        quantity: 0
      };
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);
  };

  const decreaseQuantity = (product) => {
    const newCart = {...cart};
    if(!newCart[product.id])
      return;
    newCart[product.id].quantity -= 1;
    if(newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setCart(newCart);
  };

  return (
    <CartContext.Provider 
    value = {{cart, increaseQuantity, decreaseQuantity}}>
      <div className="App">
        <Cart />
        <ProductList/>
      </div>
    </CartContext.Provider>
  );
}

export default App;
