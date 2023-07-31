import React from 'react';
import './product-list-item.css';
import images from '../../assets/img-obj/img-obj';


const ProductListItem = ({ product, addProductToCart }) => {
  const { title, description, price, coverImage } = product;
  return (
    <div className="product-list-item">
      <div className="product-cover" onClick={addProductToCart}>
        <img src={images[coverImage]} alt="cover" className="certificate"></img>
        <div className='product-icons'>
          <img 
            src={images.addToCart} 
            alt="cover" 
            className="add-to-cart-icon" 
          />
          <img 
            src={images.like} 
            alt="cover" 
            className="add-to-cart-icon" 
          />
        </div>
      </div>
      <div className="product-details">
        <span className="product-title">{title}</span>
        <div className="product-description">{description}</div>
        <div className="product-price">{price} руб.</div>
      </div>
    </div>
  );
};

export default ProductListItem;
