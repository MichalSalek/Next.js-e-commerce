import {Stack} from '@mui/material'
import {getAllProductsByCategory} from '../domain/products/products.api'
import {use} from 'react'
import {HomeOrganism} from '../UI/building-blocks/Home.organism'


export default function Page() {

  const data = use(getAllProductsByCategory())

  return (
    <Stack>

      <HomeOrganism productsByCategory={data}/>

    </Stack>
  )
}
