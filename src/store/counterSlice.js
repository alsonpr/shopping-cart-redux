import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    products: [],
    total: 0,
  },
  reducers: {
   
    addProduct: (state, action) => {
      const {id, name, price, quantity} = action.payload;
      const product = {
        id,
        name,
        price,
        quantity
      };
      state.products.push(product);
      state.total += price * quantity;
    },
    removeProduct: (state, action) => {
      const {id, price, quantity} = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
      state.total -= price * quantity;
    },
    removeAllProduct: (state) => {
      state.products = [];
      state.total = 0;
    },
    updateQuantity: (state, action) => {
      const {id, quantity} = action.payload;
      const productIndex = state.products.findIndex((product) => product.id === id);
      if (productIndex >= 0) {
        const product = state.products[productIndex];
        const oldQuantity = product.quantity;
        const newQuantity = quantity;
        const price = product.price;
        const totalChange = price * (newQuantity - oldQuantity);
        state.products[productIndex].quantity = newQuantity;
        state.total += totalChange;
      }
      if (quantity === 0){
        state.products = state.products.filter((product) => product.id !== id);
        
      }
    }
  }
});

export const { addProduct, removeProduct, removeAllProduct, updateQuantity } = counterSlice.actions;

export default counterSlice.reducer;
