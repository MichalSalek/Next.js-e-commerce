import {HTTPAdapterError} from './axios-adapter/axios.types'

export type ResponseData<DataPayload = unknown> = DataPayload


export type HTTPError = HTTPAdapterError<unknown | undefined>

export type HTTPSuccess<ResPayload> = ResponseData<ResPayload>


export type HTTPErrorCallback = (error: HTTPError) => Promise<void>

export type HTTPSuccessCallback<ResPayload> = (response: HTTPSuccess<ResPayload>) => Promise<void>

// @Req Request payload
// @Res Response data
export type IOClientFunctionReqResErr<Req, Res> = (
  req: Req,
  successCallback: HTTPSuccessCallback<Res>,
  errorCallback: HTTPErrorCallback) => Promise<void>
