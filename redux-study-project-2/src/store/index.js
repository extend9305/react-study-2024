import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice.js";
import CartSlice from "./mycart-slice.js";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: CartSlice.reducer },
});

export default store;
