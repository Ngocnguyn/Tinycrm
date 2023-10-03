import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import roleAPI from '../../services/role.service'
import { RoleType } from '../../interfaces/role.type'
import useQueryRoleConfig from '../../hooks/useQueryRoleConfig'
import { useForm } from 'react-hook-form'
import RoleList from '../../components/RoleList'

const Role = () => {
  const queryRoleConfig = useQueryRoleConfig()

  const RolesListQuery = useQuery({
    queryKey: ['roles'],
    queryFn: () => roleAPI.getListRoles(),
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })

  const roles = RolesListQuery.data?.data.data as RoleType[]

  const RoleQuery = useQuery({
    queryKey: ['role', queryRoleConfig],
    queryFn: () => roleAPI.getRole(queryRoleConfig.id as string),
    enabled: queryRoleConfig.id !== undefined
  })
  const role = RoleQuery.data?.data as RoleType

  return (
    <Fragment>
      <Helmet>
        <title>Roles</title>
        <meta name='description' content='This is role management page of the project' />
      </Helmet>
      <div className='sm:p-16 p-12'>
        <div className='m-auto sm:p-6 p-4 max-w-md'>
          <div className='bg-[#9CC1E5] rounded-xl'>
            <div className='flex flex-col px-4 py-5'>
              <div>
                <span className='font-bold text-lg text-[#1A191B]'>Role List</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipis.</p>
              </div>
              <div className='mt-7'>
                <RoleList roles={roles} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default Role
