import {PageParams} from '../../../application/nextjs/nextjs.types'
import {getAllProductsByCategory} from '../../../domain/products/products.api'
import {use} from 'react'
import {Stack} from '@mui/material'
import {BreadcrumbsAtom} from '../../../UI/building-blocks/Breadcrumbs.atom'
import {CategoryOrganism} from '../../../UI/building-blocks/Category.organism'


export async function generateStaticParams() {

  // Make pages for existing categories in build time:
  //
  const data = await getAllProductsByCategory()
  return Object.keys(data).map((category) => ({
    slug: category,
  }))
}


export default function Page({params}: PageParams) {
  const {slug: category} = use(params)
  const data = use(getAllProductsByCategory())
  const productsCollection = data[category] ?? []

  return <Stack>

    <BreadcrumbsAtom segments={[data[category][0].category]}/>

    <CategoryOrganism productsCollection={productsCollection}/>

  </Stack>
}
