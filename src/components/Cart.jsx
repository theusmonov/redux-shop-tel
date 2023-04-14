import { createSlice } from "@reduxjs/toolkit";
import Phone from "./TelbazarArray";
import { useEffect } from "react";

const initialState = {
    loading: false,
    data : Phone,
    total : 0,
    amount : 1,  
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,

    reducers : {
          clearCart : (state) => {
            state.data = [];
          },
          remove : (state, action) => {
            return { ...state, data : state.data.filter((Phone) => Phone.id !== action.payload )
            }
          },
          increment : (state, action) => {
            let tempCart = state.data.map((Phone) => {
              if (Phone.id === action.payload) {
                  return{...Phone, amount : Phone.amount + 1}
              }
              return Phone
          }) 
          return {...state, data : tempCart}
          },
          decrement : (state, action) => {
            let tempCart = state.data.map((Phone) => {
              if (Phone.id === action.payload) {
                  return{...Phone, amount : Phone.amount - 1}
              }
              return Phone
          }) 
          .filter((Phone) => Phone.amount !==0)
          return {...state, data : tempCart} 
          },
          gettotal : (state) => {
            let {total, amount} = state.data.reduce(
              (cartTotal, cartItem) => {
                  const {price, amount} = cartItem
                  const itemTotal = price * amount
      
                  cartTotal.total += itemTotal
                  cartTotal.amount += amount
                  return cartTotal
              },
              {
                  total: 0,
                  amount: 0,
              }
          )
          total = parseFloat(total.toFixed(2))
          return { ...state, total, amount }
          },
    },
    
});

export const {clearCart} = cartSlice.actions
export const { remove} = cartSlice.actions
export const { increment} = cartSlice.actions
export const {decrement} = cartSlice.actions
export const {gettotal} = cartSlice.actions

export default cartSlice.reducer;