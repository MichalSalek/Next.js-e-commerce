'use client'

import {Stack, TableCell, TableRow} from '@mui/material'
import {getSingleProduct_IO} from '../../../domain/products/productsIO.api'
import {reportIssue} from '../../../application/error-handler/errorHandler.api'
import {SingleProduct} from '../../../domain/products/products.types'
import {useCallback, useEffect, useState} from 'react'
import Typography from '@mui/material/Typography'
import {getAppIcon} from '../../../domain/app-icons/adapters/MuiIcons.adapter'
import IconButton from '@mui/material/IconButton'
import {PriceAtom} from '../Price.atom'
import {useAppDispatch} from '../../../application/store/store'
import {STORE_ADD_cart_productsInCart, STORE_REMOVE_cart_productsInCart} from '../../../domain/cart/cart.slice'
import Link from 'next/link'


export type CartRecordAtomProps = {
  productID: string
  amountInCart: number
  setOrderProcessPriceAction: (productID: string, price: number) => void
}

export const CartRecordAtom = ({productID, amountInCart, setOrderProcessPriceAction}: CartRecordAtomProps) => {

  const dispatch = useAppDispatch()

  const [singleProduct, setSingleProduct] = useState<SingleProduct | null>(null)

  useEffect(() => {
    void getSingleProduct_IO(productID,
      async (response) => {
        setSingleProduct(response)
        setOrderProcessPriceAction(productID, response.price)
      },
      async (error) => {
        setSingleProduct(null)
        reportIssue('CartRecordAtom -> getSingleProduct_IO', error)
      })
  }, [productID, setOrderProcessPriceAction])


  const increaseAmountCallback = useCallback(() => {
    dispatch(STORE_ADD_cart_productsInCart(parseInt(productID)))
  }, [dispatch, productID])


  const decreaseAmountCallback = useCallback(() => {
    dispatch(STORE_REMOVE_cart_productsInCart(parseInt(productID)))
  }, [dispatch, productID])


  if (!singleProduct) {
    return undefined
  }

  return <TableRow
    key={singleProduct.id}
    sx={{'&:last-child td, &:last-child th': {border: 0}}}
  >

    <TableCell component="th" scope="row">
      <Link href={`/product/${singleProduct.id}`}><Typography
        variant={'body2'}> {singleProduct.title}</Typography></Link>
    </TableCell>


    <TableCell align="right">
      <PriceAtom>{singleProduct.price}</PriceAtom>
    </TableCell>


    <TableCell align="right">
      <Stack sx={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
        <IconButton
          color={'error'}
          onClick={decreaseAmountCallback}
        >
          {amountInCart === 1 ? getAppIcon.TrashBin({fontSize: 'medium'}) : getAppIcon.Minus({sx: {opacity: '0.8'}})}
        </IconButton>

        <Typography
          textAlign={'center'}
          variant={'body1'}
          width={20}
        >{amountInCart}</Typography>

        <IconButton
          color={'warning'}
          onClick={increaseAmountCallback}
        >
          {getAppIcon.Plus()}
        </IconButton>
      </Stack>
    </TableCell>


    <TableCell align="right">
      <PriceAtom>
        <strong>{(singleProduct.price * amountInCart).toFixed(2)}</strong>
      </PriceAtom>
    </TableCell>


  </TableRow>
}
