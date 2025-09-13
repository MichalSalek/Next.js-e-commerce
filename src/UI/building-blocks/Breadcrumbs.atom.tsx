import Typography from '@mui/material/Typography'
import {STYLES_POLICY} from '../styles/styles.policy'
import {Breadcrumbs} from '@mui/material'
import {AppLogoAtom} from './AppLogo.atom'


type Props = {
  segments: string[]
}

export const BreadcrumbsAtom = (props: Props) => {

  return <Breadcrumbs sx={{
    my: STYLES_POLICY.spacing[3],
  }}>
    <AppLogoAtom/>
    {props.segments.map((segment, index) => (
      <Typography variant={'h2'} key={index}>{segment}</Typography>
    ))}

  </Breadcrumbs>
}
