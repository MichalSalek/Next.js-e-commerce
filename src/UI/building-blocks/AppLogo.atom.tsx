import Typography from '@mui/material/Typography'
import {getAppIcon} from '../../domain/app-icons/adapters/MuiIcons.adapter'
import {ROUTES_STATIC} from '../../domain/routing/routing.config'
import Box from '@mui/material/Box'
import Link from 'next/link'
import {STYLES_POLICY} from '../styles/styles.policy'

export const AppLogoAtom = () => {

  return <Link href={ROUTES_STATIC.HOME}>

    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >

      {getAppIcon.MainLogo()}
      <Typography
        variant={'h3'}
        noWrap
        sx={{
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
          m: STYLES_POLICY.spacing[1],
          p: 0,
        }}
      >
        IMPACT
      </Typography>

    </Box>

  </Link>
}
