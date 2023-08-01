import React from 'react';
import ShoppingCartList from '../shopping-cart-list/shopping-cart-list';
import ShoppingCartForm from '../shopping-cart-form/shopping-cart-form';
import './cart-page.css';

const CartPage = () => {
  return (
    <div className='cart-page-container'>
      <ShoppingCartList />
      <ShoppingCartForm />
    </div>
  );
};

export default CartPage;
