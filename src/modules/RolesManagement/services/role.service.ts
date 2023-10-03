import http from 'src/modules/Share/utils/http'
import { RoleType } from '../interfaces/role.type'

const roleAPI = {
  getListRoles: () => http.get<{ total: number; totalPages: number; data: RoleType[] }>('/roles'),

  getRole: (id: string) => http.get<RoleType>(`/roles/${id}`)
}
export default roleAPI
