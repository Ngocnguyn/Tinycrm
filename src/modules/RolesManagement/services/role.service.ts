import http from 'src/modules/Share/utils/http'
import { RoleType } from '../interfaces/role.type'

const roleAPI = {
  getListRoles: () => http.get<{ totalPages: number; data: RoleType[] }>('/roles'),

  getRole: (id: string) => http.get<RoleType>(`/roles/${id}`),

  createRole: (body: Omit<RoleType, 'id'>) => http.post<RoleType>('/roles', body),

  editRole: (body: { id: string; data: Omit<RoleType, 'id'> }) =>
    http.put<RoleType>(`/roles/${body.id}`, body.data),

  deleteRole: (id: string) => http.delete(`/roles/${id}`)
}
export default roleAPI
