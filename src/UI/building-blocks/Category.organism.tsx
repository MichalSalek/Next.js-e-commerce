import {Chip, Stack} from '@mui/material'
import {STYLES_POLICY} from '../styles/styles.policy'
import {SingleProductMolecule} from './SingleProduct.molecule'
import {SingleProduct} from '../../domain/products/products.types'


type Props = {
  productsCollection: SingleProduct[]
}

export const CategoryOrganism = ({productsCollection}: Props) => {

  return <>

    <Chip
      label={
        <>
          Products found: <strong>{productsCollection.length}</strong>
        </>
      }
      variant={'filled'}
      color={'info'}
      sx={{
        ml: 'auto',
        mb: STYLES_POLICY.spacing[3],
      }}
    />


    <Stack
      gap={STYLES_POLICY.spacing[5]}
      sx={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}>

      {productsCollection.map((product) =>
        <SingleProductMolecule
          key={product.id}
          data={product}
        />)
      }

    </Stack>

  </>
}


