import React, { useState } from 'react';
import data from './components/back/data/Data';
import Header from './components/front/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Roots from './components/front/Roots/Roots';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const { productItems } = data;

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
        { ...productExist, quantity: productExist.quantity + 1 } : item
      ))
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) => item.id === product.id ?
          { ...productExist, quantity: productExist.quantity - 1 } : item
        )
      )
    }
  }

  const handleCartClear=()=>setCartItems([]);

  return (
    <div>
      <Router>
        <Header
         cartItems={cartItems}
         />
        <Roots 
        productItems={productItems} 
        cartItems={cartItems} 
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleCartClear={handleCartClear}
         />
      </Router>
    </div>
  )
}

export default App;
