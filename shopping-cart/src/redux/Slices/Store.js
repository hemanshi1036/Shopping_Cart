import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./CartSlice";

export const store =  configureStore({
    reducer:{
        // slice ma name hoi ae ane file nu name
        cart: CartSlice
    }
});