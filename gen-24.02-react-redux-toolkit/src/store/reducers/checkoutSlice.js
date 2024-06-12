import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataCheckout:[]
}

const checkoutSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      checkoutBooking: (state, action) => {
        state.dataCheckout.push(action.payload);
      },
      removeFromCart: (state, action) => { 
        state.dataCheckout = state.dataCheckout.filter((product) => product.id !== action.payload);
        console.log("test")
      },
      updateQty: (state, action) => {
        state.dataCheckout = state.dataCheckout.map(product => product.id === action.payload ? {...product, qty: action.payload.qty} : product)
      }
    }
});
  
  export const { checkoutBooking, removeFromCart, updateQty } = checkoutSlice.actions;
  
  export default checkoutSlice.reducer;