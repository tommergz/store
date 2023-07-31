import { data } from "../data/data";

const initialState = {
  products: data.length ? data.sort((a, b) => new Date(a.date) - new Date(b.date)) : data,
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 0
};

const updateCartItems = (cartItems, item, idx) => {

  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ];
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ];
};

const updateCartItem = (product, item = {}, quantity) => {

  const {
    id = product.id,
    count = 0,
    title = product.title,
    description = product.description,
    total = 0,
    coverImage = product.coverImage,
    date = product.date
  } = item;

  return {
    id,
    title,
    description: description,
    count: count + quantity,
    total: total + quantity*product.price,
    coverImage: coverImage,
    date
  };
};

const updateOrder = (state, productId, quantity) => {
  const { products, cartItems, orderTotal } = state;

  const product = products.find(({id}) => id === productId);
  const itemIndex = cartItems.findIndex(({id}) => id === productId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(product, item, quantity);
  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
    orderTotal: orderTotal + quantity*product.price
  };
};

const sortProducts = (state, sortingType) => {
  const products = [...state.products];
  switch (sortingType) {
    case 'NEWEST':
      return {
        ...state,
        products: products.sort((a, b) => new Date(a.date) - new Date(b.date))
      }
    case 'OLDEST':
      return {
        ...state,
        products: products.sort((a, b) => new Date(b.date) - new Date(a.date))
      }
    case 'CHEAPEST':
      return {
        ...state,
        products: products.sort((a, b) => a.price - b.price)
      }
    case 'MOST_EXPENSIVE':
      return {
        ...state,
        products: products.sort((a, b) => b.price - a.price)
      }
  
    default:
      return state;
  }
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return updateOrder(state, action.payload, 1);

    case 'REMOVE_PRODUCT_FROM_CART':
      return updateOrder(state, action.payload, -1);

    case 'REMOVE_ALL_PRODUCTS_FROM_CART':
      const item = state.cartItems.find(({id}) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);
    
    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
        orderTotal: 0
      };
      
    case 'SORT_PRODUCTS':
      return sortProducts(state, action.payload)

    default:
      return state;
  }
};

export default reducer;
