import React, { useState } from 'react';
import ProductListItem from '../product-list-item';

import { connect } from 'react-redux';

import { addProductToCart, sortProducts } from '../../actions';

import './product-list.css';

const ProductList = ({ products, addProductToCart }) => {
  return (
    <div className="product-list">
      {
        products.map((product) => {
          return ( 
            <ProductListItem
              key={product.id}
              product={product}
              addProductToCart={() => addProductToCart(product.id)}
            />           
          );
        })
      }
    </div>
  );
};

const ProductListContainer = ({products, addProductToCart, sortProducts}) => {

    return (
      <div>
        <div className='sorting-selection-container'>
          <select className='sorting-select' onChange={(e) => sortProducts(e.target.value)}>
            <option value="NEWEST" defaultValue="NEWEST">Порядок: сперва новые</option>
            <option value="OLDEST">Порядок: сперва старые</option>
            <option value="CHEAPEST">Порядок: сперва дешевле</option>
            <option value="MOST_EXPENSIVE">Порядок: сперва дороже</option>
          </select>
        </div>
        <ProductList products={products} addProductToCart={addProductToCart}/>
      </div>
    );
}

const mapStateToProps = ({ products, loading, error }) => {
  return { products, loading, error };
};

const mapDispatchToProps = (dispatch) => {

  return {
    addProductToCart: (id) => dispatch(addProductToCart(id)),
    sortProducts: (id) => dispatch(sortProducts(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
