import {ReducerNames} from './store'
import {cartSlice} from '../../domain/cart/cart.slice'


export const reducers = {
  cartSlice: cartSlice.reducer,
} as const


export const reducersToPersist: ReducerNames[] = [
  'cartSlice',
]
