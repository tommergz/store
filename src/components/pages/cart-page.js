import React from 'react';
import ShoppingCartList from '../shopping-cart-list/shopping-cart-list';
import ShoppingCartForm from '../shopping-cart-form/shopping-cart-form';
import './cart-page.css';

const CartPage = () => {
  return (
    <div className='cart-page-container'>
      <ShoppingCartList />
      <ShoppingCartForm />
      <div class="select">
        <select id="standard-select">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 4">Option 4</option>
          <option value="Option 5">Option 5</option>
          <option value="Option length">
            Option that has too long of a value to fit
          </option>
        </select>
      </div>
    </div>
  );
};

export default CartPage;
