import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: []
    },
    reducers: {
        addItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemInCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(game => game.id !== action.payload)
        },
        deleteAllItems: (state, action) => {
            state.itemsInCart = []
        }
    }
})
export const { addItemInCart, deleteItemInCart, deleteAllItems} = cartSlice.actions;
export default cartSlice.reducer;
