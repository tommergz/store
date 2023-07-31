import React, { useState } from 'react';
import './shopping-cart-form.css';
import { connect } from 'react-redux';

const ShoppingCartForm = ({total}) => {
  const [formData, setFormData] = useState({name: "", email: "",message: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='shopping-cart-form-container'>
      <h1>Оформление заказа</h1>
      <form className='shopping-cart-form' onSubmit={handleSubmit}>
        <input 
          type="text" 
          id="name" 
          name="name"
          placeholder='Имя Фамилия' 
          value={formData.name} 
          onChange={handleChange}
        />

        <input 
          type="phone" 
          id="phone" 
          name="phone"
          placeholder='+ 7 904 000 80 80' 
          value={formData.email} 
          onChange={handleChange}
        />

        <input 
          type="adress" 
          id="adress" 
          name="adress"
          placeholder='Адрес доставки' 
          value={formData.email} 
          onChange={handleChange}
        />

        <div className='submit-section'>
          <p>Итого: {total} руб.</p>
          <button type="submit">Оформить заказ</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = ({ orderTotal }) => {
  return {
    total: orderTotal
  };
};

export default connect(mapStateToProps)(ShoppingCartForm);
