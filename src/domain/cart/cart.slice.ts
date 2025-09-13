import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CartSliceData, initialCartSliceData} from './cart.read'
import {SingleProduct} from '../products/products.types'


export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: initialCartSliceData,
  reducers: {

    STORE_SET_cart_productsInCart: (state, action: PayloadAction<CartSliceData['productsInCart']>) => {
      state.productsInCart = action.payload
    },


    STORE_ADD_cart_productsInCart: (state, action: PayloadAction<SingleProduct['id']>) => {
      if (typeof state.productsInCart[action.payload] === 'number') {
        state.productsInCart[action.payload]!++
      } else {
        state.productsInCart[action.payload] = 1
      }
    },

    STORE_REMOVE_cart_productsInCart: (state, action: PayloadAction<SingleProduct['id']>) => {
      if (typeof state.productsInCart[action.payload] !== 'number') {
        // No need to remove, already it is gone.
        return state
      }

      const simulatedAmountAfterRemoval = state.productsInCart[action.payload]! - 1

      if (simulatedAmountAfterRemoval !== 0) {
        state.productsInCart[action.payload]!--
      } else {
        delete state.productsInCart[action.payload]
      }
    },

    STORE_SET_cart_isGoToCartFloatingOpen: (state, action: PayloadAction<CartSliceData['isGoToCartFloatingOpen']>) => {
      state.isGoToCartFloatingOpen = action.payload
    },

  },
})

export const {
  STORE_SET_cart_productsInCart,
  STORE_ADD_cart_productsInCart,
  STORE_REMOVE_cart_productsInCart,
  STORE_SET_cart_isGoToCartFloatingOpen,
} = cartSlice.actions

