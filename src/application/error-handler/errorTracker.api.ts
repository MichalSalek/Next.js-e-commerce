import {projectID} from './errorTracker.config'


type Payload = string | Error | object | unknown | undefined

export type SendToErrorTracker = {
  message: string
  payload: Payload
}

export const sendToErrorTracker = (payload: SendToErrorTracker) => {
  console.log('[MOCK] Sending to error tracker...')
  console.log('')
  console.log(payload)
  console.log(projectID)
  console.log('')
  console.log('[MOCK END] Sending to error tracker.')
}
