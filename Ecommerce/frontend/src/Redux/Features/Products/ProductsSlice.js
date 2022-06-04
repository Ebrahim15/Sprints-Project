import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload)
            // XYZ
        },
    },
})

export const { addProduct } = productsSlice.actions
export const products = (state) => state.products

export default productsSlice.reducer
