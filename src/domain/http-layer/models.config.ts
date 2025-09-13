import {IOClientFunctionReqResErr} from '../../application/http-layer/http.types'
import {SingleProduct} from '../products/products.types'

export type PRODUCTS_DTO_API_V1 = {

  GET_ALL_PRODUCTS: {
    REQUEST: undefined
    RESPONSE: SingleProduct[]
    IO_CLIENT_FUNCTION: IOClientFunctionReqResErr<PRODUCTS_DTO_API_V1['GET_ALL_PRODUCTS']['REQUEST'], PRODUCTS_DTO_API_V1['GET_ALL_PRODUCTS']['RESPONSE']>
  },

  GET_SINGLE_PRODUCT: {
    REQUEST: string // Product ID
    RESPONSE: SingleProduct
    IO_CLIENT_FUNCTION: IOClientFunctionReqResErr<PRODUCTS_DTO_API_V1['GET_SINGLE_PRODUCT']['REQUEST'], PRODUCTS_DTO_API_V1['GET_SINGLE_PRODUCT']['RESPONSE']>
  },

}
