import {ENDPOINTS} from '../http-layer/http.endpoints'
import {callHTTPEndpoint} from '../../application/http-layer/http.api'
import {PRODUCTS_DTO_API_V1} from '../http-layer/models.config'

export const getAllProducts_IO: PRODUCTS_DTO_API_V1['GET_ALL_PRODUCTS']['IO_CLIENT_FUNCTION'] = async (
  req,
  successCallback,
  errorCallback) => {
  await callHTTPEndpoint<PRODUCTS_DTO_API_V1['GET_ALL_PRODUCTS']['RESPONSE']>({
    config: {
      url: ENDPOINTS.PRODUCTS_GET_ALL,
      mode: 'get',
      payload: req,
    },
    successCallback: async (response) => {
      await successCallback(response)
    },
    errorCallback: async (error) => {
      await errorCallback(error)
    },
  })
}


export const getSingleProduct_IO: PRODUCTS_DTO_API_V1['GET_SINGLE_PRODUCT']['IO_CLIENT_FUNCTION'] = async (
  req,
  successCallback,
  errorCallback) => {
  await callHTTPEndpoint<PRODUCTS_DTO_API_V1['GET_SINGLE_PRODUCT']['RESPONSE']>({
    config: {
      url: ENDPOINTS.PRODUCTS_GET_SINGLE,
      mode: 'get',
      payload: req,
    },
    successCallback: async (response) => {
      await successCallback(response)
    },
    errorCallback: async (error) => {
      await errorCallback(error)
    },
  })
}
