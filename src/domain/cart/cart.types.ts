import {SingleProduct} from '../products/products.types'

export type CartItem = Record<SingleProduct['id'], number>
