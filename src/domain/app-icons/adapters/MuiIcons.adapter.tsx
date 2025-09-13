import {SvgIconOwnProps} from '@mui/material'
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone'
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'

export const getAppIcon = Object.freeze({

  Minus: (props?: SvgIconOwnProps) => <RemoveCircleOutlineOutlinedIcon {...props}/>,
  Plus: (props?: SvgIconOwnProps) => <AddCircleOutlineOutlinedIcon {...props}/>,
  Go: (props?: SvgIconOwnProps) => <ArrowRightSharpIcon {...props}/>,
  TrashBin: (props?: SvgIconOwnProps) => <DeleteForeverOutlinedIcon {...props}/>,


  MainLogo: (props?: SvgIconOwnProps) => <ShoppingBagTwoToneIcon {...props}/>,

  Cart: (props?: SvgIconOwnProps) => <ShoppingCartTwoToneIcon {...props}/>,
  AddToCart: (props?: SvgIconOwnProps) => <AddShoppingCartIcon {...props}/>,

  PriceLabel: (props?: SvgIconOwnProps) => <LocalOfferOutlinedIcon {...props}/>,

} as const)
