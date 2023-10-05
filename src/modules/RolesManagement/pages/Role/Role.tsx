import { Fragment, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import roleAPI from '../../services/role.service'
import { RoleType } from '../../interfaces/role.type'
import useQueryRoleConfig from '../../hooks/useQueryRoleConfig'
import { useForm } from 'react-hook-form'
import RoleList from '../../components/RoleList'
import RoleForm from '../../components/RoleForm'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { FormRoleSchema, FormRoleType } from '../../utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import path from 'src/modules/Share/constants/path'
import { toast } from 'react-toastify'
import { isDuplicateRoleError, isRoleAccessDeniedError } from 'src/modules/Share/utils/utils'

const Role = () => {
  const [isEditForm, setIsEditForm] = useState<boolean>(false)

  const queryClient = useQueryClient()
  const navigate = useNavigate()

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

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    reset,
    formState: { errors }
  } = useForm<FormRoleType>({
    resolver: yupResolver(FormRoleSchema)
  })

  useEffect(() => {
    if (role) {
      setValue('name', role?.name as string)
      setIsEditForm(true)
    } else {
      reset()
      setIsEditForm(false)
    }
  }, [role, setValue, reset])

  const CreateRoleMutation = useMutation({
    mutationFn: (body: FormRoleType) => roleAPI.createRole(body)
  })

  const EdiRoleMutation = useMutation({
    mutationFn: (body: { id: string; data: FormRoleType }) => roleAPI.editRole(body)
  })

  const onCreateRole = () => {
    navigate(path.roles)
    setIsEditForm(false)
    reset()
  }

  const onEditRole = (id: string) => {
    setValue('name', role?.name as string)
    navigate({
      search: createSearchParams({
        id: id
      }).toString()
    })
  }

  const handleSubmitForm = handleSubmit((data) => {
    if (!isEditForm) {
      CreateRoleMutation.mutate(data, {
        onSuccess: () => {
          reset()
          toast.success('Thêm Role thành công !')
          queryClient.invalidateQueries({
            queryKey: ['roles']
          })
        },
        onError: (error: any) => {
          if (isDuplicateRoleError(error.response?.data.code)) {
            setError('name', {
              message: error.response?.data.message,
              type: 'Server'
            })
          }
        }
      })
    } else {
      EdiRoleMutation.mutate(
        {
          id: role?.id as string,
          data: data
        },
        {
          onSuccess: () => {
            navigate(path.roles)
            setIsEditForm(false)
            reset()
            toast.success('Chỉnh sửa Role thành công !')
            queryClient.invalidateQueries({
              queryKey: ['roles']
            })
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onError: (error: any) => {
            if (isRoleAccessDeniedError(error.response?.data.code)) {
              setError('name', {
                message: error.response?.data.message,
                type: 'Server'
              })
            }
          }
        }
      )
    }
  })

  const DeleteRoleMutation = useMutation({
    mutationFn: (id: string) => roleAPI.deleteRole(id)
  })
  const handleDeleteRole = (id: string) => {
    DeleteRoleMutation.mutate(id, {
      onSuccess: () => {
        toast.success('Xóa Role thành công!')
        navigate(path.roles)
        setIsEditForm(false)
        reset()
        queryClient.invalidateQueries({
          queryKey: ['roles']
        })
      }
    })
  }

  return (
    <Fragment>
      <Helmet>
        <title>Roles</title>
        <meta name='description' content='This is role management page of the project' />
      </Helmet>
      <div className='flex justify-center '>
        <div className='flex flex-col gap-5 '>
          <form onSubmit={handleSubmitForm}>
            <RoleForm
              register={register}
              errors={errors}
              isEditForm={isEditForm}
              onCreateRole={onCreateRole}
            />
          </form>
          <RoleList
            roles={roles}
            roleID={role?.id as string}
            handleDeleteRole={handleDeleteRole}
            onEditRole={onEditRole}
            isLoading={RolesListQuery.isLoading}
          />
        </div>
      </div>
    </Fragment>
  )
}
export default Role
