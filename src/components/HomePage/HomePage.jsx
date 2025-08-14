import React from 'react';
import Header from '../Header/Header';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="hero">
        <div className="hero-content">
          <h1>Ласкаво просимо до ModernStore</h1>
          <p>Відкрийте для себе найкращі товари за найкращими цінами!</p>
          <button className="hero-btn">Почати покупки</button>
        </div>
        <div className="hero-image">
          <span className="hero-emoji">🛍️</span>
        </div>
      </div>
    </div>
  );
}