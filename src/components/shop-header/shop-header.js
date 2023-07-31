import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';

const ShopHeader = () => {
  return (
    <header className="shop-header row">
      <h1 className="logo">
        Интерьер.
      </h1>
      <div className='shop-header-navigation'>
        <Link className="shopping-cart shop-header-link" to="/">
          <div className="shopping-cart">
            Каталог
          </div>
        </Link>
        <Link className="shopping-cart shop-header-link" to="/cart">
          <div className="shopping-cart">
            Корзина
          </div>
        </Link>
      </div>
    </header>
  );
};

export default ShopHeader;
