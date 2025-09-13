'use client'

import {Theme} from '@mui/material'
import {CSSProperties} from 'react'
import {createTheme} from '@mui/material/styles'
import {STYLES_POLICY} from './styles.policy'


const headingGenericStyle: CSSProperties = {
  color: STYLES_POLICY.accentColor[0],
  fontWeight: 'bold',
}

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: STYLES_POLICY.accentColor[0],
    },
    success: {
      main: STYLES_POLICY.statusColors[0],
    },
    error: {
      main: STYLES_POLICY.statusColors[1],
    },
    warning: {
      main: STYLES_POLICY.statusColors[2],
    },
    background: {
      default: STYLES_POLICY.backgroundColor[0],
      paper: STYLES_POLICY.backgroundColor[1],
    },
  },
  typography: {
    h1: {
      ...headingGenericStyle,
      fontSize: STYLES_POLICY.fontSize[4],
      marginTop: STYLES_POLICY.spacing[2],
      marginBottom: STYLES_POLICY.spacing[3],
    },
    h2: {
      ...headingGenericStyle,
      fontSize: STYLES_POLICY.fontSize[3],
    },
    h3: {
      ...headingGenericStyle,
      fontSize: STYLES_POLICY.fontSize[2],
    },
    body1: {
      fontSize: STYLES_POLICY.fontSize[1],
    },
    body2: {
      fontSize: STYLES_POLICY.fontSize[0],
    },
  },
  components: {
    MuiCardMedia: {
      styleOverrides: {
        root: {
          backgroundSize: 'contain',
        },
      },
    },
    MuiStack: {
      styleOverrides: {
        root: {
          height: '100%',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    }
  },
})
