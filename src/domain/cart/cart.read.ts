import {ReduxState} from '../../application/store/store'
import {CartItem} from './cart.types'

export type CartSliceData = {
  productsInCart: Partial<CartItem>
  isGoToCartFloatingOpen: boolean
}

export const initialCartSliceData: CartSliceData = {
  productsInCart: {},
  isGoToCartFloatingOpen: false,
}


export const STORE_SEL_cart_productsInCart =
  ({cartSlice}: ReduxState): CartSliceData['productsInCart'] =>
    cartSlice.productsInCart

export const STORE_SEL_cart_isGoToCartFloatingOpen =
  ({cartSlice}: ReduxState): CartSliceData['isGoToCartFloatingOpen'] =>
    cartSlice.isGoToCartFloatingOpen


// * EXAMPLE *
//
// Smart store data selectors - custom application-hooks:
//
// export const useSel_store_isAppReadyByCustomHook = (): { isAppReadyForSure: boolean } => {
//     const someConst: number = useAppSelector(...)
//     const someConst2: number = useAppSelector(...)
//     const isAppReadyForSure = useMemo(() => {
//         return someConst >= someConst2
//     }, [someConst, someConst2])
//     return {isAppReadyForSure}
// }
