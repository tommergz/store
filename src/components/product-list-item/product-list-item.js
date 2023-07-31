import React from 'react';
import './product-list-item.css';
import images from '../../assets/img-obj/img-obj';

const ProductListItem = ({ product, addProductToCart }) => {
  const { title, description, price, coverImage } = product;
  return (
    <div className="product-list-item">
      <div className="product-cover">
        <img src={images[coverImage]} alt="cover" className="certificate"></img>
      </div>
      <div className="product-details">
        <span className="product-title">{title}</span>
        <div className="product-description">{description}</div>
        <div className="product-price">{price} руб.</div>
        <button
          onClick={addProductToCart}
          className="btn">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductListItem;
