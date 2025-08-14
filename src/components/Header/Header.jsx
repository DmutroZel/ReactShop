import React from 'react';
import './Header.css';

 export default function Header(props) {
    const {cartItems, toggleCart, isCartOpen} = props;
    let totalItems = 0;
    for (let i = 0; i < cartItems.length; i++) {
             totalItems += cartItems[i].quantity;
    }
    
  return (
    <header >
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">🛍️</span>
          ModernStore
        </div>
        <nav className="nav">
          <a href="#home">Головна</a>
          <a href="#shop">Магазин</a>
          <a href="#contact">Контакти</a>
          <button className="cart-button" onClick={toggleCart}>
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{totalItems}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}