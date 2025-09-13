import {PageParams} from '../../../application/nextjs/nextjs.types'
import {use} from 'react'
import {Stack} from '@mui/material'
import {BreadcrumbsAtom} from '../../../UI/building-blocks/Breadcrumbs.atom'
import {getAllProducts_IO, getSingleProduct_IO} from '../../../domain/products/productsIO.api'
import {reportIssue} from '../../../application/error-handler/errorHandler.api'
import {SingleProduct} from '../../../domain/products/products.types'
import Typography from '@mui/material/Typography'
import {AddToCartAtom} from '../../../UI/building-blocks/cart/AddToCart.atom'
import {STYLES_POLICY} from '../../../UI/styles/styles.policy'
import Box from '@mui/material/Box'


export async function generateStaticParams() {

  // Make pages for existing products in build time:
  //
  const data = await new Promise<SingleProduct[]>((resolve, reject) => {
    void getAllProducts_IO(undefined,
      async (response) => {
        resolve(response)
      },
      async (error) => {
        reportIssue('getAllProducts_IO', error)
        reject(error)
      })
  })
  return data.map((product) => ({
    slug: String(product.id),
  }))
}


export default function Page({params}: PageParams) {
  const {slug: productID} = use(params)
  const data = use(new Promise<SingleProduct>((resolve, reject) => {
    void getSingleProduct_IO(productID,
      async (response) => {
        resolve(response)
      },
      async (error) => {
        reject(null)
        reportIssue('SingleProductPage', error)
      })
  }))


  return <Stack>

    <BreadcrumbsAtom segments={[data.category, data.title]}/>

    <Typography variant={'h3'}>TODO: Product page.</Typography>


    <Box sx={{marginTop: STYLES_POLICY.spacing[4]}}>

      <AddToCartAtom productID={productID}/>

    </Box>


  </Stack>
}
