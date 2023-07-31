import React from 'react';
import { connect } from 'react-redux';

import {
  addProductToCart,
  removeProductFromCart,
  removeAllProductsFromCart, 
  clearCart} from '../../actions';

import './shopping-cart-list.css';
import images from '../../assets/img-obj/img-obj';
import { Link } from 'react-router-dom';

const ShoppingCartList = ({ items, onIncrease, onDecrease, onDelete, onClear }) => {
  const renderRow = (item, idx) => {
    const { id, title, description, coverImage, count, total } = item;
    return (
      <div className='shopping-cart-container'>
        <div key={id} className='shopping-cart-item'>
          <div className='shoping-cart-product-cover'>
            <img src={images[coverImage]} alt="cover" className="certificate"></img>
          </div>
          <div className='product-details'>
            <h1 className='shopping-cart-item-title'>
              {title}
            </h1>
            <p className='shopping-cart-item-description'>
              {description}
            </p>
            <p className='shopping-cart-item-price'>
              {total} руб.
            </p>
            <div className='shpoing-cart-item-buttons'>
              <a href='#'>Избранные</a>
              <a
                href='#'
                onClick={() => onDelete(id)}
                className="btn">
                Удалить
              </a>
            </div>
          </div>
        </div>
        <div className='shopping-cart-counter'>
          <div className='counter'>
            {count}
          </div>
          <div className='shopping-cart-buttons'>
            <button
              onClick={() => onIncrease(id)}
              className="btn">
              <img src={images.incArrow} alt="inc" />
            </button>
            <button
              onClick={() => onDecrease(id)}
              className="btn">
              <img src={images.decArrow} alt="dec" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="shopping-cart-main-container">
      <header className='shopping-cart-header'>
        <p>Товар</p>
        <p>Количество</p>
      </header>
      <div className='shopping-cart-list'>
        { items.map(renderRow) }
      </div>
      <div className='shopping-cart-footer'>
        <button className='white-btn' onClick={onClear}>Очистить корзину</button>
        <Link to="/">
          <button className='black-btn'>Продолжить покупки</button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = {
  onIncrease: addProductToCart,
  onDecrease: removeProductFromCart,
  onDelete: removeAllProductsFromCart,
  onClear: clearCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartList);
