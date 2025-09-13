import Typography from '@mui/material/Typography'
import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from '@mui/material'
import Box from '@mui/material/Box'
import {CartRecordAtom, CartRecordAtomProps} from './CartRecord.atom'
import {CartItem} from '../../../domain/cart/cart.types'
import Button from '@mui/material/Button'
import {STYLES_POLICY} from '../../styles/styles.policy'
import {getAppIcon} from '../../../domain/app-icons/adapters/MuiIcons.adapter'
import {useCallback, useMemo, useState} from 'react'
import {SingleProduct} from '../../../domain/products/products.types'
import {PriceAtom} from '../Price.atom'


type Props = {
  productsInCart: Partial<CartItem>
  productsInCartByID: string[]
}

export const CartOrganism = ({productsInCart, productsInCartByID}: Props) => {

  const [orderProcessPrices, setOrderProcessPrices] = useState<Record<SingleProduct['id'], SingleProduct['price']>>({})

  const setOrderProcessPriceActionCallback = useCallback<CartRecordAtomProps['setOrderProcessPriceAction']>((id, price) => {
    setOrderProcessPrices(prevState => ({...prevState, [id]: price}))
  }, [])


  const getTotalPrice = useMemo(() => {

    const totalPrice = productsInCartByID.reduce((acc, id) => {

      const maybeProductPrice = orderProcessPrices[parseInt(id)]
      const maybeProductAmount = productsInCart[parseInt(id)]

      if (maybeProductPrice && maybeProductAmount) {
        acc = acc + (maybeProductPrice * maybeProductAmount)
      }

      return acc
    }, 0)

    return totalPrice.toFixed(2)

  }, [orderProcessPrices, productsInCart, productsInCartByID])


  return (
    <Stack>

      <Typography variant={'h1'}> Your shopping cart </Typography>

      <TableContainer component={Box}>
        <Table
          sx={{minWidth: 250}}
        >
          <TableHead>
            <TableRow>
              <TableCell>PRODUCT</TableCell>
              <TableCell align={'right'}>PRICE</TableCell>
              <TableCell align={'right'}>AMOUNT</TableCell>
              <TableCell align={'right'} width={120}>SUM</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productsInCartByID.map((productID) => {
              const amountInCart = productsInCart[parseInt(productID)]
              if (!amountInCart) {
                return void undefined
              }
              return <CartRecordAtom
                key={productID}
                productID={productID}
                amountInCart={amountInCart}
                setOrderProcessPriceAction={setOrderProcessPriceActionCallback}

              />
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align={'right'}><Typography
                variant={'h3'}>Total: <PriceAtom>{getTotalPrice}</PriceAtom></Typography></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>


      <Paper
        variant={'outlined'}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: STYLES_POLICY.spacing[2],
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: STYLES_POLICY.spacing[5],
          padding: STYLES_POLICY.spacing[4],
        }}
      >

        <Typography variant={'h3'}>Delivery selection and order summary: </Typography>

        <Button
          onClick={() => alert('TODO: Next step page.')}
          variant={'contained'}
          color={'success'}
        >Next step {getAppIcon.Go()}</Button>

      </Paper>


    </Stack>
  )
}
