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
<<<<<<< HEAD
            // ABCDEF
||||||| 2ff1a7a
=======
            // XYZ
>>>>>>> bf50217f93bcdd8708eb6dddda9689c92caeffa9
        },
    },
})

export const { addProduct } = productsSlice.actions
export const products = (state) => state.products

export default productsSlice.reducer
