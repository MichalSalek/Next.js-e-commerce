'use client'

import {ReactElement, ReactNode, useRef} from 'react'
import {Provider} from 'react-redux'
import {theme} from '../styles/theme'
import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter'
import {ThemeProvider} from '@mui/material/styles'
import {reduxStore, ReduxStore, reduxStorePersistor} from '../../application/store/store'
import {PersistGate} from 'redux-persist/integration/react'

type Props = {
  children: ReactNode
}


export const ProvidersComposition = ({children}: Props): ReactElement => {


  const storeRef = useRef<ReduxStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = reduxStore
  }

  return <>

    <AppRouterCacheProvider>

      <ThemeProvider theme={theme}>

        <Provider store={storeRef.current}>

          <PersistGate loading={null} persistor={reduxStorePersistor}>

            {children}

          </PersistGate>

        </Provider>

      </ThemeProvider>


    </AppRouterCacheProvider>

  </>
}