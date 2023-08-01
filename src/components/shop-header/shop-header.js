import React, { useState } from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';
import images from '../../assets/img-obj/img-obj';
import ShoppingCartModal from '../shopping-cart-modal/shopping-cart-modal';

const ShopHeader = () => {
  const [modal, setModal] = useState(false);
  return (
    <header className='shop-header'>
      <h1 className='logo'>
        Интерьер.
      </h1>
      <div className='shop-header-navigation'>
        <div className='header-links'>
          <Link className='shop-header-link' to="/">
            <div className='shopping-cart-link'>
              <span>
                Каталог
              </span>
            </div>
          </Link>
          <Link className='shop-header-link' to="/cart">
            <div 
              className='shopping-cart-link' 
              onMouseEnter={() => setModal(true)}
              onMouseLeave={() => setModal(false)}
            >
              <span>Корзина</span>
            </div>
          </Link>
        </div>
        <div className='header-icon-links'>
          <Link className='shop-header-link' to='/'>
            <img src={images.store} alt='store' />
          </Link>
          <Link className='shop-header-link' to='/cart'>
            <img className='shopping-cart-icon' src={images.shoppingCart} alt='shopping-cart' />
          </Link>
        </div>
      </div>
      {
        modal &&
        <div className='shop-modal'>
          <ShoppingCartModal showModal={modal} setModal={setModal} />
        </div>
      }
    </header>
  );
};

export default ShopHeader;
