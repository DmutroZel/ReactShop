import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import Cart from '../Cart/Cart';
import './Shop.css';

 export default function Shop() {
  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load products:', error);
        setIsLoading(false);
      }
    }
    getProducts();
  }, []);
  
/**
 * додає товар до кошика
 * якщо товар вже є збільшує його кількість на 1
 * якщо товару немає додає його з quantity = 1
 */
  function addToCart(product) {
  setCartItems((items) => {
    const updatedItems = [];
    let found = false;
    for (let item of items) {
      if (item.id === product.id) {
        updatedItems.push({ ...item, quantity: item.quantity + 1 });
        found = true;
      } else {
        updatedItems.push(item);
      }
    }
    if (!found) {
      updatedItems.push({ ...product, quantity: 1 });
    }
    return updatedItems;
  });
}
  function updateQuantity(id, quantity) {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }

  function removeFromCart(id) {
    setCartItems((items) => items.filter((item) => item.id !== id));
  }


  function toggleCart() {
    setShowCart(!showCart);
  }

  if (isLoading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Завантаження товарів...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Header cartItems={cartItems} toggleCart={toggleCart} isCartOpen={showCart}/>
      <HomePage />
      <div className="shop-container">
        <h2 className="shop-title">Наші товари</h2>
        <div className="products-flex">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart}/>
          ))}
        </div>
      </div>
      <Cart isOpen={showCart} cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} toggleCart={toggleCart}/>
    </div>
  );
}

