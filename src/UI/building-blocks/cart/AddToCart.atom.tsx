'use client'

import {getAppIcon} from '../../../domain/app-icons/adapters/MuiIcons.adapter'
import Button from '@mui/material/Button'
import {useAppDispatch, useAppSelector} from '../../../application/store/store'
import {STORE_SEL_cart_productsInCart} from '../../../domain/cart/cart.read'
import {useCallback, useEffect, useMemo} from 'react'
import {STORE_ADD_cart_productsInCart, STORE_SET_cart_isGoToCartFloatingOpen} from '../../../domain/cart/cart.slice'
import {SingleProduct} from '../../../domain/products/products.types'


type Props = {
  productID: SingleProduct['id'] | string | number
}

export const AddToCartAtom = ({productID}: Props) => {
  const dispatch = useAppDispatch()

  const typeSafeID = useMemo(() =>
    typeof productID === 'string' ? parseInt(productID) : productID, [productID])

  const amountOfProductInCart = useAppSelector(STORE_SEL_cart_productsInCart)[typeSafeID]

  const addToCartCallback = useCallback(() => {
    dispatch(STORE_ADD_cart_productsInCart(typeSafeID))
    dispatch(STORE_SET_cart_isGoToCartFloatingOpen(true))
  }, [typeSafeID, dispatch])

  useEffect(() => {
    return () => {
      // Disable floating "Go to cart" button on unmount.
      // Can be done in routing interceptor instead.
      //
      dispatch(STORE_SET_cart_isGoToCartFloatingOpen(false))
    }
  }, [dispatch])

  return <Button
    variant={'contained'}
    color={'warning'}
    disabled={!!amountOfProductInCart}
    onClick={addToCartCallback}
    endIcon={getAppIcon.AddToCart()}
  >

    {!!amountOfProductInCart ? 'Added' : 'Add to cart'}

  </Button>
}
