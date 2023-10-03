import { error_code } from '../constants/errorCode'
export function isUserNameNotFoundError(errorCode: string) {
  return errorCode === error_code.UserNameOrEmailNotFound
}
export function isAccountLockedOutError(errorCode: string) {
  return errorCode === error_code.AccountLockedOut
}
