import axios, { AxiosError } from 'axios'
import { error_code } from '../constants/errorCode'
import HttpStatusCode from '../constants/httpStatusCode.enum'

// Auth
export function isUserNameNotFoundError(errorCode: string) {
  return errorCode === error_code.UserNameOrEmailNotFound
}
export function isAccountLockedOutError(errorCode: string) {
  return errorCode === error_code.AccountLockedOut
}

// Role

export function isRoleAccessDeniedError(errorCode: string) {
  return errorCode === error_code.NotUpdateRole
}

export function isDuplicateRoleError(errorCode: string) {
  return errorCode === error_code.DuplicateRole
}
