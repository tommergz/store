import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';
import images from '../../assets/img-obj/img-obj';

const ShopHeader = () => {
  return (
    <header className="shop-header">
      <h1 className="logo">
        Интерьер.
      </h1>
      <div className='shop-header-navigation'>
        <div className='header-links'>
          <Link className="shop-header-link" to="/">
            <div>
              Каталог
            </div>
          </Link>
          <Link className="shop-header-link" to="/cart">
            <div>
              Корзина
            </div>
          </Link>
        </div>
        <div className='header-icon-links'>
          <Link className="shop-header-link" to="/">
            <img src={images.store} alt="store" />
          </Link>
          <Link className="shop-header-link" to="/cart">
            <img className='shopping-cart-icon' src={images.shoppingCart} alt="shopping-cart" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default ShopHeader;
