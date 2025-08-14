import React from 'react';
import './ProductCard.css';

export default function ProductCard(props) {
  const { product, addToCart } = props;
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
            Додати в кошик
          </button>
        </div>
      </div>
    </div>
  );
}