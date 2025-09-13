'use client'

import Zoom from '@mui/material/Zoom'
import Fab from '@mui/material/Fab'
import {getAppIcon} from '../../domain/app-icons/adapters/MuiIcons.adapter'
import {ROUTES_STATIC} from '../../domain/routing/routing.config'
import Link from 'next/link'
import {useAppSelector} from '../../application/store/store'
import {STORE_SEL_cart_isGoToCartFloatingOpen} from '../../domain/cart/cart.read'


const TRANSITION_TIME_IN_MS = 400

export const GoToCartFloatingAtom = () => {

  const isGoToCartFloatingOpen = useAppSelector(STORE_SEL_cart_isGoToCartFloatingOpen)


  const pathname = window.location.pathname

  if (pathname === ROUTES_STATIC.CART) { // Do not show icon on the cart page anyway.
    return void undefined
  }


  return <Link href={ROUTES_STATIC.CART}>
    <Zoom
      in={isGoToCartFloatingOpen}
      timeout={TRANSITION_TIME_IN_MS}
      style={{
        transitionDelay: `${TRANSITION_TIME_IN_MS}ms`,
      }}
      unmountOnExit
    >
      <Fab
        sx={{
          position: 'fixed',
          right: '3vw',
          bottom: '3vh',
        }}
        color={'warning'}
        variant={'circular'}
      >
        {getAppIcon.Cart()}
      </Fab>
    </Zoom>
  </Link>
}
