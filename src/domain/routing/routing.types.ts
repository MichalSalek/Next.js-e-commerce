import {ROUTES_STATIC} from './routing.config'

export type ROUTES_FRONT_NAME = keyof typeof ROUTES_STATIC
export type ROUTES_FRONT_PATH = typeof ROUTES_STATIC[ROUTES_FRONT_NAME]
export type ROUTES_FRONT_TYPE = typeof ROUTES_STATIC
