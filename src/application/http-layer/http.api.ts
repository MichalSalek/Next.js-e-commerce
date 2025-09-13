import {httpHandlerAction} from './axios-adapter/axios.adapter'
import {HTTPError, HTTPErrorCallback, HTTPSuccess, HTTPSuccessCallback} from './http.types'
import {EndpointURLFunction} from '../../domain/http-layer/http.endpoints'
import {HTTPMethod} from '../../domain/http-layer/http.config'
import {reportIssue} from '../error-handler/errorHandler.api'
import {ENV_VARS} from '../environment/environment.config'

export type CallHTTPEndpointConfig = {
  url: EndpointURLFunction,
  mode: HTTPMethod
  payload?: string | string[] | number | number[] | object
}

type CallHTTPEndpoint<ResPayload> = {
  config: CallHTTPEndpointConfig
  successCallback: HTTPSuccessCallback<ResPayload>
  errorCallback: HTTPErrorCallback
}


export const callHTTPEndpoint = async <ResPayload = unknown>(
  {
    config,
    successCallback,
    errorCallback,
  }: CallHTTPEndpoint<ResPayload>): Promise<void> => {
  const {
    url,
    mode,
    payload = undefined,
  } = config
  try {

    await httpHandlerAction<HTTPSuccess<ResPayload>, HTTPError>({
      url: url({ENV_VARS, GETPayload: typeof payload === 'string' ? payload : undefined}),
      mode,
      payload,

      fireOnFetchInit: async () => {
        // @TODO interceptor for use.
      },

      fireOnFetchEnd: async () => {
        // @TODO interceptor for use.
      },

      fireOnSuccess: async (response_from_adapter) => {
        // @TODO interceptor for use.
        await successCallback(response_from_adapter.data)
      },

      fireOnCatch: async (error_from_adapter) => {
        // @TODO interceptor for use.
        await errorCallback(error_from_adapter)
      },
    })

  } catch (error) {
    reportIssue('GENERAL HTTP LAYER ERROR', error)
  }
}
