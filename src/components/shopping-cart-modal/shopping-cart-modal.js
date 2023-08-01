import React from 'react';
import { connect } from 'react-redux';

import {
  removeAllProductsFromCart, 
} from '../../actions';

import './shopping-cart-modal.css';

import images from '../../assets/img-obj/img-obj';

const ShoppingCartModal = ({ items, onDelete, showModal, setModal }) => {
  const renderRow = (item) => {
    const { id, title, description, coverImage, total } = item;
    return (
      <div className='shopping-cart-modal-container'>
        <div key={id} className='shopping-cart-modal-item'>
          <div className='shopping-cart-modal-product-cover'>
            <img src={images[coverImage]} alt="cover" className="certificate"></img>
          </div>
          <div className='product-details'>
            <h1 className='shopping-cart-modal-item-title'>
              {title}
            </h1>
            <p className='shopping-cart-modal-item-description'>
              {description}
            </p>
            <p className='shopping-cart-modal-item-price'>
              {total} руб.
            </p>
            <div className='shopping-cart-modal-item-buttons'>
              <a href='#'>Избранные</a>
              <a
                href='#'
                className="btn"
                onClick={() => onDelete(id)}
              >
                Удалить
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const itemsForModal = [...items].splice(0, 2);
 
  return (
    <>
      {
        showModal && items.length > 0 ? 
        <div               
          onMouseEnter={() => setModal(true)}
          onMouseLeave={() => setModal(false)} 
          className="shopping-cart-modal-main-container"
        >
          <div className='shopping-cart-modal-list'>
            { itemsForModal.map(renderRow) }
          </div>
        </div> : ''
      }
    </>
  );
};

const mapStateToProps = ({ cartItems }) => {
  return {
    items: cartItems
  };
};

const mapDispatchToProps = {
  onDelete: removeAllProductsFromCart,
};


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartModal);