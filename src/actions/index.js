export const addProductToCart = (productId) => {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: productId
  };
};

export const removeProductFromCart = (productId) => {
  return {
    type: 'REMOVE_PRODUCT_FROM_CART',
    payload: productId
  };
};

export const removeAllProductsFromCart = (productId) => {
  return {
    type: 'REMOVE_ALL_PRODUCTS_FROM_CART',
    payload: productId
  };
};

export const clearCart = () => {
  return {
    type: 'CLEAR_CART'
  };
};

export const sortProducts = (sortingType) => {
  return {
    type: 'SORT_PRODUCTS',
    payload: sortingType
  };
};
