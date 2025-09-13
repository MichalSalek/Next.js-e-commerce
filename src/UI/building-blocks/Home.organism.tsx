import {ProductsByCategory} from '../../domain/products/products.types'
import Link from 'next/link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import {getAppIcon} from '../../domain/app-icons/adapters/MuiIcons.adapter'
import Typography from '@mui/material/Typography'
import {Divider, Paper} from '@mui/material'

type Props = {
  productsByCategory: ProductsByCategory
}

export const HomeOrganism = ({productsByCategory}: Props) => {

  return <>

    <Typography variant={'h1'}>Select a category:</Typography>

    <Paper variant={'outlined'}>

      <List>
        {Object.keys(productsByCategory).map((category) => <span key={category}>
          <ListItem key={category} disablePadding>
            <Link key={category} href={`/category/${category}`} style={{
              width: '100%',
            }}>
              <ListItemButton>
                <ListItemIcon>
                  {getAppIcon.Go()}
                </ListItemIcon>
                <ListItemText

                  primary={
                    <Typography variant={'body1'}>
                      {productsByCategory[category][0].category}
                    </Typography>
                  }

                  secondary={`(${productsByCategory[category].length})`}

                />
              </ListItemButton>
            </Link>
          </ListItem>
          <Divider variant={'inset'} sx={{opacity: '0.4'}}/>
        </span>)}
      </List>

    </Paper>


  </>
}
