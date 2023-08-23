import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalPrice: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
            state.totalPrice += action.payload.price;
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id!== action.payload.id);
            state.totalPrice -= action.payload.price;
        },
    },
});

export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;