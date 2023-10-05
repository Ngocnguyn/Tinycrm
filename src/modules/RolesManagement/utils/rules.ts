import * as yup from 'yup'

export const FormRoleSchema = yup.object({
  name: yup.string().required('Name is required')
})

export type FormRoleType = yup.InferType<typeof FormRoleSchema>

export const FormPermissionSchema = yup.object({
  id: yup.string()
})

export type FormPermissionType = yup.InferType<typeof FormPermissionSchema>
