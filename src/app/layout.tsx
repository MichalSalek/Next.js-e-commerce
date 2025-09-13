import type {Metadata, Viewport} from 'next'
import '../UI/styles/globals.css'
import css from '../UI/styles/globals.module.css'
import {ReactNode} from 'react'

// https://mui.com/material-ui/integrations/nextjs/
import {AppBarMolecule} from '../UI/building-blocks/AppBar.molecule'
import Container from '@mui/material/Container'
import {STYLES_POLICY} from '../UI/styles/styles.policy'
import {ProvidersComposition} from '../UI/compositions/Providers.composition'
import {GoToCartFloatingAtom} from '../UI/building-blocks/GoToCartFloating.atom'


export const metadata: Metadata = {
  title: 'IMPACT E-COMMERCE',
  description: 'Based on Next.js application',
}


// https://mui.com/material-ui/getting-started/usage/#responsive-meta-tag
export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
}


export default function RootLayout(
  {
    children,
  }: Readonly<{
    children: ReactNode
  }>) {

  return (
    <html lang="en">
    <body className={`${css.customScrollbar}`}>


    <ProvidersComposition>

      <AppBarMolecule/>

      <Container
        sx={{
          paddingTop: STYLES_POLICY.spacing[3],
          paddingBottom: STYLES_POLICY.spacing[3],
          position: 'relative',
        }}
      >

        {children}

      </Container>

      <GoToCartFloatingAtom/>

    </ProvidersComposition>


    </body>
    </html>
  )
}
