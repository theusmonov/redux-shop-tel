import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../src/components/Cart";


export const store = configureStore({
    reducer : {
        cart : cartSlice
    }
})