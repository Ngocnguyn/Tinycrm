import { useQueryParams } from 'src/modules/Share/hooks/useQueryParam'
import { UserListConfig } from '../interfaces/user.type'
import { isUndefined, omitBy } from 'lodash'

export type QueryUserConfig = {
  [key in keyof UserListConfig]: string
}
const useQueryUserConfig = () => {
  const queryUserParams: QueryUserConfig = useQueryParams()
  const queryUserConfig: QueryUserConfig = omitBy(
    {
      id: queryUserParams.id
    },
    isUndefined
  )
  return queryUserConfig
}

export default useQueryUserConfig
