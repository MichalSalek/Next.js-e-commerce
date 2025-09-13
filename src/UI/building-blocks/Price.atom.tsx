import Typography from '@mui/material/Typography'
import {ReactNode} from 'react'
import {MOCKED_CURRENCY} from '../../domain/products/products.config'


type Props = {
  children: ReactNode
}

export const PriceAtom = ({children}: Props) => {

  return <Typography
    variant={'body1'}
    sx={{whiteSpace: 'nowrap'}}
  >

    {children} {MOCKED_CURRENCY}

  </Typography>
}
