import React from 'react';
import './Cart.css';

export default function Cart (props) {

    const {isOpen, cartItems, updateQuantity, removeFromCart, toggleCart} = props;
    let totalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
        totalPrice += cartItems[i].price * cartItems[i].quantity;
    }

    if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={toggleCart}>
      <div className="cart" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Кошик</h2>
          <button className="close-cart" onClick={toggleCart}>×</button>
        </div>
        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <span className="empty-cart-icon">🛒</span>
              <p>Кошик порожній</p>
            </div>
          ) : (
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                  <div className="cart-item-info">
                    <h4>{item.title}</h4>
                    <p>${item.price}</p>
                  </div>
                  <div className="quantity-controls">
                    <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>🗑️</button>
                </div>
              ))}
              <div className="cart-footer">
                <h3>Сума: ${totalPrice.toFixed(0)}</h3>
                <button className="checkout-btn">Оформити</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

