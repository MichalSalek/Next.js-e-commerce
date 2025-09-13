import {API_VER} from './http.config'

export type EndpointProps = {
  ENV_VARS: {
    readonly NEXT_PUBLIC_API_URL: string,
    readonly NEXT_PUBLIC_HTTP_PROTOCOL: string,
  },
  GETPayload?: string
}

export type EndpointURLFunction = (props: EndpointProps) => string

const URL: EndpointURLFunction = (props) => `${props.ENV_VARS.NEXT_PUBLIC_HTTP_PROTOCOL}${props.ENV_VARS.NEXT_PUBLIC_API_URL}${API_VER}`


export const ENDPOINTS: Record<string, EndpointURLFunction> = {

  // PRODUCTS
  PRODUCTS_GET_ALL: (props) => `${URL(props)}/products`,
  PRODUCTS_GET_SINGLE: (props) => `${URL(props)}/products/${props.GETPayload}`,


  // CART
  // ...

} as const
