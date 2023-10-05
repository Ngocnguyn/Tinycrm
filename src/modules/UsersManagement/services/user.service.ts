import http from 'src/modules/Share/utils/http'
import { UserType } from '../interfaces/user.type'

const userAPI = {
  getListUsers: () => http.get<{ totalPages: number; data: UserType[] }>('/users')
}
