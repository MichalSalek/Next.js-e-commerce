'use client'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import {SingleProduct} from '../../domain/products/products.types'
import {ButtonGroup, Chip, Stack} from '@mui/material'
import {getAppIcon} from '../../domain/app-icons/adapters/MuiIcons.adapter'
import {STYLES_POLICY} from '../styles/styles.policy'
import {useCallback} from 'react'
import {PriceAtom} from './Price.atom'
import {theme} from '../styles/theme'
import css from '../styles/globals.module.css'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import {AddToCartAtom} from './cart/AddToCart.atom'


export const SingleProductMolecule = ({data}: { data: SingleProduct }) => {

  const router = useRouter()

  const goToProductPageCallback = useCallback(() => {
    router.push(`/product/${data.id}`)
  }, [data.id, router])


  return (<>
      <Card sx={{maxWidth: 345}}>

        <Stack>

          <CardMedia
            onClick={goToProductPageCallback}
            sx={{height: 250, cursor: 'pointer'}}
            image={data.image}
            title={data.title}
          />

          <CardContent
            sx={{flex: 1}}
          >
            <Stack>

              <Link href={`/product/${data.id}`}>
                <Typography
                  textAlign={'left'}
                  gutterBottom
                  variant={'h3'}>
                  {data.title}
                </Typography>
              </Link>

              <Typography
                variant={'body2'}
                sx={{
                  color: theme.palette.text.secondary,
                  maxHeight: '300px',
                  overflow: 'auto',
                  paddingTop: STYLES_POLICY.spacing[2],
                  paddingRight: STYLES_POLICY.spacing[2],
                }}
                className={css.customScrollbar}
              >
                {data.description}
              </Typography>

            </Stack>

          </CardContent>

          <CardActions
            sx={{
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}
          >
            <Chip
              color={'primary'}
              icon={getAppIcon.PriceLabel()}
              label={<PriceAtom>{data.price}</PriceAtom>}
              variant={'filled'}
              sx={{px: STYLES_POLICY.spacing[1]}}
            />

            <ButtonGroup orientation={'vertical'} size={'small'} sx={{
              minWidth: '140px'
            }}>

              <Button onClick={goToProductPageCallback}>
                See Details
              </Button>

              <AddToCartAtom productID={data.id}/>

            </ButtonGroup>
          </CardActions>
        </Stack>
      </Card>
    </>
  )
}

