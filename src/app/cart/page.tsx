'use client'

import {CartOrganism} from '../../UI/building-blocks/cart/Cart.organism'
import {useMemo} from 'react'
import {useAppSelector} from '../../application/store/store'
import {STORE_SEL_cart_productsInCart} from '../../domain/cart/cart.read'
import Typography from '@mui/material/Typography'
import {Stack} from '@mui/material'
import Link from 'next/link'
import {ROUTES_STATIC} from '../../domain/routing/routing.config'
import {getAppIcon} from '../../domain/app-icons/adapters/MuiIcons.adapter'

export default function Page() {

  const productsInCart = useAppSelector(STORE_SEL_cart_productsInCart)

  const productsInCartByID = useMemo(() => Object.keys(productsInCart), [productsInCart])

  if (productsInCartByID.length === 0) { // Are any products in a cart.

    return <Stack>
      <Typography variant={'body1'}>No products have been added yet.</Typography>

      <Link href={ROUTES_STATIC.HOME} style={{width: 'fit-content'}}>
        <Typography variant={'h1'} sx={{
          display: 'flex',
          alignItems: 'center',
        }}>

          Go shopping now {getAppIcon.Go()}

        </Typography>
      </Link>

    </Stack>


  } else {

    return <CartOrganism productsInCart={productsInCart} productsInCartByID={productsInCartByID}/>
  }
}
