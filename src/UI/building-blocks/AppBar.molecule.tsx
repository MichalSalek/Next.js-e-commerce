'use client'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import Tooltip from '@mui/material/Tooltip'
import {ROUTES_STATIC} from '../../domain/routing/routing.config'
import {Badge} from '@mui/material'
import {getAppIcon} from '../../domain/app-icons/adapters/MuiIcons.adapter'
import Link from 'next/link'
import {AppLogoAtom} from './AppLogo.atom'
import {STYLES_POLICY} from '../styles/styles.policy'
import {useAppSelector} from '../../application/store/store'
import {STORE_SEL_cart_productsInCart} from '../../domain/cart/cart.read'
import {useMemo} from 'react'


export const AppBarMolecule = () => {

  const productsInCart = useAppSelector(STORE_SEL_cart_productsInCart)

  const isNoProductInCart = useMemo(() => Object.keys(productsInCart).length === 0, [productsInCart])


  return (<>

    <AppBar position={'sticky'}>
      <Container maxWidth={'xl'}>
        <Toolbar disableGutters sx={{
          justifyContent: 'space-between',
        }}>

          <AppLogoAtom/>

          <Box sx={{flexGrow: 0}}>

            <Link href={ROUTES_STATIC.CART}>
              <Tooltip title={'Cart'}>
                <Badge invisible={isNoProductInCart} color={'warning'} variant={'dot'}>
                  <IconButton color={'inherit'} sx={{p: STYLES_POLICY.spacing[0]}}>
                    {getAppIcon.Cart()}
                  </IconButton>
                </Badge>
              </Tooltip>
            </Link>

          </Box>

        </Toolbar>
      </Container>
    </AppBar>

  </>)
}
